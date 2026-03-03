import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AuthForm } from '@/components/auth/auth-form'

export const metadata = {
  title: 'Sign In - SmartLocker',
  description: 'Sign in to your SmartLocker account',
}

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4">
        <div className="w-full">
          <AuthForm mode="login" />
          <div className="mt-4 text-center">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
