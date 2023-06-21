import React, { useState } from 'react';
import { handlePrice, renderStartNumber } from '../../Utils/commonF';
import HoverIcon from '../Hover/HoverIcon';
import icons from '../../Utils/icons';
import TitleProduct from './Product/TitleProduct';
import ImageProduct from './Product/ImageProduct';

const ProductItem = ({ product, uhv }) => {
    const [hover, setHover] = useState(false);
    const { AiFillHeart, AiOutlineMenu, BsFillEyeFill } = icons;

    return (
        <div
            onMouseEnter={(e) => setHover(true)}
            onMouseLeave={(e) => setHover(false)}
            className={`${!uhv ? 'flex-col flex-1 mx-3' : 'py-4'} flex justify-center border cursor-pointer relative`}
        >
            {hover && !uhv && (
                <div className="absolute bottom-[63px] left-0 right-0 flex justify-center items-center gap-4 animate-slide-top">
                    <HoverIcon icon={<AiFillHeart size={20} />} />
                    <HoverIcon icon={<AiOutlineMenu size={20} />} />
                    <HoverIcon icon={<BsFillEyeFill size={20} />} />
                </div>
            )}
            <ImageProduct img={product.thumb} w={uhv} />
            <TitleProduct title={product.title} price={product.price} totalRatings={product.totalRatings} />
        </div>
    );
};

export default ProductItem;
