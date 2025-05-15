import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BottomNavigation } from "@/components/bottom-navigation"
import { FreelanceCategories } from "@/components/freelance-categories"
import { FreelanceProjects } from "@/components/freelance-projects"
import { FreelanceFilterPanel } from "@/components/freelance-filter-panel"
import { TopFreelancers } from "@/components/top-freelancers"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FreelancePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-6 flex-grow pb-20">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8 mb-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mustaqil ish va loyihalar platformasi</h1>
            <p className="text-lg mb-6">
              JobHub Freelance - bu mustaqil mutaxassislar va mijozlarni bir joyda bog'lovchi platforma. O'zingizga mos
              loyihani toping yoki malakali freelancerlarni jalb qiling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/freelance/create-project">Loyiha e'lon qilish</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/freelance/become-freelancer">Freelancer bo'lish</Link>
              </Button>
            </div>
          </div>
        </div>

        <FreelanceFilterPanel />
        <FreelanceCategories />

        <div className="my-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 bg-gray-300 flex-grow"></div>
            <h2 className="text-2xl font-bold text-primary">Freelance loyihalar</h2>
            <div className="h-0.5 bg-gray-300 flex-grow"></div>
          </div>
        </div>

        <FreelanceProjects />

        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Top freelancerlar</h2>
          <TopFreelancers />
        </div>

        {/* How it works section */}
        <div className="my-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Qanday ishlaydi?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Loyihangizni e'lon qiling</h3>
              <p className="text-gray-600">Loyihangiz haqida batafsil ma'lumot bering va byudjetingizni belgilang</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Takliflarni ko'rib chiqing</h3>
              <p className="text-gray-600">Malakali freelancerlardan takliflar oling va eng yaxshisini tanlang</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Loyihani yakunlang</h3>
              <p className="text-gray-600">Ishni kuzatib boring va faqat natijadan mamnun bo'lganingizda to'lang</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </main>
  )
}
