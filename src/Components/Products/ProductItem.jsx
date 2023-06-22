import React, { useState } from 'react';
import HoverIcon from '../Hover/HoverIcon';
import icons from '../../Utils/icons';
import TitleProduct from './Product/TitleProduct';
import ImageProduct from './Product/ImageProduct';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, uhv }) => {
    const [hover, setHover] = useState(false);
    const { AiFillHeart, AiOutlineMenu, BsFillEyeFill } = icons;
    return (
        <div
            onMouseEnter={(e) => setHover(true)}
            onMouseLeave={(e) => setHover(false)}
            className={`${!uhv ? 'flex-col flex-1 mx-3' : 'py-4'} flex justify-center border relative`}
        >
            {hover && !uhv && (
                <div className="absolute bottom-[63px] left-0 right-0 flex justify-center items-center gap-4 animate-slide-top">
                    <HoverIcon icon={<AiFillHeart size={20} />} />
                    <HoverIcon icon={<AiOutlineMenu size={20} />} />
                    <HoverIcon icon={<BsFillEyeFill size={20} />} />
                </div>
            )}
            <Link to={`/${product.category?.toLowerCase()}/${product._id}/${product.title}`}>
                <ImageProduct img={product.thumb} w={uhv} />
            </Link>
            <TitleProduct
                id={product._id}
                title={product.title}
                price={product.price}
                totalRatings={product.totalRatings}
                category={product.category}
            />
        </div>
    );
};

export default ProductItem;
