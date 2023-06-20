import { createAsyncThunk } from '@reduxjs/toolkit';
import * as apis from '../../AxiosClient/apiCategories';

export const getCategories = createAsyncThunk('app/category', async (data, { rejectWithValue }) => {
    const response = await apis.apiGetCategory();
    // console.log(response);
    if (!response.success) return rejectWithValue(response);
    return response.prodCategory;
});
