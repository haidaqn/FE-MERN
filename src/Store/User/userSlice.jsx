import { createSlice } from '@reduxjs/toolkit';
import * as Actions from './asyncAction';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        current: null,
        token: null
    },
    reducers: {
        login: (state, action) => {
            (state.isLogin = action.payload.isLogin),
                (state.current = action.payload.userData),
                (state.token = action.payload.token);
        },
        logout: (state, action) => {
            (state.isLogin = action.payload.isLogin),
                (state.current = action.payload.userData),
                (state.token = action.payload.token);
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer; // export 2 ham cuoi
