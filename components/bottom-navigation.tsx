"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Upload,
  Download,
  MessageSquare,
  User,
  Briefcase,
  Menu,
  Building,
  CreditCard,
  HelpCircle,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function BottomNavigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const mainRoutes = [
    {
      href: "/",
      label: "Bosh sahifa",
      icon: Home,
    },
    {
      href: "/resume",
      label: "Rezyume joylash",
      icon: Upload,
    },
    {
      href: "/vacancy",
      label: "Vakansiya joylash",
      icon: Download,
    },
    {
      href: "/messages",
      label: "Suhbatlar",
      icon: MessageSquare,
    },
    {
      href: "/profile",
      label: "Mening profilim",
      icon: User,
    },
  ]

  const extraRoutes = [
    {
      href: "/freelance",
      label: "Freelance",
      icon: Briefcase,
    },
    {
      href: "/companies",
      label: "Kompaniyalar",
      icon: Building,
    },
    {
      href: "/subscription",
      label: "Obuna rejalar",
      icon: CreditCard,
    },
    {
      href: "/help",
      label: "Yordam",
      icon: HelpCircle,
    },
    {
      href: "/settings",
      label: "Sozlamalar",
      icon: Settings,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="flex justify-between items-center container mx-auto">
        {mainRoutes.slice(0, 4).map((route) => {
          const Icon = route.icon
          const isActive = pathname === route.href

          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex flex-col items-center p-3 flex-1 transition-colors",
                isActive ? "text-primary" : "text-gray-500 hover:text-primary/80",
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
              <span className="text-xs mt-1 text-center">{route.label}</span>
            </Link>
          )
        })}

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className={cn(
                "flex flex-col items-center p-3 flex-1 transition-colors",
                "text-gray-500 hover:text-primary/80",
              )}
            >
              <Menu className="h-5 w-5" />
              <span className="text-xs mt-1 text-center">Ko'proq</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[70vh]">
            <div className="grid grid-cols-3 gap-4 py-6">
              {[...mainRoutes, ...extraRoutes].map((route) => {
                const Icon = route.icon
                const isActive = pathname === route.href

                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex flex-col items-center p-4 rounded-lg transition-colors",
                      isActive ? "bg-primary/10 text-primary" : "text-gray-500 hover:bg-gray-100",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className={cn("h-6 w-6 mb-2", isActive && "text-primary")} />
                    <span className="text-sm text-center">{route.label}</span>
                  </Link>
                )
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
