import React, { useState } from 'react';
import { Layout } from '../../../Components';
import icons from '../../../Utils/icons';
import Content from './Content';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Store/User/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiLogout } from '../../../AxiosClient/apiUser';

const { GrFacebookOption, GrTwitter, GrInstagram, GrPinterest } = icons;

const Header = () => {
    const { isLogin, current } = useSelector((state) => state.user);
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();
    const success = () => toast.success('Đăng xuất thành công!');

    return (
        <>
            <div className="h-[38px] bg-main text-white text-[14px]">
                <Layout>
                    <div className="flex h-full justify-between font-medium items-center pt-2">
                        <span>ORDER ONLINE OR CALL US (+1800) 000 8808</span>
                        <div className="flex justify-center items-center">
                            {isLogin ? (
                                <div className="relative" onMouseEnter={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)}>
                                    <span className="pr-[10px] cursor-pointer transition-colors duration-300 hover:text-black">
                                        Welcome, {current?.firstName} {current?.lastName}
                                    </span>
                                    {hover && (
                                        <div className="absolute top-5 w-full bg-black flex flex-col z-50 text-white">
                                            <NavLink to="/member" className="py-1 px-2 cursor-pointer border">
                                                <span>Profile</span>
                                            </NavLink>
                                            <span
                                                className="py-1 px-2 cursor-pointer border"
                                                onClick={async () => {
                                                    success();
                                                    await apiLogout();
                                                    dispatch(logout({ isLogin: false, token: null, userData: null }));
                                                }}
                                            >
                                                Logout
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink to="/login">
                                    <span className="pr-[10px] cursor-pointer transition-colors duration-300 hover:text-black">
                                        Sign In or Create Account
                                    </span>
                                </NavLink>
                            )}
                            <div className="flex justify-center items-center border-l-[1px] border-[#FBCBCB]">
                                <span className="cursor-pointer px-[10px] border-r-[1px] border-[#FBCBCB] transition-colors duration-300 hover:text-black">
                                    <GrFacebookOption size={16} />
                                </span>
                                <span className="cursor-pointer px-[10px] border-r-[1px] border-[#FBCBCB] transition-colors duration-300 hover:text-black">
                                    <GrTwitter size={16} />
                                </span>
                                <span className="cursor-pointer px-[10px] border-r-[1px] border-[#FBCBCB] transition-colors duration-300 hover:text-black">
                                    <GrInstagram size={16} />
                                </span>
                                <span className="cursor-pointer px-[10px] border-r-[1px] border-[#FBCBCB] transition-colors duration-300 hover:text-black">
                                    <GrPinterest size={16} />
                                </span>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
            <Layout>
                <Content />
                <Navbar />
            </Layout>
            <ToastContainer />
        </>
    );
};

export default Header;
