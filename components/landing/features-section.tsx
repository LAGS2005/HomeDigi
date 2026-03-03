'use client'

import { Shield, Smartphone, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'

const FEATURES = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Military-grade encryption and 24/7 CCTV monitoring protect your valuables.',
  },
  {
    icon: Smartphone,
    title: 'Easy Access',
    description: 'Open your locker anytime with your smartphone app or access code.',
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Rent a locker in minutes. No complicated process, just fast and simple.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose SmartLocker
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for secure, convenient storage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow duration-300 hover:border-primary/50"
              >
                <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
