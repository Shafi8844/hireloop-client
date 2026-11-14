"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"

import { getStartedLinkClassName, signInLinkClassName } from "./navbar-actions"
import { NavbarLogo } from "./navbar-logo"
import { navLinks } from "./nav-links"

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="size-10 text-white hover:bg-white/10 hover:text-white focus-visible:ring-white/40"
            aria-label="Open navigation menu"
          />
        }
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-xs gap-0 border-white/10 bg-[#222222] p-0 text-white sm:max-w-sm [&_[data-slot=sheet-close]]:text-white [&_[data-slot=sheet-close]]:hover:bg-white/10 [&_[data-slot=sheet-close]]:hover:text-white"
      >
        <SheetHeader className="border-b border-white/10 p-4 pr-14">
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            Browse HireLoop pages and account actions.
          </SheetDescription>
          <NavbarLogo />
        </SheetHeader>

        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto p-4"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`)

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex w-full items-center rounded-[12px] px-3 py-2.5 text-base leading-[1.8] font-normal tracking-[-0.2px] text-white transition-colors outline-none hover:bg-white/10 focus-visible:ring-3 focus-visible:ring-white/40",
                      isActive && "bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <SheetFooter className="gap-2 border-t border-white/10 p-4">
          <Link
            href="/sign-in"
            onClick={() => setOpen(false)}
            className={cn(signInLinkClassName, "h-12 w-full")}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            onClick={() => setOpen(false)}
            className={cn(getStartedLinkClassName, "h-12 w-full")}
          >
            Get Started
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
