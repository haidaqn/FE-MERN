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
        <div className="flex min-h-screen relative">
            <div className="flex-2 h-full flex items-center justify-center">
                <div className="fixed top-0 flex  flex-col gap-3">
                    <small className="flex flex-col gap-3 justify-center items-center mt-3">
                        <img src={logo} alt="logo" className="object-contain " />
                        <h1 className="text-lg capitalize ">admin workspace</h1>
                    </small>
                    <div className="mx-5">
                        <NavBar />
                    </div>
                </div>
            </div>
            <div className="flex-9 bg-gray-100">
                <div className="mx-5 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default memo(AdminLayout);
