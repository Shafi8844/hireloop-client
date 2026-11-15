"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { authClient } from "@/lib/auth-client"

export function useSignOut() {
  const router = useRouter()
  const [isSigningOut, setIsSigningOut] = React.useState(false)

  async function signOut() {
    setIsSigningOut(true)

    try {
      await authClient.signOut()
      router.push("/")
      router.refresh()
    } catch (error) {
      console.error("[HireLoop] sign out failed", error)
    } finally {
      setIsSigningOut(false)
    }
  }

  return { signOut, isSigningOut }
}
