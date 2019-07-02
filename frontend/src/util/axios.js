import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
    baseURL: config.URL_ANRON_API,
    timeout: config.TIMEOUT
});

axiosInstance.interceptors.request.use(
    config => {
        config.headers['x-acess-token'] = localStorage.getItem('token');
        return config;
    },
    error => Promise.reject(error)
);


export default axiosInstance;