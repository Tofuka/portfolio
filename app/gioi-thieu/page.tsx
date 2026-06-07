import type { Metadata } from "next"
import Image from "next/image"
import { Calendar, IdCard, Mail, MapPin, Cpu, Code2, Wifi, Bot, PenTool, Route, Languages, LineChart, Laptop, Target, CheckCircle2, Gamepad2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Giới thiệu | Portfolio",
  description: "Giới thiệu về Lê Minh Hải — sinh viên ngành Khoa học và Kĩ thuật máy tính tại Đại học Việt Nhật.",
}

const facts = [
  { icon: IdCard, label: "Mã số sinh viên", value: "25112039" },
  { icon: Calendar, label: "Ngày sinh", value: "07/09/2006" },
  { icon: MapPin, label: "Học tại", value: "Đại học Việt Nhật (VJU - VNU)" },
  { icon: Mail, label: "Ngành học", value: "Khoa học và Kĩ thuật máy tính" },
]

const timeline = [
  {
    period: "2025 - Nay",
    title: "Đại học Việt Nhật (VJU) - ĐHQGHN",
    desc: "Sinh viên năm nhất ngành Khoa học và Kĩ thuật máy tính.",
  },
  {
    period: "2021 - 2024",
    title: "THPT Nguyễn Trãi",
    desc: "Hoàn thành chương trình trung học phổ thông.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Giới thiệu"
        title="Sơ lược về bản thân"
        bgImageUrl="https://media1.tenor.com/m/_Ib17o8AY34AAAAC/your-name.gif"
        noOverlay={true}
      />

      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[80px] pointer-events-none" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-12 lg:items-stretch relative z-10">

          {/* Main Intro Card */}
          <div className="lg:col-span-7 flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-md dark:bg-black/20 dark:border-white/10 transition-transform hover:-translate-y-1 duration-300">
            <h2 className="font-heading text-4xl font-bold uppercase text-blue-600 dark:text-blue-400 pb-1">Lê Minh Hải</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Xin chào! Tôi là một sinh viên năm nhất chuyên ngành <strong className="text-foreground font-semibold">Khoa học và Kĩ thuật máy tính</strong> tại Đại học Việt Nhật (VJU - VNU). Tôi luôn mang trong mình khao khát học hỏi và niềm đam mê với việc nghiên cứu công nghệ.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Khi tạm rời xa bàn phím, tôi tìm thấy niềm vui ở những tựa game giải trí, xem anime hay manga. Đôi khi là đọc những cuốn Light Novel đầy thú vị.
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 flex items-center justify-center p-4 lg:p-8 group">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] overflow-hidden rounded-full border-4 border-primary/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-105">
              <Image
                src="/anime-avatar.jpg"
                alt="Avatar anime"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Facts Bento Grid */}
          <div className="lg:col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-md dark:bg-black/20 dark:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 dark:hover:bg-white/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <fact.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="text-center">
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">{fact.label}</p>
                  <p className="mt-1 font-semibold text-foreground text-lg">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Định hướng tương lai */}
          <div className="lg:col-span-12 mt-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-md dark:bg-black/20 dark:border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Định hướng tương lai</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Quá trình trải nghiệm và khám phá đã định hình trong mình một niềm đam mê mãnh liệt với lĩnh vực lập trình và phát triển Game.
              </p>
              <p>
                Thay vì chỉ dừng lại ở việc tận hưởng các tựa game, mình khao khát tự tay kiến tạo nên những thế giới ảo sống động. Việc làm chủ các ngôn ngữ lập trình, thành thạo Game Engine và tư duy thiết kế UI/UX nhạy bén chính là cốt lõi để mình biến những ý tưởng sáng tạo thành trải nghiệm giải trí tuyệt vời cho người chơi.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                <Code2 className="h-4 w-4 text-muted-foreground" /> Python
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                <Code2 className="h-4 w-4 text-muted-foreground" /> C#
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                <Gamepad2 className="h-4 w-4 text-muted-foreground" /> Engine Game
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                <PenTool className="h-4 w-4 text-muted-foreground" /> UI / UX
              </span>
            </div>
          </div>

          {/* Mục tiêu cá nhân */}
          <div className="lg:col-span-6 mt-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-md dark:bg-black/20 dark:border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Route className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Mục tiêu cá nhân</h3>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-500"><Languages className="h-4 w-4" /></div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Phát triển kĩ năng ngoại ngữ</h4>
                  <p className="mt-2 text-muted-foreground leading-relaxed">Tập trung ôn luyện và chinh phục chứng chỉ IELTS để dễ dàng tiếp cận kho tàng tài liệu học thuật quốc tế, phá vỡ rào cản ngôn ngữ trong nghiên cứu khoa học.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-500"><LineChart className="h-4 w-4" /></div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Nghiên cứu khoa học</h4>
                  <p className="mt-2 text-muted-foreground leading-relaxed">Đề tài nghiên cứu về việc ứng dụng VR.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-500"><Laptop className="h-4 w-4" /></div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Thực thi dự án thực tiễn</h4>
                  <p className="mt-2 text-muted-foreground leading-relaxed">Đưa những chức năng mới của công nghệ VR vào thực tiễn và trong môi trường game.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mục tiêu của Portfolio */}
          <div className="lg:col-span-6 mt-4 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-md dark:bg-black/20 dark:border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Mục tiêu của Portfolio</h3>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-500"><CheckCircle2 className="h-4 w-4" /></div>
                <div>
                  <span className="font-semibold text-foreground">Minh chứng năng lực số:</span> <span className="text-muted-foreground leading-relaxed">Thể hiện rõ nét sự tiến bộ trong kỹ thuật prompt đa tầng, khả năng tra cứu, xử lý dữ liệu độc lập và tư duy tùy biến mã nguồn (HTML/CSS).</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-500"><CheckCircle2 className="h-4 w-4" /></div>
                <div>
                  <span className="font-semibold text-foreground">Lưu trữ tài nguyên có hệ thống:</span> <span className="text-muted-foreground leading-relaxed">Đóng gói các báo cáo phân tích, đồ án, sơ đồ mạch điện và tài liệu học thuật thành một "đám mây" cá nhân để dễ dàng truy cập và chia sẻ tức thì.</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-500"><CheckCircle2 className="h-4 w-4" /></div>
                <div>
                  <span className="font-semibold text-foreground">Liêm chính học thuật:</span> <span className="text-muted-foreground leading-relaxed">Là bản tuyên ngôn về cách mình sử dụng AI: xem công nghệ là đòn bẩy hỗ trợ, nhưng tư duy phản biện và cốt lõi nguyên bản luôn thuộc về con người.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 md:py-24 relative">
        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold uppercase text-foreground md:text-5xl inline-block relative">
              Hành trình phát triển
              <span className="absolute -bottom-4 left-1/2 w-1/2 -translate-x-1/2 h-1 bg-primary rounded-full"></span>
            </h2>
          </div>

          <div className="relative border-l-2 border-primary/30 pl-8 md:pl-0 md:border-l-0">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/30 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.period} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>

                  {/* Timeline dot */}
                  <div className="absolute -left-[2.35rem] md:left-1/2 md:-translate-x-1/2 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-125 z-10">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50 hover:-translate-y-1">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                        {item.period}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="mt-3 text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
