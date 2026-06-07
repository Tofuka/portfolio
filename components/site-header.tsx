"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { lessons } from "@/lib/lessons"

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Dự án", href: "/du-an", hasChildren: true },
  { label: "Tổng kết", href: "/tong-ket" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-widest border-2 border-white/40 px-5 py-2 rounded-xl bg-black/10 backdrop-blur-md hover:border-white hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] uppercase font-heading"
        >
          Portfolio
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Điều hướng chính">
          {navItems.map((item) =>
            item.hasChildren ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-lg bg-foreground py-2 text-white shadow-xl">
                    {lessons.map((lesson) => (
                      <li key={lesson.slug}>
                        <Link
                          href={`/du-an/${lesson.slug}`}
                          className="block px-4 py-2 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {lesson.navLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="mx-6 rounded-lg bg-foreground/95 p-4 text-white backdrop-blur md:hidden"
          aria-label="Điều hướng di động"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.hasChildren ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setProjectsOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
                      aria-expanded={projectsOpen}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${projectsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {projectsOpen && (
                      <ul className="ml-3 mt-1 flex flex-col gap-1 border-l border-white/15 pl-2">
                        <li>
                          <Link
                            href="/du-an"
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                          >
                            Tất cả dự án
                          </Link>
                        </li>
                        {lessons.map((lesson) => (
                          <li key={lesson.slug}>
                            <Link
                              href={`/du-an/${lesson.slug}`}
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                            >
                              {lesson.navLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
