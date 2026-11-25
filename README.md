# QuickAttend — Product Landing Page

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-22C55E?logo=github-pages&logoColor=white)](https://quickattend-team.github.io/quickattend-landing/)

> Trang web giới thiệu dự án và sản phẩm **QuickAttend** — Hệ thống điểm danh di động 1-chạm kết hợp Geofencing GPS ngầm, khóa phần cứng thiết bị (Hardware UUID) và cơ chế ủy quyền phiên tạm thời.

---

## 📌 Tính năng nổi bật của Landing Page

1. **Giao diện hiện đại & Responsive:** Tối ưu hóa hiển thị chuẩn xác trên cả màn hình máy tính (Desktop/Laptop) và điện thoại di động (Mobile).
2. **2 Nút kêu gọi hành động (CTA) lớn:**
   - 📱 **Dùng thử Figma Prototype**
   - 📖 **Xem Case Study Behance**
   *(Tích hợp sẵn modal cập nhật trực tiếp URL bài nộp theo đúng mốc thời gian 23h15)*.
3. **Mô phỏng Giao diện Điện thoại (Interactive Phone Mockup):** Trực quan hóa luồng điểm danh 1-chạm của Sinh viên (Guest) và màn hình giám sát thời gian thực của Giảng viên (Host).
4. **Phân tích Thực trạng & Bài toán:** Nêu bật 3 nút thắt lớn trong điểm danh truyền thống tại trường đại học.
5. **Bộ 4 Ưu điểm Vượt trội (UVP):** Điểm danh 1-chạm, Geofencing GPS & Hardware Binding, Ủy quyền phiên giảng dạy, Hàng đợi ngoại tuyến (Offline Queue).
6. **8 User Stories Cốt lõi (US01 – US08):** Có bộ lọc theo vai trò Giảng viên (Host) và Sinh viên (Guest).
7. **Kiến trúc Công nghệ & Đội ngũ:** Giới thiệu công nghệ Expo SDK 52, Express, PostgreSQL 18, Prisma 7 và 4 thành viên nhóm môn CO3043 (ĐH Bách Khoa ĐHQG-HCM).

---

## 🚀 Cài đặt & Khởi chạy Cục bộ

### Yêu cầu tiên quyết
- **Node.js:** >= 20.x hoặc 24.x LTS
- **pnpm:** >= 9.x hoặc 12.x

### Cài đặt dependencies
```bash
pnpm install
```

### Khởi chạy môi trường Dev
```bash
pnpm dev
```
Truy cập tại: `http://localhost:5173/`

### Kiểm tra build sản xuất
```bash
pnpm build
```

---

## 🌐 Triển khai (Deployment)

Dự án đã được cấu hình sẵn GitHub Actions workflow tại `.github/workflows/deploy.yml` để tự động build và deploy lên **GitHub Pages** mỗi khi có commit mới trên nhánh `main`.

---

## 👥 Đội ngũ Phát triển (Nhóm L01 - CO3043)
- **Nguyễn Hồng Thiện Nhân (MSSV: 2410670):** Git Manager / Backend API & Database Lead
- **Lâm Chí Nguyên (MSSV: 2412332):** Frontend Mobile Lead / Architecture & Landing Page
- **Ngô Võ Gia Minh (MSSV: 2412069):** Mobile UI/UX Design & Frontend Feature Dev
- **Nguyễn Huỳnh Tấn Phát (MSSV: 2412585):** QA / Testing, Geofencing & Hardware Auth
