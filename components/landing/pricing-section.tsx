'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LOCKER_SIZES } from '@/lib/mock-data'
import { Check } from 'lucide-react'

const BENEFITS = ['24/7 Access', 'Secure Storage', 'Easy Unlock', 'Insurance Included']

export function PricingSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the locker size that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCKER_SIZES.map((size) => (
            <Card
              key={size.id}
              className="p-8 flex flex-col hover:shadow-lg transition-shadow duration-300 hover:border-primary/50"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {size.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {size.dimensions}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">
                  ${size.pricePerDay}
                </span>
                <span className="text-muted-foreground ml-2">per day</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                {size.description}
              </p>

              <div className="mb-8 flex-1 space-y-3">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="w-full">
                <Link href="/rental/size">Select {size.name}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
