'use client'

import Image from 'next/image'
import { LEADERS } from '@/lib/mock-data'
import { Card } from '@/components/ui/card'

export function LeadershipSection() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Led by experts in technology, security, and customer experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERS.map((leader) => (
            <Card
              key={leader.id}
              className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-80 bg-muted overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {leader.title}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
