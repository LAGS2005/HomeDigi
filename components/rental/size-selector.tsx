'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRental } from '@/lib/rental-context'
import { LOCKER_SIZES } from '@/lib/mock-data'
import { ArrowRight, Box } from 'lucide-react'

export function SizeSelector() {
  const router = useRouter()
  const { rentalData, setSelectedSize } = useRental()

  const handleSelectSize = (size: typeof LOCKER_SIZES[0]) => {
    setSelectedSize(size)
    router.push('/rental/duration')
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Choose Your Locker Size
        </h1>
        <p className="text-muted-foreground">
          Select the size that best fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LOCKER_SIZES.map((size) => (
          <Card
            key={size.id}
            className={`p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary/50 ${
              rentalData.selectedSize?.id === size.id
                ? 'ring-2 ring-primary border-primary'
                : ''
            }`}
            onClick={() => handleSelectSize(size)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Box className="h-6 w-6 text-primary" />
              </div>
              {rentalData.selectedSize?.id === size.id && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2">
              {size.name}
            </h3>

            <div className="mb-4 space-y-2">
              <p className="text-2xl font-bold text-primary">
                ${size.pricePerDay}
                <span className="text-sm text-muted-foreground font-normal">
                  /day
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                {size.dimensions}
              </p>
            </div>

            <p className="text-sm text-foreground mb-4">
              {size.description}
            </p>

            <p className="text-xs text-muted-foreground">
              {size.recommendedUse}
            </p>
          </Card>
        ))}
      </div>

      <div className="flex gap-4 justify-center pt-8">
        <Button variant="outline" asChild>
          <Link href="/">Cancel</Link>
        </Button>
        <Button
          disabled={!rentalData.selectedSize}
          onClick={() => rentalData.selectedSize && router.push('/rental/duration')}
          className="group"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}

// Import Check icon
import { Check } from 'lucide-react'
