import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { LuMail } from 'react-icons/lu';

const EmailSent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state || {};

    const [resending, setResending] = useState(false);
    const [countdown, setCountdown] = useState(60); // Countdown 60s để resend

    // Redirect về trang chủ nếu không có email
    useEffect(() => {
        if (!email) {
            navigate('/register');
        }
    }, [email, navigate]);

    // Countdown timer cho resend button
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const handleResend = async () => {
        if (!email || countdown > 0) return;

        setResending(true);

        try {
            await axios.post('/api/auth/resend-verification', { email });
            toast.success('✅ Email đã được gửi lại thành công!');
            setCountdown(60); // Reset countdown
        } catch (error) {
            toast.error('❌ ' + (error.response?.data?.message || 'Có lỗi khi gửi lại email'));
        } finally {
            setResending(false);
        }
    };

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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
                <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                    {/* Icon và animation */}
                    <div className="text-8xl mb-6 animate-bounce">
                        <LuMail className="mx-auto text-gray-900" />
                    </div>

                    <h1 className="text-3xl font-bold mb-4 text-green-600">
                        Email Đã Được Gửi!
                    </h1>

                    <p className="text-gray-700 mb-2 text-lg">
                        Chúng tôi đã gửi email xác nhận đến:
                    </p>

                    <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-6">
                        <p className="text-blue-800 font-semibold text-lg break-all">
                            📮 {email}
                        </p>
                    </div>

                    {/* Hướng dẫn */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 text-left">
                        <h3 className="font-semibold text-yellow-800 mb-2">📋 Các bước tiếp theo:</h3>
                        <ol className="text-yellow-700 text-sm space-y-1">
                            <li>1️. Mở hộp thư email của bạn</li>
                            <li>2️. Tìm email từ chúng tôi (kiểm tra cả spam)</li>
                            <li>3️. Click vào nút "Xác nhận Email"</li>
                            <li>4️. Hoàn tất kích hoạt tài khoản</li>
                        </ol>
                    </div>

                    {/* Resend email */}
                    <div className="space-y-4">
                        <button
                            onClick={handleResend}
                            disabled={resending || countdown > 0}
                            className={`w-full py-3 rounded-lg font-semibold transition-colors ${resending || countdown > 0
                                    ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                                }`}
                        >
                            {resending && '⏳ Đang gửi lại...'}
                            {!resending && countdown > 0 && `🔄 Gửi lại sau ${countdown}s`}
                            {!resending && countdown === 0 && '📤 Gửi lại email'}
                        </button>
                    </div>

                    {/* Navigation links */}
                    <div className="mt-8 space-y-2">
                        <a
                            href="/login"
                            className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                            🔐 Về trang đăng nhập
                        </a>

                        <a
                            href="/"
                            className="block text-gray-600 hover:text-gray-800 hover:underline"
                        >
                            🏠 Về trang chủ
                        </a>
                    </div>

                    {/* Help text */}
                    <div className="mt-6 text-xs text-gray-500 border-t pt-4">
                        <p>💡 <strong>Mẹo:</strong> Nếu không thấy email, hãy kiểm tra thư mục spam hoặc junk mail</p>
                        <p className="mt-1">⏰ Link xác nhận có hiệu lực trong 24 giờ</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmailSent;