import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// user
import { useDispatch } from 'react-redux';
import { handleUserDecoded } from '../utils/jwtHelper.js';

import App from '@/App.jsx';
import UserLayout from '@/components/layouts/userLayout.jsx';
import CampaignPage from '@/pages/campaign/page.jsx';
import RegisterPage from '@/pages/register/page.jsx';
import LoginPage from '@/pages/login/page.jsx';
import { LoadingProvider } from '@/contexts/LoadingProvider.jsx';
import GlobalLoader from '@/components/GlobalLoader.jsx';
import EmailSent from '@/pages/emailSent/page.jsx';
import VerifyPage from '@/pages/verify/page.jsx';
import { updateUser } from '@/redux/features/userSlice.js';
import UserService from '@/services/UserService.js';



const AppRoutes = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    // Kiểm tra nếu đang ở trang admin
    const { decoded } = handleUserDecoded()
    if (decoded?.id) {
      handleGetUserDetails(decoded?.id)
    }
    setIsLoading(false)
  }, [])


  const handleGetUserDetails = async (id) => {
    const res = await UserService.getCurrentUser()
    // Lấy lại token mới nhất sau interceptor
    const updatedToken = localStorage.getItem('access_token_user');
    await dispatch(updateUser({ ...res, access_token: JSON.parse(updatedToken) }))
  }
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<App />} />
            <Route path="/campaign" element={<CampaignPage />} />
          </Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/email-sent" element={<EmailSent />} />
          <Route path="/verify-email" element={<VerifyPage />} />


          {/* <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<ProtectedRouteAdmin allowedRoles={['ADMIN']} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminPage />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route> */}
        </Routes>
        <GlobalLoader />
      </BrowserRouter>
    </LoadingProvider>
  );
};


export default AppRoutes;