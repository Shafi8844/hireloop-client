"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  BriefcaseBusiness,
  Eye,
  EyeOff,
  UserRound,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

import type { AuthMode } from "./auth-mode"
import { AuthTabs } from "./auth-tabs"
import { authClient, signIn } from "@/lib/auth-client"

const inputClassName =
  "h-11 w-full rounded-[11px] border border-white/10 bg-white/[0.04] px-3.5 font-[family-name:var(--font-manrope)] text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors outline-none placeholder:text-white/35 hover:border-white/20 focus:border-[#5C53FE]/70 focus:bg-white/[0.06] focus:ring-4 focus:ring-[#5C53FE]/15"

const copy = {
  "sign-in": {
    title: "Welcome back",
    description: "Sign in to pick up where you left off.",
    submit: "Sign In",
    footerText: "New to HireLoop?",
    footerLink: "Create an account",
    footerHref: "/sign-up",
  },
  "sign-up": {
    title: "Create your account",
    description: "Start applying to your next role in minutes.",
    submit: "Create Account",
    footerText: "Already have an account?",
    footerLink: "Sign in",
    footerHref: "/sign-in",
  },
} as const

type FieldProps = {
  label: string
  htmlFor: string
  hint?: string
  children: React.ReactNode
}

function Field({ label, htmlFor, hint, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="font-[family-name:var(--font-manrope)] text-sm leading-none font-medium text-white/70"
      >
        {label}
      </label>
      {children}
      {hint ? (
        <p className="font-[family-name:var(--font-manrope)] text-xs leading-4 text-white/35">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

type PasswordFieldProps = {
  id: string
  name: string
  autoComplete: string
  placeholder?: string
  minLength?: number
}

function PasswordField({
  id,
  name,
  autoComplete,
  placeholder = "Enter your password",
  minLength,
}: PasswordFieldProps) {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={visible ? "text" : "password"}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
        minLength={minLength}
        className={cn(inputClassName, "pr-12")}
      />
      <button
        type="button"
        onClick={() => setVisible((current) => !current)}
        aria-label={visible ? "Hide password" : "Show password"}
        aria-pressed={visible}
        className="absolute top-1/2 right-2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-white/40 transition-colors outline-none hover:bg-white/[0.06] hover:text-white focus-visible:ring-3 focus-visible:ring-white/20"
      >
        {visible ? (
          <EyeOff aria-hidden="true" className="size-4" />
        ) : (
          <Eye aria-hidden="true" className="size-4" />
        )}
      </button>
    </div>
  )
}

type RoleOptionProps = {
  selected: boolean
  onSelect: () => void
  icon: LucideIcon
  title: string
  description: string
}

function RoleOption({
  selected,
  onSelect,
  icon: Icon,
  title,
  description,
}: RoleOptionProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "flex items-center gap-2.5 rounded-[11px] border p-2.5 text-left transition-colors outline-none focus-visible:ring-3 focus-visible:ring-[#5C53FE]/40",
        selected
          ? "border-[#5C53FE] bg-[#5C53FE]/10"
          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
      )}
    >
      <span
        className={cn(
          "inline-flex size-8 shrink-0 items-center justify-center rounded-[9px] transition-colors",
          selected ? "bg-[#5C53FE] text-white" : "bg-white/[0.06] text-white/50"
        )}
      >
        <Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
      </span>

      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="font-[family-name:var(--font-manrope)] text-[13px] leading-tight font-semibold text-white">
          {title}
        </span>
        <span className="font-[family-name:var(--font-manrope)] text-[11px] leading-tight text-white/40">
          {description}
        </span>
      </span>
    </button>
  )
}

