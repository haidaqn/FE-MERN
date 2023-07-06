import axios from '../axiosClient';

export const apiRegister = (data) =>
    axios({
        url: '/user/register',
        withCredentials: true,
        method: 'post',
        data
    });

export const apiLogin = (data) =>
    axios({
        url: '/user/login',
        method: 'post',
        data
    });

export const apiLogout = () =>
    axios({
        url: '/user/logout',
        method: 'post'
    });

export const apiForgotPassword = (data) => {
    return axios({
        url: '/user/forgotpassword',
        method: 'post',
        data
    });
};

export const apiResetPassWord = (data) => {
    return axios.put('/user/resetpassword', data);
};

export const apiAddToCart = (data, token) =>
    axios({
        url: '/user/cart',
        method: 'put',
        data,
        headers: {
            'access-token': token
        }
    });

export const apiDeleteCart = (data, token) =>
    axios({
        url: '/user/cart/delete',
        method: 'put',
        data,
        headers: {
            'access-token': token
        }
    });

export const apiGetCurrent = (data, token) =>
    axios({
        url: '/user/current',
        method: 'get',
        data,
        headers: {
            'access-token': token
        }
    });
