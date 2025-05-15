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

export default function VacancyPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    category: "",
    jobType: "",
    region: "",
    district: "",
    salary: "",
    requirements: "",
    responsibilities: "",
    benefits: "",
    contactEmail: "",
    contactPhone: "",
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
      alert("Vakansiya muvaffaqiyatli yuklandi!")
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
            <CardTitle className="text-2xl">Vakansiya joylash</CardTitle>
            <CardDescription>
              Kompaniyangiz uchun yangi xodimlarni topish uchun vakansiya e'lonini joylashtiring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Kompaniya ma'lumotlari</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Kompaniya nomi</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Lavozim</Label>
                    <Input id="position" name="position" required value={formData.position} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Vakansiya ma'lumotlari</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Kategoriya</Label>
                    <Select onValueChange={(value) => handleSelectChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Kategoriyani tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">IT va Zamonaviy kasblar</SelectItem>
                        <SelectItem value="davlat">Davlat ishlari</SelectItem>
                        <SelectItem value="arxitektura">Arxitektura va Quruvchilik</SelectItem>
                        <SelectItem value="avtomobil">Avtomobil xizmati</SelectItem>
                        <SelectItem value="uy-xodim">Uy xodim xizmati</SelectItem>
                        <SelectItem value="tibbiyot">Tibbiyot sohasi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

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
                    <Label htmlFor="salary">Maosh</Label>
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
                  <Label htmlFor="requirements">Talablar</Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    placeholder="Nomzodga qo'yiladigan talablar"
                    required
                    value={formData.requirements}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responsibilities">Majburiyatlar</Label>
                  <Textarea
                    id="responsibilities"
                    name="responsibilities"
                    placeholder="Ish majburiyatlari"
                    required
                    value={formData.responsibilities}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Imtiyozlar</Label>
                  <Textarea
                    id="benefits"
                    name="benefits"
                    placeholder="Kompaniya tomonidan taqdim etiladigan imtiyozlar"
                    value={formData.benefits}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Aloqa ma'lumotlari</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      required
                      value={formData.contactEmail}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Telefon raqam</Label>
                    <Input
                      id="contactPhone"
                      name="contactPhone"
                      required
                      value={formData.contactPhone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Yuklanmoqda..." : "Vakansiyani joylash"}
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
