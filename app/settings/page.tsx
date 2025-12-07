"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { Header } from "@/components/sections/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Globe, Clock, DollarSign, KeyRound, ChevronDown, Check, Mail } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/language-context"

const languages = [
  { value: "en", label: "English", flag: "🇺🇸", code: "US" },
  { value: "pt", label: "Português", flag: "🇧🇷", code: "BR" },
  { value: "es", label: "Español", flag: "🇪🇸", code: "ES" },
  { value: "ar", label: "العربية", flag: "🇸🇦", code: "SA" },
]

const timezones = [
  { value: "UTC-5", label: "UTC-5 (Eastern Time)" },
  { value: "UTC-8", label: "UTC-8 (Pacific Time)" },
  { value: "UTC+0", label: "UTC+0 (GMT)" },
  { value: "UTC+1", label: "UTC+1 (CET)" },
  { value: "UTC+3", label: "UTC+3 (Moscow)" },
  { value: "UTC+8", label: "UTC+8 (Singapore)" },
  { value: "UTC+9", label: "UTC+9 (Tokyo)" },
]

const currencies = [
  { value: "USD", label: "USD", symbol: "$" },
  { value: "BRL", label: "BRL", symbol: "R$" },
  { value: "EUR", label: "EUR", symbol: "€" },
  { value: "GBP", label: "GBP", symbol: "£" },
  { value: "RUB", label: "RUB", symbol: "₽" },
]

function getCurrencySymbol(currencyValue: string): React.ReactNode {
  const found = currencies.find((c) => c.value === currencyValue)
  if (found) {
    return <span className="text-purple-400">{found.symbol}</span>
  }
  return <DollarSign className="w-4 h-4" />
}

function CustomDropdown({
  value,
  onChange,
  options,
  icon,
  placeholder = "Select...",
  showCode = false,
}: {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string; flag?: string; symbol?: string; code?: string }[]
  icon?: React.ReactNode
  placeholder?: string
  showCode?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === value)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const getDropdownPosition = () => {
    if (!buttonRef.current) return { top: 0, left: 0, width: 0 }
    const rect = buttonRef.current.getBoundingClientRect()
    const dropdownHeight = Math.min(options.length * 44 + 8, 248) // estimated height
    const spaceBelow = window.innerHeight - rect.bottom
    const openUpward = spaceBelow < dropdownHeight + 20

    return {
      top: openUpward ? rect.top - dropdownHeight - 8 + window.scrollY : rect.bottom + 8 + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      openUpward,
    }
  }

  const position = getDropdownPosition()

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full h-12 bg-[#0d0b10] border border-[#5F0BE8]/30 text-white rounded-xl",
          "flex items-center gap-3 px-3 cursor-pointer transition-all duration-200",
          "hover:border-[#5F0BE8]/60 hover:bg-[#1a0f2e]/60",
          isOpen && "ring-2 ring-[#5F0BE8]/50 border-[#5F0BE8]",
        )}
      >
        <span className="text-purple-400 flex-shrink-0">{icon}</span>
        <span className="flex-1 text-left rtl:text-right truncate">
          {selectedOption ? (
            <span className="flex items-center gap-2">
              {selectedOption.flag && <span>{selectedOption.flag}</span>}
              <span>{selectedOption.label}</span>
              {showCode && selectedOption.code && <span className="text-white font-medium">{selectedOption.code}</span>}
            </span>
          ) : (
            <span className="text-white/50">{placeholder}</span>
          )}
        </span>
        <ChevronDown
          className={cn("w-4 h-4 text-white/60 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      {isOpen &&
        mounted &&
        createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
              width: position.width,
              zIndex: 99999,
            }}
            className="py-1 bg-[#1a0f2e] border border-[#5F0BE8]/40 rounded-xl shadow-xl shadow-purple-900/20 overflow-hidden animate-in fade-in-0 slide-in-from-bottom-2 duration-150"
          >
            <div className="max-h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  className={cn(
                    "w-full px-3 py-2.5 flex items-center gap-3 text-left rtl:text-right transition-colors duration-150",
                    "hover:bg-[#5F0BE8]/20",
                    value === option.value && "bg-[#5F0BE8]/30",
                  )}
                >
                  {option.flag && <span className="text-base">{option.flag}</span>}
                  {option.symbol && <span className="text-purple-400 font-medium w-6">{option.symbol}</span>}
                  <span className="flex-1 text-white">{option.label}</span>
                  {showCode && option.code && <span className="text-white font-medium">{option.code}</span>}
                  {value === option.value && <Check className="w-4 h-4 text-purple-400" />}
                </button>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}

