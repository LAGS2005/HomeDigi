'use client'

import { useState, useEffect } from 'react'
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

export default function RentalsPage() {
  const [rentals, setRentals] = useState<Rental[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
          Active Rentals
        </h1>
        <p className="text-muted-foreground">
          Manage your current locker rentals
        </p>
      </div>

      <div className="flex justify-end">
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
  )
}
