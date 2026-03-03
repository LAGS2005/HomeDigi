import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy - SmartLocker',
  description: 'SmartLocker privacy policy and data protection',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container max-w-4xl mx-auto px-4 py-20">
          <div className="prose prose-invert max-w-none dark:prose-invert">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: March 1, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                SmartLocker ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the site includes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Personal identification information (name, email address, password)</li>
                <li>Financial information (payment methods, billing address)</li>
                <li>Usage data (pages visited, time spent, interactions)</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Location data (for locker access and service improvement)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Create and manage your account</li>
                <li>Process your transactions and send related information</li>
                <li>Email you regarding your order or account</li>
                <li>Fulfill and manage purchases, orders, payments, and transactions</li>
                <li>Generate a personal profile about you</li>
                <li>Improve our website based on feedback and user behavior</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Disclosure of Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Security of Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information and data stored on our Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Email:</strong> privacy@smartlocker.com<br/>
                <strong>Mailing Address:</strong> SmartLocker Inc., 123 Tech Street, San Francisco, CA 94105
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                SmartLocker has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
