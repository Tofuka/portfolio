import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Target, Wrench, Sparkles, ClipboardList, Workflow, BarChart3, FileText, Download, ExternalLink } from "lucide-react"
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

            {/* Mục tiêu bài học */}
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

            {/* Tổng quan yêu cầu */}
            {lesson.requirements && lesson.requirements.length > 0 && (
              <>
                <div className="mt-12 flex items-center gap-2">
                  <ClipboardList className="h-5 w-5" style={{ color: lesson.accent }} aria-hidden="true" />
                  <h2 className="font-heading text-2xl font-bold uppercase text-foreground">Tổng quan yêu cầu</h2>
                </div>
                <ul className="mt-5 space-y-3">
                  {lesson.requirements.map((req, i) => (
                    <li key={i} className="flex gap-3 text-foreground">
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: lesson.accent }} aria-hidden="true" />
                      <span className="leading-relaxed text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Quy trình thực hiện */}
            {lesson.process && lesson.process.length > 0 && (
              <>
                <div className="mt-12 flex items-center gap-2">
                  <Workflow className="h-5 w-5" style={{ color: lesson.accent }} aria-hidden="true" />
                  <h2 className="font-heading text-2xl font-bold uppercase text-foreground">Quy trình thực hiện</h2>
                </div>
                <div className="mt-6 space-y-6 border-l-2 ml-2.5 pl-6" style={{ borderColor: `${lesson.accent}30` }}>
                  {lesson.process.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-background" style={{ backgroundColor: lesson.accent }}></div>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        <strong className="text-foreground font-semibold mr-1">{step.split(':')[0]}:</strong>
                        {step.split(':').slice(1).join(':')}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Phân tích kết quả */}
            {lesson.analysis && lesson.analysis.length > 0 && (
              <>
                <div className="mt-12 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" style={{ color: lesson.accent }} aria-hidden="true" />
                  <h2 className="font-heading text-2xl font-bold uppercase text-foreground">Phân tích kết quả</h2>
                </div>
                <div className="mt-5 space-y-4">
                  {lesson.analysis.map((para, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-muted/50 border border-border relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: lesson.accent }}></div>
                      <p className="text-lg leading-relaxed text-muted-foreground italic">
                        "{para}"
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
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

      {/* Embedded Document Section */}
      <section className="py-16 border-t border-b border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <h2 className="font-heading text-3xl font-bold uppercase text-foreground text-center">Sản phẩm thực hành</h2>
          </div>
          
          <div className="flex justify-center">
            {lesson.embedUrl ? (
              <div className="group relative flex w-full max-w-sm flex-col items-center overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all hover:shadow-xl sm:max-w-xl sm:flex-row">
                <div 
                  className="flex h-32 w-full shrink-0 items-center justify-center bg-muted/50 sm:h-auto sm:w-32 sm:self-stretch"
                  style={{ backgroundColor: `${lesson.accent}15` }}
                >
                  <FileText className="h-12 w-12" style={{ color: lesson.accent }} />
                </div>
                <div className="flex flex-1 flex-col p-6 text-center sm:text-left">
                  <h3 className="font-heading text-xl font-bold text-foreground">Báo cáo dự án</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Nhấn để xem trực tuyến hoặc tải xuống tài liệu gốc của bài học này.</p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                    <Link
                      href={lesson.embedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                      style={{ backgroundColor: lesson.accent }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Xem tài liệu
                    </Link>
                    <Link
                      href={lesson.embedUrl}
                      download
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5 hover:bg-muted"
                    >
                      <Download className="h-4 w-4" />
                      Tải xuống
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl border border-border bg-card shadow-xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full mb-6" style={{ backgroundColor: `${lesson.accent}15` }}>
                    <Sparkles className="h-10 w-10" style={{ color: lesson.accent }} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-2">Tài liệu đang cập nhật</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Sản phẩm nhúng của dự án này đang được liên kết và sẽ hiển thị tại đây.
                  </p>
                </div>
              </div>
            )}
          </div>
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
