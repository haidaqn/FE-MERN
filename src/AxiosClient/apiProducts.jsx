import axios from '../axiosClient';

export const apiProducts = (params) =>
    axios({
        url: '/product/',
        method: 'get',
        params
    });

export const apiCreateProduct = (data, token) =>
    axios({
        url: '/product/',
        method: 'post',
        data,
        headers: {
            'access-token': token
        }
    });

export const apiProduct = (pid) =>
    axios({
        url: `/product/${pid}`,
        method: 'get'
    });

export const apiRatings = (data, token) =>
    axios({
        url: `/product/ratings`,
        method: 'put',
        data,
        headers: {
            'access-token': token
        }
    });
