import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '../../Components';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

const Public = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full">
                <Layout>
                    <Outlet />
                </Layout>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
};

export default Public;
