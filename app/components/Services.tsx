// Services.tsx
"use client";
import Image from "next/image";
export default function Services() {
  const services = [
    "Bốc xếp hàng hóa đóng container",
    "Vận chuyển nhà, văn phòng, kho xưởng",
    "Dọn dẹp nhà cửa chuyên nghiệp",
    "Cung ứng nhân lực theo giờ",
    "Dịch vụ phun diệt mối, muỗi và côn trùng",
    "...........",
  ];
  return (
    <section id="services" className=" bg-white mb-5">
      <div className="display flex justify-end mb-5 ">
        <Image
          src="/contreo.svg"
          alt="Dịch vụ xe container bốc xếp hàng hóa"
          width={1000}
          height={800}
          priority
        />
      </div>

      <div>
        <h3 className="text-3xl font-bold text-center mb-10">
          ⚡Dịch vụ của chúng tôi⚡
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <li key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
