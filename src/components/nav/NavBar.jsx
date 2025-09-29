import React from "react";
import { LuHeart, LuMenu, LuSearch, LuUser } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
// Thay thế Next.js font
const redressedStyle = {
  fontFamily: "'Redressed', cursive",
  fontWeight: 400
};

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <LuHeart className="h-8 w-8 text-pink-500 mr-2" />
              <span className="text-2xl font-bold text-pink-500">GiveNow</span>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex space-x-8">
              <a onClick={() => navigate('/')} className="text-gray-700 hover:text-pink-500 font-medium cursor-pointer">
                Trang chủ
              </a>
              <a onClick={() => navigate('/campaign')} className="text-gray-700 hover:text-pink-500 font-medium cursor-pointer">
                Dự án
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">
                Về chúng tôi
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">
                Hướng dẫn
              </a>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Ủng hộ ngay
              </button>
              <button className="hidden md:block text-gray-500 hover:text-gray-700">
                <LuSearch className="h-5 w-5" />
              </button>
              <UserMenu user={currentUser} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;