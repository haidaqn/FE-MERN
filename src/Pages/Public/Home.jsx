import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SlideBar from './Home/SlideBar';
import banner from '../../assets/shopping_banner.jpg';
import Detail from './Home/Detail';
import BestSeller from './Home/BestSeller';
import Container from './Home/Container';
import Google from './Layout/Google';
import { getNewProducts, getOldProducts } from '../../Store/Product/asyncActions';
import Featured_Products from './Home/Featured_Products';

//

const Home = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(getNewProducts());
        dispatch(getOldProducts());
    }, []);
    //

    return (
        <div className="my-3 w-full flex flex-col gap-5">
            <div className="flex gap-5">
                <div className="flex-1 border">
                    <SlideBar categories={categories} />
                </div>
                <div className="flex-3">
                    <img className="object-cover h-full w-ful" src={banner} alt="logo" />
                </div>
            </div>
            <div className="flex gap-5 ">
                <div className="border flex-1">
                    <Detail />
                </div>
                <div className="flex-3">
                    <div className="w-full">
                        <BestSeller />
                    </div>
                </div>
            </div>
            <Featured_Products />
            <Container />
            <Google />
        </div>
    );
};

export default Home;
