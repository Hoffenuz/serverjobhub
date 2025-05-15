"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobCategories } from "@/components/job-categories"
import { JobListings } from "@/components/job-listings"
import { FilterPanel } from "@/components/filter-panel"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Button } from "@/components/ui/button"
import { AuthProvider } from "@/lib/auth-context"
import { DataProvider } from "@/lib/data-context"
import Link from "next/link"

export default function Home() {
  return (
    <AuthProvider>
      <DataProvider>
        <main className="min-h-screen flex flex-col">
          <Header />
          <div className="container mx-auto px-4 py-6 flex-grow pb-20">
            {/* Hero section */}
            <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-8 mb-8">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Ish izlash va ishchi topish platformasi</h1>
                <p className="text-lg mb-6">
                  JobHub - bu ish izlovchilar va ish beruvchilarni bir joyda bog'lovchi platforma. O'zingizga mos ishni
                  toping yoki malakali xodimlarni jalb qiling.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/resume">Rezyume joylash</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/vacancy">Vakansiya joylash</Link>
                  </Button>
                </div>
              </div>
            </div>

            <FilterPanel />
            <JobCategories />

            <div className="my-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 bg-gray-300 flex-grow"></div>
                <h2 className="text-2xl font-bold text-primary">JobHub</h2>
                <div className="h-0.5 bg-gray-300 flex-grow"></div>
              </div>
            </div>

            <JobListings />

            {/* Stats section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
                <div className="text-gray-600">Faol vakansiyalar</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3,500+</div>
                <div className="text-gray-600">Ro'yxatdan o'tgan foydalanuvchilar</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">850+</div>
                <div className="text-gray-600">Kompaniyalar</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5,000+</div>
                <div className="text-gray-600">Muvaffaqiyatli ishga joylashishlar</div>
              </div>
            </div>
          </div>
          <Footer />
          <BottomNavigation />
        </main>
      </DataProvider>
    </AuthProvider>
  )
}
