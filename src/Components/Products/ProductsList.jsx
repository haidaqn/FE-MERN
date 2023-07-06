import React, { useEffect } from 'react';
import Slider from 'react-slick';
import ProductItem from './ProductItem';
import { useState } from 'react';

const ProductsList = ({ products }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        prevArrow: false,
        nextArrow: false,
        centerMode: true,
        centerPadding: '0px 0px'
    };

    const [width, setWidth] = useState(0);
    useEffect(() => {
        window.innerWidth < 1500 ? setWidth('w-[700px]') : setWidth('w-[1100px]');
    }, [window.innerWidth]);

    return (
        <div className="w-full ">
            <div className={`space-x-5 mx-auto ${window.innerWidth < 1600 ? 'w-[700px] my-10' : 'w-[1090px]'} `}>
                <Slider {...settings}>
                    {products?.map((product) => (
                        <ProductItem product={product} key={product?.title} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductsList;
