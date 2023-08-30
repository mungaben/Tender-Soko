import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './components/ThemesProvider'
import Themechanger from './components/ThemesChanger'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tender legit || home page',
  description: 'tender legit  check available tenders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <Providers>
          <div className="overflow-x-hidden">
            <Themechanger />
            {children}
          </div>
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  )
}
