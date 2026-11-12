# nguyentrungkien-blog

Blog và website cá nhân của Nguyễn Trung Kiên, dựng bằng [Astro](https://astro.build) theo mẫu blog chính thức của Cloudflare và chạy trên Cloudflare Workers (Static Assets).

- Địa chỉ đang chạy: https://nguyentrungkien-blog.nguyentrungkien.workers.dev
- Có sẵn Markdown/MDX, RSS (`/rss.xml`), sitemap, SEO (canonical, OpenGraph).

## Viết bài mới

Tạo một file `.md` hoặc `.mdx` trong `src/content/blog/`, phần đầu file có:

```md
---
title: "Tiêu đề bài"
description: "Mô tả ngắn"
pubDate: "2026-11-12"
heroImage: "../../assets/anh-bia.jpg"   # tuỳ chọn
---
```

Lưu xong, bài tự xuất hiện ở trang `/blog/`.

## Chạy trên máy

Cần Node 22 trở lên.

```bash
npm install
npm run dev        # xem thử tại http://localhost:4321
npm run build      # build ra thư mục dist/
npm run deploy     # đẩy lên Cloudflare Workers (cần wrangler login)
```

## Cấu trúc

```
src/
  components/   # Header, Footer, BaseHead...
  content/blog/ # bài viết
  layouts/      # khung trang
  pages/        # trang chủ, /blog, /about, rss.xml
public/         # file tĩnh (favicon, font)
astro.config.mjs
wrangler.json   # cấu hình Worker tĩnh
```

## Tự động deploy

Mỗi lần push hoặc merge vào `main`, Cloudflare Workers Builds tự chạy `npm run build` rồi `npx wrangler deploy`, không cần chạy `npm run deploy` bằng tay. GitHub Actions (`.github/workflows/ci.yml`) kiểm tra build cho mọi commit và PR.
