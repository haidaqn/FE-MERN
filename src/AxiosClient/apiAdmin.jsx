import axios from '../axiosClient';

// user
export const apiUpdateByUserAdmin = (aid, token) =>
    axios({
        url: `/user/${aid}`,
        method: 'put',
        headers: {
            'access-token': token
        }
    });
export const apiGetUsers = (params, token) => {
    return axios({
        url: '/user',
        method: 'get',
        params,
        headers: {
            'access-token': token
        }
    });
};

export const apiDeleteUser = (token) =>
    axios({
        url: '/user',
        method: 'delete',
        headers: {
            'access-token': token
        }
    });

//category
export const apiCreateCategory = (data, token) =>
    axios({
        url: '/prodcategory',
        method: 'post',
        data,
        headers: {
            'access-token': token
        }
    });
export const apiUpdateCategory = (pcid, data, token) =>
    axios({
        url: `/prodcategory/${pcid}`,
        method: 'put',
        data,
        headers: {
            'access-token': token
        }
    });
export const apiDeleteCategory = (pcid, token) =>
    axios({
        url: `/prodcategory/${pcid}`,
        method: 'delete',
        headers: {
            'access-token': token
        }
    });

// products

export const apiCreateProduct = () => {};
export const apiUpLoadImagesProduct = () => {}; // up nhieu img
export const apiUpdateProduct = () => {};
export const apiDeleteProduct = () => {};

// order

export const apiUpdateStatus = () => {};
export const apiGetOrderByAdmin = () => {};

// coupon
export const apiCreateCoupon = () => {};
export const apiUpdateCoupon = () => {};
export const apiDeleteCoupon = () => {};
