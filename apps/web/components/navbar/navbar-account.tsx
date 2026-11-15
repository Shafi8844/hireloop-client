"use client"

import { useSession } from "@/lib/auth-client"

import { NavbarActions } from "./navbar-actions"
import { UserMenu } from "./user-menu"

export function NavbarAccount() {
  const { data: session, isPending } = useSession()

  // Keep the navbar height stable while the session is being fetched.
  if (isPending) {
    return (
      <span
        aria-hidden="true"
        className="block size-10 animate-pulse rounded-full bg-white/10"
      />
    )
  }

  if (!session?.user) {
    return <NavbarActions />
  }

  return <UserMenu user={session.user} />
}
