import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Globe, Calendar, Users, Star, Briefcase, Building, Phone, Mail, DollarSign } from "lucide-react"
import Link from "next/link"

// Mock data for company
const company = {
  id: "1",
  name: "Tech Solutions",
  logo: "/placeholder.svg?height=100&width=100",
  coverImage: "/placeholder.svg?height=300&width=1200",
  description:
    "Tech Solutions - bu zamonaviy texnologiyalar sohasida yetakchi kompaniya. Biz mijozlarimizga yuqori sifatli dasturiy ta'minot yechimlari, veb-saytlar va mobil ilovalarni taqdim etamiz. Bizning jamoamiz tajribali mutaxassislardan iborat bo'lib, har qanday murakkablikdagi loyihalarni amalga oshirish imkoniyatiga ega.",
  industry: ["Information Technology", "Software Development", "Web Development"],
  founded: 2015,
  size: "51-200",
  location: {
    country: "O'zbekiston",
    region: "Toshkent",
    city: "Toshkent",
    address: "Amir Temur ko'chasi, 108-uy",
  },
  website: "https://techsolutions.uz",
  phone: "+998 71 123 45 67",
  email: "info@techsolutions.uz",
  socialMedia: {
    linkedin: "https://linkedin.com/company/techsolutions",
    facebook: "https://facebook.com/techsolutions",
    instagram: "https://instagram.com/techsolutions",
  },
  verificationStatus: "verified",
  rating: 4.7,
  reviews: 28,
  activeJobs: 5,
  totalHires: 87,
}

// Mock data for jobs
const jobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Toshkent, O'zbekiston",
    salary: "$1200-1800",
    postedAt: "2 kun oldin",
  },
  {
    id: "2",
    title: "Backend Developer (Node.js)",
    type: "Full-time",
    location: "Toshkent, O'zbekiston",
    salary: "$1000-1500",
    postedAt: "1 hafta oldin",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Masofaviy",
    salary: "$800-1200",
    postedAt: "3 kun oldin",
  },
  {
    id: "4",
    title: "Project Manager",
    type: "Full-time",
    location: "Toshkent, O'zbekiston",
    salary: "$1500-2000",
    postedAt: "5 kun oldin",
  },
]

// Mock data for reviews
const reviews = [
  {
    id: "1",
    author: "Aziz Karimov",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    position: "Frontend Developer",
    date: "12.05.2023",
    comment:
      "Ajoyib kompaniya! Professional jamoa va qulay ish sharoitlari. Karyeramni rivojlantirish uchun ko'plab imkoniyatlar berildi.",
  },
  {
    id: "2",
    author: "Malika Rahimova",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    position: "UI/UX Designer",
    date: "03.04.2023",
    comment:
      "Yaxshi kompaniya, ijodiy erkinlik va professional o'sish uchun imkoniyatlar mavjud. Jamoada ishlash juda qulay.",
  },
  {
    id: "3",
    author: "Bobur Aliyev",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    position: "Project Manager",
    date: "22.03.2023",
    comment:
      "Kompaniyada 2 yil ishladim va bu vaqt davomida ko'p narsalarni o'rgandim. Rahbariyat har doim qo'llab-quvvatlaydi va xodimlarning rivojlanishiga e'tibor beradi.",
  },
]

