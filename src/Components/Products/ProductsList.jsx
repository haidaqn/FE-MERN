import React from 'react';
import Slider from 'react-slick';
import ProductItem from './ProductItem';

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

    return (
        <div className="w-full ">
            <div
                className="space-x-5"
                style={{ maxWidth: `${window.innerWidth < 1400 ? '750px' : '990px'}`, margin: '0 auto' }}
            >
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
