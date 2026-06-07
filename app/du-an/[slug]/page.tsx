import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Target, Wrench, Sparkles } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { lessons, getLesson } from "@/lib/lessons"

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const lesson = getLesson(slug)
  if (!lesson) return { title: "Không tìm thấy | Portfolio" }
  return {
    title: `${lesson.title} | Portfolio`,
    description: lesson.desc,
  }
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lesson = getLesson(slug)
  if (!lesson) notFound()

  const index = lessons.findIndex((l) => l.slug === slug)
  const prev = index > 0 ? lessons[index - 1] : null
  const next = index < lessons.length - 1 ? lessons[index + 1] : null

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero with accent color */}
      <header
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
        style={{ backgroundColor: lesson.accent }}
      >
        <div
          className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 rounded-full opacity-20"
          style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            href="/du-an"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại Dự án
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-white">
                Bài {lesson.number}
              </span>
              <h1 className="font-heading mt-4 text-balance text-4xl font-bold uppercase text-white md:text-5xl">
                {lesson.title}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-white/85">{lesson.desc}</p>

            </div>

            <div className="hidden h-40 w-40 shrink-0 overflow-hidden rounded-2xl border-4 border-white/30 shadow-xl lg:block">
              <Image
                src={lesson.image || "/placeholder.svg"}
                alt={lesson.title}
                width={320}
                height={320}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Stats band */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {lesson.stats.map((stat) => (
            <div key={stat.label} className="py-8 text-center sm:px-6">
              <p className="font-heading text-4xl font-bold" style={{ color: lesson.accent }}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[2fr_1fr] lg:items-start">
          {/* Left: narrative */}
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" style={{ color: lesson.accent }} aria-hidden="true" />
              <h2 className="font-heading text-2xl font-bold uppercase text-foreground">Nội dung & cảm nhận</h2>
            </div>
            <div className="mt-5 space-y-4">
              {lesson.content.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-2">
              <Target className="h-5 w-5" style={{ color: lesson.accent }} aria-hidden="true" />
              <h2 className="font-heading text-2xl font-bold uppercase text-foreground">Mục tiêu bài học</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {lesson.objectives.map((obj) => (
                <li key={obj} className="flex gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: lesson.accent }} aria-hidden="true" />
                  <span className="leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: sidebar cards */}
          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5" style={{ color: lesson.accent }} aria-hidden="true" />
                <h3 className="font-heading text-lg font-bold uppercase text-foreground">Công cụ sử dụng</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {lesson.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border px-3 py-1 text-sm font-medium text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" style={{ color: lesson.accent }} aria-hidden="true" />
                <h3 className="font-heading text-lg font-bold uppercase text-foreground">Kết quả đạt được</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {lesson.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: lesson.accent }}
                      aria-hidden="true"
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Prev / Next nav */}
      <nav className="border-t border-border" aria-label="Điều hướng giữa các bài học">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-stretch sm:justify-between">
          {prev ? (
            <Link
              href={`/du-an/${prev.slug}`}
              className="group flex flex-1 items-center gap-3 rounded-lg border border-border p-5 transition-colors hover:bg-muted"
            >
              <ArrowLeft className="h-5 w-5 text-primary transition-transform group-hover:-translate-x-1" />
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Bài trước</span>
                <span className="font-semibold text-foreground">{prev.title}</span>
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/du-an/${next.slug}`}
              className="group flex flex-1 items-center justify-end gap-3 rounded-lg border border-border p-5 text-right transition-colors hover:bg-muted"
            >
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Bài tiếp theo</span>
                <span className="font-semibold text-foreground">{next.title}</span>
              </span>
              <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </div>
      </nav>

      <SiteFooter />
    </main>
  )
}
