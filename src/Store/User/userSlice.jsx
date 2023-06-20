import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        current: null,
        token: null
    },
    reducers: {
        regiser: (state, action) => {
            (state.isLogin = action.payload.isLogin),
                (state.current = action.payload.userData),
                (state.token = action.payload.token);
        }
    }
});

export const { regiser } = userSlice.actions;
export default userSlice.reducer; // export 2 ham cuoi
