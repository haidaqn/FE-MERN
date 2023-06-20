import axios from '../axiosClient';

export const apiGetCategory = () =>
    axios({
        url: '/prodcategory',
        method: 'get'
    });
