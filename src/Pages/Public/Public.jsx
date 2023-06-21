import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '../../Components';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { AiFillCaretUp } from 'react-icons/ai';

const Public = () => {
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

    return (
        <div className="w-full flex flex-col gap-3">
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

export default Public;
