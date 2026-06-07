import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { CheckCircle2, XCircle, ArrowRight, BrainCircuit, Code2, LineChart, ShieldCheck, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Tổng kết | Portfolio",
  description: "Tổng kết và đánh giá quá trình học tập học phần Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo.",
}

const comparisons = [
  {
    category: "Nghiên cứu & Khai thác Dữ liệu",
    icon: BrainCircuit,
    before: [
      "Sử dụng AI thụ động, dễ gặp thông tin sai lệch (hallucination).",
      "Trích dẫn từ nguồn thiếu kiểm chứng học thuật.",
    ],
    after: [
      "Sử dụng truy vấn Boolean để lọc dữ liệu chuyên sâu.",
      "Đối chiếu chéo độc lập từ các CSDL học thuật uy tín.",
      "Xây dựng ma trận trích dẫn chuẩn Harvard.",
    ],
  },
  {
    category: "Kỹ năng Làm việc & Quản lý",
    icon: LineChart,
    before: [
      "Phân chia công việc cảm tính, không có tiến độ rõ ràng.",
      "Lệ thuộc vào các công cụ có sẵn, lười hóa tư duy.",
    ],
    after: [
      "Thiết lập hệ thống quản lý tiến độ chuẩn Kanban.",
      "Xây dựng bộ quy tắc ứng xử AI cá nhân nghiêm ngặt.",
      "Duy trì tư duy phản biện trước cám dỗ tiện lợi của AI.",
    ],
  },
  {
    category: "Thiết kế & Tư duy Công nghệ",
    icon: Code2,
    before: [
      "Google Sites nén ảnh làm mờ chữ, vỡ layout di động.",
      "Không biết cách can thiệp mã nguồn khi gặp lỗi giao diện.",
    ],
    after: [
      "Sử dụng CSS thuần làm chủ bố cục đa màn hình (Responsive).",
      "Hiện thực hóa bảng biểu & biểu đồ động bằng code.",
      "Dùng AI tạo sinh (GenAI) để thiết kế infographic và kịch bản.",
    ],
  },
]

export default function SummaryPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <PageHeader
        eyebrow="Học phần"
        title="Tổng kết và đánh giá"
        subtitle="Nhìn lại hành trình chuyển đổi tư duy qua 6 bài thực hành chuyên sâu."
        bgImageUrl="/tong-ket-bg.jpg"
        noOverlay={true}
      />

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 relative z-10 space-y-24">
          
          {/* Intro Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold font-heading text-foreground">Hành trình Chuyển đổi Tư duy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Portfolio này không đơn thuần là nơi lưu trữ các kết quả học tập, mà là một bức tranh toàn cảnh phản ánh sự trưởng thành trong tư duy công nghệ. Trải qua 6 bài thực hành cốt lõi, tôi đã học cách tối ưu hoá hiệu suất, quản lý tài nguyên khoa học và từng bước làm chủ các công cụ kỹ thuật số thay vì chỉ thụ động tiếp nhận.
            </p>
          </div>

          {/* Comparison Section */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-heading text-foreground">Sự tiến bộ trước & sau học phần</h2>
              <p className="mt-4 text-muted-foreground">Những thay đổi mang tính bước ngoặt trong quá trình rèn luyện kỹ năng.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {comparisons.map((item, index) => (
                <div key={index} className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-muted p-6 flex items-center gap-4 border-b border-border">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg">{item.category}</h3>
                  </div>
                  <div className="p-6 space-y-8 flex-1">
                    {/* Before */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-destructive" />
                        Trước đây
                      </h4>
                      <ul className="space-y-3">
                        {item.before.map((text, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive/50 shrink-0" />
                            <span className="leading-relaxed">{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* After */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Hiện tại
                      </h4>
                      <ul className="space-y-3">
                        {item.after.map((text, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-foreground font-medium">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span className="leading-relaxed">{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reflections & Future */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            <div className="space-y-6 bg-orange-500/5 p-8 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-2">
                <AlertTriangle className="h-4 w-4" />
                Khó khăn phải trải qua
              </div>
              <h2 className="text-2xl font-bold font-heading text-foreground">Thách thức kỹ thuật</h2>
              <p className="text-muted-foreground leading-relaxed">
                Khó khăn lớn nhất khi xây dựng Portfolio này là việc phải làm quen và ứng dụng Next.js cùng Tailwind CSS trong thời gian ngắn. Ban đầu, tôi khá chật vật với việc chia bố cục và xử lý lỗi hiển thị (responsive) trên điện thoại di động.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bên cạnh đó, việc đưa vào các hiệu ứng nền động, ảnh GIF hay phong cách kính mờ (glassmorphism) sao cho giao diện vẫn mượt mà, tối ưu hiệu suất cũng đòi hỏi tôi phải liên tục tìm tòi và tinh chỉnh từng dòng code.
              </p>
            </div>

            <div className="space-y-6 bg-white/5 dark:bg-black/20 p-8 rounded-3xl border border-border backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
                <BrainCircuit className="h-4 w-4" />
                Cảm nhận dự án
              </div>
              <h2 className="text-2xl font-bold font-heading text-foreground">Vượt qua giới hạn bản thân</h2>
              <p className="text-muted-foreground leading-relaxed">
                Việc tổng hợp một lượng lớn tài nguyên số từng tưởng chừng như quá tải. Tuy nhiên, khi bắt tay vào hệ thống hóa thành một nền tảng báo cáo chuyên nghiệp, dự án đã trở thành cuốn nhật ký ghi lại sự thay đổi tư duy của tôi.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sự tự hào lớn nhất không chỉ nằm ở việc xử lý dứt điểm các lỗi giao diện bằng mã nguồn, tạo ra biểu đồ động thay cho ảnh chụp màn hình khô cứng, mà còn ở việc tôi đã biết nghiêm khắc áp dụng tư duy phản biện và liêm chính học thuật.
              </p>
            </div>

            <div className="space-y-6 bg-primary/5 p-8 rounded-3xl border border-primary/20 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                <ShieldCheck className="h-4 w-4" />
                Định hướng tương lai
              </div>
              <h2 className="text-2xl font-bold font-heading text-foreground">Những viên gạch đầu tiên</h2>
              <p className="text-muted-foreground leading-relaxed">
                Khóa học không chỉ dừng lại ở mặt điểm số, mà thực sự đã định hình trong tôi một hệ tư duy số bền vững. Đây là bước đệm vững chắc để tôi tự tin làm chủ công nghệ trong kỷ nguyên mới.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trong thời gian tới, định hướng của tôi là ứng dụng sức mạnh của các Mô hình Ngôn ngữ Lớn (LLMs) vào việc phân tích dữ liệu sâu, đồng thời kết hợp linh hoạt với kiến thức lập trình nhằm kiến tạo nên những giải pháp công nghệ mang tính thực tiễn cao.
              </p>
            </div>
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
