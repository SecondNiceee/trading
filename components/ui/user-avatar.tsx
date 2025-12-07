"use client"

import { useEffect, useState } from "react"

interface UserAvatarProps {
  email?: string
  size?: "sm" | "md" | "lg"
}

export function UserAvatar({ email, size = "md" }: UserAvatarProps) {
  const [initials, setInitials] = useState("")

  useEffect(() => {
    // Get email from prop or window object
    const userEmail = email || (typeof window !== "undefined" ? window.__USER_EMAIL__ : undefined)

    if (userEmail) {
      // Extract first letter of email
      const firstLetter = userEmail.charAt(0).toUpperCase()
      setInitials(firstLetter)
    }
  }, [email])

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D1D7D] flex items-center justify-center text-white font-semibold shadow-lg`}
      title={email}
    >
      {initials}
    </div>
  )
}
