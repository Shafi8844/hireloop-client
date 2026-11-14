import { cn } from "@workspace/ui/lib/utils"

import { heroStats } from "./hero-data"

type HeroStatsProps = React.ComponentProps<"div">

export function HeroStats({ className, ...props }: HeroStatsProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <h2 className="mx-auto max-w-[600px] text-center font-[family-name:var(--font-instrument-sans)] text-[28px] leading-[1.3] font-medium tracking-[-0.01em] text-white/70 sm:text-4xl lg:text-[40px]">
        Assisting over 15,000 job seekers find their dream positions.
      </h2>

      <div className="mx-auto mt-8 grid w-full max-w-[1320px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-4">
        {heroStats.map((stat) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.label}
              className="flex min-h-[220px] flex-col justify-between rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,#010102_12.2%,#313131_177.3%)] p-6 lg:min-h-[254px]"
            >
              <Icon aria-hidden="true" strokeWidth={1.5} className="size-6" />

              <div className="flex flex-col gap-4">
                <p className="font-[family-name:var(--font-plus-jakarta)] text-[44px] leading-[1.15] font-semibold text-white lg:text-[56px]">
                  {stat.value}
                </p>
                <p className="font-[family-name:var(--font-inter-tight)] text-base leading-[1.65] text-white lg:text-lg">
                  {stat.label}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
