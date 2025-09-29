import axios from 'axios';
import { axiosJWTUser } from './axiosJWTUser';
import { API_BASE_URL } from '../config/api';

const UserService = {

  verifyEmail: async (token) => {
    try {
      console.log(token);
      const response = await axios.get(`${API_BASE_URL}/auth/verify-email?token=${token}`);
      return response.data;
    } catch (error) {
      console.error('Error verifying email:', error);
      throw error;
    }
  },

  resendVerificationEmail: async (email) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/resend-verification`, { email });
      return response.data;
    } catch (error) {
      console.error('Error resending verification email:', error);
      throw error;
    }
  },

  getAllUsers: async () => {
    console.log("API_BASE_URL", API_BASE_URL)
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data; // Trả về dữ liệu từ API
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Ném lỗi để xử lý trong nơi gọi hàm
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await axiosJWTUser.get(`${API_BASE_URL}/api/users/profile`, {
        withCredentials: true, // Cho phép gửi cookie tới backend
      });
      return response.data; // Trả về dữ liệu user
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Để xử lý lỗi phía trên
    }
  },

  // Bạn có thể thêm các hàm khác nếu cần, ví dụ:
  getUserById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      throw error;
    }
  },

  getDetailsUser: async (userId) => {
    const res = await axiosJWTUser.get(`${API_BASE_URL}/api/users/get-details-user/${userId}`)
    return res.data
  },

  updateInfoUser: async (id, data) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/update-info/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with id ${id}:`, error);
      throw error;
    }
  },

  refreshTokenUser: async () => {
    const res = await axios.post(`${API_BASE_URL}/auth/refresh`, {}, { withCredentials: true })
    return res.data
  },

  register: async (userData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        userData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Lỗi đăng ký:', error.response?.data || error.message);
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signin`, credentials, {
        withCredentials: true, // Cho phép gửi cookie tới backend
      });
      return response.data; // Trả về dữ liệu user
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Để xử lý lỗi phía trên
    }
  },

  loginAdmin: async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login-admin`, credentials, {
        withCredentials: true, // Cho phép gửi cookie tới backend
      });
      return response.data; // Trả về dữ liệu user
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Để xử lý lỗi phía trên
    }
  },

  logoutUser: async (credentials) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/logout`, credentials, {
        withCredentials: true, // Cho phép gửi cookie tới backend
      })
      return res.data
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Để xử lý lỗi phía trên
    }
  },

  createUser: async (user) => {
    try {
      console.log(user);
      const response = await axios.post(`${API_BASE_URL}/add_user`, user, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  },

  updateUser: async (id, userData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/update-user/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error("Failed to update supplier:", error);
      throw error;
    }
  },

  changeStatus: async (id, active) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/change_status/${id}`, { active });
      return response.data;
    } catch (error) {
      console.error(`Error changing status for user with id ${id}:`, error);
      throw error;
    }
  },

  deleteUser: async (id, status) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/delete/${id}`, { status });
      return response.data;
    } catch (error) {
      console.error(`Error deleting for user with id ${id}:`, error);
      throw error;
    }
  },
};

export default UserService;
