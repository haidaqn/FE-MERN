import React, { useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import NavBar from './Layout/NavBar';

const AdminLayout = () => {
    const { current } = useSelector((state) => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (+current?.role !== 2003) navigate('/');
    }, []);

    return (
        <div className="flex h-screen">
            <div className="w-[275px] flex flex-col gap-3 border-r-[2px]">
                <small className="flex flex-col gap-3 justify-center items-center mt-3">
                    <img src={logo} alt="logo" className="object-contain " />
                    <h1 className="text-lg capitalize ">admin workspace</h1>
                </small>
                <div className="mx-5">
                    <NavBar />
                </div>
            </div>
            <div className="flex-8 border-l-[2px] bg-gray-100">
                <div className="mx-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default memo(AdminLayout);
