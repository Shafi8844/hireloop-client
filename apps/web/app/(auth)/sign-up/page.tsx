import type { Metadata } from "next"

import { AuthForm } from "@/components/auth"

export const metadata: Metadata = {
  title: "Sign Up | HireLoop",
  description: "Create your HireLoop account as a job seeker or recruiter.",
}

export default function SignUpPage() {
  return <AuthForm mode="sign-up" />
}
