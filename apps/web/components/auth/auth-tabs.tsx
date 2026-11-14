import Link from "next/link"

import { cn } from "@workspace/ui/lib/utils"

import type { AuthMode } from "./auth-mode"

const tabs: { mode: AuthMode; label: string; href: string }[] = [
  { mode: "sign-in", label: "Sign In", href: "/sign-in" },
  { mode: "sign-up", label: "Sign Up", href: "/sign-up" },
]

type AuthTabsProps = {
  mode: AuthMode
}

export function AuthTabs({ mode }: AuthTabsProps) {
  return (
    <nav
      aria-label="Sign in or sign up"
      className="grid grid-cols-2 gap-1 rounded-[12px] border border-white/10 bg-white/[0.03] p-1"
    >
      {tabs.map((tab) => {
        const isActive = tab.mode === mode

        return (
          <Link
            key={tab.mode}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-[9px] font-[family-name:var(--font-manrope)] text-sm leading-none font-semibold transition-colors outline-none focus-visible:ring-3 focus-visible:ring-[#5C53FE]/40",
              isActive
                ? "bg-[#5C53FE] text-white shadow-[0_8px_20px_-8px_rgba(92,83,254,0.9)]"
                : "text-white/55 hover:bg-white/[0.04] hover:text-white"
            )}
          >
            {tab.label}
          </Link>
        )
      })}
    </nav>
  )
}
