'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRental } from '@/lib/rental-context'
import { ArrowRight, ChevronLeft, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { PriceSummary } from './price-summary'

export function Checkout() {
  const router = useRouter()
  const { rentalData } = useRental()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Store rental in localStorage (mock)
      const rental = {
        id: `rental_${Date.now()}`,
        size: rentalData.selectedSize.name,
        days: rentalData.days,
        price: rentalData.totalPrice,
        startDate: rentalData.startDate,
      }
      localStorage.setItem('last_rental', JSON.stringify(rental))

      toast.success('Payment processed successfully!')
      router.push('/rental/confirmation')
    } catch (error) {
      toast.error('Payment failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleBack = () => {
    router.push('/rental/duration')
  }

  const subtotal = rentalData.totalPrice
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Complete Your Order
        </h1>
        <p className="text-muted-foreground">
          Secure payment processed with SSL encryption
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Payment Information</h3>
              
              <div className="space-y-2">
                <label htmlFor="cardName" className="text-sm font-medium">
                  Cardholder Name
                </label>
                <Input
                  id="cardName"
                  name="cardName"
                  placeholder="John Doe"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  disabled={isProcessing}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="cardNumber" className="text-sm font-medium">
                  Card Number
                </label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  maxLength="19"
                  disabled={isProcessing}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="expiry" className="text-sm font-medium">
                    Expiry Date
                  </label>
                  <Input
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    disabled={isProcessing}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-sm font-medium">
                    CVV
                  </label>
                  <Input
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    type="password"
                    maxLength="4"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    disabled={isProcessing}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4 text-sm text-blue-700 dark:text-blue-300">
              This is a demo. Use any values to test the checkout process.
            </div>

            <div className="flex gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={isProcessing}
                className="group"
              >
                <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back
              </Button>
              <Button type="submit" disabled={isProcessing} className="flex-1 group">
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>

        <div>
          <PriceSummary />
        </div>
      </div>
    </div>
  )
}
