// app/page.tsx
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Advertise from "./components/Advertise";
import About from "./components/About";
import Location from "./components/Location";
import ActivitySection from "./components/Activities";
export default function Home() {
  return (
    <div>
      <Advertise />
      <HeroSection />
      <Services />
      <Location />
      <ActivitySection />
      <h2 className="text-4xl font-bold text-center my-16">
        Tại sao chọn chúng tôi?
      </h2>
      <p className="text-center text-lg mb-16">
        Chúng tôi cung cấp dịch vụ vận chuyển chuyên nghiệp, nhanh chóng và an
        toàn.
      </p>
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">
              Đội ngũ chuyên nghiệp
            </h3>
            <p>
              Đội ngũ nhân viên của chúng tôi được đào tạo bài bản, sẵn sàng
              phục vụ bạn 24/7.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Giá cả cạnh tranh</h3>
            <p>
              Chúng tôi cam kết mang đến dịch vụ với mức giá hợp lý nhất trên
              thị trường.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Đảm bảo an toàn</h3>
            <p>
              Hàng hóa của bạn sẽ được bảo quản an toàn trong suốt quá trình vận
              chuyển.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Hỗ trợ tận tình</h3>
            <p>
              Chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi để đảm bảo quá
              trình vận chuyển diễn ra suôn sẻ.
            </p>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}
