"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/sections/header"
import StepCard from "@/components/sections/step-card"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Notification } from "@/components/sections/notification"
import { useLanguage } from "@/lib/i18n/language-context"

type Platform = "quotex" | "pocketoption"
type NotificationStatus = "ok" | "off" | null

interface Step {
  number: number
  textKey: "step1" | "step2" | "step3"
}

const getEmail = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("user_email")
  }
  return null
}

const getToken = (): string | null => {
  if (typeof window !== "undefined" && (window as any).__AUTH_TOKEN__) {
    return (window as any).__AUTH_TOKEN__
  }

  if (typeof window !== "undefined") {
    const token =
      localStorage.getItem("auth_token") || localStorage.getItem("token") || localStorage.getItem("access_token")
    return token
  }

  return null
}

const platformData: Record<Platform, { label: string; link: string; steps: Step[] }> = {
  quotex: {
    label: "Quotex",
    link: "https://broker-qx.pro/sign-up/fast/?lid=1615623",
    steps: [
      { number: 1, textKey: "step1" },
      { number: 2, textKey: "step2" },
      { number: 3, textKey: "step3" },
    ],
  },
  pocketoption: {
    label: "PocketOption",
    link: "https://u3.shortink.io/register?utm_campaign=68145&utm_source=affiliate&utm_medium=sr&a=2Inkznt7OEo4r3&ac=fo&code=WELCOME50",
    steps: [
      { number: 1, textKey: "step1" },
      { number: 2, textKey: "step2" },
      { number: 3, textKey: "step3" },
    ],
  },
}

