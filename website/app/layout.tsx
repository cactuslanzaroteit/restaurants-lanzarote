import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MobileNav } from '@/components/mobile-nav'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Restaurants in Lanzarote | Curated Dining Guide',
  description: 'Premium curated dining guide for Lanzarote, Canary Islands.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-orange-500">
                    <span className="text-white font-bold">L</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                      Lanzarote
                    </span>
                    <span className="text-sm text-gray-600 font-medium">
                      Curated Dining
                    </span>
                  </div>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                  <a href="/restaurants" className="text-gray-700 hover:text-blue-600 font-medium">Restaurants</a>
                  <a href="/locations" className="text-gray-700 hover:text-blue-600 font-medium">Locations</a>
                  <a href="/guides" className="text-gray-700 hover:text-blue-600 font-medium">Guides</a>
                  <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                    Map View
                  </button>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <footer className="border-t bg-white">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center text-gray-600">
                <p>© {new Date().getFullYear()} Restaurants in Lanzarote</p>
                <p className="text-sm mt-2">Premium curated dining guide</p>
              </div>
            </div>
          </footer>
          <MobileNav />
        </div>
      </body>
    </html>
  )
}