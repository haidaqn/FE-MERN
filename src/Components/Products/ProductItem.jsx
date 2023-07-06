import React, { useState } from 'react';
import HoverIcon from '../Hover/HoverIcon';
import icons from '../../Utils/icons';
import TitleProduct from './Product/TitleProduct';
import ImageProduct from './Product/ImageProduct';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiAddToWishList } from '../../AxiosClient/apiWishList';
import { useSelector } from 'react-redux';

const ProductItem = ({ product, uhv }) => {
    const link = `/${product.category?.toLowerCase()}/${product._id}/${product.title}`;
    const [hover, setHover] = useState(false);
    const { AiFillHeart, AiOutlineMenu, BsFillEyeFill } = icons;
    const { token } = useSelector((state) => state.user);
    const handleAddToWishList = async () => {
        const data = { pid: product._id };
        const response = await apiAddToWishList(data, token);
        if (response?.success) toast.success(`Thêm thành công ${product.title} vào wishlist!`)();
        else toast.error(`Thêm không thành công ${product.title} vào wishlist!`)();
    };

    return (
        <div
            onMouseEnter={(e) => setHover(true)}
            onMouseLeave={(e) => setHover(false)}
            className={`${!uhv ? 'flex-col flex-1 mx-5 gap-5 ' : 'py-4 '} flex  justify-center border relative m-auto`}
        >
            {hover && !uhv && (
                <div className="absolute bottom-[63px] left-0 right-0 flex justify-center items-center gap-4 animate-slide-top">
                    <span onClick={() => handleAddToWishList()}>
                        <HoverIcon icon={<AiFillHeart size={20} />} />
                    </span>
                    <Link to={`/${product.category?.toLowerCase()}/${product._id}/${product.title}`}>
                        <HoverIcon icon={<AiOutlineMenu size={20} link={link} />} />
                    </Link>
                    <Link to={`/${product.category?.toLowerCase()}/${product._id}/${product.title}`}>
                        <HoverIcon icon={<BsFillEyeFill size={20} link={link} />} />
                    </Link>
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
