"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResumePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    skills: "",
    jobType: "",
    region: "",
    district: "",
    salary: "",
    about: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send this data to your backend
      alert("Rezyume muvaffaqiyatli yuklandi!")
      setLoading(false)
      router.push("/")
    }, 1000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow pb-20">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Rezyume yuklash</CardTitle>
            <CardDescription>
              Ish topish imkoniyatingizni oshirish uchun o'zingiz haqingizda to'liq ma'lumot bering
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Shaxsiy ma'lumotlar</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">To'liq ism</Label>
                    <Input id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon raqam</Label>
                    <Input id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Manzil</Label>
                    <Input id="address" name="address" required value={formData.address} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Ta'lim va tajriba</h3>

                <div className="space-y-2">
                  <Label htmlFor="education">Ta'lim</Label>
                  <Textarea
                    id="education"
                    name="education"
                    placeholder="Ta'lim muassasasi, yo'nalish, yillar"
                    required
                    value={formData.education}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Ish tajribasi</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    placeholder="Kompaniya nomi, lavozim, yillar"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Ko'nikmalar</Label>
                  <Textarea
                    id="skills"
                    name="skills"
                    placeholder="Dasturlash tillari, dasturlar, tillar va boshqalar"
                    required
                    value={formData.skills}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Ish ma'lumotlari</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="jobType">Ish turi</Label>
                    <Select onValueChange={(value) => handleSelectChange("jobType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Ish turini tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">To'liq stavka</SelectItem>
                        <SelectItem value="part-time">Yarim stavka</SelectItem>
                        <SelectItem value="remote">Masofaviy</SelectItem>
                        <SelectItem value="freelance">Frilanser</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="region">Viloyat</Label>
                    <Select onValueChange={(value) => handleSelectChange("region", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Viloyatni tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toshkent">Toshkent</SelectItem>
                        <SelectItem value="andijon">Andijon</SelectItem>
                        <SelectItem value="xorazm">Xorazm</SelectItem>
                        <SelectItem value="qashqadaryo">Qashqadaryo</SelectItem>
                        <SelectItem value="jizzax">Jizzax</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="district">Tuman</Label>
                    <Select onValueChange={(value) => handleSelectChange("district", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Tumanni tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toshkent">Toshkent</SelectItem>
                        <SelectItem value="qoqon">Qo'qon</SelectItem>
                        <SelectItem value="urganch">Urganch</SelectItem>
                        <SelectItem value="chust">Chust</SelectItem>
                        <SelectItem value="jizzax">Jizzax</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Kutilayotgan maosh</Label>
                    <Input
                      id="salary"
                      name="salary"
                      placeholder="Masalan: 5000000 so'm"
                      value={formData.salary}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about">O'zingiz haqingizda qo'shimcha ma'lumot</Label>
                  <Textarea
                    id="about"
                    name="about"
                    placeholder="O'zingiz haqingizda qisqacha ma'lumot"
                    value={formData.about}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Rezyume fayli (PDF)</Label>
                  <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Yuklanmoqda..." : "Rezyumeni yuklash"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
      <BottomNavigation />
    </main>
  )
}
