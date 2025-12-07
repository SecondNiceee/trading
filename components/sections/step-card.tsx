interface StepCardProps {
  number: number
  text: string
}

export default function StepCard({ number, text }: StepCardProps) {
  return (
    <div className="relative w-full h-auto min-h-[90px] px-3 py-2 md:px-4 md:py-3">
      <div className="relative flex items-center gap-3 md:gap-4 rounded-[50px] bg-gradient-to-r from-[#1a0a3e]/50 to-[#5F0BE8]/25 backdrop-blur-xl px-5 py-4 md:px-6 md:py-4 shadow-[0_0_30px_rgba(95,11,232,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),inset_1px_1px_4px_rgba(255,255,255,0.15),-11px_-10px_48px_-12px_rgba(0,0,0,0.15),-2px_-2px_12px_-8px_rgba(0,0,0,0.15)]">
        <div className="flex-1 text-center md:text-left pr-2 md:pr-4">
          <p className="text-white/80 text-sm md:text-base lg:text-lg font-normal leading-relaxed">{text}</p>
        </div>

        <div className="relative flex-shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px]">
          {/* Badge background with gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6D1D7D]/80 to-[#5F0BE8]/80 shadow-[inset_1.9px_1.8px_8.3px_rgba(255,255,255,0.13),inset_1.1px_1px_4.2px_rgba(255,255,255,0.13),-1.7px_-1.6px_10.8px_rgba(0,0,0,0.15),-10px_-9.4px_43.2px_rgba(0,0,0,0.15)] backdrop-blur-sm" />

          {/* Border overlay for angular gradient effect */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 90deg, rgba(255,255,255,0.18) 0deg, rgba(255,255,255,0.35) 43deg, rgba(255,255,255,0) 133deg, rgba(255,255,255,0.35) 223deg, rgba(255,255,255,0) 313deg, rgba(255,255,255,0.18) 360deg)",
              mixBlendMode: "plus-lighter",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-white text-3xl md:text-5xl font-bold leading-none"
              style={{ fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif" }}
            >
              {number}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
