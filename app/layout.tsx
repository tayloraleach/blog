import type { Viewport } from 'next';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';

import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const title = 'taylorleach blog';
const description =
  'A Next.js markdown blog for developers using the new App Router.';
export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    'Web Development',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
  ],
  authors: [
    {
      name: 'taylorleach',
      url: 'https://github.com/tayloraleach',
    },
  ],
  creator: 'tayloraleach',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title,
    description,
    siteName: title,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-2xl px-4 pb-10 pt-6">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
