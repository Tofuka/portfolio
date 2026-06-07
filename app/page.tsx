import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { Topics } from "@/components/topics"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Overview />
      <Topics />
      <SiteFooter />
    </main>
  )
}
