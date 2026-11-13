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
      className={cn("items-center gap-1", className)}
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
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
              isActive && "bg-muted text-foreground"
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
