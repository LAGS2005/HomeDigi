'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RentalCard } from '@/components/dashboard/rental-card'
import { ArrowRight, Plus } from 'lucide-react'

interface Rental {
  id: string
  lockerNumber: string
  size: string
  startDate: Date
  endDate: Date
  status: 'active' | 'expiring-soon'
}

export default function DashboardPage() {
  const [rentals, setRentals] = useState<Rental[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading mock rentals
    setIsLoading(true)
    const timer = setTimeout(() => {
      const mockRentals: Rental[] = [
        {
          id: '1',
          lockerNumber: 'SL-ABC123',
          size: 'Medium',
          startDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          status: 'expiring-soon',
        },
        {
          id: '2',
          lockerNumber: 'SL-DEF456',
          size: 'Small',
          startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          endDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
          status: 'active',
        },
      ]
      setRentals(mockRentals)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleCancelRental = (id: string) => {
    setRentals(rentals.filter(r => r.id !== id))
  }

  const handleRenewRental = (id: string) => {
    setRentals(rentals.map(r => {
      if (r.id === id) {
        const newEndDate = new Date(r.endDate)
        newEndDate.setDate(newEndDate.getDate() + 7)
        return { ...r, endDate: newEndDate, status: 'active' }
      }
      return r
    }))
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage your smart locker rentals
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-2">Active Rentals</p>
          <p className="text-3xl font-bold text-primary">{rentals.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Spent</p>
          <p className="text-3xl font-bold text-primary">${(rentals.length * 50).toFixed(2)}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-2">Expiring Soon</p>
          <p className="text-3xl font-bold text-orange-600">
            {rentals.filter(r => {
              const days = Math.ceil((r.endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
              return days <= 3 && days > 0
            }).length}
          </p>
        </Card>
      </div>

      {/* Active rentals */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            Your Rentals
          </h2>
          <Button asChild>
            <Link href="/rental/size">
              <Plus className="mr-2 h-4 w-4" />
              New Rental
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">Loading...</p>
          </Card>
        ) : rentals.length === 0 ? (
          <Card className="p-12 text-center space-y-4">
            <p className="text-lg text-muted-foreground">No active rentals</p>
            <Button asChild>
              <Link href="/rental/size">
                Start Your First Rental
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        ) : (
          <div className="grid gap-4">
            {rentals.map((rental) => (
              <RentalCard
                key={rental.id}
                {...rental}
                onCancel={handleCancelRental}
                onRenew={handleRenewRental}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
