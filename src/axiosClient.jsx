import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://apimern-6pax.onrender.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    (config) => {
        // let localStorageData = window.localStorage.getItem('persist:shop/user');
        // if (localStorageData && typeof localStorageData === 'string') {
        //     localStorageData = JSON.parse(localStorageData);
        //     const token = localStorageData?.token;
        //     let accessToken = JSON.parse(token);
        //     config.headers = {
        //         Authorization: `Bearer ${accessToken}`
        //     };
        //     return config;
        // } else {
        //     return config;
        // }
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
