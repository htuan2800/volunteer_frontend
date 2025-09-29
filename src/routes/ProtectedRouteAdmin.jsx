import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
const ProtectedRouteAdmin = (allowedRoles) => {
  const userState = useSelector((state) => state.admin);
  console.log(userState);
  if (userState.currentAdmin === null) {
    // Hiển thị loading trong khi dữ liệu chưa có
  }


  if (!allowedRoles.includes(userState.currentAdmin?.role || '')) {
    return (
      <div className='flex items-center justify-center text-red-500'>
          Something went wrong
      </div>
    )
  }

  return <Outlet />;
};

export default ProtectedRouteAdmin;