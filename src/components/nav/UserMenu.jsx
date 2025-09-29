import UserService from "@/services/UserService";
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { LuMenu, LuSearch, LuUser } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { resetUser } from "@/redux/features/userSlice";


// Giả định bạn đang sử dụng một hàm đăng xuất tương tự

const UserMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("User in UserMenu:", user);
  // const [loading, setLoading]=useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Lấy user từ Redux store thay vì props
  const handleLogout = async () => {
    try {
      // setLoading(true);
      await UserService.logoutUser();
      dispatch(resetUser());
      localStorage.removeItem("access_token_user");
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed", error);
      // Thông báo lỗi cho người dùng nếu cần
    }
    // finally {
    //   // setLoading(false);
    // }
  }

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    toggleOpen();
  };

  return (
    <>

      {
        user ? (
          <div className="relative">
            <div
              onClick={toggleOpen}
              className="
              p-2
              border-[1px]
              border-slate-50
              flex
              flex-row
              items-center
              gap-1
              rounded-full
              cursor-pointer
              hover:shadow-md
              transition
              text-slate-700
            "
            >
              <img className="w-8 h-8 rounded-full" src={user?.avatar ? user.avatar : "https://tse4.mm.bing.net/th/id/OIP.uEvmaz2eraFNVFyGll5NOQHaKX?w=750&h=1050&rs=1&pid=ImgDetMain&o=7&rm=3"} />
              <AiFillCaretDown className="text-white" />
            </div>

            {isOpen && (
              <div
                className="
                absolute
                rounded-sm
                shadow-md
                w-[170px]
                bg-white
                overflow-hidden
                right-0
                top-12
                text-sm
                text-gray-700
                flex
                flex-col
                cursor-pointer
              "
              >
                {(
                  <div>
                    <MenuItem onClick={() => handleNavigation("/user-info")}>
                      Xem trang cá nhân
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigation("/orders")}>
                      Chỉnh sửa thông tin
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        toggleOpen();
                        handleLogout();
                      }}
                    >
                      Đăng xuất
                    </MenuItem>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (

          <>
            <button className="hidden md:flex items-center text-gray-700 hover:text-pink-500 cursor-pointer" onClick={() => navigate('/register')}>
              <LuUser className="h-5 w-5" />
              <span className="text-sm">Đăng ký</span>
            </button>
            <span className="text-gray-500">/</span>

            <button className="hidden md:flex items-center text-gray-700 hover:text-pink-500 cursor-pointer" onClick={() => navigate('/login')}>
              <span className="text-sm">Đăng nhập</span>
            </button>

          </>

        )
      }
    </>
  );
};

export default UserMenu;