'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { useAuth } from '@/lib/auth-context'
import {
  LayoutDashboard,
  Clock,
  History,
  Settings,
  LogOut,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const MENU_ITEMS = [
  {
    label: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Active Rentals',
    href: '/dashboard/rentals',
    icon: Clock,
  },
  {
    label: 'Rental History',
    href: '/dashboard/history',
    icon: History,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <div className="space-y-4">
      {/* User card */}
      <Card className="p-6">
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground">Welcome back</p>
            <h2 className="text-lg font-bold text-foreground">
              {user?.name}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground break-all">
            {user?.email}
          </p>
        </div>
      </Card>

      {/* Navigation */}
      <Card className="p-4">
        <nav className="space-y-2">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </Card>

      {/* Logout button */}
      <Button
        onClick={handleLogout}
        variant="outline"
        className="w-full justify-start"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </div>
  )
}
