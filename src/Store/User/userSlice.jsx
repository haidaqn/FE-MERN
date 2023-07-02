import { createSlice } from '@reduxjs/toolkit';
import * as Actions from './asyncAction';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        current: null,
        token: null,
        isLoading: false
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
    },
    extraReducers: (builder) => {
        builder.addCase(Actions.getCurrent.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(Actions.getCurrent.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLogin = true;
            state.current = action.payload.userData;
        });
        builder.addCase(Actions.getCurrent.rejected, (state, action) => {
            state.current = null;
            state.isLoading = false;
            state.token = null;
            state.isLogin = false;
        });
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer; // export 2 ham cuoi
