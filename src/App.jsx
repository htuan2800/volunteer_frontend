import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const userState = useSelector((state) => state.user)
  console.log('userState', userState)
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/70">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://static.thiennguyen.app/public/banner/2025/6/23/1aaada3e-e069-4d11-a0d2-455cf7a9de41.jpg')`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Pink Banner */}
          <div className="inline-block bg-pink-500 opacity-90 text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
            Nền tảng gây quỹ cộng đồng trực tuyến
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Tiền ủng hộ được chuyển trực tiếp<br />
            đến các tổ chức gây quỹ
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg cursor-pointer">
              Bắt đầu ủng hộ
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all cursor-pointer">
              Tìm hiểu thêm
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        {/* <div className="absolute top-1/4 left-10 hidden lg:block">
          <div className="w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-1/4 right-10 hidden lg:block">
          <div className="w-16 h-16 bg-pink-500/20 rounded-full animate-bounce"></div>
        </div> */}
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">10,000+</div>
              <div className="text-gray-600">Dự án đã được hỗ trợ</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">50 tỷ</div>
              <div className="text-gray-600">VND đã quyên góp</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-pink-500 mb-2">1M+</div>
              <div className="text-gray-600">Người đã tham gia</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cách thức hoạt động
            </h2>
            <p className="text-xl text-gray-600">
              Quy trình đơn giản để bắt đầu gây quỹ cho mục đích nhân ái
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-500">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tạo chiến dịch
              </h3>
              <p className="text-gray-600">
                Chia sẻ câu chuyện và mục tiêu quyên góp của bạn
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-500">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chia sẻ với mọi người
              </h3>
              <p className="text-gray-600">
                Lan truyền chiến dịch qua mạng xã hội và bạn bè
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-500">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nhận ủng hộ
              </h3>
              <p className="text-gray-600">
                Tiền được chuyển trực tiếp đến tổ chức của bạn
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
