import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Public from './Pages/Public/Public';
import path from './Utils/path';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './Store/App/asyncAction';
import { AiFillCaretUp } from 'react-icons/ai';
import {
    Home,
    FAQ,
    Blog,
    Out_Service,
    Products,
    Login,
    Register,
    FinalRegister,
    ChangePw,
    ResetPw,
    Product_Detail,
    Category
} from './Pages';
import { Modal } from './Components';

//

const App = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const showButtonThreshold = 200; // Ngưỡng để hiển thị nút scroll
            setShowScrollButton(scrollPosition > showButtonThreshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const dispatch = useDispatch();
    const { isShowModal, modalChildren } = useSelector((state) => state.app);
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <div className="font-main w-full relative">
            {isShowModal && <Modal>{modalChildren}</Modal>}
            <Routes>
                <Route path={path.LOGIN} element={<Login />}></Route>
                <Route path={path.REGISTER} element={<Register />} />
                <Route path={path.PUBLIC} element={<Public />}>
                    <Route path={path.FINAL_REGISTER} element={<FinalRegister />} />
                    <Route path={path.RESET_PASSWORD} element={<ResetPw />} />
                    <Route path={path.CHANGE_PASSWORD} element={<ChangePw />} />
                    <Route path={path.HOME} element={<Home />} />
                    <Route path={path.PRODUCTS} element={<Products />} />
                    <Route path={path.DETAIL_PRODUCT_CATEGORY_PID_TITLE} element={<Product_Detail />} />
                    <Route path={path.CATEGORY_PRODUCT} element={<Category />} />
                    <Route path={path.FAQ} element={<FAQ />} />
                    <Route path={path.BLOGS} element={<Blog />} />
                    <Route path={path.OUR_SERVICES} element={<Out_Service />} />
                </Route>
            </Routes>
            {showScrollButton && (
                <a
                    href="#"
                    className="fixed flex justify-center items-center bottom-6 right-6 w-12 h-12 bg-main rounded-full"
                >
                    <AiFillCaretUp size={30} color="white" />
                </a>
            )}
        </div>
    );
};

export default App;
