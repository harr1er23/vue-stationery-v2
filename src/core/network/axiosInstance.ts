import TokenStorage from '@/features/auth/data/local/tokenStorage';
import { logout } from '@/features/auth/data/remote/useCases/logout';
import axios from 'axios';

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = TokenStorage.getAccessToken();

        if(accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }else {
            logout();
            return Promise.reject('No access token available');
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;