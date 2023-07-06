import axios from '../axiosClient';

export const apiAddToWishList = (data, token) =>
    axios({
        url: '/user/wishlist',
        method: 'put',
        data,
        headers: {
            'access-token': token
        }
    });

export const apiDeleteWishList = (data, token) =>
    axios({
        url: '/user/wishlist/delete',
        method: 'put',
        data,
        headers: {
            'access-token': token
        }
    });

export const apiGetAllWishlist = (token) =>
    axios({
        url: '/user/wishlist/getAll',
        method: 'get',
        headers: {
            'access-token': token
        }
    });
