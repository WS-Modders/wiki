import { Footer } from '@/shared/ui/footer';
import { Toolbar } from '@/shared/ui/toolbar';
import { Sidebar } from '@/shared/ui/sidebar';

import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "./styles/global.css";
import "prismjs/themes/prism-okaidia.min.css"; // theme for code appeareance

export const metadata: Metadata = {
  title: `War Selection Wiki`,
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Toolbar /> <Sidebar />
        <div className="body">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}