import Link from "next/link"
import {
  Code,
  PenTool,
  BarChart,
  Globe,
  Smartphone,
  FileText,
  Camera,
  Music,
  BookOpen,
  Briefcase,
  Zap,
  Database,
} from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Dasturlash va texnologiya",
    icon: Code,
    href: "/freelance/categories/programming",
    color: "bg-blue-100",
  },
  { id: 2, name: "Dizayn va ijod", icon: PenTool, href: "/freelance/categories/design", color: "bg-pink-100" },
  {
    id: 3,
    name: "Marketing va reklama",
    icon: BarChart,
    href: "/freelance/categories/marketing",
    color: "bg-green-100",
  },
  { id: 4, name: "Tarjima va til", icon: Globe, href: "/freelance/categories/translation", color: "bg-purple-100" },
  { id: 5, name: "Mobil ilovalar", icon: Smartphone, href: "/freelance/categories/mobile", color: "bg-orange-100" },
  { id: 6, name: "Kontent yaratish", icon: FileText, href: "/freelance/categories/content", color: "bg-indigo-100" },
  { id: 7, name: "Foto va video", icon: Camera, href: "/freelance/categories/photo-video", color: "bg-red-100" },
  { id: 8, name: "Audio va musiqa", icon: Music, href: "/freelance/categories/audio", color: "bg-teal-100" },
  {
    id: 9,
    name: "Ta'lim va repetitorlik",
    icon: BookOpen,
    href: "/freelance/categories/education",
    color: "bg-amber-100",
  },
  { id: 10, name: "Biznes va moliya", icon: Briefcase, href: "/freelance/categories/business", color: "bg-cyan-100" },
  { id: 11, name: "Elektron tijorat", icon: Zap, href: "/freelance/categories/ecommerce", color: "bg-lime-100" },
  { id: 12, name: "Ma'lumotlar tahlili", icon: Database, href: "/freelance/categories/data", color: "bg-fuchsia-100" },
]

export function FreelanceCategories() {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Freelance kategoriyalari</h2>
        <Link href="/freelance/categories" className="text-primary hover:underline">
          Barcha kategoriyalar
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link key={category.id} href={category.href} className="job-category-card">
              <div
                className={`relative w-16 h-16 mb-3 rounded-full flex items-center justify-center ${category.color}`}
              >
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-center font-medium">{category.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
