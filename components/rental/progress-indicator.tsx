'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Check } from 'lucide-react'

interface Step {
  number: number
  label: string
  href: string
}

interface ProgressIndicatorProps {
  steps: Step[]
}

export function ProgressIndicator({ steps }: ProgressIndicatorProps) {
  const pathname = usePathname()

  const currentStepIndex = steps.findIndex((step) => pathname.includes(step.href.split('/').pop() || ''))
  const activeStepNumber = currentStepIndex >= 0 ? currentStepIndex + 1 : 1

  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => {
        const isCompleted = index + 1 < activeStepNumber
        const isActive = index + 1 === activeStepNumber
        const isUpcoming = index + 1 > activeStepNumber

        return (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                  isCompleted
                    ? 'bg-primary text-primary-foreground'
                    : isActive
                      ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2'
                      : 'bg-muted text-muted-foreground border-2 border-border'
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : step.number}
              </div>
              <span className="text-xs sm:text-sm font-medium mt-2 text-center">
                {step.label}
              </span>
            </div>

            {/* Line connector */}
            {index < steps.length - 1 && (
              <div
                className={`h-1 flex-1 mx-2 sm:mx-4 transition-colors ${
                  isCompleted || isActive ? 'bg-primary' : 'bg-border'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
