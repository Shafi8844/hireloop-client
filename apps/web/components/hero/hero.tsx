import Image from "next/image"

import globe from "@/images/globe.png"
import { cn } from "@workspace/ui/lib/utils"

import { HeroBadge } from "./hero-badge"
import { HeroSearch } from "./hero-search"
import { HeroStats } from "./hero-stats"

type HeroProps = React.ComponentProps<"section">

export function Hero({ className, ...props }: HeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-[#010103] text-white",
        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1882px]"
      >
        <Image
          src={globe}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 pt-28 sm:px-6 sm:pt-36 lg:px-10 lg:pt-[274px]">
        <div className="mx-auto flex w-full max-w-[784px] flex-col items-center">
          <div className="flex w-full flex-col items-center gap-8">
            <HeroBadge />

            <div className="flex w-full flex-col items-center gap-4 text-center">
              <h1 className="font-[family-name:var(--font-manrope)] text-[40px] leading-[1.15] font-bold tracking-[-0.02em] text-balance sm:text-5xl lg:text-[56px]">
                Find Your Dream Job Today
              </h1>
              <p className="max-w-[784px] font-[family-name:var(--font-manrope)] text-base leading-[1.6] text-pretty text-white/70 sm:text-lg lg:text-xl">
                HireLoop connects top talent with world-class companies. Browse
                thousands of curated opportunities and land your next role —
                faster.
              </p>
            </div>
          </div>

          <HeroSearch className="mt-12" />
        </div>

        <HeroStats className="mt-24 pt-10 sm:mt-32 lg:mt-[286px] lg:pt-[72px]" />
      </div>

      <div aria-hidden="true" className="h-12 lg:h-[72px]" />
    </section>
  )
}
