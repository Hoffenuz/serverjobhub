"use client"

import Link from "next/link"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useData } from "@/lib/data-context"
import { useAuth } from "@/lib/auth-context"
import type { Conversation, Message } from "@/lib/models"

export default function MessagesPage() {
  const { user } = useAuth()
  const { getUserConversations, getConversationMessages, sendMessage } = useData()
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [conversations, setConversations] = useState<Conversation[]>([])

  useEffect(() => {
    if (user) {
      const userConversations = getUserConversations()
      setConversations(userConversations)
      if (userConversations.length > 0) {
        setActiveConversation(userConversations[0])
      }
    }
  }, [user, getUserConversations])

  useEffect(() => {
    if (activeConversation) {
      const conversationMessages = getConversationMessages(activeConversation.id)
      setMessages(conversationMessages)
    }
  }, [activeConversation, getConversationMessages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newMessage.trim() || !activeConversation || !user) return

    try {
      await sendMessage({
        conversationId: activeConversation.id,
        senderId: user.id,
        content: newMessage,
      })
      setNewMessage("")
    } catch (error) {
      console.error("Failed to send message:", error)
    }
  }

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-6 flex-grow pb-20 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-bold mb-4">Xabarlarni ko'rish uchun tizimga kiring</h2>
              <Button asChild>
                <Link href="/login">Tizimga kirish</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
        <BottomNavigation />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-6 flex-grow pb-20">
        <div className="bg-white rounded-lg shadow-sm border h-[calc(100vh-250px)] min-h-[500px] flex">
          {/* Conversations list */}
          <div className="w-full md:w-1/3 border-r overflow-y-auto">
            <div className="p-4 border-b">
              <Input placeholder="Qidirish..." />
            </div>
            <div>
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-4 border-b hover:bg-muted/50 cursor-pointer ${
                    activeConversation?.id === conversation.id ? "bg-muted" : ""
                  }`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium truncate">{conversation.title || "Suhbat " + conversation.id}</h3>
                        <span className="text-xs text-muted-foreground">
                          {conversation.lastMessageAt
                            ? new Date(conversation.lastMessageAt).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : ""}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.type === "job" ? "Vakansiya bo'yicha suhbat" : "Loyiha bo'yicha suhbat"}
                      </p>
                      <p className="text-sm truncate">
                        {messages.find((m) => m.conversationId === conversation.id)?.content || "Hali xabar yo'q"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {conversations.length === 0 && (
                <div className="p-8 text-center text-muted-foreground">
                  <p>Hali suhbatlar yo'q</p>
                </div>
              )}
            </div>
          </div>

          {/* Chat area */}
          <div className="hidden md:flex flex-col w-2/3">
            {activeConversation ? (
              <>
                {/* Chat header */}
                <div className="p-4 border-b flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{activeConversation.title || "Suhbat " + activeConversation.id}</h3>
                    <p className="text-sm text-muted-foreground">
                      {activeConversation.type === "job" ? "Vakansiya bo'yicha suhbat" : "Loyiha bo'yicha suhbat"}
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderId === user.id ? "justify-end" : "justify-start"}`}
                    >
                      <Card
                        className={`max-w-[80%] ${
                          message.senderId === user.id ? "bg-primary text-primary-foreground" : ""
                        }`}
                      >
                        <CardContent className="p-3">
                          <p>{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.senderId === user.id ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}
                          >
                            {new Date(message.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}

                  {messages.length === 0 && (
                    <div className="h-full flex items-center justify-center text-muted-foreground">
                      <p>Suhbatni boshlash uchun xabar yozing</p>
                    </div>
                  )}
                </div>

                {/* Message input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
                  <Input
                    placeholder="Xabar yozing..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit">Yuborish</Button>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-muted-foreground">Suhbat tanlang</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </main>
  )
}
