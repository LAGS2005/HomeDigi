import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Terms of Service - SmartLocker',
  description: 'SmartLocker terms of service and conditions',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container max-w-4xl mx-auto px-4 py-20">
          <div className="prose prose-invert max-w-none dark:prose-invert">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: March 1, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using SmartLocker services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Use License
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on SmartLocker for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the site</li>
                <li>Transferring the materials to another person or "mirroring" the materials</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on SmartLocker's web site are provided as-is. SmartLocker makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Limitations
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall SmartLocker or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on SmartLocker's internet site, even if SmartLocker or a SmartLocker authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on SmartLocker's web site could include technical, typographical, or photographic errors. SmartLocker does not warrant that any of the materials on its Internet web site are accurate, complete, or current. SmartLocker may make changes to the materials contained on its web site at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Limitations on Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on SmartLocker's web site could include technical, typographical, or photographic errors. SmartLocker does not warrant that any of the materials on its Internet web site are accurate, complete, or current. SmartLocker may make changes to the materials contained on its web site at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Modifications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                SmartLocker may revise these terms of service for its web site at any time without notice. By using this web site, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@smartlocker.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