export default function CompanyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pb-20">
        {/* Cover image */}
        <div className="w-full h-48 md:h-64 bg-gray-200 relative">
          <img
            src={company.coverImage || "/placeholder.svg"}
            alt={`${company.name} cover`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4">
          {/* Company header */}
          <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 md:-mt-20 mb-8 relative z-10">
            <Avatar className="w-32 h-32 border-4 border-white bg-white">
              <AvatarImage src={company.logo || "/placeholder.svg"} alt={company.name} />
              <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
            </Avatar>

            <div className="mt-4 md:mt-0 md:ml-6 md:mb-2 flex-grow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">{company.name}</h1>
                  <div className="flex items-center mt-1 text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                      {company.location.city}, {company.location.country}
                    </span>
                  </div>
                </div>

                <div className="flex mt-4 md:mt-0 space-x-2">
                  <Button variant="outline">Saqlash</Button>
                  <Button>Bog'lanish</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Company info and tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Kompaniya haqida</h3>
                    <div className="flex items-center mb-2">
                      <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{company.industry.join(", ")}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{company.size} xodim</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{company.founded} yilda tashkil etilgan</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {company.website.replace("https://", "")}
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bog'lanish</h3>
                    <div className="flex items-center mb-2">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <a href={`mailto:${company.email}`} className="text-sm text-primary hover:underline">
                        {company.email}
                      </a>
                    </div>
                    <div className="flex items-center mb-2">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <a href={`tel:${company.phone}`} className="text-sm text-primary hover:underline">
                        {company.phone}
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Statistika</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-primary">{company.activeJobs}</div>
                        <div className="text-xs text-muted-foreground">Faol vakansiyalar</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-primary">{company.totalHires}</div>
                        <div className="text-xs text-muted-foreground">Jami ishga olishlar</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Reyting</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-amber-500 fill-current" />
                      <span className="ml-1 font-medium">{company.rating}</span>
                      <span className="text-sm text-muted-foreground ml-1">({company.reviews} sharh)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-sm w-16">5 yulduz</span>
                      <div className="flex-grow h-2 bg-gray-200 rounded-full mx-2">
                        <div className="h-2 bg-amber-500 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                      <span className="text-sm w-8">70%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm w-16">4 yulduz</span>
                      <div className="flex-grow h-2 bg-gray-200 rounded-full mx-2">
                        <div className="h-2 bg-amber-500 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                      <span className="text-sm w-8">20%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm w-16">3 yulduz</span>
                      <div className="flex-grow h-2 bg-gray-200 rounded-full mx-2">
                        <div className="h-2 bg-amber-500 rounded-full" style={{ width: "7%" }}></div>
                      </div>
                      <span className="text-sm w-8">7%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm w-16">2 yulduz</span>
                      <div className="flex-grow h-2 bg-gray-200 rounded-full mx-2">
                        <div className="h-2 bg-amber-500 rounded-full" style={{ width: "2%" }}></div>
                      </div>
                      <span className="text-sm w-8">2%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm w-16">1 yulduz</span>
                      <div className="flex-grow h-2 bg-gray-200 rounded-full mx-2">
                        <div className="h-2 bg-amber-500 rounded-full" style={{ width: "1%" }}></div>
                      </div>
                      <span className="text-sm w-8">1%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="md:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="about">Haqida</TabsTrigger>
                  <TabsTrigger value="jobs">Vakansiyalar</TabsTrigger>
                  <TabsTrigger value="reviews">Sharhlar</TabsTrigger>
                  <TabsTrigger value="photos">Fotolar</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Kompaniya haqida</h3>
                      <p className="whitespace-pre-line">{company.description}</p>

                      <h3 className="font-semibold text-lg mt-6 mb-4">Manzil</h3>
                      <p>{company.location.address}</p>
                      <p>
                        {company.location.city}, {company.location.region}, {company.location.country}
                      </p>

                      <div className="mt-4 h-64 bg-gray-200 rounded-lg">
                        {/* Here would be a map component */}
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          Xarita
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="jobs" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Faol vakansiyalar</h3>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          {jobs.length} vakansiya
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        {jobs.map((job) => (
                          <Link href={`/jobs/${job.id}`} key={job.id}>
                            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                              <h4 className="font-medium text-lg">{job.title}</h4>
                              <div className="flex flex-wrap gap-y-2 mt-2 text-sm text-muted-foreground">
                                <div className="flex items-center mr-4">
                                  <Briefcase className="h-4 w-4 mr-1" />
                                  <span>{job.type}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <DollarSign className="h-4 w-4 mr-1" />
                                  <span>{job.salary}</span>
                                </div>
                              </div>
                              <div className="text-xs text-right text-muted-foreground mt-2">{job.postedAt}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Xodimlar sharhlari</h3>
                        <Button variant="outline">Sharh qoldirish</Button>
                      </div>

                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                            <div className="flex items-start">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                                <AvatarFallback>{review.author.substring(0, 2)}</AvatarFallback>
                              </Avatar>
                              <div className="ml-3">
                                <div className="flex items-center">
                                  <h4 className="font-medium">{review.author}</h4>
                                  <span className="mx-2 text-muted-foreground">•</span>
                                  <span className="text-sm text-muted-foreground">{review.position}</span>
                                </div>
                                <div className="flex items-center mt-1">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < review.rating ? "text-amber-500 fill-current" : "text-gray-300"}`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-xs text-muted-foreground ml-2">{review.date}</span>
                                </div>
                                <p className="mt-2 text-sm">{review.comment}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="photos" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Kompaniya fotolari</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                            <img
                              src={`/placeholder.svg?height=200&width=300&text=Photo ${i + 1}`}
                              alt={`Company photo ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </main>
  )
}
