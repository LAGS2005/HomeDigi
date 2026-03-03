'use client'

import { Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { SCHEDULE } from '@/lib/mock-data'

export function ScheduleSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Service Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here for you every week
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {SCHEDULE.map((item, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-shadow duration-300 border-2 border-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.day}
                  </h3>
                  <p className="text-3xl font-bold text-primary">
                    {item.time}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
