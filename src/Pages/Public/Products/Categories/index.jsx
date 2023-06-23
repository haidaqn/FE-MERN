import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Breadcrumbs, Layout, ProductItem, SearchItem } from '../../../../Components';
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
    const [activeClick, setActiveClick] = useState(null);
    const [params] = useSearchParams();
    const fetchDataCategory = async (queries) => {
        const response = await apiProducts(queries);

        if (response?.success) {
            setProductCategories(response?.products);
        }
    };

    const handleChangeFilter = useCallback(
        (name) => {
            if (activeClick === name) setActiveClick(null);
            else setActiveClick(name);
        },
        [activeClick]
    );

    useEffect(() => {
        let param = [];
        for (let i of params.entries()) param.push(i);
        let queries = {};
        for (let item of params) queries[item[0]] = item[1];
        fetchDataCategory(queries);
    }, [params]);

    return (
        <>
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3 mx-[-14%]">
                <Layout>
                    <h1 className="font-bold text-xl">{category}</h1>
                    <Breadcrumbs category={category} />
                </Layout>
            </div>
            <div className="my-5 border flex p-4">
                <div className="flex-5 flex flex-col gap-2">
                    <span className="text-lg text-gray-500">Filter by</span>
                    <small className="flex-5 flex gap-4">
                        <SearchItem
                            name="Price"
                            activeClick={activeClick}
                            handleChangeFilter={handleChangeFilter}
                            type="input"
                        />
                        <SearchItem name="Color" activeClick={activeClick} handleChangeFilter={handleChangeFilter} />
                    </small>
                </div>
                <div className="flex-2 flex  flex-col gap-2">
                    <span className="text-lg text-gray-500">Sort by</span>
                    <SearchItem
                        name="Best Selling"
                        js
                        activeClick={activeClick}
                        handleChangeFilter={handleChangeFilter}
                    />
                </div>
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
