"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"

import { NavbarLogo } from "./navbar-logo"
import { navLinks } from "./nav-links"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="size-10 md:hidden"
            aria-label="Open navigation menu"
          />
        }
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-xs gap-0 p-0 sm:max-w-sm"
      >
        <SheetHeader className="border-b p-4 pr-14">
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
                  <SheetClose
                    render={
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
                          isActive && "bg-muted text-foreground"
                        )}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                </li>
              )
            })}
          </ul>
        </nav>

        <SheetFooter className="gap-2 border-t p-4">
          <SheetClose
            render={
              <Link
                href="/sign-in"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 w-full"
                )}
              />
            }
          >
            Sign In
          </SheetClose>
          <SheetClose
            render={
              <Link
                href="/sign-up"
                className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
              />
            }
          >
            Get Started
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
