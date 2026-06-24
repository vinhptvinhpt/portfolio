import type { SiteContent } from './types'

export const vi: SiteContent = {
  nav: {
    about: 'Giới thiệu',
    experience: 'Kinh nghiệm',
    skills: 'Kỹ năng',
    projects: 'Dự án',
    certifications: 'Chứng chỉ',
    contact: 'Liên hệ',
  },
  hero: {
    name: 'PHẠM TUẤN VINH',
    title: 'Senior Scrum Master · RTE · Delivery Manager · Lập trình viên',
    tagline: 'Kết hợp tư duy lãnh đạo Agile và nền tảng kỹ thuật để triển khai ở quy mô lớn.',
    cta_work: 'Xem dự án',
    cta_contact: 'Liên hệ',
  },
  about: {
    heading: 'Về tôi',
    bio: [
      'Tôi là Senior Scrum Master và Release Train Engineer với hơn 7 năm kinh nghiệm dẫn dắt chuyển đổi Agile trong lĩnh vực ngân hàng, giáo dục và công nghệ.',
      'Hiện tại tại ABBANK, tôi dẫn dắt 5 squad trong 6 ART theo mô hình SAFe 6.0, quản lý hơn 190 thành viên nội bộ và đối tác trong mảng Ngân hàng Số Bán lẻ.',
      'Nền tảng của tôi trải rộng từ lãnh đạo delivery đến lập trình full-stack — mang lại khả năng hiếm có trong việc kết nối chiến lược kinh doanh, đội ngũ kỹ thuật và kết quả sản phẩm.',
    ],
    strengths: ['SAFe 6.0 RTE', 'PSM II', 'LeSS', 'Full-stack Dev', '7+ Năm', '190+ Thành viên'],
  },
  experience: {
    heading: 'Kinh nghiệm',
    items: [
      {
        company: 'ABBANK',
        period: 'Tháng 4/2024 – Hiện tại',
        role: 'Senior Scrum Master / RTE — ART Ngân hàng Số Bán lẻ · SAFe 6.0',
        bullets: [
          'Đồng thời đảm nhận vai trò Project Manager cho dự án tích hợp eKYC/OCR.',
          'Áp dụng SAFe 6.0 thúc đẩy chuyển đổi Agile cho hơn 190 thành viên.',
          'Quản lý 5 squad (13 thành viên/squad) cho các mảng Onboarding, eKYC, RAR-C06, S&I, Cho vay, Tài khoản và Ngân hàng gia đình.',
          'Dẫn dắt ART qua 6 squad — điều phối PI Planning, giao hàng liên squad và liên kết chiến lược.',
        ],
      },
      {
        company: 'OpenCommerce Group',
        period: 'Tháng 3/2023 – Tháng 3/2024',
        role: 'Senior Scrum Master · LeSS',
        bullets: [
          'Quản lý 3 team (45 thành viên): Front (Storefront), Plusbase và Printbase.',
          'Giám sát toàn bộ vòng đời dự án theo phương pháp Scrum.',
          'Phối hợp với các bên liên quan (CSM, Vận hành) và đội kỹ thuật để định nghĩa deliverable và tiến độ.',
        ],
      },
      {
        company: 'TinhVan Education',
        period: 'Tháng 5/2019 – Tháng 3/2023',
        role: 'Project Manager / Scrum Master · Lập trình viên Full-stack',
        bullets: [
          'Dẫn dắt 6 dự án với vai trò SM/PM cho doanh nghiệp tư nhân và cơ quan nhà nước.',
          'Chuyển đổi phòng QA từ Waterfall sang Agile Scrum.',
          'Quản lý triển khai Jira và Confluence toàn công ty.',
          'Tham gia phát triển full-stack cho 8 dự án — thiết kế, code, kiểm thử, triển khai server.',
        ],
      },
      {
        company: 'FPT Software',
        period: 'Tháng 4/2018 – Tháng 5/2019',
        role: 'Lập trình viên',
        bullets: [
          'Phát triển J-PROCURE (hệ thống JFE, thương mại điện tử & quản lý nội bộ) — 40 người, Struts 1, Oracle.',
          'Phát triển TRMS cho Toppan Printing Co. (hệ thống báo cáo nội bộ) — 20 người, Django, Angular 7.',
        ],
      },
      {
        company: 'Dự án An ninh Thông tin',
        period: 'Tháng 11/2018 – Tháng 5/2019',
        role: 'Team Leader',
        bullets: [
          'Dẫn dắt đánh giá tác động bảo mật của Drupalgeddon 2 trên Internet.',
          'Thu thập 10 triệu site, lọc 140K site Drupal, phát triển công cụ phát hiện CVE 2018-7600 / 2019-6340.',
        ],
      },
      {
        company: 'CMC Infosec',
        period: 'Tháng 11/2017 – Tháng 4/2018',
        role: 'Kiểm thử xâm nhập (Thực tập)',
        bullets: [
          'Đánh giá bảo mật toàn diện cho hệ thống máy tính và ứng dụng web.',
          'Đánh giá rủi ro trên server Linux, Kali, Windows Server và thiết bị bảo mật.',
        ],
      },
      {
        company: 'Freelancer',
        period: 'Liên tục',
        role: 'Team Leader / Lập trình viên',
        bullets: [
          'Dẫn dắt nhóm nhỏ xây dựng landing page, nền tảng thương mại điện tử và cổng e-learning.',
          'Stack: WooCommerce, WordPress, Moodle, PHP, Python, MySQL, MongoDB, Docker, Nginx.',
        ],
      },
    ],
  },
  skills: {
    heading: 'Kỹ năng',
    groups: [
      {
        title: 'Agile & Delivery',
        skills: ['SAFe 6.0', 'Scrum', 'LeSS', 'Kanban', 'PI Planning', 'OKR', 'Spotify Model', 'Quản lý rủi ro', 'Quản lý stakeholder'],
      },
      {
        title: 'Kỹ thuật',
        skills: ['PHP', 'Python', 'Java Core', 'C', 'Laravel', 'Vue.js', 'Django', 'Docker', 'MySQL', 'MongoDB', 'Oracle', 'Nginx', 'Apache', 'Git'],
      },
      {
        title: 'Công cụ',
        skills: ['Jira', 'Confluence', 'Figma', 'Miro', 'Postman', 'JMeter', 'OWASP ZAP', 'Trello', 'ClickUp', 'MS Office', 'Canva'],
      },
    ],
  },
  projects: {
    heading: 'Dự án',
    items: [
      {
        name: 'ART Ngân hàng Số Bán lẻ — ABBANK',
        role: 'RTE',
        teamSize: 80,
        tech: ['SAFe 6.0', 'Jira', 'Confluence'],
        description: 'Dẫn dắt 6 squad trong PI Planning đồng bộ cho các mảng Onboarding, eKYC, S&I, Cho vay, Tài khoản & Ngân hàng gia đình.',
      },
      {
        name: 'Tích hợp eKYC/OCR — ABBANK',
        role: 'Project Manager',
        teamSize: 13,
        tech: ['eKYC', 'OCR', 'Agile'],
        description: 'Quản lý toàn bộ quá trình triển khai hệ thống xác minh danh tính số cho ngân hàng bán lẻ.',
      },
      {
        name: 'Libol Bookworm — Đại học Quốc gia Việt Nam',
        role: 'Project Manager',
        teamSize: 15,
        tech: ['Libol', '.NET'],
        description: 'Hệ thống quản lý thư viện cho Đại học Quốc gia Việt Nam.',
      },
      {
        name: 'Etesting — Học viện An ninh Nhân dân',
        role: 'Scrum Master',
        teamSize: 12,
        tech: ['MongoDB', 'Docker', 'Laravel', 'HiFace TinhVan'],
        description: 'Nền tảng thi trực tuyến cho Học viện An ninh Nhân dân.',
      },
      {
        name: 'Hệ thống E-learning ULIS',
        role: 'Team Leader',
        teamSize: 13,
        tech: ['C#', 'Laravel', 'VMware vCenter', 'HAProxy', 'Nginx', 'MySQL'],
        description: 'Hệ thống học trực tuyến cho Trường Đại học Ngoại ngữ — ĐHQGHN.',
      },
      {
        name: 'AIC Smartschool — 13 tỉnh phía Bắc',
        role: 'Lập trình viên',
        teamSize: 13,
        tech: ['Laravel', 'Amazon S3', 'Docker'],
        description: 'Nền tảng trường học thông minh triển khai tại 13 tỉnh miền Bắc Việt Nam.',
      },
    ],
  },
  certifications: {
    heading: 'Chứng chỉ & Giải thưởng',
    certs_title: 'Chứng chỉ',
    awards_title: 'Thành tích & Giải thưởng',
    certs: [
      { name: 'Professional Scrum Master™ II (PSM II)', issuer: 'Scrum.org' },
      { name: 'IBM IT Scrum Master', issuer: 'IBM' },
      { name: 'Chứng chỉ SQL (Nâng cao)', issuer: 'HackerRank' },
    ],
    awards: [
      { title: 'Transformation Star — Luồng công việc Kỹ thuật số & Core Tech', year: '2024' },
      { title: 'Best Team — Open Commerce Group #front team', year: '2023' },
      { title: 'Project Manager xuất sắc nhất — TinhVan Group', year: '2021' },
      { title: 'Top 5 sinh viên CNTT — Giải thưởng Thành tích Sinh viên Học kỳ Hè', year: '2019' },
      { title: 'Lập trình viên hiệu suất cao — Dự án J-PROCURE, FPT Software', year: '2018' },
      { title: 'Java Red Developer — Đại học FPT', year: '2016' },
      { title: 'C Red Developer — Đại học FPT', year: '2016' },
    ],
  },
  contact: {
    heading: 'Liên hệ',
    tagline: 'Sẵn sàng cho cơ hội mới và các dự án thú vị.',
    name_label: 'Họ và tên',
    email_label: 'Email của bạn',
    message_label: 'Tin nhắn',
    submit_label: 'Gửi tin nhắn',
    success_msg: 'Đã gửi! Tôi sẽ phản hồi sớm nhất có thể.',
    error_msg: 'Có lỗi xảy ra. Vui lòng thử lại hoặc email trực tiếp cho tôi.',
  },
}
