import React from 'react';
import { useSelector } from 'react-redux';
import SlideBar from './Home/SlideBar';
import banner from '../../assets/shopping_banner.jpg';
import Detail from './Home/Detail';
import BestSeller from './Home/BestSeller';
//

const Home = () => {
    const { categories } = useSelector((state) => state.app);

    //

    return (
        <div className="my-3 w-full">
            <div className="flex gap-5">
                <div className="flex-1 border">
                    <SlideBar categories={categories} />
                </div>
                <div className="flex-3">
                    <img className="object-cover h-full w-ful" src={banner} alt="logo" />
                </div>
            </div>
            <div className="flex gap-5 mt-5">
                <div className="border flex-1">
                    <Detail />
                </div>
                <div className="flex-3">
                    <div className="w-full">
                        <BestSeller />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
