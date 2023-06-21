import React from 'react';
import { Layout } from '../../../Components';
import icons from '../../../Utils/icons';
import Content from './Content';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
const { GrFacebookOption, GrTwitter, GrInstagram, GrPinterest } = icons;

const Header = () => {
    return (
        <>
            <div className="h-[38px] bg-main text-white text-[14px]">
                <Layout>
                    <div className="flex h-full justify-between font-medium items-center pt-2">
                        <span>ORDER ONLINE OR CALL US (+1800) 000 8808</span>
                        <div className="flex justify-center items-center">
                            <NavLink to="/login">
                                <span className="pr-[10px] cursor-pointer transition-colors duration-300 hover:text-black">
                                    Sign In or Create Account
                                </span>
                            </NavLink>
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
        </>
    );
};

export default Header;
