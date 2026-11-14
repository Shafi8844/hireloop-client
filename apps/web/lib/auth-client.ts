import { createAuthClient } from "better-auth/react"

// Same-origin by default: the client calls /api/auth on the current host.
// Set NEXT_PUBLIC_BETTER_AUTH_URL only if the API lives on another origin.
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
})

export const { signIn, signUp, useSession } = authClient
