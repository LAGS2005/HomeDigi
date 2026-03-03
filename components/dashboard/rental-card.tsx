'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Clock, Lock, X } from 'lucide-react'
import { toast } from 'sonner'

interface RentalCardProps {
  id: string
  lockerNumber: string
  size: string
  startDate: Date
  endDate: Date
  status: 'active' | 'expiring-soon'
  onCancel: (id: string) => void
  onRenew: (id: string) => void
}

export function RentalCard({
  id,
  lockerNumber,
  size,
  startDate,
  endDate,
  status,
  onCancel,
  onRenew,
}: RentalCardProps) {
  const daysRemaining = Math.ceil(
    (endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )

  const isExpiringSoon = daysRemaining <= 3 && daysRemaining > 0

  const handleCancel = () => {
    onCancel(id)
    toast.success('Rental cancelled')
  }

  const handleRenew = () => {
    onRenew(id)
    toast.success('Rental renewed for 7 more days')
  }

  return (
    <Card className={`p-6 border-l-4 ${isExpiringSoon ? 'border-l-orange-500' : 'border-l-primary'}`}>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-foreground">
              Locker {lockerNumber}
            </h3>
            <p className="text-sm text-muted-foreground">{size} Locker</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            isExpiringSoon
              ? 'bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300'
              : 'bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-300'
          }`}>
            {isExpiringSoon ? 'Expiring Soon' : 'Active'}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Start Date</p>
            <p className="font-medium text-foreground">
              {startDate.toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">End Date</p>
            <p className="font-medium text-foreground">
              {endDate.toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-start gap-2">
          <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">
              {daysRemaining} day{daysRemaining !== 1 ? 's' : ''} remaining
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(endDate).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={handleRenew}
          >
            Renew
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                <X className="mr-1 h-4 w-4" />
                Cancel
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogTitle>Cancel Rental?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to cancel this rental? You'll lose access to your locker immediately.
              </AlertDialogDescription>
              <div className="flex gap-3 justify-end">
                <AlertDialogCancel>Keep Rental</AlertDialogCancel>
                <AlertDialogAction onClick={handleCancel} className="bg-destructive">
                  Cancel Rental
                </AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </Card>
  )
}
