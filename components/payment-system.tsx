"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, CheckCircle2 } from "lucide-react"

interface PaymentSystemProps {
  amount: number
  currency?: string
  onSuccess?: () => void
  onCancel?: () => void
}

export function PaymentSystem({ amount, currency = "USD", onSuccess, onCancel }: PaymentSystemProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)

      // Call success callback after showing success message
      setTimeout(() => {
        if (onSuccess) onSuccess()
      }, 2000)
    }, 2000)
  }

  if (success) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">To'lov muvaffaqiyatli amalga oshirildi!</h2>
          <p className="text-muted-foreground mb-6">
            Sizning to'lovingiz qabul qilindi. Tez orada tasdiqlovchi xabar olasiz.
          </p>
          <Button onClick={onSuccess} className="w-full">
            Davom etish
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>To'lov</CardTitle>
        <CardDescription>To'lov usulini tanlang va ma'lumotlarni kiriting</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">To'lov summasi</p>
          <p className="text-2xl font-bold">
            {currency} {amount.toFixed(2)}
          </p>
        </div>

        <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="card">Karta</TabsTrigger>
            <TabsTrigger value="payme">Payme</TabsTrigger>
            <TabsTrigger value="click">Click</TabsTrigger>
          </TabsList>

          <TabsContent value="card">
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Karta raqami</Label>
                <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Amal qilish muddati</Label>
                  <Input id="expiryDate" placeholder="MM/YY" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardholderName">Karta egasi</Label>
                <Input id="cardholderName" placeholder="To'liq ism" required />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "To'lov amalga oshirilmoqda..." : "To'lash"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="payme">
            <div className="mt-4 space-y-4">
              <div className="border rounded-lg p-4 text-center">
                <img src="/placeholder.svg?height=60&width=120&text=Payme" alt="Payme" className="h-12 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Payme orqali to'lovni amalga oshirish uchun "To'lash" tugmasini bosing
                </p>
                <Button onClick={handleSubmit} className="w-full" disabled={loading}>
                  {loading ? "To'lov amalga oshirilmoqda..." : "To'lash"}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="click">
            <div className="mt-4 space-y-4">
              <div className="border rounded-lg p-4 text-center">
                <img src="/placeholder.svg?height=60&width=120&text=Click" alt="Click" className="h-12 mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Click orqali to'lovni amalga oshirish uchun "To'lash" tugmasini bosing
                </p>
                <Button onClick={handleSubmit} className="w-full" disabled={loading}>
                  {loading ? "To'lov amalga oshirilmoqda..." : "To'lash"}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onCancel}>
          Bekor qilish
        </Button>
        <div className="text-sm text-muted-foreground flex items-center">
          <CreditCard className="h-4 w-4 mr-1" />
          <span>Xavfsiz to'lov</span>
        </div>
      </CardFooter>
    </Card>
  )
}
