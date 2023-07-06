import React from 'react';
import { handlePrice } from '../../../Utils/commonF';

const OrdersItem = ({ product, count }) => {
    return (
        <div className="border flex items-center gap-10 px-5">
            <img src={product?.images[0]} alt="" className="w-28 h-28 flex-1 object-contain" />
            <div className="flex flex-8 gap-10 w-full">
                <span className="flex-1">{product.title}</span>
                <span className="flex-1">Số lượng : {count}</span>
                <span className="flex-1">{handlePrice(product.price)} VND</span>
            </div>
        </div>
    );
};

export default OrdersItem;
