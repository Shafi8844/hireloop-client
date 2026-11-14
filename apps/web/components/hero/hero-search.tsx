import Link from "next/link"
import { MapPin, Search } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

import { trendingPositions } from "./hero-data"

type HeroSearchProps = React.ComponentProps<"div">

export function HeroSearch({ className, ...props }: HeroSearchProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <form
        action="/jobs"
        role="search"
        className="flex w-full flex-col gap-1 rounded-[16px] border border-white/20 bg-[#101010] p-2 lg:h-16 lg:flex-row lg:items-center lg:gap-6 lg:pr-2 lg:pl-6"
      >
        <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl px-3 py-2.5 lg:h-[27px] lg:p-0">
          <Search
            aria-hidden="true"
            strokeWidth={1.5}
            className="size-6 shrink-0 text-white"
          />
          <span className="sr-only">Job title, skill or company</span>
          <input
            type="search"
            name="q"
            placeholder="Job tilte, skill or company"
            autoComplete="off"
            className="h-full w-full min-w-0 bg-transparent font-[family-name:var(--font-manrope)] text-base leading-[1.7] text-white outline-none placeholder:text-white/80 [&::-webkit-search-cancel-button]:hidden"
          />
        </label>

        <span
          aria-hidden="true"
          className="hidden h-[23px] w-px shrink-0 bg-white/20 lg:block"
        />

        <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl px-3 py-2.5 lg:h-[27px] lg:p-0">
          <MapPin
            aria-hidden="true"
            strokeWidth={1.5}
            className="size-6 shrink-0 text-white"
          />
          <span className="sr-only">Location or remote</span>
          <input
            type="search"
            name="location"
            placeholder="Location or Remote"
            autoComplete="off"
            className="h-full w-full min-w-0 bg-transparent font-[family-name:var(--font-manrope)] text-base leading-[1.7] text-white outline-none placeholder:text-white/80 [&::-webkit-search-cancel-button]:hidden"
          />
        </label>

        <Button
          type="submit"
          aria-label="Search jobs"
          className="h-12 w-full shrink-0 gap-2 rounded-[12px] bg-[#5C53FE] text-base font-medium text-white hover:bg-[#4F47EF] focus-visible:ring-[#5C53FE]/50 sm:h-12 lg:size-12 lg:rounded-[12px] lg:p-0"
        >
          <Search aria-hidden="true" strokeWidth={1.5} className="size-6" />
          <span className="lg:sr-only">Search</span>
        </Button>
      </form>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5">
        <span className="font-[family-name:var(--font-manrope)] text-sm leading-[1.3] text-white/70 lg:text-base">
          Trending Position
        </span>

        <ul className="flex flex-wrap items-center justify-center gap-2">
          {trendingPositions.map((position) => (
            <li key={position}>
              <Link
                href={`/jobs?q=${encodeURIComponent(position)}`}
                className="inline-flex h-[33px] items-center rounded-full border border-white/10 bg-[#1A1A1B] px-3 py-1.5 font-[family-name:var(--font-manrope)] text-xs leading-[1.5] text-white transition-colors outline-none hover:bg-white/10 focus-visible:ring-3 focus-visible:ring-white/30 lg:text-sm"
              >
                {position}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
