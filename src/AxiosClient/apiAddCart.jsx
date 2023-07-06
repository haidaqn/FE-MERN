import axios from '../axiosClient';

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

export const apiGetAllCart = (token) =>
    axios({
        url: '/user/cart/getAll',
        method: 'get',
        headers: {
            'access-token': token
        }
    });
