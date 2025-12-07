"use client"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export const PowerfullSection = () => {
  const { t } = useLanguage()

  return (
    <section className="relative mx-auto mt-16 sm:mt-24 max-w-7xl px-[20px] sm:px-[20px] lg:px-[20px] lg:mt-32">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <Image
          src="/images/design-mode/image%2010.png"
          alt="Chart background"
          fill
          className="object-cover opacity-35"
        />
      </div>

      <div className="text-center">
        <h2 className="mb-2 text-3xl sm:text-4xl font-bold text-white lg:text-5xl">{t.features.title}</h2>
        <div className="mx-auto mb-4 h-1 w-64 sm:w-80 bg-gradient-to-r from-[#6D1D7D] via-[#5F0BE8] to-[#6D1D7D]" />
        <p className="mb-12 sm:mb-16 text-base sm:text-lg text-gray-300">{t.features.subtitle}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* AI Trade Analysis */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7f38f3]/20 to-[#5F0BE8]/10 p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-500/0 to-purple-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

          <div className="relative z-10 flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D1D7D] to-[#5F0BE8] shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img src="/icons/flash.svg" alt="AI Trade Analysis" className="h-10 w-10" />
            </div>

            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">{t.features.aiTrade}</h3>
              <div className="mb-4 h-1 w-full rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8]" />
              <p className="text-base leading-relaxed text-gray-300 lg:text-lg">{t.features.aiTradeDesc}</p>
            </div>
          </div>
        </div>

        {/* Scalp Trading */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7f38f3]/20 to-[#5F0BE8]/10 p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-500/0 to-purple-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

          <div className="relative z-10 flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D1D7D] to-[#5F0BE8] shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img src="/icons/pulse.svg" alt="Scalp Trading" className="h-10 w-10" />
            </div>

            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">{t.features.scalp}</h3>
              <div className="mb-4 h-1 w-full rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8]" />
              <p className="text-base leading-relaxed text-gray-300 lg:text-lg">{t.features.scalpDesc}</p>
            </div>
          </div>
        </div>

        {/* Risk Management */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7f38f3]/20 to-[#5F0BE8]/10 p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-500/0 to-purple-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

          <div className="relative z-10 flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D1D7D] to-[#5F0BE8] shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img src="/icons/shield.svg" alt="Risk Management" className="h-10 w-10" />
            </div>

            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">{t.features.risk}</h3>
              <div className="mb-4 h-1 w-full rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8]" />
              <p className="text-base leading-relaxed text-gray-300 lg:text-lg">{t.features.riskDesc}</p>
            </div>
          </div>
        </div>

        {/* Swing Trading */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7f38f3]/20 to-[#5F0BE8]/10 p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-500/0 to-purple-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

          <div className="relative z-10 flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D1D7D] to-[#5F0BE8] shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img src="/icons/graph-arrow.svg" alt="Swing Trading" className="h-9 w-9" />
            </div>

            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">{t.features.swing}</h3>
              <div className="mb-4 h-1 w-full rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8]" />
              <p className="text-base leading-relaxed text-gray-300 lg:text-lg">{t.features.swingDesc}</p>
            </div>
          </div>
        </div>

        {/* Price Action Analysis - full width on large screens */}
        <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7f38f3]/20 to-[#5F0BE8]/10 p-8 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-500/0 to-purple-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

          <div className="relative z-10 flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D1D7D] to-[#5F0BE8] shadow-lg shadow-purple-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <img src="/icons/graph-bars.svg" alt="Price Action Analysis" className="h-11 w-11" />
            </div>

            <div className="flex-1">
              <h3 className="mb-3 text-2xl font-bold text-white lg:text-3xl">{t.features.priceAction}</h3>
              <div className="mb-4 h-1 w-full rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8]" />
              <p className="text-base leading-relaxed text-gray-300 lg:text-lg">{t.features.priceActionDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
