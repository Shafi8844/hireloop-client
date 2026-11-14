import type { ComponentProps } from "react"
import Link from "next/link"

import { cn } from "@workspace/ui/lib/utils"

export const signInLinkClassName =
  "inline-flex h-[58px] items-center justify-center rounded-[12px] px-6 text-[18px] leading-[1.45] font-semibold text-[#5C53FE] transition-colors outline-none hover:bg-white/5 focus-visible:ring-3 focus-visible:ring-[#5C53FE]/40 [font-family:var(--font-manrope)] [text-shadow:0_2px_4px_rgba(0,0,0,0.03)]"

export const getStartedLinkClassName =
  "inline-flex h-[52px] items-center justify-center rounded-[12px] border border-[#090A15]/10 bg-[#5C53FE] px-[22px] text-[18px] leading-[1.45] font-medium text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] transition-colors outline-none hover:bg-[#4F47EF] focus-visible:ring-3 focus-visible:ring-[#5C53FE]/50 [font-family:var(--font-instrument-sans)] [text-shadow:0_2px_4px_rgba(0,0,0,0.03)]"

export function NavbarActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      <Link href="/sign-in" className={signInLinkClassName}>
        Sign In
      </Link>
      <Link href="/sign-up" className={getStartedLinkClassName}>
        Get Started
      </Link>
    </div>
  )
}
