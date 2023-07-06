import React from 'react';
import OrdersItem from './OrdersItem';
import { handlePrice } from '../../../Utils/commonF';

const OrderList = ({ Order, index }) => {
    return (
        <div className="flex flex-col gap-5 border py-4 px-5 rounded-lg">
            <div className="flex gap-10 items-center ">
                <span className="flex-1 text-xl font-semibold">{`Đơn hàng thứ ${index + 1}`}</span>
                <span className="flex-1">Tổng tiền đơn hàng : {handlePrice(Order.total)} VND</span>
                <small className="flex-1 text-lg">
                    Trạng thái đơn hàng : <span className="text-main">{Order.status}</span>
                </small>
            </div>
            <div className="flex flex-col gap-4">
                {Order.products.map((products, index) => (
                    <OrdersItem key={index} product={products?.product} count={products?.count} />
                ))}
            </div>
        </div>
    );
};

export default OrderList;
