import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from "@/app/components/navbar/navbar";
import WithTheme from "@/theme/index";

import StyledComponentsRegistry from '../app/lib/AntdRegistry';

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rise Real Estate App',
  description: 'Real Estate App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
    <html lang="en">
      <body className={font.className}>
      <StyledComponentsRegistry>
          <WithTheme>
              <Navbar />
              {children}
          </WithTheme>
      </StyledComponentsRegistry>
      </body>
    </html>
  )
}
