import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { FilterPanel } from "@/components/filter-panel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, GraduationCap, Clock, DollarSign, Building } from "lucide-react"
import Link from "next/link"

// Mock data for jobs
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "IT Solutions",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "To'liq stavka",
    salary: "$800-1200",
    education: "Bakalavr",
    experience: "2-3 yil",
    postedAt: "2 kun oldin",
    description:
      "IT Solutions kompaniyasi tajribali Frontend Developer izlayapti. Nomzod React, JavaScript va zamonaviy frontend texnologiyalarini yaxshi bilishi kerak.",
  },
  {
    id: 2,
    title: "Python Developer",
    company: "Tech Innovations",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "To'liq stavka",
    salary: "$900-1400",
    education: "Bakalavr",
    experience: "1-3 yil",
    postedAt: "3 kun oldin",
    description:
      "Tech Innovations kompaniyasi Python Developer izlayapti. Django, Flask frameworklari bilan ishlash tajribasi bo'lishi kerak.",
  },
  {
    id: 3,
    title: "Motion Dizayner",
    company: "Creative Studio",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "Masofaviy",
    salary: "$1000-1500",
    education: "O'rta maxsus",
    experience: "3+ yil",
    postedAt: "1 hafta oldin",
    description:
      "Creative Studio kompaniyasi tajribali Motion Dizayner izlayapti. After Effects, Cinema 4D dasturlarida ishlash tajribasi bo'lishi kerak.",
  },
  {
    id: 4,
    title: "Android Developer",
    company: "Mobile Solutions",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "To'liq stavka",
    salary: "$1200-1800",
    education: "Bakalavr",
    experience: "3-5 yil",
    postedAt: "5 kun oldin",
    description:
      "Mobile Solutions kompaniyasi tajribali Android Developer izlayapti. Kotlin, Java tillari va Android SDK bilan ishlash tajribasi bo'lishi kerak.",
  },
  {
    id: 5,
    title: "Rus tili O'qituvchi",
    company: "Education Center",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "Yarim stavka",
    salary: "$400-600",
    education: "Bakalavr",
    experience: "1+ yil",
    postedAt: "1 kun oldin",
    description:
      "Education Center o'quv markazi Rus tili o'qituvchisi izlayapti. Rus tilini mukammal bilish va o'qitish tajribasi bo'lishi kerak.",
  },
  {
    id: 6,
    title: "Kuryer",
    company: "Express Delivery",
    location: "Farg'ona, O'zbekiston",
    status: "Aktiv",
    employmentType: "Yarim stavka",
    salary: "$300-400",
    education: "O'rta",
    experience: "Talab qilinmaydi",
    postedAt: "2 kun oldin",
    description:
      "Express Delivery kompaniyasi kuryerlar izlayapti. Farg'ona shahri bo'ylab buyurtmalarni yetkazib berish.",
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "Digital Agency",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "To'liq stavka",
    salary: "$800-1200",
    education: "O'rta maxsus",
    experience: "2+ yil",
    postedAt: "4 kun oldin",
    description:
      "Digital Agency kompaniyasi UI/UX Designer izlayapti. Figma, Adobe XD dasturlarida ishlash tajribasi bo'lishi kerak.",
  },
  {
    id: 8,
    title: "Game Developer",
    company: "Game Studio",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "To'liq stavka",
    salary: "$1500-2000",
    education: "Bakalavr",
    experience: "3+ yil",
    postedAt: "1 hafta oldin",
    description:
      "Game Studio kompaniyasi tajribali Game Developer izlayapti. Unity, C# bilan ishlash tajribasi bo'lishi kerak.",
  },
  {
    id: 9,
    title: "DevOps Engineer",
    company: "Cloud Solutions",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "To'liq stavka",
    salary: "$1800-2500",
    education: "Bakalavr",
    experience: "3+ yil",
    postedAt: "3 kun oldin",
    description:
      "Cloud Solutions kompaniyasi DevOps Engineer izlayapti. Docker, Kubernetes, CI/CD bilan ishlash tajribasi bo'lishi kerak.",
  },
  {
    id: 10,
    title: "Marketing Manager",
    company: "E-commerce Company",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "To'liq stavka",
    salary: "$1000-1500",
    education: "Bakalavr",
    experience: "2+ yil",
    postedAt: "6 kun oldin",
    description:
      "E-commerce Company kompaniyasi Marketing Manager izlayapti. Digital marketing, SMM, SEO bo'yicha tajriba bo'lishi kerak.",
  },
  {
    id: 11,
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "To'liq stavka",
    salary: "$1200-1800",
    education: "Bakalavr",
    experience: "2+ yil",
    postedAt: "4 kun oldin",
    description:
      "Analytics Pro kompaniyasi Data Analyst izlayapti. SQL, Python, Power BI bilan ishlash tajribasi bo'lishi kerak.",
  },
  {
    id: 12,
    title: "HR Manager",
    company: "Big Corporation",
    location: "Toshkent, O'zbekiston",
    status: "Aktiv",
    employmentType: "To'liq stavka",
    salary: "$1000-1500",
    education: "Bakalavr",
    experience: "3+ yil",
    postedAt: "1 hafta oldin",
    description:
      "Big Corporation kompaniyasi HR Manager izlayapti. Xodimlarni tanlash, rivojlantirish va boshqarish tajribasi bo'lishi kerak.",
  },
]

export default function VacanciesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-6 flex-grow pb-20">
        <h1 className="text-3xl font-bold mb-6">Barcha vakansiyalar</h1>

        <FilterPanel />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {jobs.map((job) => (
            <Link href={`/jobs/${job.id}`} key={job.id}>
              <Card className="h-full hover:shadow-md transition-all job-listing-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                      {job.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Building className="h-3.5 w-3.5 mr-1" />
                    {job.company}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{job.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                      <span className="truncate">{job.location}</span>
                    </div>

                    <div className="flex items-center text-muted-foreground">
                      <Briefcase className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                      <span>{job.employmentType}</span>
                    </div>

                    <div className="flex items-center text-muted-foreground">
                      <GraduationCap className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                      <span>{job.education}</span>
                    </div>

                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                      <span>{job.experience}</span>
                    </div>

                    <div className="flex items-center font-medium text-primary">
                      <DollarSign className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                      <span>{job.salary}</span>
                    </div>

                    <div className="text-xs text-right text-muted-foreground mt-2">{job.postedAt}</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </main>
  )
}
