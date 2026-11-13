import type { ComponentProps } from "react"
import Link from "next/link"

import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"
import { NavbarLogo } from "./navbar-logo"

export function Navbar({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/70",
        className
      )}
      {...props}
    >
      <div className="mx-auto grid h-16 w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:h-18 lg:px-8">
        <NavbarLogo />

        <DesktopNav className="hidden md:flex" />

        <div className="hidden items-center justify-end gap-2 md:flex">
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "px-4"
            )}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className={cn(buttonVariants({ size: "lg" }), "px-4")}
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center justify-end md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
