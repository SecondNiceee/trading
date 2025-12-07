"use client"

import type * as React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { X, Send, Loader2, ImageIcon } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/sections/header"
import { toast } from "sonner"
import { useLanguage } from "@/lib/i18n/language-context"

export default function TradingReviewPage() {
  const [reviewText, setReviewText] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { t } = useLanguage()

  const handleFileSelect = (file: File) => {
    if (!file) return

    if (!file.type.match("image.*")) {
      toast.error(t.analyze.invalidFile, {
        description: t.analyze.invalidFileDesc,
      })
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error(t.analyze.fileTooLarge, {
        description: t.analyze.fileTooLargeDesc,
      })
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFileSelect(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const removeImage = () => {
    setUploadedImage(null)
  }

  const handleSubmit = async () => {
    if (!reviewText.trim()) {
      toast.error(t.tradingReview.enterReview)
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/trading-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: reviewText,
          image: uploadedImage,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit review")
      }

      toast.success(t.tradingReview.reviewSubmitted, {
        description: t.tradingReview.thankYou,
      })

      setReviewText("")
      setUploadedImage(null)
    } catch (error) {
      toast.error(t.tradingReview.failedSubmit, {
        description: t.tradingReview.tryAgain,
      })
    } finally {
      setIsLoading(false)
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
        <div className="mx-auto max-w-2xl">
          <Card className="border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(95,11,232,0.3)] p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem]">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  Trade <span className="text-purple-500">Reviews</span>
                </h1>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Upload your trade data or screenshots to get personalized feedback, performance metrics, and
                  educational insights to improve your trading.
                </p>
              </div>

              {/* Review text area */}
              <div className="space-y-3">
                <label className="text-white/90 text-sm font-medium">{t.tradingReview.yourReview}</label>
                <Textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder={t.tradingReview.placeholder}
                  className="min-h-[150px] bg-[#0a0514]/50 border-purple-500/30 text-white placeholder:text-white/40 focus:border-purple-500 resize-none"
                />
              </div>

              {/* Image upload */}
              <div className="space-y-3">
                <label className="text-white/90 text-sm font-medium">{t.tradingReview.attachImage}</label>

                {!uploadedImage ? (
                  <div
                    className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer ${
                      isDragging ? "border-purple-500 bg-purple-500/10" : "border-purple-500/30 bg-[#0a0514]/50"
                    }`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm">{t.tradingReview.dragDrop}</p>
                        <p className="text-white/40 text-xs mt-1">{t.tradingReview.fileLimit}</p>
                      </div>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handleFileSelect(file)
                      }}
                    />
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Uploaded preview"
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={removeImage}
                      className="absolute top-2 right-2 rtl:right-auto rtl:left-2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                )}
              </div>

              {/* Submit button */}
              <Button
                onClick={handleSubmit}
                disabled={isLoading || !reviewText.trim()}
                className="w-full bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] py-6 text-lg rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 animate-spin" />
                    {t.tradingReview.submitting}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    {t.tradingReview.submitReview}
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
