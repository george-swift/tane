import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { cn } from '@/lib/utils/classnames'
import { siteMetadata } from '@/lib/utils/site-metadata'

import PrelineScriptWrapper from '@/components/preline-script-wrapper'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Preline UI',
    'PostgreSQL',
    'TypeScript',
    'Prisma',
    'Better Auth'
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-inter h-full antialiased',
          inter.variable,
          poppins.variable
        )}
      >
        {children}
      </body>
      <PrelineScriptWrapper />
    </html>
  )
}
