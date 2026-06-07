import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="trang-chu" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/40 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/30 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/30 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Glassmorphism Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-md animate-in fade-in zoom-in duration-700">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground mb-6 ring-1 ring-primary/50">
            Portfolio Cá Nhân
          </span>
          <h1 className="font-heading text-balance text-4xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
            Nhập môn công nghệ số & <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Trí tuệ Nhân tạo</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium text-white/80 md:text-xl">
            Nền tảng quản lý tiến độ học tập và lưu trữ dự án cá nhân. Khám phá cách công nghệ số kiến tạo tương lai.
          </p>
        </div>
      </div>

      <a
        href="#tong-quan"
        aria-label="Cuộn xuống"
        className="absolute bottom-10 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 backdrop-blur-md transition-all hover:bg-white/20 hover:text-white"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  )
}
