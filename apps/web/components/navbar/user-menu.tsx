"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, LogOut, UserRound } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

import { getInitials } from "./initials"
import { useSignOut } from "./use-sign-out"

type UserMenuUser = {
  name?: string | null
  email?: string | null
}

type UserMenuProps = {
  user: UserMenuUser
}

export function UserMenu({ user }: UserMenuProps) {
  const [open, setOpen] = React.useState(false)
  const { signOut, isSigningOut } = useSignOut()
  const rootRef = React.useRef<HTMLDivElement>(null)
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (!open) return

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  const firstName = user.name?.trim().split(/\s+/)[0]

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Open account menu"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-[52px] items-center gap-2 rounded-[12px] pr-2.5 pl-1.5 transition-colors outline-none hover:bg-white/5 focus-visible:ring-3 focus-visible:ring-white/30"
      >
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#5C53FE] font-[family-name:var(--font-manrope)] text-sm font-semibold text-white">
          {getInitials(user)}
        </span>

        {firstName ? (
          <span className="max-w-[120px] truncate font-[family-name:var(--font-manrope)] text-[15px] font-medium text-white">
            {firstName}
          </span>
        ) : null}

        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 text-white/60 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Account menu"
          className="absolute top-full right-0 z-50 mt-2 w-64 overflow-hidden rounded-[16px] border border-white/10 bg-[#1B1B1B] p-1.5 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.85)]"
        >
          <div className="px-3 py-2.5">
            <p className="truncate font-[family-name:var(--font-manrope)] text-sm font-semibold text-white">
              {user.name || "Your account"}
            </p>
            {user.email ? (
              <p className="mt-0.5 truncate font-[family-name:var(--font-manrope)] text-xs text-white/45">
                {user.email}
              </p>
            ) : null}
          </div>

          <div aria-hidden="true" className="my-1 h-px bg-white/10" />

          <Link
            href="/profile/edit"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 rounded-[10px] px-3 py-2.5 font-[family-name:var(--font-manrope)] text-sm text-white/80 transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white"
          >
            <UserRound aria-hidden="true" className="size-4 text-white/50" />
            Edit profile
          </Link>

          <button
            type="button"
            role="menuitem"
            onClick={signOut}
            disabled={isSigningOut}
            className="flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2.5 font-[family-name:var(--font-manrope)] text-sm text-[#FF9B9B] transition-colors outline-none hover:bg-[#FF6B6B]/10 hover:text-[#FFC2C2] focus-visible:bg-[#FF6B6B]/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <LogOut aria-hidden="true" className="size-4" />
            {isSigningOut ? "Signing out..." : "Sign out"}
          </button>
        </div>
      ) : null}
    </div>
  )
}
