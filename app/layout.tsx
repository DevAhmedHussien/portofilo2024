import './globals.css';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import type { Metadata } from 'next';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ahmed - Frontend Developer',
  description: 'Professional portfolio of Ahmed, showcasing frontend design and full-stack development work',
  openGraph: {
    title: 'Ahmed - Frontend Developer',
    description: 'Professional portfolio of Ahmed, showcasing frontend design and full-stack development work',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.smhtech.tech/ahmed.png',
        width: 1200,
        height: 630,
        alt: 'Ahmed - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed - Frontend Developer',
    description: 'Professional portfolio of Ahmed, showcasing frontend design and full-stack development work',
    images: [
      {
        url: 'https://www.smhtech.tech/ahmed.png',
        alt: 'Ahmed - Frontend Developer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
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
  );
}
