import { useNavigate } from "react-router-dom";

export const RenderContent = ({status, message}) => {
    const navigate = useNavigate();
    switch (status) {
        case 'verifying':
            return (
                <>
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-6"></div>
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">
                        🔄 Đang xác nhận email...
                    </h2>
                    <p className="text-gray-600">Vui lòng đợi trong giây lát</p>
                </>
            );

        case 'success':
            return (
                <>
                    <div className="text-8xl mb-6 animate-bounce">✅</div>
                    <h2 className="text-3xl font-bold text-green-600 mb-4">
                        Xác nhận thành công! 🎉
                    </h2>
                    <p className="text-gray-700 mb-6">{message}</p>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                        <p className="text-green-800 font-semibold">
                            🎊 Chúc mừng! Tài khoản của bạn đã được kích hoạt.
                        </p>
                        <p className="text-green-700 text-sm mt-1">
                            Đang chuyển hướng đến trang đăng nhập...
                        </p>
                    </div>

                    <button
                        onClick={() => navigate('/login')}
                        className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                        🚀 Đăng nhập ngay
                    </button>
                </>
            );

        case 'error':
            return (
                <>
                    <div className="text-8xl mb-6">❌</div>
                    <h2 className="text-3xl font-bold text-red-600 mb-4">
                        Xác nhận thất bại!
                    </h2>
                    <p className="text-gray-700 mb-6">{message}</p>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <p className="text-red-800 font-semibold mb-2">Có thể do:</p>
                        <ul className="text-red-700 text-sm space-y-1 list-disc list-inside">
                            <li>Link đã hết hạn (quá 24 giờ)</li>
                            <li>Link đã được sử dụng</li>
                            <li>Link không hợp lệ</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={() => navigate('/email-sent', {
                                state: { needResend: true }
                            })}
                            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                        >
                            📤 Gửi lại email xác nhận
                        </button>

                        <button
                            onClick={() => navigate('/register')}
                            className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            🔄 Đăng ký lại
                        </button>
                    </div>
                </>
            );

        default:
            return null;
    }
};
