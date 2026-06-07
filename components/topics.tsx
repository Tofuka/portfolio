import Image from "next/image"
import Link from "next/link"
import { lessons } from "@/lib/lessons"
import { ArrowRight } from "lucide-react"

export function Topics() {
  return (
    <section id="du-an" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold uppercase text-foreground md:text-5xl inline-block relative">
            Các Dự án Nổi bật
            <span className="absolute -bottom-4 left-1/2 w-1/3 -translate-x-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson, index) => (
            <article key={lesson.slug} className="group relative rounded-2xl bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col h-full animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 150}ms` }}>
              <Link href={`/du-an/${lesson.slug}`} className="block relative overflow-hidden aspect-[4/3]">
                <Image
                  src={lesson.image || "/placeholder.svg"}
                  alt={lesson.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <span className="inline-flex items-center text-sm font-semibold text-primary-foreground group/link">
                     Xem chi tiết <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                   </span>
                </div>
              </Link>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground line-clamp-2">
                  <Link href={`/du-an/${lesson.slug}`} className="transition-colors hover:text-primary before:absolute before:inset-0">
                    {lesson.title}
                  </Link>
                </h3>
                <p className="mt-3 text-muted-foreground line-clamp-3 flex-1">{lesson.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
