# Next/font

Google fonts
Font weights
Subset
Variables
Multiple fonts
Local fonts
Tailwind fonts

## Kien thuc

- Import
  `import {Roboto} from "next/font/google"`
- Khai bao
  `const roboto = Roboto({subsets: ["latin"]})`

# TypeScript

`ComponentProps<"svg"> `: Lấy ra các props của thẻ svg

# Next/link

- href: đường dẫn truyền vào có thể là đường dẫn hoặc 1 đối tương
  `href={{pathname: url, query: {page: 1}}}`
  làm viêc với link có query
- replace thay thế đường dẫn và ko lưu lại trong lịch sủ
- scroll: mặc định là true, nghĩa là load lại trang thì nó sẽ lên đầu trang, có thể đặt false
- prefetch

### Hook UsePathname:

\_ Hiện ra lỗi ý là cái này chạy trên mội trường client chứ ko chạy trên môi trường server. Mặc định của NextJs là chạy ở phía server.
===> Cách khắc phục:
Thêm "use client" Ở phía đầu file

log của Pathname là cái: ví dụ localhost:3000/explore thì console.log ra thì nó ra cái "/explore"
