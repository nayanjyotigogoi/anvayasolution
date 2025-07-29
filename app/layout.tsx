import type React from "react";
import { Analytics } from "@vercel/analytics/react"; // Use 'react', not 'next' for latest
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "Anvaya Solution | Web, App & AI Development Studio Based in Assam",
  description:
    "Anvaya Solution is a modern digital studio led by a passionate founder and backed by a skilled team. We specialize in AI automation, custom web development, mobile apps, and tech solutions for startups and growing businesses across India.",
   keywords:
    "Anvaya solution, ANVAYA SOLTUION, web development Assam, AI automation India, mobile app development studio, Laravel Vue.js Flutter development, digital agency Northeast India, Anvaya Solution Dhemaji,Anvaya Solution Guwahati, tech team Guwahati, software agency for startups",
  generator: "Anvaya solution",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>

        {/* added Vercel Analytics which is Required for tracking */}
        <Analytics />
      </body>
    </html>
  );
}
