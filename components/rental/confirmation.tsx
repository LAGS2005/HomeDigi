'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRental } from '@/lib/rental-context'
import { Check, Copy, Download, Lock } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { generateLockerNumber, generateAccessCode } from '@/lib/mock-data'
import { toast } from 'sonner'

export function Confirmation() {
  const { rentalData, resetRental } = useRental()
  const { user } = useAuth()
  const [lockerNumber, setLockerNumber] = useState('')
  const [accessCode, setAccessCode] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!lockerNumber) {
      setLockerNumber(generateLockerNumber())
      setAccessCode(generateAccessCode())
    }
  }, [lockerNumber])

  if (!rentalData.selectedSize) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">No rental data found</p>
        <Button asChild>
          <Link href="/rental/size">Start New Rental</Link>
        </Button>
      </div>
    )
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(accessCode)
    setCopied(true)
    toast.success('Access code copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadReceipt = () => {
    // Mock PDF download
    toast.success('Receipt downloaded (Demo)')
  }

  const endDate = new Date(rentalData.startDate || new Date())
  endDate.setDate(endDate.getDate() + rentalData.days)

  return (
    <div className="space-y-8">
      {/* Success message */}
      <div className="text-center space-y-4 mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center animate-bounce">
            <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Rental Confirmed!
        </h1>
        <p className="text-lg text-muted-foreground">
          Your locker is ready to use
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Locker details */}
          <Card className="p-8 border-2 border-primary/20">
            <h2 className="text-xl font-bold text-foreground mb-6">Locker Details</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Locker Number</p>
                <p className="text-2xl font-bold text-foreground font-mono">
                  {lockerNumber}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Access Code</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-foreground font-mono">
                    {accessCode}
                  </p>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleCopyCode}
                    className="h-8 w-8 p-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Locker Size</p>
                <p className="text-lg font-semibold text-foreground">
                  {rentalData.selectedSize.name}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Rental Period</p>
                <p className="text-lg font-semibold text-foreground">
                  {rentalData.days} day{rentalData.days !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="text-lg font-semibold text-foreground">
                  {rentalData.startDate?.toLocaleDateString() || 'Today'}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">End Date</p>
                <p className="text-lg font-semibold text-foreground">
                  {endDate.toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>

          {/* Security info */}
          <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
            <div className="flex gap-4">
              <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-blue-900 dark:text-blue-300">
                  Your locker is secure
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Bank-level encryption and 24/7 CCTV monitoring protect your items. Only you can access your locker with your unique access code.
                </p>
              </div>
            </div>
          </Card>

          {/* Next steps */}
          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-4">What's Next?</h3>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-primary w-6">1.</span>
                <span>Visit your nearest SmartLocker location</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary w-6">2.</span>
                <span>Find your locker number: <span className="font-mono font-bold">{lockerNumber}</span></span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary w-6">3.</span>
                <span>Enter your access code to unlock</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary w-6">4.</span>
                <span>Store your items securely</span>
              </li>
            </ol>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Invoice */}
          <Card className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Invoice</h3>
            <div className="space-y-2 text-sm mb-6 pb-6 border-b border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${rentalData.totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (10%)</span>
                <span>${(rentalData.totalPrice * 0.1).toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between font-semibold mb-6">
              <span>Total</span>
              <span className="text-primary text-lg">
                ${(rentalData.totalPrice * 1.1).toFixed(2)}
              </span>
            </div>
            <Button
              onClick={handleDownloadReceipt}
              variant="outline"
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Receipt
            </Button>
          </Card>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full"
              onClick={() => resetRental()}
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>

          {/* Confirmation email */}
          {user && (
            <Card className="p-4 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
              <p className="text-xs text-green-700 dark:text-green-300">
                A confirmation email has been sent to <span className="font-semibold">{user.email}</span>
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
