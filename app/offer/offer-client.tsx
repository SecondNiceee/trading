"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, BarChart3, LinkIcon } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/sections/header"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"

export default function OfferPageClient() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient matching the main site */}
      <div className="absolute inset-0 bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]" />

      {/* Background chart images */}
      <div className="absolute inset-0 opacity-30">
        <Image src="/chart-bg-1.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 opacity-20">
        <Image src="/chart-bg-2.png" alt="" fill className="object-cover mix-blend-screen" />
      </div>

      <Header />

      {/* Main content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left side - Chart and Special Offer */}
            <div className="space-y-6">
              {/* Chart visualization card */}
              <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-0 relative overflow-hidden rounded-3xl sm:rounded-[2.5rem]">
                <Badge className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-purple-600 hover:bg-purple-700 text-white border-0 z-10">
                  87% {t.offer.confidence}
                </Badge>

                <div className="h-64 relative">
                  <Image src="/chart-bg-1.png" alt="Trading chart" fill className="object-cover opacity-80" />
                </div>
              </Card>

              {/* Special Offer heading */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">{t.offer.specialOffer}</h2>
                <div className="h-1 w-48 bg-gradient-to-r from-purple-600 to-transparent rounded-full" />
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center items-center pt-4">
                <Link href="/analyze" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] hover:text-white px-10 py-7 text-xl rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] min-w-[280px]"
                  >
                    <BarChart3 className="w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t.offer.startAnalysis}
                  </Button>
                </Link>

                <Link href="/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] hover:text-white border-0 px-10 py-7 text-xl rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] min-w-[280px]"
                  >
                    <LinkIcon className="w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t.offer.linkBroker}
                  </Button>
                </Link>
              </div>

              {/* Free analyses card */}
              <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-8 relative overflow-hidden rounded-3xl sm:rounded-[2.5rem]">
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t.offer.startWith3}</h3>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {t.offer.freeAnalyses}
                  </span>{" "}
                  <span className="text-white">{t.offer.analyses}</span>
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">{t.offer.freeTrialDesc}</p>
              </Card>
            </div>

            {/* Right side - Trade Smarter and Unlock Access */}
            <div className="space-y-8">
              {/* Trade Smarter section */}
              <div className="text-center lg:text-right rtl:lg:text-left space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {t.offer.tradeSmarter}{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {t.offer.smarter}
                  </span>
                  <br />
                  {t.offer.notHarder}{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {t.offer.harder}
                  </span>
                </h1>

                <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:ml-auto rtl:lg:mr-auto rtl:lg:ml-0">
                  {t.offer.description}
                </p>
              </div>

              {/* Unlock Full Access section */}
              <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem]">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">{t.offer.unlockAccess}</h3>

                <p className="text-white/70 mb-6">{t.offer.afterFree}</p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {t.offer.step1} <span className="text-purple-400 font-semibold">{t.offer.partneredBrokers}</span>{" "}
                      {t.offer.step1End}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {t.offer.step2} <span className="text-purple-400 font-semibold">{t.offer.minDeposit}</span>{" "}
                      {t.offer.of50} <span className="text-purple-400 font-semibold">$50</span> {t.offer.step2End}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
