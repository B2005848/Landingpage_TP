// app/layout.tsx
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Dịch vụ Vận Tải Bốc Xếp Thiện Phước Bình Dương",
  description: "Welcome to our site!",
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
