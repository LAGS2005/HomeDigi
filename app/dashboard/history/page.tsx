'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { toast } from 'sonner'

interface HistoryItem {
  id: string
  lockerNumber: string
  size: string
  startDate: Date
  endDate: Date
  totalDays: number
  totalPrice: number
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      const mockHistory: HistoryItem[] = [
        {
          id: '1',
          lockerNumber: 'SL-ABC789',
          size: 'Large',
          startDate: new Date('2025-12-01'),
          endDate: new Date('2025-12-15'),
          totalDays: 14,
          totalPrice: 168.00,
        },
        {
          id: '2',
          lockerNumber: 'SL-XYZ456',
          size: 'Medium',
          startDate: new Date('2025-11-01'),
          endDate: new Date('2025-11-08'),
          totalDays: 7,
          totalPrice: 56.00,
        },
        {
          id: '3',
          lockerNumber: 'SL-DEF123',
          size: 'Small',
          startDate: new Date('2025-10-15'),
          endDate: new Date('2025-10-20'),
          totalDays: 5,
          totalPrice: 25.00,
        },
      ]
      setHistory(mockHistory)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleDownload = (id: string) => {
    toast.success(`Receipt for rental ${id} downloaded`)
  }

  const totalSpent = history.reduce((sum, item) => sum + item.totalPrice, 0)

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Rental History
        </h1>
        <p className="text-muted-foreground">
          View all your past rentals
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Rentals</p>
          <p className="text-3xl font-bold text-primary">{history.length}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground mb-2">Total Amount Spent</p>
          <p className="text-3xl font-bold text-primary">${totalSpent.toFixed(2)}</p>
        </Card>
      </div>

      {/* History table */}
      {isLoading ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </Card>
      ) : history.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No rental history yet</p>
        </Card>
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Locker Number
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Start Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    End Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                    Days
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-foreground">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {history.map((item) => (
                  <tr key={item.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-foreground">
                      {item.lockerNumber}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {item.size}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {item.startDate.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {item.endDate.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {item.totalDays}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-foreground text-right">
                      ${item.totalPrice.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDownload(item.id)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  )
}
