export function Overview() {
  const stats = [
    { value: "06", label: "Bài tập học phần" },
    { value: "100%", label: "Ứng dụng AI" },
    { value: "01", label: "Học phần nền tảng" },
  ]

  return (
    <section id="tong-quan" className="relative bg-muted py-20 md:py-32 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="inline-block rounded-2xl bg-card p-6 md:p-10 shadow-lg border border-border relative">
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-5xl text-primary/40">"</span>
          <p className="mx-auto max-w-3xl text-balance text-lg font-medium italic leading-relaxed text-foreground md:text-2xl relative z-10">
            Công nghệ không sinh ra để thay thế con người, mà để giải phóng tiềm năng vô hạn của tư duy sáng tạo.
          </p>
        </div>

        <h2 className="font-heading mt-20 text-4xl font-bold uppercase text-foreground md:text-5xl">
          Tổng quan Dự án
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground text-lg">
          Chào mừng bạn đến với không gian lưu trữ các dự án số. Nơi đây tổng hợp mọi nỗ lực và thành quả trong việc ứng dụng công nghệ hiện đại — từ kỹ thuật prompt đến sáng tạo nội dung số.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="group relative rounded-2xl border border-primary/20 bg-card p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:border-primary/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 font-heading text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-500 md:text-6xl">{s.value}</div>
              <div className="relative z-10 mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
