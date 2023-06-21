import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiProducts } from '../../AxiosClient/apiProducts';

export const getNewProducts = createAsyncThunk('product/newProducts', async (data, { rejectWithValue }) => {
    const response = await apiProducts({ sort: '-createAt', totalRatings: 5, limit: 9 });
    if (!response.success) return rejectWithValue(response);
    return response.products;
});

export const getOldProducts = createAsyncThunk('product/oldProducts', async (data, { rejectWithValue }) => {
    const response = await apiProducts({ sort: '-sold' });
    if (!response.success) return rejectWithValue(response);
    return response.products;
});
