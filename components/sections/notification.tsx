"use client"

import { AlertCircle, CheckCircle2, X } from "lucide-react"
import { useEffect, useState } from "react"

interface NotificationProps {
  status: "ok" | "off" | null
  message?: string
  onClose: () => void
}

export function Notification({ status, message: customMessage, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (status) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onClose, 300)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [status, onClose])

  if (!status) return null

  const isSuccess = status === "ok"
  const message = customMessage || (isSuccess
    ? "Your account ID has been successfully registered!"
    : "An error occurred. Please try again.")

  return (
    <div
      className={`fixed top-4 right-4 max-w-md transition-all duration-300 transform z-[9999] pointer-events-auto ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`flex items-start gap-4 px-6 py-4 rounded-2xl backdrop-blur-xl border-2 shadow-2xl ${
          isSuccess
            ? "bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-green-500/40"
            : "bg-gradient-to-br from-red-500/10 to-orange-500/5 border-red-500/40"
        }`}
      >
        <div className="flex-shrink-0 mt-0.5">
          {isSuccess ? (
            <CheckCircle2 className="w-6 h-6 text-green-400" />
          ) : (
            <AlertCircle className="w-6 h-6 text-red-400" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-base ${isSuccess ? "text-green-100" : "text-red-100"}`}>
            {isSuccess ? "Success" : "Error"}
          </h3>
          <p className={`text-sm mt-1 ${isSuccess ? "text-green-100/80" : "text-red-100/80"}`}>
            {message}
          </p>
        </div>

        <button
          onClick={() => {
            setIsVisible(false)
            setTimeout(onClose, 300)
          }}
          className={`flex-shrink-0 p-1 rounded-lg transition-colors ${
            isSuccess ? "hover:bg-green-500/20 text-green-300" : "hover:bg-red-500/20 text-red-300"
          }`}
          aria-label="Close notification"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
