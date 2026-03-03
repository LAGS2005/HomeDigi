'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRental } from '@/lib/rental-context'
import { ArrowRight, ChevronLeft } from 'lucide-react'
import { PriceSummary } from './price-summary'

export function DurationSelector() {
  const router = useRouter()
  const { rentalData, setDays, setStartDate } = useRental()

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const days = Math.max(1, Math.min(365, parseInt(e.target.value) || 1))
    setDays(days)
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value)
    setStartDate(date)
  }

  const handleBack = () => {
    router.push('/rental/size')
  }

  const handleContinue = () => {
    if (rentalData.selectedSize && rentalData.days > 0) {
      router.push('/rental/checkout')
    }
  }

  if (!rentalData.selectedSize) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Please select a locker size first</p>
        <Button asChild>
          <Link href="/rental/size">Go Back</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Choose Rental Duration
        </h1>
        <p className="text-muted-foreground">
          Selected: {rentalData.selectedSize.name} Locker
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="days" className="text-sm font-semibold text-foreground">
              Number of Days
            </label>
            <Input
              id="days"
              type="number"
              min="1"
              max="365"
              value={rentalData.days}
              onChange={handleDaysChange}
              className="text-lg h-12"
            />
            <p className="text-xs text-muted-foreground">
              Rent for 1 to 365 days
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="startDate" className="text-sm font-semibold text-foreground">
              Start Date
            </label>
            <Input
              id="startDate"
              type="date"
              value={rentalData.startDate ? rentalData.startDate.toISOString().split('T')[0] : ''}
              onChange={handleDateChange}
              className="text-lg h-12"
            />
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Locker Size:</span>
                <span className="font-medium">{rentalData.selectedSize.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-medium">{rentalData.days} day{rentalData.days !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Price per Day:</span>
                <span className="font-medium">${rentalData.selectedSize.pricePerDay}</span>
              </div>
            </div>
          </div>
        </Card>

        <div>
          <PriceSummary />
        </div>
      </div>

      <div className="flex gap-4 justify-center pt-8">
        <Button variant="outline" onClick={handleBack} className="group">
          <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Button>
        <Button onClick={handleContinue} className="group">
          Continue
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}
