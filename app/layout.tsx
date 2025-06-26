import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anvaya Solution - Modern Business Solutions",
  description: "Professional business solutions with cutting-edge technology and AI automation services.",
  keywords: "business solutions, AI automation, web development, consulting",
    generator: 'Anvaya solution',
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },                      // Default favicon
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",                // iOS devices
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
