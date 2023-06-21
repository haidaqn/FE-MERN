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
    // extraReducers: (builder) => {
    //     builder.addCase(Actions.getCategories.pending, (state) => {
    //         state.isLoading = true;
    //     });
    //     builder.addCase(Actions.getCategories.fulfilled, (state, action) => {
    //         // console.log(action);
    //         state.isLoading = false;
    //         state.current = action.payload;
    //     });
    //     builder.addCase(Actions.getCategories.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.current = null;
    //     });
    // }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer; // export 2 ham cuoi
