import type { ComponentProps } from "react"
import Link from "next/link"

import { cn } from "@workspace/ui/lib/utils"

import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"
import { NavbarActions } from "./navbar-actions"
import { NavbarLogo } from "./navbar-logo"

export function Navbar({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "relative z-50 w-full px-4 pt-4 sm:px-8 sm:pt-5 lg:px-[60px] lg:pt-6",
        className
      )}
      {...props}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between rounded-[16px] bg-[#222222] pr-2 pl-4 sm:h-[74px] sm:pl-6">
        <NavbarLogo />

        <div className="hidden items-center gap-6 lg:flex">
          <DesktopNav />

          <span
            aria-hidden="true"
            className="h-6 w-px shrink-0 bg-[#A8A8A8]/40"
          />

          <NavbarActions />
        </div>

        <div className="flex items-center lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
