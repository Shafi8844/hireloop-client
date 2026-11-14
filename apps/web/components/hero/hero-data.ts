import {
  BarChart3,
  BriefcaseBusiness,
  Star,
  UserRoundSearch,
  type LucideIcon,
} from "lucide-react"

export type HeroStat = {
  value: string
  label: string
  icon: LucideIcon
}

export const heroStats: HeroStat[] = [
  { value: "50K", label: "Active Jobs", icon: BriefcaseBusiness },
  { value: "12K", label: "Companies", icon: BarChart3 },
  { value: "2M", label: "Job Seekers", icon: UserRoundSearch },
  { value: "97%", label: "Satisfication Rate", icon: Star },
]

export const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
] as const
