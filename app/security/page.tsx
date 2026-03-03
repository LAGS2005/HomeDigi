import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Camera, Lock, Shield, AlertCircle } from 'lucide-react'

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: 'Military-Grade Encryption',
    description:
      'Your access codes and personal information are protected with AES-256 encryption, the same standard used by governments and banks worldwide.',
  },
  {
    icon: Camera,
    title: '24/7 CCTV Monitoring',
    description:
      'Every locker location is under constant video surveillance with professional security monitoring to ensure the safety of your valuables.',
  },
  {
    icon: Shield,
    title: 'Secure Access',
    description:
      'Only you can access your locker with your unique access code. Your biometric data is never stored, ensuring your privacy.',
  },
  {
    icon: AlertCircle,
    title: 'Real-time Alerts',
    description:
      'Receive instant notifications when your locker is accessed. Monitor your rental activity from your dashboard at any time.',
  },
]

export const metadata = {
  title: 'Security - SmartLocker',
  description: 'Learn about SmartLocker security features and data protection',
}

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Security You Can Trust
              </h1>
              <p className="text-lg text-muted-foreground">
                Your valuables are protected with bank-level security and 24/7 monitoring
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SECURITY_FEATURES.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="p-8 space-y-4 hover:shadow-lg transition-shadow">
                    <div className="p-3 w-fit rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Data Protection & Privacy
            </h2>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Personal Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We collect minimal personal information and never share it with third parties without your explicit consent. Your email and name are used only for account management and communications you request.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Access Logs
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain access logs for security purposes only. These logs are encrypted and retained for 90 days before automatic deletion. Only authorized security personnel can access these logs.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Compliance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  SmartLocker complies with GDPR, CCPA, and other international data protection regulations. Our security practices are regularly audited by third-party security firms.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Insurance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All rentals include basic insurance coverage up to $500. Items of higher value should be declared during rental for additional coverage.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Industry Recognition
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6">
                <p className="text-lg font-bold text-primary mb-2">ISO 27001</p>
                <p className="text-sm text-muted-foreground">
                  Information Security Management
                </p>
              </Card>
              <Card className="p-6">
                <p className="text-lg font-bold text-primary mb-2">SOC 2</p>
                <p className="text-sm text-muted-foreground">
                  Service Organization Control
                </p>
              </Card>
              <Card className="p-6">
                <p className="text-lg font-bold text-primary mb-2">GDPR</p>
                <p className="text-sm text-muted-foreground">
                  General Data Protection Regulation
                </p>
              </Card>
              <Card className="p-6">
                <p className="text-lg font-bold text-primary mb-2">CCPA</p>
                <p className="text-sm text-muted-foreground">
                  California Consumer Privacy Act
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
