import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from "@/app/components/navbar/navbar";

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rise Real Estate App',
  description: 'Real Estate App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
