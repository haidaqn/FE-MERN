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
    Category,
    Cart,
    WishList,
    MemberLayout,
    Orders,
    AdminLayout,
    Dashboard,
    Create_Product,
    Manage_Product,
    Manage_Order,
    Manage_User,
    Edit_User
} from './Pages';
import { Modal } from './Components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        window.scrollTo(0, 0);
        dispatch(getCategories());
    }, []);
    return (
        <div className="font-main w-full relative">
            {isShowModal && <Modal>{modalChildren}</Modal>}
            <Routes>
                <Route path={path.LOGIN} element={<Login />}></Route>
                <Route path={path.ADMIN} element={<AdminLayout />}>
                    <Route path={path.DASHBOARD} element={<Dashboard />} />
                    <Route path={path.EDIT_USER_BY_ADMIN} element={<Edit_User />} />
                    <Route path={path.MANAGE_USER} element={<Manage_User />} />
                    <Route path={path.CREATE_PRODUCTS} element={<Create_Product />} />
                    <Route path={path.MANAGE_PRODUCTS} element={<Manage_Product />} />
                    <Route path={path.MANAGE_ORDER} element={<Manage_Order />} />
                </Route>
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
                    <Route path={path.CART} element={<Cart />} />
                    <Route path={path.WISH_LIST} element={<WishList />} />
                    <Route path={path.ORDERS} element={<Orders />} />
                    <Route path={path.MEMBER} element={<MemberLayout />} />
                </Route>
            </Routes>
            {showScrollButton && (
                <a href="#" className="fixed flex justify-center items-center bottom-6 right-6 w-12 h-12 bg-main rounded-full">
                    <AiFillCaretUp size={30} color="white" />
                </a>
            )}
            <ToastContainer />
        </div>
    );
};

export default App;
