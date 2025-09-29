import { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { RenderContent } from './RenderContent';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import UserService from '@/services/UserService';
const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('verifying'); // verifying, success, error


  useEffect(() => {
    let isCancelled = false; // Flag để cancel

    const token = searchParams.get('token');
    if (!token) {
      setStatus('error');
      toast.error('Link xác nhận không hợp lệ');
      setMessage('Link xác nhận không hợp lệ');
      return;
    }

    const verifyEmail = async () => {
      try {
        if (isCancelled) return; // Kiểm tra cancel trước khi thực hiện

        setStatus('verifying');
        const response = await UserService.verifyEmail(token);
        console.log('📦 Full response:', response);
        if (isCancelled) return; // Kiểm tra cancel sau khi có response

        setStatus('success');
        toast.success('Xác nhận email thành công');
        setMessage(response.message);

        setTimeout(() => {
          if (!isCancelled) {
            navigate('/login');
          }
        }, 3000);
      } catch (error) {
        if (isCancelled) return; // Kiểm tra cancel trong catch

        console.error('Error verifying email:', error);
        setStatus('error');
        toast.error('Xác nhận email thất bại');
        setMessage(error.response?.data?.message);
      }
    };

    verifyEmail();

    // ✅ Cleanup function
    return () => {
      isCancelled = true;
    };
  }, [searchParams, navigate]);





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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <RenderContent status={status} message={message} />
        </div>
      </div>
    </>
  );
};

export default VerifyPage;