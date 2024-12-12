import './globals.css'
import { Roboto } from '@next/font/google';
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@/components/analytics'
import type { Metadata } from 'next'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Syed - Frontend Developer',
  description: 'Professional portfolio of Syed, showcasing Frontend design and full stack development work',
  openGraph: {
    title: 'Syed - Frontend Developer',
    description: 'Professional portfolio of Syed, showcasing Frontend design and full stack development work',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.smhtech.tech/profile2.jpg',
        width: 1200,
        height: 630,
        alt: 'Syed - Frontend Developer',
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed - Frontend Developer',
    description: 'Professional portfolio of Syed, showcasing Frontend design and full stack development work',
    images: [
      {
        url: 'https://www.smhtech.tech/profile2.jpg',
        alt: 'Syed - Frontend Developer',
      },
    ]
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
      <body className={`${roboto.className}`}>
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