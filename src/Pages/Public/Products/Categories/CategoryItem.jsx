import React from 'react';
import Masonry from 'react-masonry-css';
import { ProductItem } from '../../../../Components';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};
const CategoryItem = ({ categories }) => {
    return (
        <div className="my-3 mx-[-12px]">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="my-masonry-grid_column"
            >
                {categories?.map((product) => (
                    <ProductItem product={product} key={product?._id} marginCategory />
                ))}
            </Masonry>
        </div>
    );
};

export default CategoryItem;
