"use client"

import { Button } from "@/components/ui/button"
import { forwardRef, useState, useEffect } from "react"
import { AuthDialog } from "@/components/auth-dialog"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/i18n/language-context"

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const { t } = useLanguage()

  const getUserEmail = () => {
    if (typeof window === "undefined") return null

    const email =
      window.__USER_EMAIL__ ||
      localStorage.getItem("user_email") ||
      localStorage.getItem("__USER_EMAIL__") ||
      localStorage.getItem("user_data")?.replace(/"/g, "")

    return email
  }

  useEffect(() => {
    const email = getUserEmail()
    if (email) {
      setUserEmail(email)
      setIsLoggedIn(true)
    }
  }, [])

  const handleAuthSuccess = () => {
    const email = getUserEmail()
    if (email) {
      setUserEmail(email)
      setIsLoggedIn(true)
    }
  }

  const handleAnalyzeClick = () => {
    if (isLoggedIn && userEmail) {
      router.push("/analyze")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute inset-x-0 top-0 h-screen z-0 overflow-hidden">
        <img
          src="/trading-image.png"
          alt="Trading chart background"
          className="w-full h-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(10, 9, 12, 0.3) 60%, rgba(26, 9, 45, 0.6) 80%, rgba(10, 9, 12, 0.95) 95%, rgba(10, 9, 12, 1) 100%)",
          }}
        />
      </div>

      <main ref={ref} className="relative px-4 flex-1 flex items-center sm:px-6 lg:px-16 opacity-0">
        <div className="mx-auto max-w-7xl relative z-10 w-full">
          <div className="max-w-2xl">
            <div className="rounded-3xl sm:rounded-[2.5rem] border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 sm:p-8 shadow-[0_0_40px_rgba(95,11,232,0.3)] backdrop-blur-xl lg:p-12">
              <h2
                className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl"
                style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
              >
                {t.hero.title1}{" "}
                <span className="text-[#5F0BE8]" style={{ textShadow: "0 0 30px rgba(95, 11, 232, 0.8)" }}>
                  {t.hero.pro}
                </span>
                <br />
                {t.hero.title2}{" "}
                <span className="text-[#5F0BE8]" style={{ textShadow: "0 0 30px rgba(95, 11, 232, 0.8)" }}>
                  {t.hero.guru}
                </span>
              </h2>

              <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-gray-300 lg:text-lg">
                {t.hero.description}
              </p>

              {isLoggedIn ? (
                <Button
                  size="lg"
                  onClick={handleAnalyzeClick}
                  className="bg-gradient-to-r from-[#8b44c7] via-[#7c3aed] to-[#4f46e5] px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold text-white hover:from-[#7c3aed] hover:via-[#6d28d9] hover:to-[#4338ca] w-full sm:w-auto"
                >
                  {t.hero.analyzeButton}
                </Button>
              ) : (
                <AuthDialog
                  defaultMode="signup"
                  onAuthSuccess={handleAuthSuccess}
                  trigger={
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#8b44c7] via-[#7c3aed] to-[#4f46e5] px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold text-white hover:from-[#7c3aed] hover:via-[#6d28d9] hover:to-[#4338ca] w-full sm:w-auto"
                    >
                      {t.hero.analyzeButton}
                    </Button>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
})

HeroSection.displayName = "HeroSection"
