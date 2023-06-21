import { createAsyncThunk } from '@reduxjs/toolkit';
import * as apis from '../../AxiosClient/apiUser';

export const getCurrent = createAsyncThunk('app/current', async (data, { rejectWithValue }) => {
    const response = await apis.apiGetCurrent();
    // console.log(response);
    if (!response.success) return rejectWithValue(response);
    return response.rs;
});
