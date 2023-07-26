import React from 'react';

const Product_Item_Manage = ({ product }) => {
    return (
        <div className="">
            <img src={product?.thumb} className="w-20 h-20" />
        </div>
    );
};

export default Product_Item_Manage;
