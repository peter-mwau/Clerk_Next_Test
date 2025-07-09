import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Clerk Next.js Web3 Demo',
  description: 'Modern web3 authentication with Clerk and Next.js',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen`}>
          {/* Floating Web3 Header */}
          <header className="fixed top-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl z-50 mb-10">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-xl border border-white/20 py-4 px-6">
              <div className="flex items-center justify-between">
                {/* Brand/Logo Area */}
                <div className="flex items-center">
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-2xl font-bold">
                    Clerk_Auth
                  </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link href="/" className="text-gray-500/90 hover:text-gray-500 transition-colors duration-200 font-medium">
                    Home
                  </Link>
                  <Link href="/pricing" className="text-gray-500/90 hover:text-gray-500 transition-colors duration-200 font-medium">
                    Pricing
                  </Link>
                  <Link href="/about" className="text-gray-500/90 hover:text-gray-500 transition-colors duration-200 font-medium">
                    About
                  </Link>
                </div>

                {/* Auth Actions */}
                <div className="flex items-center gap-4">
                  <SignedOut>
                    <SignInButton>
                      <button className="text-gray-500/90 hover:text-gray-500 transition-colors duration-200 font-medium">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton>
                      <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full py-2 px-5 text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
                        Sign Up
                      </button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton
                      appearance={{
                        elements: {
                          userButtonAvatarBox: "border-2 border-indigo-400"
                        }
                      }}
                    />
                  </SignedIn>
                </div>
              </div>
            </div>
          </header>

          {/* Add padding to account for fixed header */}
          <div className="pt-2">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}