import React, { useState } from 'react';
import { handlePrice, renderStartNumber } from '../../../Utils/commonF';
import { AiFillDelete } from 'react-icons/ai';

//

const ItemCart = ({ product, quantity, handleDeleteCart }) => {
    const [quantityItem, setQuantityItem] = useState(quantity);

    return (
        <div className="border rounded-xl p-5 flex gap-14 justify-between items-center ">
            <div className="flex gap-14">
                <div className="flex gap-10">
                    <img src={product.images[0]} alt="logo" className="w-24 h-w-24" />
                    <div className="flex-col flex gap-4">
                        <span className="text-xl font-semibold">{product.title}</span>
                        <span className="flex gap-1">{renderStartNumber(product.totalRatings, 24)}</span>
                        <span className="">{handlePrice(product.price)} VND</span>
                    </div>
                </div>
                <div className="text-xl">
                    <span className="">Số Lượng : </span>
                    <input
                        type="number"
                        value={quantityItem}
                        className=""
                        onChange={(e) => setQuantityItem(e.target.value)}
                        min="1"
                        max={product.quantity}
                    />
                </div>
            </div>
            <div
                onClick={() => handleDeleteCart({ pid: product._id, quantity: quantityItem })}
                className="bg-gray-300 flex justify-center items-center rounded-full hover:opacity-80 cursor-pointer"
            >
                <span className="p-4">
                    <AiFillDelete size={40} />
                </span>
            </div>
        </div>
    );
};

export default ItemCart;
