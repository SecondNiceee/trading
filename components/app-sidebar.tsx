"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, GraduationCap, MessageSquareText, Settings, LogOut, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/language-context"
import { useRouter } from "next/navigation"

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [expanded, setExpanded] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { t, isRTL } = useLanguage()

  const menuItems = [
    {
      title: t.sidebar.analysis,
      href: "/analyze",
      icon: BarChart3,
    },
    {
      title: t.sidebar.learning,
      href: "/learning",
      icon: GraduationCap,
    },
    {
      title: t.sidebar.tradingReview,
      href: "/trading-review",
      icon: MessageSquareText,
    },
    {
      title: t.sidebar.settings,
      href: "/settings",
      icon: Settings,
    },
  ]

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      const keysToRemove = ["AUTH_TOKEN", "USER_EMAIL", "auth_data", "user_email", "user_data"]
      keysToRemove.forEach((key) => {
        localStorage.removeItem(key)
      })
      delete window.__AUTH_TOKEN__
      delete window.__USER_EMAIL__
    }
    router.push("/")
  }

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className={cn(
          "md:hidden fixed top-4 right-4 z-[60] p-3 rounded-xl bg-[#1a0f2e] border border-[#5F0BE8]/30",
          "hover:bg-[#5F0BE8]/20 transition-colors",
        )}
      >
        {mobileOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
      </button>

      {mobileOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileOpen(false)} />}

      {/* Desktop sidebar */}
      <div
        className={cn(
          "fixed top-0 z-[10000] h-full bg-[#0d0b10] border-[#5F0BE8]/20",
          "flex-col transition-all duration-300 ease-in-out",
          "hidden md:flex",
          expanded ? "w-[220px]" : "w-[68px]",
          isRTL ? "right-0 border-l" : "left-0 border-r",
        )}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="p-4 border-b border-[#5F0BE8]/20 h-[68px] flex items-center justify-center overflow-hidden">
          <span className="text-xl font-bold text-white whitespace-nowrap">
            F<span className="text-purple-500">M</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 p-3 flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex items-center py-3 rounded-xl transition-all",
                    "hover:bg-[#5F0BE8]/20 hover:border-[#5F0BE8]/30 border border-transparent",
                    isActive && "bg-[#5F0BE8]/30 border-[#5F0BE8]/50",
                    expanded ? "px-3 justify-start gap-3" : "justify-center",
                  )}
                >
                  <Icon className={cn("h-5 w-5 flex-shrink-0", isActive ? "text-purple-400" : "text-white/70")} />
                  {expanded && (
                    <span
                      className={cn("text-sm font-medium whitespace-nowrap", isActive ? "text-white" : "text-white/70")}
                    >
                      {item.title}
                    </span>
                  )}
                </div>
              </Link>
            )
          })}
        </nav>

        <div className="p-3 border-t border-[#5F0BE8]/20">
          <button
            onClick={handleLogout}
            className={cn(
              "w-full flex items-center py-3 rounded-xl transition-all",
              "hover:bg-red-500/20 hover:border-red-500/30 border border-transparent",
              "text-red-400",
              expanded ? "px-3 justify-start gap-3" : "justify-center",
            )}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {expanded && <span className="text-sm font-medium whitespace-nowrap">{t.common.logout}</span>}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden fixed top-0 z-[10000] h-full w-[280px] bg-[#0d0b10] border-[#5F0BE8]/20",
          "flex flex-col transition-transform duration-300 ease-in-out",
          isRTL ? "right-0 border-l" : "left-0 border-r",
          mobileOpen ? "translate-x-0" : isRTL ? "translate-x-full" : "-translate-x-full",
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b border-[#5F0BE8]/20 h-[68px] flex items-center justify-center">
          <span className="text-xl font-bold text-white whitespace-nowrap">
            F<span className="text-purple-500">M</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 p-3 flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                <div
                  className={cn(
                    "flex items-center py-3 px-3 gap-3 rounded-xl transition-all",
                    "hover:bg-[#5F0BE8]/20 hover:border-[#5F0BE8]/30 border border-transparent",
                    isActive && "bg-[#5F0BE8]/30 border-[#5F0BE8]/50",
                  )}
                >
                  <Icon className={cn("h-5 w-5 flex-shrink-0", isActive ? "text-purple-400" : "text-white/70")} />
                  <span
                    className={cn("text-sm font-medium whitespace-nowrap", isActive ? "text-white" : "text-white/70")}
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Logout button */}
        <div className="p-3 border-t border-[#5F0BE8]/20">
          <button
            onClick={() => {
              handleLogout()
              setMobileOpen(false)
            }}
            className={cn(
              "w-full flex items-center py-3 px-3 gap-3 rounded-xl transition-all",
              "hover:bg-red-500/20 hover:border-red-500/30 border border-transparent",
              "text-red-400",
            )}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm font-medium whitespace-nowrap">{t.common.logout}</span>
          </button>
        </div>
      </div>
    </>
  )
}
