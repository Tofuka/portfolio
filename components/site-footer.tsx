import Link from "next/link"
import { lessons } from "@/lib/lessons"
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <h2 className="font-heading text-2xl font-bold uppercase">Portfolio</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-background/70">
            Hệ thống quản lý tiến độ học tập — Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-background/60">Điều hướng</h3>
          <ul className="mt-4 space-y-2 text-background/80">
            <li>
              <Link href="/" className="transition-colors hover:text-background">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/du-an" className="transition-colors hover:text-background">
                Dự án
              </Link>
            </li>
            <li>
              <Link href="/tong-ket" className="transition-colors hover:text-background">
                Tổng kết
              </Link>
            </li>
            <li>
              <Link href="/gioi-thieu" className="transition-colors hover:text-background">
                Giới thiệu
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-background/60">Các bài tập</h3>
          <ul className="mt-4 space-y-2 text-background/80">
            {lessons.map((lesson) => (
              <li key={lesson.slug}>
                <Link href={`/du-an/${lesson.slug}`} className="transition-colors hover:text-background">
                  {lesson.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-background/60">Kết nối với tôi</h3>
          <div className="mt-4 flex flex-col gap-3 text-background/80">
            <Link href="https://github.com/Tofuka" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-background">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </Link>
            <Link href="https://www.facebook.com/tofuukbatou/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-background">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span>Facebook</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 py-6 text-center text-sm text-background/60">
        © 2026 by Lê Minh Hải. Được xây dựng cho mục đích học tập.
      </div>
    </footer>
  )
}
