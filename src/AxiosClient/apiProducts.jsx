import axios from '../axiosClient';

export const apiProducts = (params) =>
    axios({
        url: '/product/',
        method: 'get',
        params
    });

export const apiProduct = (pid) =>
    axios({
        url: `/product/${pid}`,
        method: 'get'
    });
