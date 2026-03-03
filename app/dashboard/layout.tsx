'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { DashboardSidebar } from '@/components/dashboard/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <Header />
      <main className="min-h-screen bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <DashboardSidebar />
            <div className="lg:col-span-3">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </ProtectedRoute>
  )
}
