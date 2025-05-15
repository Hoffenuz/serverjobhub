import Link from "next/link"
import {
  Briefcase,
  Building2,
  HardHat,
  Car,
  Home,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Utensils,
  Truck,
  Palette,
  Headphones,
} from "lucide-react"

const categories = [
  { id: 1, name: "Davlat ishlari", icon: Building2, href: "/categories/davlat", color: "bg-blue-100" },
  { id: 2, name: "IT va Zamonaviy kasblar", icon: Briefcase, href: "/categories/it", color: "bg-indigo-100" },
  { id: 3, name: "Arxitektura va Quruvchilik", icon: HardHat, href: "/categories/arxitektura", color: "bg-yellow-100" },
  { id: 4, name: "Avtomobil xizmati", icon: Car, href: "/categories/avtomobil", color: "bg-red-100" },
  { id: 5, name: "Uy xodim xizmati", icon: Home, href: "/categories/uy-xodim", color: "bg-green-100" },
  { id: 6, name: "Tibbiyot sohasi", icon: Stethoscope, href: "/categories/tibbiyot", color: "bg-pink-100" },
  { id: 7, name: "Ta'lim sohasi", icon: GraduationCap, href: "/categories/talim", color: "bg-purple-100" },
  { id: 8, name: "Savdo va marketing", icon: ShoppingBag, href: "/categories/savdo", color: "bg-orange-100" },
  { id: 9, name: "Restoran va oziq-ovqat", icon: Utensils, href: "/categories/restoran", color: "bg-teal-100" },
  { id: 10, name: "Transport va logistika", icon: Truck, href: "/categories/transport", color: "bg-cyan-100" },
  { id: 11, name: "Dizayn va san'at", icon: Palette, href: "/categories/dizayn", color: "bg-fuchsia-100" },
  { id: 12, name: "Mijozlar bilan ishlash", icon: Headphones, href: "/categories/mijozlar", color: "bg-lime-100" },
]

export function JobCategories() {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Ish kategoriyalari</h2>
        <Link href="/categories" className="text-primary hover:underline">
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
