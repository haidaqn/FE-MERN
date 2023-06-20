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
        autoplaySpeed: 1500,
        pauseOnHover: true
    };

    return (
        <div className="w-[995px] flex justify-center items-center">
            <div className="w-full">
                <Slider {...settings}>
                    {products?.map((item) => (
                        <ProductItem key={item._id} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductsList;
