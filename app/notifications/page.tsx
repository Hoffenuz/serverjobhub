"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useData } from "@/lib/data-context"
import { formatDistanceToNow } from "date-fns"
import { Bell, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function NotificationsPage() {
  const { getUserNotifications, markNotificationAsRead, markAllNotificationsAsRead } = useData()
  const [activeTab, setActiveTab] = useState("all")

  const notifications = getUserNotifications()
  const unreadNotifications = notifications.filter((n) => !n.read)
  const readNotifications = notifications.filter((n) => n.read)

  const handleMarkAllAsRead = () => {
    markAllNotificationsAsRead()
  }

  const handleMarkAsRead = (id: string) => {
    markNotificationAsRead(id)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Bildirishnomalar</h1>
            {unreadNotifications.length > 0 && (
              <Button variant="outline" onClick={handleMarkAllAsRead}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Barchasini o'qilgan deb belgilash
              </Button>
            )}
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="all">Barchasi ({notifications.length})</TabsTrigger>
              <TabsTrigger value="unread">O'qilmagan ({unreadNotifications.length})</TabsTrigger>
              <TabsTrigger value="read">O'qilgan ({readNotifications.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              {notifications.length > 0 ? (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <Card
                      key={notification.id}
                      className={`transition-colors ${!notification.read ? "bg-primary/5 border-primary/20" : ""}`}
                    >
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base font-medium">{notification.title}</CardTitle>
                          <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground mb-3">{notification.message}</p>
                        <div className="flex justify-between items-center">
                          {notification.actionUrl && (
                            <Link href={notification.actionUrl} className="text-sm text-primary hover:underline">
                              Ko'rish
                            </Link>
                          )}
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="text-xs"
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                              O'qilgan deb belgilash
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Bildirishnomalar yo'q</h3>
                  <p className="text-muted-foreground">Hozircha sizda bildirishnomalar yo'q</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="unread">
              {unreadNotifications.length > 0 ? (
                <div className="space-y-4">
                  {unreadNotifications.map((notification) => (
                    <Card key={notification.id} className="bg-primary/5 border-primary/20">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base font-medium">{notification.title}</CardTitle>
                          <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground mb-3">{notification.message}</p>
                        <div className="flex justify-between items-center">
                          {notification.actionUrl && (
                            <Link href={notification.actionUrl} className="text-sm text-primary hover:underline">
                              Ko'rish
                            </Link>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="text-xs"
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            O'qilgan deb belgilash
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">O'qilmagan bildirishnomalar yo'q</h3>
                  <p className="text-muted-foreground">Barcha bildirishnomalar o'qilgan</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="read">
              {readNotifications.length > 0 ? (
                <div className="space-y-4">
                  {readNotifications.map((notification) => (
                    <Card key={notification.id}>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base font-medium">{notification.title}</CardTitle>
                          <span className="text-xs text-muted-foreground">
                            {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground mb-3">{notification.message}</p>
                        {notification.actionUrl && (
                          <Link href={notification.actionUrl} className="text-sm text-primary hover:underline">
                            Ko'rish
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">O'qilgan bildirishnomalar yo'q</h3>
                  <p className="text-muted-foreground">Hali birorta bildirishnoma o'qilmagan</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </main>
  )
}
