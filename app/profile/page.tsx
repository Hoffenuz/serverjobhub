"use client"

import Link from "next/link"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/lib/auth-context"
import { useData } from "@/lib/data-context"

export default function ProfilePage() {
  const router = useRouter()
  const { user, logout } = useAuth()
  const { getUserApplications, getUserProposals } = useData()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      address: user.location?.city || "",
    })
  }, [user, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      // In a real app, we would update the user profile in the backend
      setLoading(false)
      alert("Profil muvaffaqiyatli yangilandi!")
    }, 1000)
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-8 flex-grow pb-20 flex items-center justify-center">
          <p>Yuklanmoqda...</p>
        </div>
        <Footer />
        <BottomNavigation />
      </main>
    )
  }

  const applications = getUserApplications()
  const proposals = getUserProposals()

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-muted-foreground mb-4">
                    {user.userType === "jobseeker"
                      ? "Ish izlovchi"
                      : user.userType === "employer"
                      ? "Ish beruvchi"
                      : "Frilanser"}
                  </p>
                  <Button variant="outline" className="w-full mb-2">
                    Rasmni o'zgartirish
                  </Button>
                  <Button variant="destructive" className="w-full" onClick={handleLogout}>
                    Chiqish
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="md:w-2/3">
              <Tabs defaultValue="profile">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="profile">Profil</TabsTrigger>
                  <TabsTrigger value="resumes">Rezyumelar</TabsTrigger>
                  <TabsTrigger value="applications">Arizalar</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profil ma'lumotlari</CardTitle>
                      <CardDescription>Profil ma'lumotlaringizni yangilang</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">To'liq ism</Label>
                          <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon raqam</Label>
                          <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Manzil</Label>
                          <Input id="address" name="address" value={formData.address} onChange={handleChange} />
                        </div>

                        <Button type="submit" disabled={loading}>
                          {loading ? "Saqlanmoqda..." : "Saqlash"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="resumes">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mening rezyumelerim</CardTitle>
                      <CardDescription>Barcha yuklangan rezyumeleringiz</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button onClick={() => router.push("/resume")}>Yangi rezyume qo'shish</Button>

                        {user.userType === "jobseeker" ? (
                          <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                              <div className="flex justify-between items-center">
                                <h3 className="font-medium">Frontend Developer</h3>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Faol</span>
                              </div>
                              <div className="text-sm text-muted-foreground mt-2">Yaratilgan sana: 12.05.2023</div>
                              <div className="flex gap-4 mt-2 text-sm">
                                <span>Ko'rishlar: 45</span>
                                <span>Javoblar: 3</span>
                              </div>
                              <div className="flex gap-2 mt-4">
                                <Button variant="outline" size="sm">
                                  Tahrirlash
                                </Button>
                                <Button variant="outline" size="sm" className="text-destructive">
                                  O'chirish
                                </Button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-8 text-muted-foreground">
                            {user.userType === "employer"
                              ? "Ish beruvchilar rezyume yuklay olmaydi"
                              : "Siz hali rezyume yuklamagansiz"}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="applications">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {user.userType === "jobseeker" ? "Mening arizalarim" : "Mening takliflarim"}
                      </CardTitle>
                      <CardDescription>
                        {user.userType === "jobseeker"
                          ? "Barcha yuborilgan arizalaringiz"
                          : user.userType === "freelancer"
                          ? "Barcha yuborilgan takliflaringiz"
                          : "Barcha e'lon qilingan vakansiyalaringiz"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {user.userType === "employer" && (
                          <Button onClick={() => router.push("/vacancy")}>Yangi vakansiya qo'shish</Button>
                        )}

                        {user.userType === "jobseeker" && applications.length > 0 ? (
                          <div className="space-y-4">
                            {applications.map((application) => (
                              <div key={application.id} className="border rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                  <h3 className="font-medium">Senior Frontend Developer</h3>
                                  <span
                                    className={`text-xs px-2 py-1 rounded ${
                                      application.status === "pending"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : application.status === "shortlisted"
                                        ? "bg-blue-100 text-blue-700"
                                        : application.status === "rejected"
                                        ? "bg-red-100 text-red-700"
                                        : "bg-green-100 text-green-700"
                                    }`}
                                  >
                                    {application.status === "pending"
                                      ? "Kutilmoqda"
                                      : application.status === "shortlisted"
                                      ? "Shortlist"
                                      : application.status === "rejected"
                                      ? "Rad etildi"
                                      : "Intervyu"}
                                  </span>
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">Tech Solutions</div>
                                <div className="text-sm text-muted-foreground mt-1">
                                  Ariza topshirilgan sana:{" "}
                                  {new Date(application.appliedAt).toLocaleDateString("uz-UZ")}
                                </div>
                                <div className="flex gap-2 mt-4">
                                  <Button variant="outline" size="sm" asChild>
                                    <Link href={`/jobs/${application.jobId}`}>Vakansiyani ko'rish</Link>
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : user.userType === "freelancer" && proposals.length > 0 ? (
                          <div className="space-y-4">
                            {proposals.map((proposal) => (
                              <div key={proposal.id} className="border rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                  <h3 className="font-medium">Web sayt yaratish - IT kompaniya uchun</h3>
                                  <span
                                    className={`text-xs px-2 py-1 rounded ${
                                      proposal.status === "pending"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : proposal.status === "shortlisted"
                                        ? "bg-blue-100 text-blue-700"
                                        : proposal.status === "rejected"
                                        ? "bg-red-100 text-red-700"
                                        : "bg-green-100 text-green-700"
                                    }`}
                                  >
                                    {proposal.status === "pending"
                                      ? "Kutilmoqda"
                                      : proposal.status === "shortlisted"
                                      ? "Shortlist"
                                      : proposal.status === "rejected"
                                      ? "Rad etildi"
                                      : "Qabul qilingan"}
                                  </span>
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                  Taklif: ${proposal.bid.amount} ({proposal.bid.type === "fixed" ? "Belgilangan" : "Soatlik"})
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                  Yuborilgan sana: {new Date(proposal.submittedAt).toLocaleDateString("uz-UZ")}
                                </div>
                                <div className="flex gap-2 mt-4">
                                  <Button variant="outline" size="sm" asChild>
                                    <Link href={`/freelance/projects/${proposal.projectId}`}>Loyihani ko'rish</Link>
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : user.userType === "employer" ? (
                          <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                              <div className="flex justify-between items-center">
                                <h3 className="font-medium">Senior Frontend Developer</h3>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Faol</span>
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">Tech Solutions</div>
                              <div className="text-sm text-muted-foreground mt-1">Yaratilgan sana: 15.11.2023</div>
                              <div className="mt-2 text-sm">
                                <span>Arizalar: 15</span>
                              </div>
                              <div className="flex gap-2 mt-4">
                                <Button variant="outline" size="sm">
                                  Tahrirlash
                                </Button>
                                <Button variant="outline" size="sm" className="text-destructive">
                                  O'chirish
                                </Button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-8 text-muted-foreground">
                            {user.userType === "jobseeker"
\
Yangilangan app/providers.tsx:
