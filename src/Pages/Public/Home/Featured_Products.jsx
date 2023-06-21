import React from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from '../../../Components';

const Featured_Products = () => {
    const { newProducts } = useSelector((state) => state.products);

    return (
        <>
            <div className=" border-b-[3px] w-full border-main">
                <h1 className="uppercase font-semibold text-xl pb-2">featured products</h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {newProducts?.map((product) => (
                    <ProductItem key={product?.title} product={product} uhv />
                ))}
            </div>
        </>
    );
};

export default Featured_Products;
