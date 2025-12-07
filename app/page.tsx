"use client"

import { PowerfullSection } from "@/components/powerfull-section"
import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { HowItWorksSection } from "@/components/sections/how-it-works-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const howItWorksRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const powerfullRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const isMobile = window.innerWidth < 768

    if (!isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in-up")
            }
          })
        },
        { threshold: 0.1 },
      )

      const sections = [heroRef.current, howItWorksRef.current, powerfullRef.current, testimonialsRef.current]
      sections.forEach((section) => {
        if (section) observer.observe(section)
      })

      const howItWorksCards = howItWorksRef.current?.querySelectorAll(".how-it-works-card")
      const testimonialCards = testimonialsRef.current?.querySelectorAll(".testimonial-card")

      howItWorksCards?.forEach((card) => observer.observe(card))
      testimonialCards?.forEach((card) => observer.observe(card))

      return () => observer.disconnect()
    } else {
      const sections = [heroRef.current, howItWorksRef.current, powerfullRef.current, testimonialsRef.current]
      sections.forEach((section) => {
        if (section) {
          section.style.opacity = "1"
        }
      })

      const howItWorksCards = howItWorksRef.current?.querySelectorAll(".how-it-works-card")
      const testimonialCards = testimonialsRef.current?.querySelectorAll(".testimonial-card")

      howItWorksCards?.forEach((card) => {
        ;(card as HTMLElement).style.opacity = "1"
      })
      testimonialCards?.forEach((card) => {
        ;(card as HTMLElement).style.opacity = "1"
      })
    }
  }, [])

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--back, linear-gradient(315deg, #0A090C 0.38%, #1A092D 99.62%))" }}
    >
      <div className="relative z-10">
        <Header />
        <HeroSection ref={heroRef} />
        <HowItWorksSection ref={howItWorksRef} />
        <div ref={powerfullRef} className="opacity-0">
          <PowerfullSection />
        </div>
        <TestimonialsSection ref={testimonialsRef} />
      </div>
    </div>
  )
}
