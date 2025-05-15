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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function CreateProjectPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    skills: [],
    budgetType: "fixed",
    budgetMin: "",
    budgetMax: "",
    duration: "",
    attachments: [],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, budgetType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send this data to your backend
      alert("Loyiha muvaffaqiyatli e'lon qilindi!")
      setLoading(false)
      router.push("/freelance")
    }, 1000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow pb-20">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Yangi loyiha e'lon qilish</CardTitle>
            <CardDescription>
              Loyihangiz haqida batafsil ma'lumot bering va malakali freelancerlarni toping
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Loyiha ma'lumotlari</h3>

                <div className="space-y-2">
                  <Label htmlFor="title">Loyiha nomi</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Masalan: Web sayt yaratish"
                    required
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Kategoriya</Label>
                  <Select onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Kategoriyani tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="programming">Dasturlash va texnologiya</SelectItem>
                      <SelectItem value="design">Dizayn va ijod</SelectItem>
                      <SelectItem value="marketing">Marketing va reklama</SelectItem>
                      <SelectItem value="translation">Tarjima va til</SelectItem>
                      <SelectItem value="business">Biznes va moliya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Loyiha tavsifi</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Loyihangiz haqida batafsil ma'lumot bering"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Ko'nikmalar va byudjet</h3>

                <div className="space-y-2">
                  <Label>Kerakli ko'nikmalar</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="react" />
                      <label
                        htmlFor="react"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        React
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nodejs" />
                      <label
                        htmlFor="nodejs"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Node.js
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="figma" />
                      <label
                        htmlFor="figma"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Figma
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="photoshop" />
                      <label
                        htmlFor="photoshop"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Photoshop
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="wordpress" />
                      <label
                        htmlFor="wordpress"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        WordPress
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="seo" />
                      <label
                        htmlFor="seo"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        SEO
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Byudjet turi</Label>
                  <RadioGroup defaultValue={formData.budgetType} onValueChange={handleRadioChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fixed" id="fixed" />
                      <Label htmlFor="fixed">Belgilangan narx</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hourly" id="hourly" />
                      <Label htmlFor="hourly">Soatlik to'lov</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budgetMin">Minimal byudjet ($)</Label>
                    <Input
                      id="budgetMin"
                      name="budgetMin"
                      type="number"
                      placeholder="Masalan: 100"
                      required
                      value={formData.budgetMin}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budgetMax">Maksimal byudjet ($)</Label>
                    <Input
                      id="budgetMax"
                      name="budgetMax"
                      type="number"
                      placeholder="Masalan: 500"
                      required
                      value={formData.budgetMax}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Loyiha davomiyligi</Label>
                  <Select onValueChange={(value) => handleSelectChange("duration", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Davomiylikni tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-1-week">1 haftadan kam</SelectItem>
                      <SelectItem value="1-2-weeks">1-2 hafta</SelectItem>
                      <SelectItem value="2-4-weeks">2-4 hafta</SelectItem>
                      <SelectItem value="1-3-months">1-3 oy</SelectItem>
                      <SelectItem value="3-6-months">3-6 oy</SelectItem>
                      <SelectItem value="more-than-6-months">6 oydan ko'p</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Qo'shimcha ma'lumotlar</h3>

                <div className="space-y-2">
                  <Label htmlFor="attachments">Fayllar (ixtiyoriy)</Label>
                  <Input id="attachments" name="attachments" type="file" multiple />
                  <p className="text-sm text-muted-foreground mt-1">
                    Loyihaga oid hujjatlar, rasmlar yoki boshqa fayllarni yuklang (maksimal 5 ta fayl, har biri 10MB
                    gacha)
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={loading}>
                {loading ? "Yuklanmoqda..." : "Loyihani e'lon qilish"}
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
