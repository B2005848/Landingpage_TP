"use client";
export default function Advertise() {
  const text =
    "🚛 Bốc xếp – Vận chuyển hàng hóa nhanh chóng, an toàn – Giá rẻ tại Bình Dương & TP.HCM! 📦 Nhận hàng – Giao hàng đúng hẹn, phục vụ 24/7, không ngại đường xa! 🏆 Hơn 5 năm kinh nghiệm – Hàng hóa an toàn tuyệt đối! ⚡ Nhanh chóng – Uy tín – Chất lượng – Tiết kiệm tối đa chi phí! 💪 Đội ngũ chuyên nghiệp – Dịch vụ trọn gói – Giá cạnh tranh! 📍 Phục vụ mạnh tại Thuận An, Bình Dương.";

  return (
    <div className="bg-blue-600 text-white py-2 mb-3 overflow-hidden whitespace-nowrap">
      <div className="marquee">
        <span>{text}</span>
        <span>{text}</span>
      </div>

      <style jsx>{`
        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        .marquee span {
          display: inline-block;
          padding-right: 2rem; /* khoảng cách giữa các lần lặp */
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
