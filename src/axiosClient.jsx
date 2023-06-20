import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return error?.data;
    }
);

instance.interceptors.response.use(
    (response) => {
        return response?.data;
    },
    (error) => {
        return error?.response?.data;
    }
);

export default instance;
