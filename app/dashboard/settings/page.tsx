'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/lib/auth-context'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

export default function SettingsPage() {
  const { user } = useAuth()
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Settings saved successfully!')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your account and preferences
        </p>
      </div>

      {/* Profile settings */}
      <Card className="p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-foreground mb-6">
            Profile Information
          </h2>
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSaving}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSaving}
          />
          <p className="text-xs text-muted-foreground">
            Your email address is used for account recovery and notifications
          </p>
        </div>

        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
      </Card>

      {/* Preferences */}
      <Card className="p-8 space-y-6">
        <h2 className="text-xl font-bold text-foreground mb-6">
          Preferences
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive emails for rental reminders and expiring lockers
              </p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <p className="font-medium text-foreground">SMS Notifications</p>
              <p className="text-sm text-muted-foreground">
                Receive text messages for important updates
              </p>
            </div>
            <input type="checkbox" className="w-5 h-5" />
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card className="p-8 space-y-6">
        <h2 className="text-xl font-bold text-foreground mb-6">
          Security
        </h2>

        <Button variant="outline" className="w-full justify-start">
          Change Password
        </Button>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4 text-sm text-blue-700 dark:text-blue-300">
          Your account is protected with bank-level encryption. Two-factor authentication coming soon.
        </div>
      </Card>
    </div>
  )
}
