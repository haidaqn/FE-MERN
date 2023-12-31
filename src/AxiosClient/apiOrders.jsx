import axios from '../axiosClient';

export const apiCreateOrders = (token) =>
    axios({
        url: '/order',
        method: 'post',
        headers: {
            'access-token': token
        }
    });

export const apiGetOrders = (token) =>
    axios({
        url: '/order',
        method: 'get',
        headers: {
            'access-token': token
        }
    });

export const apiGetOrdersAdmin = (token) =>
    axios({
        url: '/order/admin-orders',
        method: 'get',
        headers: {
            'access-token': token
        }
    });
