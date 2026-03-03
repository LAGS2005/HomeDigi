'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-4 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Secure Your Items?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Start renting a smart locker today. It takes less than 5 minutes to get started.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="group"
          >
            <Link href="/rental/size">
              Rent Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/faq">View FAQ</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