export default function RegisterPage() {
  const router = useRouter()
  const [activePlatform, setActivePlatform] = useState<Platform>("quotex")
  const [accountId, setAccountId] = useState("")
  const [focusedInput, setFocusedInput] = useState(false)
  const [notificationStatus, setNotificationStatus] = useState<NotificationStatus>(null)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [idError, setIdError] = useState("")
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE
  const { t } = useLanguage()

  const handlePlatformChange = (platform: Platform) => {
    setActivePlatform(platform)
  }

  const currentData = platformData[activePlatform]

  const handleRegisterId = async () => {
    if (!accountId.trim()) {
      setIdError(t.register.enterId)
      return
    }

    try {
      const token = getToken()
      const res = await fetch(`${API_BASE}/register-id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: accountId.trim(),
          email: getEmail(),
        }),
      })

      if (res.status === 429) {
        setIdError("429")
        setNotificationStatus("off")
        setNotificationMessage(t.register.tooManyRequests)
        return
      }

      if (!res.ok) {
        const err = await res.json()
        const errorMessage = err.detail || err.message || "Server error"
        setNotificationStatus("off")
        setNotificationMessage(errorMessage)
        throw new Error(errorMessage)
      }

      const data = await res.json()

      if (data.answer === "ok") {
        setNotificationStatus("ok")
        setNotificationMessage(data.detail || t.register.registrationSuccess)
        setAccountId("")
        setIdError("")

        if (data.status) {
          localStorage.setItem("user_status", data.status)
        }

        setTimeout(() => {
          router.push("/analyze")
        }, 1000)
      } else if (data.answer === "off") {
        setNotificationStatus("off")
        setNotificationMessage(data.detail || t.register.registrationFailed)
        setIdError(t.register.registrationFailed)
      }
    } catch (e: any) {
      setNotificationStatus("off")
      setNotificationMessage(e.message || "Failed to register ID")
      setIdError(e.message || "Failed to register ID")
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-96 h-96 bg-gradient-to-br from-[#5F0BE8]/20 to-[#6D1D7D]/10 rounded-full blur-3xl -mr-48 rtl:mr-0 rtl:-ml-48 -mt-48 animate-pulse" />
      <div
        className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-80 h-80 bg-gradient-to-tr from-[#6D1D7D]/20 to-[#5F0BE8]/10 rounded-full blur-3xl -ml-40 rtl:ml-0 rtl:-mr-40 -mb-40 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Background images with reduced opacity */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/chart-bg-1.png" alt="" fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 opacity-10">
        <Image src="/chart-bg-2.png" alt="" fill className="object-cover mix-blend-screen" />
      </div>

      <Header />

      <Notification
        status={notificationStatus}
        message={notificationMessage}
        onClose={() => {
          setNotificationStatus(null)
          setNotificationMessage("")
        }}
      />

      {/* Main content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}

          <div className="mb-12 lg:mb-14 flex justify-center">
            <div className="inline-flex gap-2 p-2 rounded-2xl bg-gradient-to-br from-[#6D1D7D]/20 to-[#5F0BE8]/20 border border-[#5F0BE8]/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(95,11,232,0.2)]">
              {(["quotex", "pocketoption"] as const).map((platform) => (
                <button
                  key={platform}
                  onClick={() => handlePlatformChange(platform)}
                  className={`relative px-8 py-3 lg:py-5 rounded-xl font-bold text-base transition-all duration-300 overflow-hidden group ${
                    activePlatform === platform ? "text-white" : "text-white/60 hover:text-white/80"
                  }`}
                >
                  {activePlatform === platform && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] rounded-xl -z-10 animate-pulse" />
                  )}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 -z-10 ${activePlatform === platform ? "bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] shadow-[0_0_20px_rgba(95,11,232,0.6)]" : ""}`}
                  />
                  <span className="relative z-10">{platform === "quotex" ? "Quotex" : "PocketOption"}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] mb-10 lg:mb-14 perspective">
            <div className="absolute inset-0 w-full h-full">
              {(["quotex", "pocketoption"] as const).map((platform, index) => {
                const isActive = activePlatform === platform
                const isFront = isActive
                const xOffset = index === 0 ? -100 : 100

                return (
                  <div
                    key={`carousel-${platform}`}
                    className={`absolute top-0 border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-8 sm:p-10 lg:p-12 rounded-3xl overflow-hidden transition-all duration-500 w-full h-full ${
                      isFront ? "z-20" : "z-10 pointer-events-none"
                    }`}
                    style={{
                      transform: `translateX(${isActive ? 0 : isActive ? 0 : xOffset}%) ${!isFront ? "scale(0.9)" : "scale(1)"}`,
                      opacity: isFront ? 1 : 0,
                      transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6D1D7D]/5 to-[#5F0BE8]/5 rounded-3xl" />
                    <div className="relative h-full flex flex-col">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {t.register.brokerAccess}{" "}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9D5FFF] to-[#5F0BE8]">
                            {t.register.accessRequirements}
                          </span>{" "}
                          {t.register.requirements}
                        </h2>
                        <div className="h-1 w-40 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] rounded-full mb-6" />
                      </div>
                      <div className="space-y-2 flex-1">
                        {platformData[platform].steps.map((step) => (
                          <div key={step.number}>
                            <StepCard number={step.number} text={t.register[step.textKey]} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Registration Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex justify-center">
              <a href={currentData.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                <button
                  className="registration-button group relative flex items-center justify-between overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(95,11,232,0.8)] active:scale-95 rounded-full"
                  style={{ height: "fit-content" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] rounded-full" />
                  <div className="absolute inset-0 rounded-full border border-white/40 group-hover:border-white/60 transition-colors" />

                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-pulse" />

                  <span className="registration-text relative z-10 flex-1 text-center text-lg sm:text-xl font-bold text-white px-10 sm:px-16 py-4 sm:py-5">
                    {t.register.registration}
                  </span>

                  <div className="icon-circle relative z-10 flex items-center justify-center rounded-full bg-white w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all">
                    <Image src="/icons/key.svg" alt="Key" width={32} height={32} className="w-8 h-8 sm:w-9 sm:h-9" />
                  </div>
                </button>
              </a>
            </div>

            <p className="text-center text-white/70 text-base font-medium">{t.register.alreadyHaveAccount}</p>

            <div className="flex gap-3 max-w-sm mx-auto">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={t.register.enterAccountId}
                  value={accountId}
                  onChange={(e) => setAccountId(e.target.value)}
                  onFocus={() => setFocusedInput(true)}
                  onBlur={() => setFocusedInput(false)}
                  className={`w-full px-7 py-4 rounded-full bg-gradient-to-br from-[#1a0f2e]/80 to-[#2d1b4e]/60 border-2 text-white placeholder-white/40 focus:outline-none transition-all duration-300 font-medium text-base ${
                    focusedInput
                      ? "border-[#5F0BE8] shadow-[0_0_30px_rgba(95,11,232,0.3)] bg-[#1a0f2e]"
                      : "border-[#5F0BE8]/40 hover:border-[#5F0BE8]/60"
                  }`}
                />
              </div>
              <button
                onClick={handleRegisterId}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] text-white hover:shadow-[0_0_40px_rgba(95,11,232,0.6)] active:scale-95 flex items-center justify-center transition-all font-bold shadow-[0_0_20px_rgba(95,11,232,0.4)] hover:from-[#7D2D8D] hover:to-[#6F1BF8]"
                aria-label="Submit account ID"
              >
                <ArrowRight className="w-6 h-6 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  )
}
