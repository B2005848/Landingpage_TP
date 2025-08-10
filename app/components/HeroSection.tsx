"use client";

import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="bg-blue-100 py-20 px-8 text-center">
      <div className="display flex justify-between items-center flex-col md:flex-row">
        <div>
          <Image
            src="/xecontainerxanh.svg"
            alt="Dịch vụ xe container bốc xếp hàng hóa chuyên nghiệp tại Bình Dương và TP. HCM"
            width={800}
            height={600}
            priority
          />{" "}
        </div>

        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
            Dịch vụ Bốc Xếp & Vận Chuyển Hàng Hóa Chuyên Nghiệp
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Nhanh chóng – An toàn – Tiết kiệm. Phục vụ tại Bình Dương, TP. HCM,
            Tân Uyên, Dĩ An, Thuận An, Bến Cát.
          </p>

          {/* Điểm mạnh */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚚</span>
              <span className="text-gray-800 text-sm">Phục vụ 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span className="text-gray-800 text-sm">5+ năm kinh nghiệm</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💰</span>
              <span className="text-gray-800 text-sm">Giá cả hợp lý</span>
            </div>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61579351585076&locale=vi_VN"
            target="_blank"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            NHẮN TIN NGAY
          </a>
        </div>
      </div>
    </section>
  );
}
