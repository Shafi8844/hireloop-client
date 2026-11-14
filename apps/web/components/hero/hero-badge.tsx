import { cn } from "@workspace/ui/lib/utils"

import { RocketIcon } from "./rocket-icon"

type HeroBadgeProps = React.ComponentProps<"div">

export function HeroBadge({ className, ...props }: HeroBadgeProps) {
  return (
    <div
      className={cn("flex w-full items-center justify-center", className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className="h-px w-8 shrink-0 bg-[linear-gradient(90deg,#010123_0%,#A8A8A8_100%)] opacity-70 sm:w-12 lg:w-16"
      />

      <div className="shrink-0 rounded-full bg-[linear-gradient(180deg,rgba(168,168,168,0.3)_0%,rgba(153,153,153,0)_100%)] p-px">
        <div className="flex h-10 items-center gap-2 rounded-full bg-[linear-gradient(180deg,#474747_-169%,#010102_100%)] px-4 shadow-[inset_0_0_6px_6px_rgba(0,0,0,0.1)] sm:h-11 sm:gap-3 sm:px-5 lg:h-12 lg:gap-4 lg:px-6">
          <RocketIcon className="size-5 shrink-0 sm:size-[22px] lg:size-6" />
          <p className="font-[family-name:var(--font-space-mono)] text-xs leading-[1.2] whitespace-nowrap text-white sm:text-sm lg:text-xl">
            50,000+ new jobs this month
          </p>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="h-px w-8 shrink-0 bg-[linear-gradient(90deg,#A8A8A8_0%,#010123_100%)] opacity-70 sm:w-12 lg:w-16"
      />
    </div>
  )
}
