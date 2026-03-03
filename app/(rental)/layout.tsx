import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProgressIndicator } from '@/components/rental/progress-indicator'

const STEPS = [
  { number: 1, label: 'Size', href: '/rental/size' },
  { number: 2, label: 'Duration', href: '/rental/duration' },
  { number: 3, label: 'Checkout', href: '/rental/checkout' },
  { number: 4, label: 'Confirmation', href: '/rental/confirmation' },
]

export default function RentalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <ProgressIndicator steps={STEPS} />
          <div className="mt-12">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
