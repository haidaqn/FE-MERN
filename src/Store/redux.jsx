import { configureStore } from '@reduxjs/toolkit';
import appSlice from './App/appSlice';
import userSlice from './User/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import productSlice from './Product/productSlice';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

//

const commonConfig = {
    key: 'shop/user',
    storage
};

const userConfig = {
    ...commonConfig,
    whiteList: ['isLogin', 'token']
};

export const store = configureStore({
    reducer: {
        app: appSlice,
        products: productSlice,
        user: persistReducer(userConfig, userSlice)
    },
    middleware: [thunk]
});

export const persistor = persistStore(store);
