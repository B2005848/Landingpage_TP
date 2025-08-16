// Services.tsx
"use client";
import Image from "next/image";
import "../styles/Services.css";

export default function Services() {
  return (
    <section id="services" className="mb-5 bg-white ">
      <div className="flex justify-end mb-5 display autoShow ">
        <Image
          src="/contreo.svg"
          alt="Dịch vụ xe container bốc xếp hàng hóa"
          width={1000}
          height={800}
          priority
        />
      </div>

      <div>
        <h3 className="mb-10 text-3xl font-bold text-center ">
          ⚡Dịch vụ của chúng tôi⚡
        </h3>
        <ul className="grid max-w-4xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 ">
          <li className="p-6 rounded-lg shadow-md paragraph_service bg-gray-50">
            <p>Bốc xếp hàng hóa đóng container</p>
          </li>
          <li className="p-6 rounded-lg shadow-md paragraph_service bg-gray-50">
            <p>Dọn dẹp nhà cửa chuyên nghiệp</p>
          </li>
          <li className="p-6 rounded-lg shadow-md paragraph_service bg-gray-50">
            <p>Cung ứng nhân lực theo giờ</p>
          </li>
          <li className="p-6 rounded-lg shadow-md paragraph_service bg-gray-50">
            <p>Dịch vụ phun diệt mối, muỗi và côn trùng</p>
          </li>
          <li className="p-6 rounded-lg shadow-md paragraph_service bg-gray-50">
            <p>Vận chuyển nhà, văn phòng, kho xưởng</p>
          </li>
          <li className="p-6 rounded-lg shadow-md paragraph_service bg-gray-50">
            <p>....................................</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
