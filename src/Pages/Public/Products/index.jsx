import React, { useEffect, useState } from 'react';
import { apiProducts } from '../../../AxiosClient/apiProducts';
import { Breadcrumbs, Layout, Pagination } from '../../../Components';
import PageItem from './PageItem';

const Products = () => {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        const response = await apiProducts();
        if (response?.success) setData(response);
    };
    const fetchDataCategory = async (queries) => {
        const response = await apiProducts(queries);
        if (response?.success) {
            setProductCategories(response?.products);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3  mx-[-14%]">
                <Layout>
                    <h1 className="font-bold text-xl">Products</h1>
                    <Breadcrumbs category="Products" />
                </Layout>
            </div>
            {data?.count > 0 ? (
                <PageItem products={data?.products} />
            ) : (
                <div className="my-3 h-[200px] flex justify-center items-center">
                    <h1 className="text-2xl font-semibold ">Không có sản phẩm nào !</h1>
                </div>
            )}
            <div className="my-4 flex items-center justify-center">
                <Pagination totalCount={data?.count} />
            </div>
        </>
    );
};

export default Products;
