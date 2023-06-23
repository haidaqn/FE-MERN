import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, Layout, ProductItem } from '../../../../Components';
import { apiProducts } from '../../../../AxiosClient/apiProducts';
import Masonry from 'react-masonry-css';

//

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

const Category = () => {
    const { category } = useParams();
    const [productCategories, setProductCategories] = useState(null);
    const fetchDataCategory = async (queries) => {
        const response = await apiProducts(queries);

        if (response?.success) {
            setProductCategories(response?.products);
        }
    };

    useEffect(() => {
        fetchDataCategory();
    }, []);

    return (
        <>
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3 mx-[-14%]">
                <Layout>
                    <h1>{category}</h1>
                    <Breadcrumbs category={category} />
                </Layout>
            </div>
            <div className="my-3 border">
                <span>filter</span>
            </div>
            <div className="my-3 mx-[-12px]">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex gap-6"
                    columnClassName="my-masonry-grid_column"
                >
                    {productCategories?.map((product) => (
                        <ProductItem product={product} key={product?._id} marginCategory />
                    ))}
                </Masonry>
            </div>
        </>
    );
};

export default Category;
