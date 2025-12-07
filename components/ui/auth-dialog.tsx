"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Key, Eye, EyeOff, X } from "lucide-react"

interface AuthDialogProps {
  trigger?: React.ReactNode
  defaultMode?: "login" | "signup"
  onAuthSuccess?: () => void
}

export function AuthDialog({ trigger, defaultMode = "signup", onAuthSuccess }: AuthDialogProps) {
  const [mode, setMode] = useState<"login" | "signup">(defaultMode)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  const handleSubmit = (e: React.FormEvent) => {
    console.log(1)
    e.preventDefault()
    setError("")

    // Validation
    if (!email || !password) {
      setError("Email and password are required")
      return
    }

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // Store auth token and email in window object
    if (typeof window !== "undefined") {
      window.__AUTH_TOKEN__ = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      window.__USER_EMAIL__ = email

      // Also store in localStorage for persistence
      localStorage.setItem("AUTH_TOKEN", window.__AUTH_TOKEN__)
      localStorage.setItem("USER_EMAIL", window.__USER_EMAIL__)
    }

    // Close dialog and trigger success callback
    setOpen(false)
    onAuthSuccess?.()

    // Reset form
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    console.log(2)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-w-[500px] w-[calc(100vw-2rem)] sm:w-full border-2 border-[#5F0BE8]/50 bg-gradient-to-br from-[#1a0f2e] to-[#0f0820] p-6 sm:p-8 shadow-[0_0_60px_rgba(95,11,232,0.4)] backdrop-blur-xl"
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 h-12 w-12 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#5F0BE8] flex items-center justify-center text-white hover:from-[#7c3aed] hover:to-[#4f46e5] transition-all shadow-lg z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Welcome</h2>
            <p className="text-gray-300 text-sm sm:text-base">Hi, you need to register to enter</p>
          </div>

          {/* Mode Toggle */}
          <div className="flex gap-2 p-1 bg-[#0f0820]/60 rounded-full border border-[#5F0BE8]/30">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-3 px-6 rounded-full text-base font-semibold transition-all ${
                mode === "login"
                  ? "bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-3 px-6 rounded-full text-base font-semibold transition-all ${
                mode === "signup"
                  ? "bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-sm font-medium">
                {error}
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-3">
              <label className="text-white text-base font-medium">Email Address</label>
              <div className="relative mt-4">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="John123@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 pl-12 pr-4 bg-[#1a0f2e]/80 border-[#5F0BE8]/30 text-white placeholder:text-gray-500 rounded-3xl text-base focus-visible:border-[#5F0BE8] focus-visible:ring-[#5F0BE8]/30"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-3">
              <label className="text-white text-base font-medium">
                {mode === "signup" ? "Create Password" : "Password"}
              </label>
              <div className="relative mt-4">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 pl-12 pr-12 bg-[#1a0f2e]/80 border-[#5F0BE8]/30 text-white placeholder:text-gray-500 rounded-3xl text-base focus-visible:border-[#5F0BE8] focus-visible:ring-[#5F0BE8]/30"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input (only for signup) */}
            {mode === "signup" && (
              <div className="space-y-3">
                <label className="text-white text-base font-medium">Confirm Password</label>
                <div className="relative mt-4">
                  <Key className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-14 pl-12 pr-12 bg-[#1a0f2e]/80 border-[#5F0BE8]/30 text-white placeholder:text-gray-500 rounded-3xl text-base focus-visible:border-[#5F0BE8] focus-visible:ring-[#5F0BE8]/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-[#6D1D7D] via-[#7C3AED] to-[#5F0BE8] hover:from-[#5F0BE8] hover:via-[#6D28D9] hover:to-[#6D1D7D] text-white text-lg font-semibold rounded-full shadow-[0_0_30px_rgba(95,11,232,0.5)] transition-all"
            >
              {mode === "signup" ? "Sign Up" : "Login"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
