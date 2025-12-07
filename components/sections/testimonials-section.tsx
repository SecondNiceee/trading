"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { forwardRef } from "react"
import { useLanguage } from "@/lib/i18n/language-context"

export const TestimonialsSection = forwardRef<HTMLElement>((props, ref) => {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: t.testimonials.trader1Name,
      role: t.testimonials.trader1Role,
      age: 42,
      quote: t.testimonials.trader1Quote,
      image: "/professional-trader-man-in-suit.jpg",
    },
    {
      name: t.testimonials.trader2Name,
      role: t.testimonials.trader2Role,
      age: 36,
      quote: t.testimonials.trader2Quote,
      image: "/professional-trader-woman.jpg",
    },
    {
      name: t.testimonials.trader3Name,
      role: t.testimonials.trader3Role,
      age: 23,
      quote: t.testimonials.trader3Quote,
      image: "/young-trader-student.jpg",
    },
  ]

  const TestimonialCard = ({
    testimonial,
    className = "",
  }: { testimonial: (typeof testimonials)[0]; className?: string }) => (
    <div
      className={`rounded-3xl border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 shadow-[0_0_30px_rgba(95,11,232,0.3)] backdrop-blur-xl ${className}`}
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="relative h-16 w-16 flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#5F0BE8] to-[#6D1D7D] p-[2px]">
            <div className="h-full w-full overflow-hidden rounded-full bg-[#1a0f2e]">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
          <p className="text-sm text-gray-300">
            {testimonial.role} • <span className="text-[#8b5cf6]">{testimonial.age}</span> {t.common.years}
          </p>
        </div>
        <div className="rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] px-3 py-1 text-xs font-semibold text-white">
          {t.common.verified}
        </div>
      </div>
      <div className="rounded-2xl border border-[#5F0BE8]/30 bg-[#0f0820]/60 p-6 shadow-[inset_0_0_20px_rgba(95,11,232,0.2)]">
        <p className="text-base leading-relaxed text-gray-200">"{testimonial.quote}"</p>
      </div>
    </div>
  )

  return (
    <section
      ref={ref}
      className="mx-auto mt-16 sm:mt-24 max-w-7xl px-[20px] sm:px-[20px] lg:px-[20px] lg:mt-32 pb-16 opacity-0"
    >
      <div className="text-center">
        <h2 className="mb-2 text-3xl sm:text-4xl font-bold text-white lg:text-5xl">{t.testimonials.title}</h2>
        <div className="mx-auto mb-12 sm:mb-16 h-1 w-64 sm:w-96 bg-gradient-to-r from-[#6D1D7D] via-[#5F0BE8] to-[#6D1D7D]" />
      </div>

      <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} className="testimonial-card" />
        ))}
      </div>

      <div className="md:hidden relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="static translate-x-0 translate-y-0 h-12 w-12 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] border-none text-white hover:from-[#5F0BE8] hover:to-[#6D1D7D] shadow-lg" />

            <div className="flex justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#5F0BE8]/50" />
              <div className="h-2 w-2 rounded-full bg-[#5F0BE8]/50" />
              <div className="h-2 w-2 rounded-full bg-[#5F0BE8]/50" />
            </div>

            <CarouselNext className="static translate-x-0 translate-y-0 h-12 w-12 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] border-none text-white hover:from-[#5F0BE8] hover:to-[#6D1D7D] shadow-lg" />
          </div>
        </Carousel>
      </div>
    </section>
  )
})

TestimonialsSection.displayName = "TestimonialsSection"
