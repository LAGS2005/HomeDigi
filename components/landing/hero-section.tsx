'use client'

import { ArrowRight, Lock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Secure Storage,{' '}
                <span className="text-primary">Made Simple</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">
                Modern smart lockers for your personal items, luggage, and valuables. Access 24/7 with complete peace of mind.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/rental/size">
                  Rent a Locker
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/security">Learn More</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Bank-level security</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span className="text-sm text-muted-foreground">24/7 Access</span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative h-96 sm:h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            <div className="relative space-y-4 w-full h-full flex items-center justify-center">
              <div className="space-y-4 p-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-16 bg-primary/10 rounded-lg border border-primary/20 animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
