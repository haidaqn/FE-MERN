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

export const apiGetAll = (token) => {
    return axios.get('/user/cart/getAll', {
        headers: {
            'access-token': token
        }
    });
};
