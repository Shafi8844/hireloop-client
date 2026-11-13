import Image from "next/image"
import Link from "next/link"

import logo from "@/images/logo.png"
import { cn } from "@workspace/ui/lib/utils"

type NavbarLogoProps = Omit<React.ComponentProps<typeof Link>, "href">

export function NavbarLogo({ className, ...props }: NavbarLogoProps) {
  return (
    <Link
      href="/"
      aria-label="HireLoop home"
      className={cn(
        "inline-flex shrink-0 items-center rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
      {...props}
    >
      <Image src={logo} alt="HireLoop" priority className="h-8 w-auto sm:h-9" />
    </Link>
  )
}
