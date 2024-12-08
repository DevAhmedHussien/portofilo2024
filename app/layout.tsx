import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex - UI/UX Designer & Full Stack Developer',
  description: 'Professional portfolio of Alex, showcasing UI/UX design and full stack development work',
  openGraph: {
    title: 'Alex - UI/UX Designer & Full Stack Developer',
    description: 'Professional portfolio of Alex, showcasing UI/UX design and full stack development work',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex - UI/UX Designer & Full Stack Developer',
    description: 'Professional portfolio of Alex, showcasing UI/UX design and full stack development work',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}