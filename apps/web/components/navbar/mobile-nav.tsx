"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, MenuIcon, UserRound } from "lucide-react"

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

import { useSession } from "@/lib/auth-client"

import { getInitials } from "./initials"
import { getStartedLinkClassName, signInLinkClassName } from "./navbar-actions"
import { NavbarLogo } from "./navbar-logo"
import { navLinks } from "./nav-links"
import { useSignOut } from "./use-sign-out"

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const { data: session, isPending } = useSession()
  const { signOut, isSigningOut } = useSignOut()

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
          {isPending ? (
            <div
              aria-hidden="true"
              className="h-12 w-full animate-pulse rounded-[12px] bg-white/10"
            />
          ) : session?.user ? (
            <>
              <div className="flex items-center gap-3 rounded-[12px] bg-white/[0.04] px-3 py-2.5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#5C53FE] font-[family-name:var(--font-manrope)] text-sm font-semibold text-white">
                  {getInitials(session.user)}
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate font-[family-name:var(--font-manrope)] text-sm font-semibold text-white">
                    {session.user.name || "Your account"}
                  </span>
                  <span className="truncate font-[family-name:var(--font-manrope)] text-xs text-white/45">
                    {session.user.email}
                  </span>
                </span>
              </div>

              <Link
                href="/profile/edit"
                onClick={() => setOpen(false)}
                className="flex h-12 w-full items-center gap-2.5 rounded-[12px] px-4 font-[family-name:var(--font-manrope)] text-base font-medium text-white/80 transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:ring-3 focus-visible:ring-white/40"
              >
                <UserRound aria-hidden="true" className="size-5" />
                Edit profile
              </Link>

              <button
                type="button"
                onClick={async () => {
                  await signOut()
                  setOpen(false)
                }}
                disabled={isSigningOut}
                className="flex h-12 w-full items-center gap-2.5 rounded-[12px] px-4 font-[family-name:var(--font-manrope)] text-base font-medium text-[#FF9B9B] transition-colors outline-none hover:bg-[#FF6B6B]/10 hover:text-[#FFC2C2] focus-visible:ring-3 focus-visible:ring-[#FF6B6B]/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <LogOut aria-hidden="true" className="size-5" />
                {isSigningOut ? "Signing out..." : "Sign out"}
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
