import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
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
    <main className="min-h-screen bg-background overflow-hidden">
      <SiteHeader />
      <PageHeader
        eyebrow="Học phần"
        title="Dự án"
        subtitle="Tổng hợp các bài tập và dự án thực hiện trong học phần Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo."
      />

      <section className="py-16 md:py-24 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-20 md:gap-32">
            {lessons.map((lesson, index) => {
              const isEven = index % 2 === 0
              return (
                <div 
                  key={lesson.slug} 
                  className={`flex flex-col gap-8 md:gap-16 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image Container */}
                  <div className="w-full lg:w-1/2 relative group">
                    <div 
                      className="absolute inset-0 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                      style={{ backgroundColor: lesson.accent }}
                    />
                    <Link 
                      href={`/du-an/${lesson.slug}`}
                      className="block relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl aspect-[4/3] bg-card"
                    >
                      <Image
                        src={lesson.image || "/placeholder.svg"}
                        alt={lesson.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                        <span 
                          className="text-white font-medium flex items-center gap-2 backdrop-blur-md px-6 py-3 rounded-full"
                          style={{ backgroundColor: `${lesson.accent}cc` }}
                        >
                          Khám phá dự án <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Content Container */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                    <div 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit text-sm font-bold tracking-wide uppercase"
                      style={{ backgroundColor: `${lesson.accent}15`, color: lesson.accent }}
                    >
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: lesson.accent }}></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: lesson.accent }}></span>
                      </span>
                      Bài {lesson.number}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground">
                      <Link href={`/du-an/${lesson.slug}`} className="hover:opacity-80 transition-opacity">
                        {lesson.title}
                      </Link>
                    </h2>
                    
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {lesson.desc}
                    </p>

                    <div className="pt-4 flex flex-col gap-3">
                      {lesson.objectives.slice(0, 2).map((obj, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" style={{ color: lesson.accent }} />
                          <span className="text-muted-foreground leading-relaxed">{obj}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <Link 
                        href={`/du-an/${lesson.slug}`}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        style={{ backgroundColor: lesson.accent }}
                      >
                        Xem chi tiết <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
