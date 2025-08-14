// app/layout.tsx
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Dịch vụ Vận Tải Bốc Xếp Thiện Phước Bình Dương",
  description:
    "Dịch vụ vận tải bốc xếp hàng hóa chuyên nghiệp tại Bình Dương. Giá rẻ, nhanh chóng, an toàn, uy tín.",
  keywords: [
    "dịch vụ vận tải Bình Dương",
    "bốc xếp hàng hóa",
    "vận tải giá rẻ",
    "Thiện Phước",
    "vận chuyển hàng hóa",
    "dịch vụ bốc xếp",
    "vận tải chuyên nghiệp",
    "vận tải an toàn",
    "vận tải uy tín",
    "vận tải nhanh chóng",
    "vận tải Bình Dương",
    "vận tải hàng hóa",
    "vận tải bốc xếp",
    "vận tải hàng hóa Bình Dương",
    "vận tải hàng hóa giá rẻ",
    "vận tải hàng hóa chuyên nghiệp",
    "vận tải hàng hóa an toàn",
    "vận tải hàng hóa uy tín",
    "vận tải hàng hóa nhanh chóng",
    "vận tải hàng hóa Thiện Phước",
    "vận tải hàng hóa Bình Dương giá rẻ",
    "vận tải hàng hóa Bình Dương chuyên nghiệp",
    "vận tải hàng hóa Bình Dương an toàn",
    "vận tải hàng hóa Bình Dương uy tín",
    "vận tải hàng hóa Bình Dương nhanh chóng",
    "vận tải bốc xếp Bình Dương",
    "vận tải bốc xếp giá rẻ",
    "vận tải bốc xếp chuyên nghiệp",
    "vận tải bốc xếp an toàn",
    "vận tải bốc xếp uy tín",
    "vận tải bốc xếp nhanh chóng",
    "vận tải bốc xếp Thiện Phước",
    "vận tải bốc xếp Bình Dương giá rẻ",
    "vận tải bốc xếp Bình Dương chuyên nghiệp",
    "vận tải bốc xếp Bình Dương an toàn",
    "vận tải bốc xếp Bình Dương uy tín",
    "vận tải bốc xếp Bình Dương nhanh chóng",
    "dịch vụ vận tải bốc xếp Bình Dương",
    "dịch vụ vận tải bốc xếp giá rẻ",
    "dịch vụ vận tải bốc xếp chuyên nghiệp",
    "dịch vụ vận tải bốc xếp an toàn",
    "dịch vụ vận tải bốc xếp uy tín",
    "dịch vụ vận tải bốc xếp nhanh chóng",
    "dịch vụ vận tải bốc xếp Thiện Phước",
    "dịch vụ vận tải bốc xếp Bình Dương giá rẻ",
    "dịch vụ vận tải bốc xếp Bình Dương chuyên nghiệp",
    "dịch vụ vận tải bốc xếp Bình Dương an toàn",
    "dịch vụ vận tải bốc xếp Bình Dương uy tín",
    "dịch vụ vận tải bốc xếp Bình Dương nhanh chóng",
    "vận tải bốc xếp hàng hóa Bình Dương",
    "vận tải bốc xếp hàng hóa giá rẻ",
    "vận tải bốc xếp hàng hóa chuyên nghiệp",
    "vận tải bốc xếp hàng hóa an toàn",
    "vận tải bốc xếp hàng hóa uy tín",
    "vận tải bốc xếp hàng hóa nhanh chóng",
    "vận tải bốc xếp hàng hóa Thiện Phước",
    "vận tải bốc xếp hàng hóa Bình Dương giá rẻ",
  ],
  openGraph: {
    title: "Dịch vụ Vận Tải Bốc Xếp Thiện Phước Bình Dương",
    description:
      "Nhanh chóng - An toàn - Giá rẻ. Hỗ trợ bốc xếp hàng hóa tại Bình Dương và các tỉnh lân cận.",
    url: "https://thienphuocbocxep.id.vn",
    siteName: "Thiện Phước Vận Tải",
    images: [
      {
        url: "/BIAFB.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  alternates: {
    canonical: "https://thienphuocbocxep.id.vn",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/png" />
      </head>
      <body className="text-gray-800 bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
