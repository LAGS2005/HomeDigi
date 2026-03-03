'use client'

import { Card } from '@/components/ui/card'
import { useRental } from '@/lib/rental-context'

const TAX_RATE = 0.10 // 10% tax

export function PriceSummary() {
  const { rentalData } = useRental()

  const subtotal = rentalData.totalPrice
  const tax = subtotal * TAX_RATE
  const total = subtotal + tax

  return (
    <Card className="p-6 space-y-4 sticky top-4">
      <h3 className="font-bold text-lg text-foreground">Order Summary</h3>

      <div className="space-y-3 border-b border-border pb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax (10%)</span>
          <span className="font-medium text-foreground">${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="font-semibold text-foreground">Total</span>
        <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
      </div>

      <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-3 text-xs text-green-700 dark:text-green-300">
        Secure payment processed with SSL encryption
      </div>
    </Card>
  )
}
