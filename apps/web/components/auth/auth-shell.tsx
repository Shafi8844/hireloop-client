import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import globe from "@/images/globe.png"
import logo from "@/images/logo.png"

type AuthShellProps = {
  children: React.ReactNode
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-[#010103] text-white [color-scheme:dark]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[1400px]">
          <Image
            src={globe}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-80"
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(92,83,254,0.16),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_75%,rgba(220,0,203,0.08),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-[1400px] bg-[linear-gradient(180deg,transparent_0%,rgba(1,1,3,0.5)_55%,#010103_100%)]" />

        <div className="absolute top-1/2 left-1/2 size-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5C53FE]/15 blur-[150px]" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-6 sm:px-8 lg:px-[60px]">
        <Link
          href="/"
          aria-label="HireLoop home"
          className="inline-flex shrink-0 items-center rounded-md outline-none focus-visible:ring-3 focus-visible:ring-white/40"
        >
          <Image
            src={logo}
            alt="HireLoop"
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <Link
          href="/"
          className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white/70 backdrop-blur-sm transition-colors outline-none hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:ring-3 focus-visible:ring-white/30"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to home
        </Link>
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-6 sm:py-8 lg:py-10">
        {children}
      </main>
    </div>
  )
}
