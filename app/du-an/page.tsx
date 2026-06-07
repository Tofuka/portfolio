import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { lessons } from "@/lib/lessons"

export const metadata: Metadata = {
  title: "Dự án | Portfolio",
  description: "Tổng hợp các bài tập và dự án trong học phần Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Học phần"
        title="Dự án"
        subtitle="Tổng hợp các bài tập và dự án thực hiện trong học phần Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/du-an/${lesson.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <Image
                    src={lesson.image || "/placeholder.svg"}
                    alt={lesson.title}
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">Bài {lesson.number}</p>
                  <h2 className="mt-2 text-xl font-bold text-card-foreground">{lesson.title}</h2>
                  <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{lesson.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Xem chi tiết
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
