import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    (config) => {
        let localStorage = window.localStorage.getItem('persist:shop/user');
        if (localStorage && typeof localStorage === 'string') {
            localStorage = JSON.parse(localStorage);
            const accessToken = JSON.parse(localStorage?.token);
            config.headers = {
                Authorization: `Bearer ${accessToken}`
            };
            return config;
        } else return config;
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
