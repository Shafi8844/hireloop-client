type InitialsUser = {
  name?: string | null
  email?: string | null
}

export function getInitials({ name, email }: InitialsUser) {
  const source = name?.trim() || email?.split("@")[0] || "?"

  return source
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("")
}
