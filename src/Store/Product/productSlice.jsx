import { createSlice } from '@reduxjs/toolkit';
import * as actions from './asyncActions';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        newProducts: null,
        oldProducts: null,
        errorMessage: '',
        isLoading: false
    },
    reducers: {
        setNewProducts: (state, action) => {
            return { ...state, newProducts: action.payload };
        },
        setOldProducts: (state, action) => {
            return { ...state, oldProducts: action.payload };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(actions.getNewProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.newProducts = action.payload;
            })
            .addCase(actions.getOldProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.oldProducts = action.payload;
            });
    }
});

export const { setNewProducts, setOldProducts } = productSlice.actions;
export default productSlice.reducer;
