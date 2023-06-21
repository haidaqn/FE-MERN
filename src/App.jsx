import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Public from './Pages/Public/Public';
import path from './Utils/path';
import { Home, FAQ, Blog, Out_Service, Products, Login, Register, FinalRegister, ChangePw, ResetPw } from './Pages';
import { useDispatch } from 'react-redux';
import { getCategories } from './Store/App/asyncAction';

//

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <div className="min-h-screen font-main w-full">
            <Routes>
                <Route path={path.LOGIN} element={<Login />}></Route>
                <Route path={path.REGISTER} element={<Register />} />
                <Route path={path.PUBLIC} element={<Public />}>
                    <Route path={path.FINAL_REGISTER} element={<FinalRegister />} />
                    <Route path={path.RESET_PASSWORD} element={<ResetPw />} />
                    <Route path={path.CHANGE_PASSWORD} element={<ChangePw />} />
                    <Route path={path.HOME} element={<Home />} />
                    <Route path={path.FAQ} element={<FAQ />} />
                    <Route path={path.BLOGS} element={<Blog />} />
                    <Route path={path.OUR_SERVICES} element={<Out_Service />} />
                    <Route path={path.PRODUCTS} element={<Products />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
