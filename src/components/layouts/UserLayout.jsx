import { Outlet } from "react-router-dom";
import Navbar from "../nav/NavBar";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
const UserLayout = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <Navbar />

                <Outlet />

                {/* Footer */}
                {/* Footer */}
                <footer className="bg-gray-100 pt-16 pb-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
                            {/* Logo */}
                            <div className="col-span-2 md:col-span-1">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                                        <img src="/src/assets/OIP (2).webp" alt="" className="h-5 w-5 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Ủng hộ */}
                            <div className="col-span-1">
                                <h3 className="font-semibold text-gray-900 mb-4">Ủng hộ</h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li><a href="#" className="hover:text-gray-900">Chiến dịch</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Đóng hành</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Tổ chức gây quỹ</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Cá nhân gây quỹ</a></li>
                                </ul>
                            </div>

                            {/* Gây quỹ */}
                            <div className="col-span-1">
                                <h3 className="font-semibold text-gray-900 mb-4">Gây quỹ</h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li><a href="#" className="hover:text-gray-900">Bắt đầu</a></li>
                                </ul>
                            </div>

                            {/* Khám phá */}
                            <div className="col-span-1">
                                <h3 className="font-semibold text-gray-900 mb-4">Khám phá</h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li><a href="#" className="hover:text-gray-900">Bản đồ thiện nguyện</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Sự kiện thiện nguyện</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Bảng tin</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Tin tức</a></li>
                                    <li>
                                        <div className="mt-4">
                                            <div className="inline-block bg-lime-400 text-black text-xs font-bold px-2 py-1 rounded mb-2">
                                                #HiGreen
                                            </div>
                                            <div>
                                                <span className="text-xs text-lime-400 font-bold">#HiGreen</span>
                                                <div className="text-blue-600 font-bold text-sm">TRƯỜNG SA</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Giới thiệu */}
                            <div className="col-span-1">
                                <h3 className="font-semibold text-gray-900 mb-4">Giới thiệu</h3>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li><a href="#" className="hover:text-gray-900">Về thiện nguyện</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Hỏi đáp</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Điều khoản sử dụng</a></li>
                                    <li><a href="#" className="hover:text-gray-900">Chính sách bảo mật</a></li>
                                </ul>
                            </div>

                            {/* Tải app */}
                            <div className="col-span-2 md:col-span-1">
                                <h3 className="font-semibold text-gray-900 mb-4">Tải app để tham gia cộng đồng</h3>
                                <div className="space-y-3">
                                    <a href="#" className="block">
                                        <img
                                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Crect width='120' height='40' rx='5' fill='%23000'/%3E%3Ctext x='60' y='25' text-anchor='middle' fill='white' font-size='12' font-family='Arial'%3EApp Store%3C/text%3E%3C/svg%3E"
                                            alt="Download on App Store"
                                            className="w-32 h-10"
                                        />
                                    </a>
                                    <a href="#" className="block">
                                        <img
                                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Crect width='120' height='40' rx='5' fill='%23000'/%3E%3Ctext x='60' y='25' text-anchor='middle' fill='white' font-size='12' font-family='Arial'%3EGoogle Play%3C/text%3E%3C/svg%3E"
                                            alt="Get it on Google Play"
                                            className="w-32 h-10"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Bottom section */}
                        <div className="border-t border-gray-200 pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div className="text-sm text-gray-500 text-center md:text-left mb-4 md:mb-0">
                                    <p>
                                        Giải pháp thuộc Đề án Hệ tri thức Việt số hóa (TiTiHub), cấu phần Nền tảng nhận dao số quốc gia do<br />
                                        MBBank xây dựng và vận hành theo Quyết định số 3068/QĐ-BKHCN
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <span className="text-sm text-gray-500 mr-2">Powered by</span>
                                    <div className="flex items-center">
                                        <span className="text-blue-600 font-bold text-lg">MB</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chat widget placeholder */}
                        <div className="fixed bottom-8 right-8">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-orange-600 transition-colors">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-orange-500 text-xs">👤</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default UserLayout;