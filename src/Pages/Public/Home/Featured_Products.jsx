import React from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from '../../../Components';
import Masonry from 'react-masonry-css';
const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
};
const Featured_Products = () => {
    const { newProducts } = useSelector((state) => state.products);

    return (
        <>
            <div className=" border-b-[3px] w-full border-main">
                <h1 className="uppercase font-semibold text-xl pb-2">featured products</h1>
            </div>
            <div className="grid grid-cols-3 gap-5"></div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="my-masonry-grid_column"
            >
                {newProducts?.map((product, index) => (
                    <ProductItem key={index} product={product} uhv />
                ))}
            </Masonry>
        </>
    );
};

export default Featured_Products;
