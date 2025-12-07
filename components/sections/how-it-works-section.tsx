"use client"

import { forwardRef } from "react"
import { useLanguage } from "@/lib/i18n/language-context"

export const HowItWorksSection = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage()

  return (
    <section
      ref={ref}
      className="relative -mt-[96px] px-6 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-24 opacity-0"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #1a0f2e 40%, #1a0f2e 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mb-2 text-3xl sm:text-4xl font-bold text-white lg:text-5xl">{t.howItWorks.title}</h2>
          <div className="mx-auto mb-4 h-1 w-48 sm:w-64 bg-gradient-to-r from-[#6D1D7D] via-[#5F0BE8] to-[#6D1D7D]" />
          <p className="mb-32 sm:mb-36 lg:mb-40 text-base sm:text-lg text-gray-300">{t.howItWorks.subtitle}</p>
        </div>

        <div className="grid gap-20 sm:gap-8 md:grid-cols-3 lg:gap-10">
          {/* Card 1: Upload Chart */}
          <div className="how-it-works-card opacity-0 relative w-full max-w-[450px] mx-auto h-full">
            <div className="relative pt-16 pb-8 px-6 rounded-3xl sm:rounded-[2.5rem] border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] h-full flex flex-col">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#600ddb]/20 backdrop-blur-[7.58px] shadow-[inset_2.15px_2px_9.24px_0_rgba(255,255,255,0.13),inset_1.22px_1.13px_4.62px_0_rgba(255,255,255,0.13),-1.86px_-1.73px_12px_rgba(0,0,0,0.15),-11.15px_-10.39px_48px_rgba(0,0,0,0.15),0_0_60px_rgba(95,11,232,0.8),0_0_100px_rgba(95,11,232,0.5)] border border-white/35 flex items-center justify-center">
                <img src="/icons/upload.svg" alt="Upload" className="w-[66px] h-[75px]" />
              </div>
              <h2
                className="text-white text-center text-3xl sm:text-[40px] font-normal leading-normal mb-2 tracking-tight mt-4"
                style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(127, 56, 243, 0.3)" }}
              >
                {t.howItWorks.step1Title}
              </h2>
              <p
                className="text-white/60 text-center text-xl sm:text-2xl font-normal leading-normal flex-grow"
                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(127, 56, 243, 0.2)" }}
              >
                {t.howItWorks.step1Desc}
              </p>
            </div>
          </div>

          {/* Card 2: AI Analysis */}
          <div className="how-it-works-card opacity-0 relative w-full max-w-[450px] mx-auto h-full">
            <div className="relative pt-16 pb-8 px-6 rounded-3xl sm:rounded-[2.5rem] border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] h-full flex flex-col">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#600ddb]/20 backdrop-blur-[7.58px] shadow-[inset_2.15px_2px_9.24px_0_rgba(255,255,255,0.13),inset_1.22px_1.13px_4.62px_0_rgba(255,255,255,0.13),-1.86px_-1.73px_12px_rgba(0,0,0,0.15),-11.15px_-10.39px_48px_rgba(0,0,0,0.15),0_0_60px_rgba(95,11,232,0.8),0_0_100px_rgba(95,11,232,0.5)] border border-white/35 flex items-center justify-center">
                <img src="/icons/brain.svg" alt="AI Analysis" className="w-[66px] h-[75px]" />
              </div>
              <h2
                className="text-white text-center text-3xl sm:text-[40px] font-normal leading-normal mb-2 tracking-tight mt-4"
                style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(127, 56, 243, 0.3)" }}
              >
                {t.howItWorks.step2Title}
              </h2>
              <p
                className="text-white/60 text-center text-xl sm:text-2xl font-normal leading-normal flex-grow"
                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(127, 56, 243, 0.2)" }}
              >
                {t.howItWorks.step2Desc}
              </p>
            </div>
          </div>

          {/* Card 3: Trade Plan */}
          <div className="how-it-works-card opacity-0 relative w-full max-w-[450px] mx-auto h-full">
            <div className="relative pt-16 pb-8 px-6 rounded-3xl sm:rounded-[2.5rem] border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] h-full flex flex-col">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#600ddb]/20 backdrop-blur-[7.58px] shadow-[inset_2.15px_2px_9.24px_0_rgba(255,255,255,0.13),inset_1.22px_1.13px_4.62px_0_rgba(255,255,255,0.13),-1.86px_-1.73px_12px_rgba(0,0,0,0.15),-11.15px_-10.39px_48px_rgba(0,0,0,0.15),0_0_60px_rgba(95,11,232,0.8),0_0_100px_rgba(95,11,232,0.5)] border border-white/35 flex items-center justify-center">
                <img src="/icons/spiral.svg" alt="Trade Plan" className="w-[66px] h-[75px]" />
              </div>
              <h2
                className="text-white text-center text-3xl sm:text-[40px] font-normal leading-normal mb-2 tracking-tight mt-4"
                style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(127, 56, 243, 0.3)" }}
              >
                {t.howItWorks.step3Title}
              </h2>
              <p
                className="text-white/60 text-center text-xl sm:text-2xl font-normal leading-normal flex-grow"
                style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(127, 56, 243, 0.2)" }}
              >
                {t.howItWorks.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

HowItWorksSection.displayName = "HowItWorksSection"
