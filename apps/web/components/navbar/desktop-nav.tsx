"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@workspace/ui/lib/utils"

import { navLinks } from "./nav-links"

type DesktopNavProps = React.ComponentProps<"nav">

export function DesktopNav({ className, ...props }: DesktopNavProps) {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Main navigation"
      className={cn("flex items-center gap-10", className)}
      {...props}
    >
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(`${link.href}/`)

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className="text-base leading-[1.8] font-normal tracking-[-0.2px] text-white transition-colors outline-none hover:text-white/70 focus-visible:text-white/70"
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
