import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"

export default function Page() {
  return (
    <div className="relative min-h-svh bg-[#010103]">
      <Hero />
      <Navbar className="absolute inset-x-0 top-0" />
    </div>
  )
}
