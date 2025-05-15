"use client"

import Link from "next/link"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  GraduationCap,
  Building,
  Globe,
  BookOpen,
  CheckCircle,
  Share2,
  Bookmark,
} from "lucide-react"
import { useData } from "@/lib/data-context"
import { useAuth } from "@/lib/auth-context"
import type { Job } from "@/lib/models"

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { getJobById, getCompanyById, applyToJob } = useData()
  const { user } = useAuth()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [applying, setApplying] = useState(false)
  const [coverLetter, setCoverLetter] = useState("")
  const [applicationSuccess, setApplicationSuccess] = useState(false)

  useEffect(() => {
    if (id) {
      const jobData = getJobById(id)
      if (jobData) {
        setJob(jobData)
      } else {
        // Job not found, redirect to jobs page
        router.push("/vacancies")
      }
      setLoading(false)
    }
  }, [id, getJobById, router])

  const handleApply = async () => {
    if (!user) {
      router.push("/login")
      return
    }

    if (!job) return

    setApplying(true)
    try {
      await applyToJob({
        jobId: job.id,
        userId: user.id,
        resumeId: "1", // In a real app, user would select which resume to use
        coverLetter,
        status: "pending",
        expectedSalary: {
          amount: job.salary?.min || 0,
          currency: job.salary?.currency || "USD",
          negotiable: true,
        },
      })
      setApplicationSuccess(true)
    } catch (error) {
      console.error("Failed to apply:", error)
    } finally {
      setApplying(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-8 flex-grow pb-20">
          <div className="flex justify-center items-center h-64">
            <p>Yuklanmoqda...</p>
          </div>
        </div>
        <Footer />
        <BottomNavigation />
      </main>
    )
  }

  if (!job) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-8 flex-grow pb-20">
          <div className="flex justify-center items-center h-64">
            <p>Vakansiya topilmadi</p>
          </div>
        </div>
        <Footer />
        <BottomNavigation />
      </main>
    )
  }

  const company = getCompanyById(job.companyId || "")

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <div className="flex items-center mt-1 text-muted-foreground">
                      <Building className="h-4 w-4 mr-1" />
                      <span className="font-medium">{company ? company.name : "Tech Solutions"}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {job.status === "active" ? "Aktiv" : "Nofaol"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      {job.location.city}, {job.location.country}
                      {job.location.remote && " (Masofaviy ishlash imkoniyati bor)"}
                    </span>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <Briefcase className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      {job.jobType.includes("full-time")
                        ? "To'liq stavka"
                        : job.jobType.includes("part-time")
                          ? "Yarim stavka"
                          : "Masofaviy"}
                    </span>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      Ariza topshirish muddati:{" "}
                      {job.applicationDeadline
                        ? new Date(job.applicationDeadline).toLocaleDateString("uz-UZ")
                        : "Ko'rsatilmagan"}
                    </span>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      Tajriba: {job.experience.min}-{job.experience.max || job.experience.min + 2} yil
                    </span>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <GraduationCap className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      Ta'lim:{" "}
                      {job.education === "bachelor"
                        ? "Bakalavr"
                        : job.education === "master"
                          ? "Magistr"
                          : job.education === "phd"
                            ? "PhD"
                            : "O'rta maxsus"}
                    </span>
                  </div>

                  <div className="flex items-center font-medium text-primary">
                    <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      Maosh: ${job.salary?.min}-{job.salary?.max}{" "}
                      {job.salary?.period === "month" ? "/ oyiga" : "/ yiliga"}
                      {job.salary?.negotiable && " (Muhokama qilinadi)"}
                    </span>
                  </div>
                </div>

                <Tabs defaultValue="description">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="description">Tavsif</TabsTrigger>
                    <TabsTrigger value="requirements">Talablar</TabsTrigger>
                    <TabsTrigger value="responsibilities">Majburiyatlar</TabsTrigger>
                    <TabsTrigger value="benefits">Imtiyozlar</TabsTrigger>
                  </TabsList>

                  <TabsContent value="description" className="mt-4">
                    <div className="space-y-4">
                      <p>{job.description}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="requirements" className="mt-4">
                    <div className="space-y-4">
                      <div className="whitespace-pre-line">{job.requirements}</div>
                    </div>
                  </TabsContent>

                  <TabsContent value="responsibilities" className="mt-4">
                    <div className="space-y-4">
                      <div className="whitespace-pre-line">{job.responsibilities}</div>
                    </div>
                  </TabsContent>

                  <TabsContent value="benefits" className="mt-4">
                    <div className="space-y-4">
                      <div className="whitespace-pre-line">{job.benefits}</div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Ko'nikmalar</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {job.languages && job.languages.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Tillar</h3>
                    <div className="flex flex-wrap gap-2">
                      {job.languages.map((language, index) => (
                        <Badge key={index} variant="outline">
                          {language.name} ({language.level === "fluent" ? "Erkin" : "O'rta"})
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {applicationSuccess ? (
                  <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold mb-1">Arizangiz yuborildi!</h3>
                    <p className="text-muted-foreground">
                      Arizangiz muvaffaqiyatli yuborildi. Ish beruvchi ko'rib chiqqandan so'ng siz bilan bog'lanadi.
                    </p>
                  </div>
                ) : (
                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Ariza topshirish</h3>
                    <Textarea
                      placeholder="Ish beruvchiga xabar (ixtiyoriy)"
                      className="mb-4"
                      rows={5}
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                    />
                    <Button onClick={handleApply} disabled={applying} className="w-full">
                      {applying ? "Yuklanmoqda..." : "Ariza topshirish"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Kompaniya haqida</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                    <Building className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{company ? company.name : "Tech Solutions"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {company ? company.industry.join(", ") : "IT va dasturlash"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      {company ? `${company.location.city}, ${company.location.country}` : "Toshkent, O'zbekiston"}
                    </span>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
                    <a
                      href={company ? company.website : "https://example.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {company ? company.website.replace("https://", "") : "example.com"}
                    </a>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <BookOpen className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>
                      {company ? company.founded : 2015} yilda tashkil etilgan (
                      {new Date().getFullYear() - (company ? company.founded : 2015)} yil)
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href={`/companies/${job.companyId || "1"}`}>Kompaniya sahifasiga o'tish</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Harakatlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                    <Link href={`/jobs/${job.id}/share`}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Ulashish
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                    <Link href={`/jobs/${job.id}/save`}>
                      <Bookmark className="h-4 w-4 mr-2" />
                      Saqlash
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </main>
  )
}