export default function SettingsPage() {
  const { t, locale, setLocale } = useLanguage()

  const [language, setLanguage] = useState(locale)
  const [timezone, setTimezone] = useState("UTC-5")
  const [currency, setCurrency] = useState("USD")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isPasswordLoading, setIsPasswordLoading] = useState(false)
  const [currentEmail, setCurrentEmail] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [isEmailLoading, setIsEmailLoading] = useState(false)

  useEffect(() => {
    setLanguage(locale)
    const email = localStorage.getItem("USER_EMAIL") || ""
    setCurrentEmail(email)
  }, [locale])

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    setLocale(value as "en" | "es" | "pt" | "ar")
  }

  const handleCurrencyChange = async (value: string) => {
    setCurrency(value)
    try {
      await fetch("/api/settings/currency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currency: value }),
      })
    } catch (error) {
      console.error("Failed to update currency:", error)
    }
  }

  const handleSavePreferences = async () => {
    setIsLoading(true)
    try {
      await fetch("/api/settings/preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, timezone, currency }),
      })
      toast.success(t.settings.preferencesSaved, {
        description: t.settings.preferencesDesc,
      })
    } catch (error) {
      toast.error(t.common.error, {
        description: "Failed to save preferences. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpdatePassword = async () => {
    if (newPassword.length < 6) {
      toast.error(t.common.error, {
        description: t.settings.passwordTooShort,
      })
      return
    }
    if (newPassword !== confirmPassword) {
      toast.error(t.common.error, {
        description: t.settings.passwordMismatch,
      })
      return
    }
    setIsPasswordLoading(true)
    try {
      await fetch("/api/settings/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      })
      toast.success(t.settings.passwordUpdated, {
        description: t.settings.passwordDesc,
      })
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    } catch (error) {
      toast.error(t.common.error, {
        description: "Failed to update password. Please try again.",
      })
    } finally {
      setIsPasswordLoading(false)
    }
  }

  const handleUpdateEmail = async () => {
    if (!newEmail.trim()) {
      toast.error(t.common.error, {
        description: "Please enter a new email address.",
      })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      toast.error(t.common.error, {
        description: "Please enter a valid email address.",
      })
      return
    }
    setIsEmailLoading(true)
    try {
      await fetch("/api/settings/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentEmail, newEmail }),
      })
      localStorage.setItem("USER_EMAIL", newEmail)
      setCurrentEmail(newEmail)
      setNewEmail("")
      toast.success("Email updated", {
        description: "Your email has been changed successfully.",
      })
    } catch (error) {
      toast.error(t.common.error, {
        description: "Failed to update email. Please try again.",
      })
    } finally {
      setIsEmailLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
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
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Manage your account settings, preferences, and security options.
            </p>
          </div>

          {/* User Preferences Card */}
          <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">{t.settings.userPreferences}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Language */}
              <div className="space-y-2">
                <Label className="text-white/80 text-sm">{t.settings.language}</Label>
                <CustomDropdown
                  value={language}
                  onChange={handleLanguageChange}
                  options={languages}
                  icon={<Globe className="w-4 h-4" />}
                  placeholder={t.settings.selectLanguage}
                  showCode={true}
                />
              </div>

              {/* Timezone */}
              <div className="space-y-2">
                <Label className="text-white/80 text-sm">{t.settings.timezone}</Label>
                <CustomDropdown
                  value={timezone}
                  onChange={setTimezone}
                  options={timezones}
                  icon={<Clock className="w-4 h-4" />}
                  placeholder={t.settings.selectTimezone}
                />
              </div>

              {/* Display Currency */}
              <div className="space-y-2">
                <Label className="text-white/80 text-sm">{t.settings.displayCurrency}</Label>
                <CustomDropdown
                  value={currency}
                  onChange={handleCurrencyChange}
                  options={currencies}
                  icon={getCurrencySymbol(currency)}
                  placeholder={t.settings.selectCurrency}
                />
              </div>
            </div>

            <Button
              onClick={handleSavePreferences}
              disabled={isLoading}
              className="mt-6 bg-[#5F0BE8] hover:bg-[#7C3AED] text-white rounded-xl px-6 h-11"
            >
              {isLoading ? t.settings.saving : t.settings.savePreferences}
            </Button>
          </Card>

          {/* Change Email Card */}
          <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Change Email</h2>
            </div>

            <div className="max-w-md space-y-4">
              {/* Current Email */}
              <div className="space-y-2">
                <Label className="text-white/80 text-sm">Current Email</Label>
                <Input
                  type="email"
                  value={currentEmail}
                  disabled
                  className="bg-[#0d0b10] border-[#5F0BE8]/30 text-white/60 h-12 rounded-xl"
                />
              </div>

              {/* New Email */}
              <div className="space-y-2">
                <Label className="text-white/80 text-sm">New Email</Label>
                <Input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="bg-[#0d0b10] border-[#5F0BE8]/30 text-white h-12 rounded-xl placeholder:text-white/40"
                  placeholder="Enter your new email"
                />
              </div>

              <Button
                onClick={handleUpdateEmail}
                disabled={isEmailLoading || !newEmail.trim()}
                className="mt-2 bg-[#5F0BE8] hover:bg-[#7C3AED] text-white rounded-xl px-6 h-11"
              >
                {isEmailLoading ? "Updating..." : "Update Email"}
              </Button>
            </div>
          </Card>

          {/* Change Password Card */}
          <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <KeyRound className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">{t.settings.changePassword}</h2>
            </div>

            <div className="max-w-md space-y-4">
              {/* Current Password */}
              <div className="space-y-2">
                <Label className="text-white/80 text-sm">{t.settings.currentPassword}</Label>
                <Input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="bg-[#0d0b10] border-[#5F0BE8]/30 text-white h-12 rounded-xl placeholder:text-white/40"
                  placeholder={t.settings.enterCurrentPassword}
                />
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <Label className="text-white/80 text-sm">{t.settings.newPassword}</Label>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-[#0d0b10] border-[#5F0BE8]/30 text-white h-12 rounded-xl placeholder:text-white/40"
                  placeholder={t.settings.enterNewPassword}
                />
                <p className="text-white/50 text-xs">{t.settings.minChars}</p>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label className="text-white/80 text-sm">{t.settings.confirmPassword}</Label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-[#0d0b10] border-[#5F0BE8]/30 text-white h-12 rounded-xl placeholder:text-white/40"
                  placeholder={t.settings.confirmNewPassword}
                />
              </div>

              <Button
                onClick={handleUpdatePassword}
                disabled={isPasswordLoading || !currentPassword || !newPassword || !confirmPassword}
                className="mt-2 bg-[#5F0BE8] hover:bg-[#7C3AED] text-white rounded-xl px-6 h-11"
              >
                {isPasswordLoading ? t.settings.updating : t.settings.updatePassword}
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
