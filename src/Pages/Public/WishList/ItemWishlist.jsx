import React from 'react';
import { handlePrice, renderStartNumber } from '../../../Utils/commonF';
import { AiFillDelete, AiOutlineShoppingCart } from 'react-icons/ai';
import { apiAddToCart } from '../../../AxiosClient/apiAddCart';
import { toast } from 'react-toastify';

//

const ItemWishlist = ({ wishlist, handleDeleteWishlist, token }) => {
    const handleAddToCart = async () => {
        const response = await apiAddToCart({ pid: wishlist?._id, quantity: 1 }, token);
        if (response?.success) toast.success('Thêm thành công !');
        else toast.error('Thêm không thành công !');
    };

    return (
        <div className="border rounded-xl p-5 flex gap-10 justify-between items-center">
            <div className="flex gap-10">
                <img src={wishlist.images[0]} alt="logo" className="w-[110px] h-[110px]" />
                <div className="flex-col flex gap-4">
                    <span className="text-xl font-semibold">{wishlist.title}</span>
                    <span className="flex gap-1">{renderStartNumber(wishlist.totalRatings, 24)}</span>
                    <span className="">{handlePrice(wishlist.price)} VND</span>
                </div>
            </div>
            <div className="w-fit h-fit flex gap-5 items-center justify-center  cursor-pointer ">
                <span className="p-2 border rounded-full hover:opacity-75" onClick={() => handleAddToCart()}>
                    <AiOutlineShoppingCart size={45} />
                </span>
                <span
                    className="p-2  border rounded-full hover:opacity-75"
                    onClick={() => handleDeleteWishlist(wishlist._id)}
                >
                    <AiFillDelete size={45} color="black" />
                </span>
            </div>
        </div>
    );
};

export default ItemWishlist;
