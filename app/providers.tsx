"use client"

import type { ReactNode } from "react"
import { AuthProvider } from "@/lib/auth-context"
import { DataProvider } from "@/lib/data-context"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <DataProvider>{children}</DataProvider>
    </AuthProvider>
  )
}
