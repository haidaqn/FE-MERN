import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div>
            <img src={product?.thumb} alt="minh hoa" className="object-cover w-[243px] h-[243px] " />
        </div>
    );
};

export default ProductItem;
