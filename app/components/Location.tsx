export default function Location() {
  return (
    <section id="location" className="py-16 px-8 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">
          Địa bàn hoạt động
        </h2>
        <p className="text-lg mb-10 text-gray-700">
          Chúng tôi cung cấp dịch vụ nhanh chóng, chuyên nghiệp tại các khu vực
          trọng điểm sau:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              Bình Dương
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Tân Uyên</li>
              <li>Dĩ An</li>
              <li>Thuận An</li>
              <li>Bến Cát</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              TP. Hồ Chí Minh
            </h3>
            <p className="text-gray-700">
              Hỗ trợ giao hàng, vận chuyển, và dọn dẹp tại các quận nội thành và
              vùng ven.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              Khu vực khác?
            </h3>
            <p className="text-gray-700">
              Vui lòng liên hệ để được tư vấn cụ thể về khả năng phục vụ tại địa
              phương của bạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
