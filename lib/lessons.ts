export type Stat = {
  value: string
  label: string
}

export type Lesson = {
  slug: string
  number: number
  navLabel: string
  title: string
  desc: string
  image: string
  accent: string
  duration: string
  objectives: string[]
  content: string[]
  stats: Stat[]
  tools: string[]
  outcomes: string[]
}

export const lessons: Lesson[] = [
  {
    slug: "bai-1-thiet-bi-ngoai-vi",
    number: 1,
    navLabel: "Bài 1: Thiết bị & Ngoại vi",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    desc: "Quản lý tệp tin, thư mục và làm quen với thiết bị, ngoại vi máy tính.",
    image: "/topic-files.png",
    accent: "#8b7fd1",
    duration: "3 buổi học",
    objectives: [
      "Hiểu cấu trúc tổ chức tệp tin và thư mục trên máy tính",
      "Thực hiện các thao tác tạo, sao chép, di chuyển và xoá tệp",
      "Nhận biết và sử dụng các thiết bị ngoại vi phổ biến",
    ],
    content: [
      "Trong bài học này, tôi đã tìm hiểu cách tổ chức và quản lý dữ liệu một cách khoa học thông qua hệ thống tệp tin và thư mục. Việc đặt tên hợp lý, phân cấp thư mục rõ ràng giúp tìm kiếm và lưu trữ tài liệu học tập hiệu quả hơn.",
      "Bên cạnh đó, tôi cũng làm quen với các thiết bị ngoại vi như bàn phím, chuột, máy in, ổ lưu trữ và cách chúng kết nối, tương tác với máy tính trong quá trình học tập và làm việc.",
    ],
    stats: [
      { value: "120+", label: "Tệp được tổ chức lại" },
      { value: "8", label: "Thư mục phân cấp" },
      { value: "40%", label: "Thời gian tìm kiếm giảm" },
    ],
    tools: ["Windows Explorer", "Google Drive", "USB / Ổ cứng ngoài", "Máy in"],
    outcomes: [
      "Xây dựng hệ thống thư mục học tập theo từng học phần",
      "Quy ước đặt tên tệp nhất quán, dễ truy xuất",
      "Sao lưu dữ liệu định kỳ lên đám mây",
    ],
  },
  {
    slug: "bai-2-khai-thac-du-lieu",
    number: 2,
    navLabel: "Bài 2: Khai thác dữ liệu",
    title: "Khai thác và đánh giá dữ liệu",
    desc: "Tìm kiếm, thu thập và đánh giá độ tin cậy của thông tin học thuật.",
    image: "/topic-data.png",
    accent: "#5b9bd5",
    duration: "4 buổi học",
    objectives: [
      "Sử dụng công cụ tìm kiếm nâng cao để thu thập thông tin",
      "Đánh giá độ tin cậy và tính chính xác của nguồn dữ liệu",
      "Tổng hợp và trích dẫn thông tin một cách hợp lệ",
    ],
    content: [
      "Tôi học cách khai thác thông tin từ nhiều nguồn khác nhau, sử dụng các toán tử tìm kiếm và bộ lọc để thu hẹp kết quả phù hợp với nhu cầu nghiên cứu.",
      "Quan trọng hơn, bài học giúp tôi rèn luyện tư duy phản biện để đánh giá độ tin cậy của nguồn dữ liệu, phân biệt thông tin học thuật chất lượng với thông tin thiếu kiểm chứng.",
    ],
    stats: [
      { value: "50+", label: "Nguồn được khảo sát" },
      { value: "15", label: "Tiêu chí đánh giá" },
      { value: "92%", label: "Nguồn đạt độ tin cậy" },
    ],
    tools: ["Google Scholar", "Toán tử tìm kiếm nâng cao", "Zotero", "Wikipedia (đối chiếu)"],
    outcomes: [
      "Lập danh mục nguồn tham khảo có chọn lọc",
      "Áp dụng bộ tiêu chí CRAAP để đánh giá nguồn",
      "Trích dẫn đúng chuẩn, tránh đạo văn",
    ],
  },
  {
    slug: "bai-3-tong-quan-ai",
    number: 3,
    navLabel: "Bài 3: Tổng quan AI",
    title: "Kỹ thuật Prompt Engineering",
    desc: "Viết câu lệnh hiệu quả cho các tác vụ học tập với trí tuệ nhân tạo.",
    image: "/topic-prompt.png",
    accent: "#6aab8e",
    duration: "5 buổi học",
    objectives: [
      "Hiểu khái niệm cơ bản về trí tuệ nhân tạo tạo sinh",
      "Xây dựng prompt rõ ràng, có ngữ cảnh và mục tiêu cụ thể",
      "Tinh chỉnh và lặp lại prompt để cải thiện kết quả",
    ],
    content: [
      "Bài học mang đến cái nhìn tổng quan về trí tuệ nhân tạo và cách các mô hình ngôn ngữ lớn hoạt động. Tôi hiểu được tiềm năng cũng như giới hạn của AI trong học tập.",
      "Tôi thực hành kỹ thuật Prompt Engineering — cách diễn đạt yêu cầu rõ ràng, cung cấp ngữ cảnh và ràng buộc để AI trả về kết quả chính xác và hữu ích nhất.",
    ],
    stats: [
      { value: "30+", label: "Prompt được thử nghiệm" },
      { value: "5", label: "Mô hình AI sử dụng" },
      { value: "3x", label: "Chất lượng kết quả cải thiện" },
    ],
    tools: ["ChatGPT", "Gemini", "Claude", "Copilot"],
    outcomes: [
      "Thiết kế prompt theo cấu trúc vai trò - ngữ cảnh - yêu cầu",
      "Xây dựng thư viện prompt mẫu cho học tập",
      "Kiểm chứng và đối chiếu kết quả do AI tạo ra",
    ],
  },
  {
    slug: "bai-4-hop-tac-so",
    number: 4,
    navLabel: "Bài 4: Hợp tác số",
    title: "Hợp tác trực tuyến",
    desc: "Sử dụng các công cụ hợp tác trực tuyến cho dự án nhóm.",
    image: "/topic-collab.png",
    accent: "#e0a458",
    duration: "3 buổi học",
    objectives: [
      "Sử dụng công cụ làm việc nhóm và chia sẻ tài liệu trực tuyến",
      "Phối hợp chỉnh sửa và quản lý phiên bản tài liệu",
      "Giao tiếp và phân công công việc hiệu quả trong nhóm",
    ],
    content: [
      "Tôi làm quen với các nền tảng hợp tác trực tuyến giúp nhiều người cùng làm việc trên một tài liệu theo thời gian thực, theo dõi lịch sử chỉnh sửa và bình luận trực tiếp.",
      "Kỹ năng này rất quan trọng cho các dự án nhóm, giúp việc phân công, trao đổi và tổng hợp công việc trở nên minh bạch và hiệu quả hơn.",
    ],
    stats: [
      { value: "4", label: "Dự án nhóm thực hiện" },
      { value: "12", label: "Thành viên phối hợp" },
      { value: "100%", label: "Tài liệu đồng bộ thời gian thực" },
    ],
    tools: ["Google Docs", "Google Meet", "Trello", "Slack"],
    outcomes: [
      "Quản lý tài liệu nhóm với phân quyền rõ ràng",
      "Theo dõi tiến độ công việc qua bảng Kanban",
      "Tổ chức họp trực tuyến và ghi chú biên bản",
    ],
  },
  {
    slug: "bai-5-sang-tao-noi-dung",
    number: 5,
    navLabel: "Bài 5: Sáng tạo nội dung",
    title: "Sáng tạo nội dung số",
    desc: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung học tập.",
    image: "/topic-content.png",
    accent: "#e07856",
    duration: "4 buổi học",
    objectives: [
      "Ứng dụng AI tạo sinh để hỗ trợ sản xuất nội dung",
      "Kết hợp văn bản, hình ảnh và đa phương tiện",
      "Biên tập và hoàn thiện nội dung theo mục tiêu truyền đạt",
    ],
    content: [
      "Bài học hướng dẫn cách tận dụng các công cụ AI tạo sinh để hỗ trợ ý tưởng, soạn thảo và tạo nội dung số như văn bản, hình ảnh và bài trình bày.",
      "Tôi học cách sử dụng AI như một công cụ hỗ trợ sáng tạo, đồng thời giữ vai trò chủ động trong việc biên tập, kiểm chứng và hoàn thiện sản phẩm cuối cùng.",
    ],
    stats: [
      { value: "20+", label: "Sản phẩm nội dung tạo ra" },
      { value: "6", label: "Định dạng đa phương tiện" },
      { value: "60%", label: "Thời gian sản xuất tiết kiệm" },
    ],
    tools: ["Canva", "Gamma", "DALL·E", "CapCut"],
    outcomes: [
      "Sản xuất bài trình bày trực quan, sinh động",
      "Tạo hình ảnh minh hoạ phù hợp nội dung",
      "Biên tập video ngắn phục vụ học tập",
    ],
  },
  {
    slug: "bai-6-liem-chinh-hoc-thuat",
    number: 6,
    navLabel: "Bài 6: Liêm chính học thuật",
    title: "Liêm chính học thuật",
    desc: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu.",
    image: "/topic-integrity.png",
    accent: "#d6608a",
    duration: "2 buổi học",
    objectives: [
      "Hiểu nguyên tắc liêm chính học thuật khi sử dụng AI",
      "Trích dẫn nguồn và ghi nhận đóng góp đúng cách",
      "Sử dụng công nghệ một cách có đạo đức và trách nhiệm",
    ],
    content: [
      "Bài học cuối cùng nhấn mạnh tầm quan trọng của liêm chính học thuật trong thời đại số. Tôi hiểu được ranh giới giữa việc sử dụng AI để hỗ trợ học tập và việc lạm dụng dẫn đến gian lận.",
      "Tôi học cách trích dẫn nguồn, ghi nhận sự hỗ trợ của công cụ và duy trì sự trung thực trong mọi sản phẩm học thuật của mình.",
    ],
    stats: [
      { value: "100%", label: "Sản phẩm có trích dẫn nguồn" },
      { value: "5", label: "Nguyên tắc đạo đức áp dụng" },
      { value: "0", label: "Vi phạm liêm chính" },
    ],
    tools: ["Turnitin", "APA / IEEE Style", "Google Scholar", "Quy tắc trích dẫn"],
    outcomes: [
      "Trích dẫn và ghi nhận đóng góp của AI minh bạch",
      "Kiểm tra trùng lặp trước khi nộp bài",
      "Cam kết trung thực trong mọi sản phẩm học thuật",
    ],
  },
]

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug)
}
