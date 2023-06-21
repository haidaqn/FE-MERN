import React from 'react';
import { handlePrice } from '../../utils/fs';
import { HoverProduct } from '../../components';
import icons from '../../utils/icon';
import { Link } from 'react-router-dom';
import path from '../../../Utils/path';
const { AiFillHeart, BsFillEyeFill, BsCartCheckFill } = icons;
// to={`/${path.DETAIL_PRODUCT}/${productData._id}/${productData.title}`}
const HoverCategoryProduct = ({ description, title, price, id }) => {
    return (
        <div className="absolute w-full h-full bg-white animate-slide-top-sm">
            <div className=" border-b">
                <div className="m-4 flex justify-between items-center ">
                    <span className="text-[16px]">{title}</span>
                    <span className="text-sm">{handlePrice(price)}VND</span>
                </div>
            </div>
            <div className="w-full mt-3 m-4 text-sm">
                <ul>
                    {description.map((item) => (
                        <li className="mt-1" key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-5 mx-7 my-6 absolute top-[330px]">
                <Link to={`/${path.DETAIL_PRODUCT}/${id}/${title}`}>
                    <HoverProduct icon={<BsCartCheckFill size={20} />} />
                </Link>
                <HoverProduct icon={<BsFillEyeFill size={20} />} />
                <HoverProduct icon={<AiFillHeart size={20} />} />
            </div>
        </div>
    );
};

export default HoverCategoryProduct;
