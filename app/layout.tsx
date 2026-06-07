import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Oswald } from 'next/font/google'
import './globals.css'

const beVietnam = Be_Vietnam_Pro({
  variable: '--font-geist-sans',
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin', 'vietnamese'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Portfolio — Hệ thống quản lý tiến độ học tập',
  description:
    'Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo. Tổng hợp các bài tập và dự án trong học phần.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon-anime.jpg?v=2',
    apple: '/favicon-anime.jpg?v=2',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} ${oswald.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
