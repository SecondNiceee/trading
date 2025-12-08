import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { AppSidebar } from "@/components/app-sidebar"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { LanguageProvider } from "@/lib/i18n/language-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ForMatrix - Trade like a Pro",
  description: "AI-powered chart analysis that delivers actionable trade plans",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <AppSidebar />
          <LayoutWrapper>{children}</LayoutWrapper>
          <Toaster />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
