import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Calendar, Tag, Users } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Web sayt yaratish - IT kompaniya uchun",
    category: "Web dasturlash",
    budget: "$500-1000",
    deadline: "30 kun",
    skills: ["React", "Node.js", "MongoDB"],
    proposals: 12,
    postedAt: "2 kun oldin",
    description:
      "IT kompaniya uchun zamonaviy va responsive web sayt yaratish kerak. Sayt kompaniya xizmatlari, portfolio va blog sahifalarini o'z ichiga olishi kerak.",
  },
  {
    id: 2,
    title: "Mobil ilova dizayni - Fitnes ilova",
    category: "UI/UX Dizayn",
    budget: "$300-600",
    deadline: "15 kun",
    skills: ["Figma", "UI/UX", "Mobile Design"],
    proposals: 8,
    postedAt: "3 kun oldin",
    description:
      "Fitnes ilova uchun zamonaviy va foydalanuvchilarga qulay interfeys dizayni kerak. Ilova mashqlar, ovqatlanish rejasi va progress kuzatish funksiyalarini o'z ichiga oladi.",
  },
  {
    id: 3,
    title: "Logo va brending - Yangi restoran",
    category: "Grafik dizayn",
    budget: "$200-400",
    deadline: "10 kun",
    skills: ["Logo Design", "Branding", "Illustrator"],
    proposals: 15,
    postedAt: "1 kun oldin",
    description:
      "Yangi ochilayotgan milliy restoran uchun logo va brending materiallari yaratish. Logotip, vizitka, menyu dizayni va ijtimoiy tarmoqlar uchun grafikalar kerak.",
  },
  {
    id: 4,
    title: "Ingliz tilidan o'zbek tiliga tarjima",
    category: "Tarjima",
    budget: "$100-200",
    deadline: "7 kun",
    skills: ["English", "Uzbek", "Translation"],
    proposals: 6,
    postedAt: "5 kun oldin",
    description:
      "Texnik hujjatlarni ingliz tilidan o'zbek tiliga tarjima qilish. Taxminan 20 bet hajmdagi matn. IT sohasidagi terminologiyani bilish muhim.",
  },
  {
    id: 5,
    title: "Instagram marketing kampaniyasi",
    category: "Marketing",
    budget: "$300-500",
    deadline: "20 kun",
    skills: ["Instagram", "SMM", "Content Creation"],
    proposals: 9,
    postedAt: "4 kun oldin",
    description:
      "Kosmetika brendi uchun Instagram marketing kampaniyasini ishlab chiqish va amalga oshirish. Kontent yaratish, postlarni rejalashtirish va targetlangan reklamalarni sozlash.",
  },
  {
    id: 6,
    title: "E-commerce web sayt uchun SEO optimizatsiya",
    category: "SEO",
    budget: "$400-700",
    deadline: "25 kun",
    skills: ["SEO", "E-commerce", "Google Analytics"],
    proposals: 7,
    postedAt: "6 kun oldin",
    description:
      "Mavjud e-commerce saytni qidiruv tizimlarida yuqori o'rinlarga chiqarish uchun SEO optimizatsiya ishlari. Kalit so'zlar tahlili, texnik SEO va kontent optimizatsiyasi.",
  },
  {
    id: 7,
    title: "Biznes reja tayyorlash - Startup uchun",
    category: "Biznes va moliya",
    budget: "$500-800",
    deadline: "15 kun",
    skills: ["Business Planning", "Financial Analysis", "Market Research"],
    proposals: 5,
    postedAt: "3 kun oldin",
    description:
      "Texnologiya sohasidagi startup uchun batafsil biznes reja tayyorlash. Bozor tahlili, moliyaviy prognozlar va marketing strategiyasini o'z ichiga olishi kerak.",
  },
  {
    id: 8,
    title: "Video montaj - Kompaniya taqdimoti",
    category: "Video montaj",
    budget: "$200-400",
    deadline: "10 kun",
    skills: ["Video Editing", "After Effects", "Premiere Pro"],
    proposals: 11,
    postedAt: "2 kun oldin",
    description:
      "Kompaniya taqdimoti uchun 3-5 daqiqali professional video tayyorlash. Mavjud materiallardan foydalanib, animatsiyalar va grafikalar qo'shish kerak.",
  },
]

export function FreelanceProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {projects.map((project) => (
        <Link href={`/freelance/projects/${project.id}`} key={project.id}>
          <Card className="h-full hover:shadow-md transition-all job-listing-card">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                  {project.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <DollarSign className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                  <span>{project.budget}</span>
                </div>

                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                  <span>Muddat: {project.deadline}</span>
                </div>

                <div className="flex items-center text-muted-foreground">
                  <Tag className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                  <span className="truncate">{project.skills.join(", ")}</span>
                </div>

                <div className="flex items-center text-muted-foreground">
                  <Users className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                  <span>Takliflar: {project.proposals}</span>
                </div>

                <div className="text-xs text-right text-muted-foreground mt-2">{project.postedAt}</div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
