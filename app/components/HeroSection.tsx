"use client";

import Image from "next/image";
import "../styles/HeroSection.css"; // Assuming you have styles for the HeroSection
export default function HeroSection() {
  return (
    <section className="px-8 py-20 text-center bg-blue-100 rounded-lg ">
      <div className="flex flex-col items-center justify-between display md:flex-row">
        <div>
          <Image
            className="image-container"
            src="/xecontainerxanh.svg"
            alt="Dịch vụ xe container bốc xếp hàng hóa chuyên nghiệp tại Bình Dương và TP. HCM"
            width={800}
            height={600}
            priority
          />{" "}
        </div>

        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-blue-700 md:text-5xl">
            Dịch vụ Bốc Xếp & Vận Chuyển Hàng Hóa Chuyên Nghiệp
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Nhanh chóng – An toàn – Tiết kiệm. Phục vụ tại Bình Dương, TP. HCM,
            Tân Uyên, Dĩ An, Thuận An, Bến Cát.
          </p>

          {/* Điểm mạnh */}
          <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚚</span>
              <span className="text-sm text-gray-800">Phục vụ 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span className="text-sm text-gray-800">5+ năm kinh nghiệm</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💰</span>
              <span className="text-sm text-gray-800">Giá cả hợp lý</span>
            </div>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61579351585076&locale=vi_VN"
            target="_blank"
            className="inline-block px-6 py-3 mt-8 text-lg font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            NHẮN TIN NGAY
          </a>
        </div>
      </div>
    </section>
  );
}
