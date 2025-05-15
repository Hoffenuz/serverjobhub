import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Users, Star, Briefcase, Search } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for companies
const companies = [
  {
    id: "1",
    name: "Tech Solutions",
    logo: "/placeholder.svg?height=100&width=100",
    industry: ["IT", "Software Development"],
    location: "Toshkent, O'zbekiston",
    size: "51-200",
    rating: 4.7,
    reviews: 28,
    activeJobs: 5,
    description:
      "Tech Solutions - bu zamonaviy texnologiyalar sohasida yetakchi kompaniya. Biz mijozlarimizga yuqori sifatli dasturiy ta'minot yechimlari, veb-saytlar va mobil ilovalarni taqdim etamiz.",
  },
  {
    id: "2",
    name: "Creative Studio",
    logo: "/placeholder.svg?height=100&width=100",
    industry: ["Design", "Creative"],
    location: "Toshkent, O'zbekiston",
    size: "11-50",
    rating: 4.8,
    reviews: 15,
    activeJobs: 3,
    description:
      "Creative Studio - bu dizayn va ijodiy yechimlar sohasida faoliyat yurituvchi kompaniya. Biz brending, UI/UX dizayn, grafik dizayn va video ishlab chiqarish xizmatlarini taqdim etamiz.",
  },
  {
    id: "3",
    name: "Digital Marketing Pro",
    logo: "/placeholder.svg?height=100&width=100",
    industry: ["Marketing", "Digital"],
    location: "Toshkent, O'zbekiston",
    size: "11-50",
    rating: 4.5,
    reviews: 12,
    activeJobs: 2,
    description:
      "Digital Marketing Pro - bu raqamli marketing sohasida professional xizmatlar ko'rsatuvchi kompaniya. Biz SEO, SMM, kontekst reklama va boshqa raqamli marketing xizmatlarini taqdim etamiz.",
  },
  {
    id: "4",
    name: "Finance Solutions",
    logo: "/placeholder.svg?height=100&width=100",
    industry: ["Finance", "Consulting"],
    location: "Toshkent, O'zbekiston",
    size: "51-200",
    rating: 4.6,
    reviews: 20,
    activeJobs: 4,
    description:
      "Finance Solutions - bu moliyaviy xizmatlar va konsalting sohasida faoliyat yurituvchi kompaniya. Biz moliyaviy rejalashtirish, soliq maslahatlar va buxgalteriya xizmatlarini taqdim etamiz.",
  },
  {
    id: "5",
    name: "Education Center",
    logo: "/placeholder.svg?height=100&width=100",
    industry: ["Education", "Training"],
    location: "Toshkent, O'zbekiston",
    size: "11-50",
    rating: 4.9,
    reviews: 35,
    activeJobs: 3,
    description:
      "Education Center - bu ta'lim va o'qitish sohasida faoliyat yurituvchi markaz. Biz til o'rgatish, dasturlash va boshqa ko'nikmalarni rivojlantirish kurslarini taqdim etamiz.",
  },
  {
    id: "6",
    name: "Healthcare Solutions",
    logo: "/placeholder.svg?height=100&width=100",
    industry: ["Healthcare", "Medical"],
    location: "Toshkent, O'zbekiston",
    size: "201-500",
    rating: 4.7,
    reviews: 42,
    activeJobs: 8,
    description:
      "Healthcare Solutions - bu sog'liqni saqlash sohasida faoliyat yurituvchi kompaniya. Biz tibbiy xizmatlar, diagnostika va davolash usullarini taqdim etamiz.",
  },
  {
    id: "7",
    name: "Construction Pro",
    logo: "/placeholder.svg?height=100&width=100",
    industry: ["Construction", "Engineering"],
    location: "Toshkent, O'zbekiston",
    size: "51-200",
    rating: 4.5,
    reviews: 18,
    activeJobs: 6,
    description:
      "Construction Pro - bu qurilish va muhandislik sohasida faoliyat yurituvchi kompaniya. Biz qurilish loyihalari, muhandislik yechimlari va loyihalash xizmatlarini taqdim etamiz.",
  },
  {
    id: "8",
    name: "Retail Group",
    logo: "/placeholder.svg?height=100&width=100",
    industry: ["Retail", "E-commerce"],
    location: "Toshkent, O'zbekiston",
    size: "501-1000",
    rating: 4.4,
    reviews: 56,
    activeJobs: 10,
    description:
      "Retail Group - bu chakana savdo va elektron tijorat sohasida faoliyat yurituvchi kompaniya. Biz keng assortimentdagi mahsulotlarni chakana va ulgurji savdo orqali taqdim etamiz.",
  },
]

export default function CompaniesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-6 flex-grow pb-20">
        <h1 className="text-3xl font-bold mb-6">Kompaniyalar</h1>

        {/* Filter section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative col-span-1 md:col-span-2">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input placeholder="Kompaniya nomi bo'yicha qidirish" className="pl-10" />
            </div>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Soha" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="it">IT va dasturlash</SelectItem>
                <SelectItem value="design">Dizayn va ijod</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="finance">Moliya</SelectItem>
                <SelectItem value="education">Ta'lim</SelectItem>
                <SelectItem value="healthcare">Sog'liqni saqlash</SelectItem>
                <SelectItem value="construction">Qurilish</SelectItem>
                <SelectItem value="retail">Chakana savdo</SelectItem>
              </SelectContent>
            </Select>

            <Button>Qidirish</Button>
          </div>
        </div>

        {/* Companies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Link href={`/companies/${company.id}`} key={company.id}>
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={company.logo || "/placeholder.svg"} alt={company.name} />
                      <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{company.name}</CardTitle>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {company.industry.map((ind, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {ind}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{company.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                      <span>{company.location}</span>
                    </div>

                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                      <span>{company.size} xodim</span>
                    </div>

                    <div className="flex items-center text-muted-foreground">
                      <Briefcase className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                      <span>{company.activeJobs} faol vakansiya</span>
                    </div>

                    <div className="flex items-center text-amber-500">
                      <Star className="h-3.5 w-3.5 mr-1.5 flex-shrink-0 fill-current" />
                      <span>
                        {company.rating} ({company.reviews} sharh)
                      </span>
                    </div>
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
