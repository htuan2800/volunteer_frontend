import axios from 'axios';
import UserService from './UserService';
import { handleUserDecoded } from '../utils/jwtHelper';

export const axiosJWTUser = axios.create();

//nêu có request dùng thì tự động chặn lại để check trước
axiosJWTUser.interceptors.request.use(async (config) => {
    const currentTime = new Date()
    const { decoded, storageData } = handleUserDecoded()
    if (decoded?.exp < currentTime.getTime() / 1000) {
        const data = await UserService.refreshTokenUser();
        // Cập nhật lại token mới vào localStorage
        localStorage.setItem('access_token_user', JSON.stringify(data?.token));
        config.headers['Authorization'] = `Bearer ${data?.token}`;
    } else {
        config.headers['Authorization'] = `Bearer ${storageData}`;
    }
    return config
}, function (error) {
    return Promise.reject(error)
})