type AuthFormProps = {
  mode: AuthMode
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter()
  const [role, setRole] = React.useState<"seeker" | "recruiter">("seeker")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const content = copy[mode]
  const isSignUp = mode === "sign-up"

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const formData = new FormData(event.currentTarget)
    const data=Object.fromEntries(formData.entries())

    if (!isSignUp) {
      try{
        const {data:SignInResponse,error}= await authClient.signIn.email({
        email:String(data.email),
        password:String(data.password),
        rememberMe:true,
        callbackURL:"/"
      })
      console.log(SignInResponse)
      if (error) {
        console.log(error);
        return
      }
      }
      catch{
        console.log(error);
      }
    }

    setIsSubmitting(true)

    try {
      const { error: signUpError } = await authClient.signUp.email({
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        password: String(formData.get("password") ?? ""),
        callbackURL: "/"
      })

      if (signUpError) {
        setError(signUpError.message ?? "Could not create your account.")
        return
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-[460px] rounded-[24px] border border-white/10 bg-[#0A0A0D]/90 p-5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:p-7">
      <AuthTabs mode={mode} />

      <div className="mt-6">
        <h1 className="font-[family-name:var(--font-manrope)] text-[26px] leading-[1.15] font-bold tracking-[-0.02em] text-white sm:text-[30px]">
          {content.title}
        </h1>
        <p className="mt-1.5 font-[family-name:var(--font-manrope)] text-sm leading-[1.6] text-white/55">
          {content.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        {isSignUp ? (
          <Field label="Full name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Alex Sterling"
              required
              className={inputClassName}
            />
          </Field>
        ) : null}

        <Field label="Email address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className={inputClassName}
          />
        </Field>

        <Field
          label="Password"
          htmlFor="password"
          hint={isSignUp ? "Use at least 8 characters." : undefined}
        >
          <PasswordField
            id="password"
            name="password"
            autoComplete={isSignUp ? "new-password" : "current-password"}
            placeholder={isSignUp ? "Create a password" : "Enter your password"}
            minLength={isSignUp ? 8 : undefined}
          />
        </Field>

        {isSignUp ? (
          <div className="flex flex-col gap-1.5">
            <span className="font-[family-name:var(--font-manrope)] text-sm leading-none font-medium text-white/70">
              I am a
            </span>
            <div
              role="radiogroup"
              aria-label="Account type"
              className="grid grid-cols-2 gap-2"
            >
              <RoleOption
                selected={role === "seeker"}
                onSelect={() => setRole("seeker")}
                icon={UserRound}
                title="Job Seeker"
                description="Find work"
              />
              <RoleOption
                selected={role === "recruiter"}
                onSelect={() => setRole("recruiter")}
                icon={BriefcaseBusiness}
                title="Recruiter"
                description="Hire talent"
              />
            </div>
            <input type="hidden" name="role" value={role} />
          </div>
        ) : null}

        {isSignUp ? (
          <label className="flex items-start gap-2.5 font-[family-name:var(--font-manrope)] text-[13px] leading-[1.5] text-white/50">
            <input
              type="checkbox"
              name="terms"
              required
              className="mt-0.5 size-4 shrink-0 cursor-pointer rounded-[4px] border border-white/20 bg-white/5 accent-[#5C53FE]"
            />
            <span>
              I agree to HireLoop&apos;s{" "}
              <span className="text-white/80">Terms of Service</span> and{" "}
              <span className="text-white/80">Privacy Policy</span>.
            </span>
          </label>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <label className="flex items-center gap-2.5 font-[family-name:var(--font-manrope)] text-sm text-white/50">
              <input
                type="checkbox"
                name="remember"
                className="size-4 shrink-0 cursor-pointer rounded-[4px] border border-white/20 bg-white/5 accent-[#5C53FE]"
              />
              Remember me
            </label>

            <button
              type="button"
              onClick={() =>
                console.info(
                  "[HireLoop] Password reset requested — connect the reset flow here."
                )
              }
              className="font-[family-name:var(--font-manrope)] text-sm font-medium text-[#A9A4FF] transition-colors outline-none hover:text-white focus-visible:ring-3 focus-visible:ring-[#5C53FE]/40"
            >
              Forgot password?
            </button>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-0.5 h-12 w-full rounded-[11px] border border-[#090A15]/10 bg-[#5C53FE] font-[family-name:var(--font-instrument-sans)] text-base font-medium text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] transition-colors hover:bg-[#4F47EF] focus-visible:ring-3 focus-visible:ring-[#5C53FE]/50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Creating account..." : content.submit}
        </Button>

        {error ? (
          <p
            role="alert"
            className="rounded-[10px] border border-[#FF6B6B]/25 bg-[#FF6B6B]/10 px-3 py-2 text-center font-[family-name:var(--font-manrope)] text-xs leading-4 text-[#FFB3B3]"
          >
            {error}
          </p>
        ) : null}
      </form>

      <p className="mt-3.5 text-center font-[family-name:var(--font-manrope)] text-sm text-white/45">
        {content.footerText}{" "}
        <Link
          href={content.footerHref}
          className="font-medium text-[#A9A4FF] transition-colors outline-none hover:text-white focus-visible:ring-3 focus-visible:ring-[#5C53FE]/40"
        >
          {content.footerLink}
        </Link>
      </p>
    </div>
  )
}
