"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { translations, type Locale, type TranslationKeys } from "./translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    // Load saved language from localStorage
    const savedLocale = localStorage.getItem("app_language") as Locale | null
    if (savedLocale && translations[savedLocale]) {
      setLocaleState(savedLocale)
      setIsRTL(savedLocale === "ar")
    }
  }, [])

  useEffect(() => {
    // Update HTML dir attribute for RTL support
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = locale
  }, [isRTL, locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setIsRTL(newLocale === "ar")
    localStorage.setItem("app_language", newLocale)
  }

  const t = translations[locale]

  return <LanguageContext.Provider value={{ locale, setLocale, t, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
