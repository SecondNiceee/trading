"use client"

import type React from "react"

import { AuthDialog } from "@/components/auth-dialog"
import { UserAvatar } from "@/components/ui/user-avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { LogOut, ChevronDown, Menu } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useLanguage } from "@/lib/i18n/language-context"
import { cn } from "@/lib/utils"
import { useSidebar, SidebarContext } from "@/components/ui/sidebar"
import { useContext } from "react"

function MobileSidebarTrigger() {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      onClick={toggleSidebar}
      className="md:hidden p-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 text-white transition-colors"
    >
      <Menu className="h-5 w-5" />
    </button>
  )
}

const languages = [
  { value: "en", code: "US", name: "English", flag: "🇺🇸" },
  { value: "pt", code: "BR", name: "Português", flag: "🇧🇷" },
  { value: "es", code: "ES", name: "Español", flag: "🇪🇸" },
  { value: "ar", code: "SA", name: "العربية", flag: "🇸🇦" },
]

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const [redirectPath, setRedirectPath] = useState("/offer")
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const langDropdownRef = useRef<HTMLDivElement>(null)
  const { t, locale, setLocale } = useLanguage()

  const sidebarContext = useContext(SidebarContext)
  const hasSidebar = sidebarContext !== null

  useEffect(() => {
    const status = localStorage.getItem("user_status")
    setRedirectPath(status === "verify" ? "/analyze" : "/offer")
  }, [])

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("AUTH_TOKEN") : null
      const email = typeof window !== "undefined" ? localStorage.getItem("USER_EMAIL") : null

      if (token && email) {
        setIsLoggedIn(true)
        setUserEmail(email)
        window.__AUTH_TOKEN__ = token
        window.__USER_EMAIL__ = email
      } else {
        setIsLoggedIn(false)
        setUserEmail("")
      }
    }

    checkAuthStatus()

    window.addEventListener("storage", checkAuthStatus)
    return () => window.removeEventListener("storage", checkAuthStatus)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    console.log("Header handleLogout called")

    if (typeof window !== "undefined") {
      const keysToRemove = ["AUTH_TOKEN", "USER_EMAIL", "auth_data", "user_email", "user_data"]
      keysToRemove.forEach((key) => {
        localStorage.removeItem(key)
      })

      delete window.__AUTH_TOKEN__
      delete window.__USER_EMAIL__

      console.log("After cleanup:", {
        AUTH_TOKEN: localStorage.getItem("AUTH_TOKEN"),
        USER_EMAIL: localStorage.getItem("USER_EMAIL"),
        auth_data: localStorage.getItem("auth_data"),
        user_email: localStorage.getItem("user_email"),
      })
    }
    setIsLoggedIn(false)
    setUserEmail("")
    router.push("/")
  }

  const handleAuthSuccess = () => {
    const email = typeof window !== "undefined" ? localStorage.getItem("__USER_EMAIL__") : null
    if (email) {
      setUserEmail(email)
      setIsLoggedIn(true)
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault()
      setAuthDialogOpen(true)
    }
  }

  const LanguageSelector = () => {
    const currentLang = languages.find((l) => l.value === locale) || languages[0]

    return (
      <div className="relative mr-14 md:mr-0" ref={langDropdownRef}>
        <button
          onClick={() => setLangDropdownOpen(!langDropdownOpen)}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-6 h-[42px] lg:h-[40px] rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors sm:h-10"
        >
          <span className="text-sm sm:text-base text-white/90 font-medium">{currentLang.code}</span>
          <ChevronDown
            className={cn("h-3.5 w-3.5 text-white/60 transition-transform", langDropdownOpen && "rotate-180")}
          />
        </button>

        {langDropdownOpen && (
          <div className="absolute top-full right-0 rtl:right-auto rtl:left-0 mt-2 py-1 bg-[#1a0f2e] border border-[#5F0BE8]/40 rounded-xl shadow-xl shadow-purple-900/20 overflow-hidden z-50 min-w-[160px]">
            {languages.map((lang) => (
              <button
                key={lang.value}
                onClick={() => {
                  setLocale(lang.value as "en" | "es" | "pt" | "ar")
                  setLangDropdownOpen(false)
                }}
                className={cn(
                  "w-full px-3 py-2.5 flex items-center gap-3 transition-colors",
                  "hover:bg-[#5F0BE8]/20",
                  locale === lang.value && "bg-[#5F0BE8]/30",
                )}
              >
                <span className="text-sm text-white/90 flex-1 text-left">{lang.name}</span>
                <span className="text-xs text-white/50 font-medium">{lang.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <header className="relative z-10 px-4 py-4 sm:px-6 sm:py-5 lg:px-16 lg:py-6">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link
          href={redirectPath}
          onClick={handleLogoClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src="/logo.svg" alt="FoMatrix Logo" className="h-8 w-auto sm:h-10 lg:h-12" />
          <span className="font-logo text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Fo
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">Matrix</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          {isLoggedIn ? (
            <>
              <LanguageSelector />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <UserAvatar email={userEmail} size="sm" />
                <span className="hidden sm:inline text-sm text-white/80 truncate max-w-[150px]">{userEmail}</span>
              </div>
              <button
                onClick={handleLogout}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                title={t.common.logout}
              >
                <LogOut className="h-5 w-5" />
              </button>
            </>
          ) : (
            <>
              <LanguageSelector />
              {hasSidebar && <MobileSidebarTrigger />}
              <AuthDialog
                open={authDialogOpen}
                onOpenChange={setAuthDialogOpen}
                defaultMode="signup"
                onAuthSuccess={handleAuthSuccess}
              />

              {/* Desktop buttons */}
              <AuthDialog
                defaultMode="login"
                onAuthSuccess={handleAuthSuccess}
                trigger={
                  <Button
                    variant="ghost"
                    className="hidden md:flex text-sm sm:text-base text-white hover:bg-white/10 hover:text-white bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-full"
                  >
                    {t.common.login}
                  </Button>
                }
              />
              <AuthDialog
                defaultMode="signup"
                onAuthSuccess={handleAuthSuccess}
                trigger={
                  <Button className="hidden md:flex bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-sm sm:text-base text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                    {t.common.signup}
                  </Button>
                }
              />
            </>
          )}
        </div>
      </div>
    </header>
  )
}
