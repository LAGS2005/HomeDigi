import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ_ITEMS = [
  {
    id: '1',
    question: 'How do I rent a locker?',
    answer:
      'Simply visit our website, select your preferred locker size, choose your rental duration, and complete the payment. You\'ll receive your access code instantly.',
  },
  {
    id: '2',
    question: 'What sizes of lockers are available?',
    answer:
      'We offer three sizes: Small ($5/day), Medium ($8/day), and Large ($12/day). Each size is designed for different storage needs.',
  },
  {
    id: '3',
    question: 'How long can I rent a locker?',
    answer:
      'You can rent a locker for 1 to 365 days. Simply select your desired duration during checkout, or renew your rental before expiration.',
  },
  {
    id: '4',
    question: 'Is my data secure?',
    answer:
      'Yes, we use bank-level encryption and 24/7 CCTV monitoring. Your personal information and access codes are protected with military-grade security.',
  },
  {
    id: '5',
    question: 'Can I access my locker 24/7?',
    answer:
      'Yes, all our lockers are accessible 24 hours a day, 7 days a week. You can access your locker anytime using your unique access code.',
  },
  {
    id: '6',
    question: 'What if I lose my access code?',
    answer:
      'Don\'t worry! You can request a new access code from your account dashboard. We\'ll verify your identity and send you a new code immediately.',
  },
  {
    id: '7',
    question: 'Can I cancel my rental?',
    answer:
      'Yes, you can cancel anytime from your dashboard. Cancellation is immediate, though refunds are subject to our refund policy.',
  },
  {
    id: '8',
    question: 'Do you offer discounts for long-term rentals?',
    answer:
      'We offer competitive pricing with daily rates. For bulk rentals or long-term contracts, please contact our support team for custom quotes.',
  },
]

export const metadata = {
  title: 'FAQ - SmartLocker',
  description: 'Frequently asked questions about SmartLocker rental service',
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our service
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {FAQ_ITEMS.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/50"
                >
                  <AccordionTrigger className="py-4 text-lg font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
