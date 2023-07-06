import React, { useEffect, useState } from 'react';
import { apiProducts } from '../../../AxiosClient/apiProducts';
import { Breadcrumbs, Layout, Pagination, Loading } from '../../../Components';
import PageItem from './PageItem';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [params] = useSearchParams();
    const fetchData = async (queries) => {
        const response = await apiProducts(queries);
        if (response?.success) {
            setData(response);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let param = [];
        for (let i of params.entries()) param.push(i);
        let queries = {};
        for (let item of params) queries[item[0]] = item[1];
        fetchData({ ...queries });
        window.scrollTo(0, 0);
    }, [params]);

    return (
        <>
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3  mx-[-14%]">
                <Layout>
                    <h1 className="font-bold text-xl">Products</h1>
                    <Breadcrumbs category="Products" />
                </Layout>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center my-10">
                    <Loading />
                </div>
            ) : (
                <>
                    {data?.count > 0 && <PageItem products={data?.products} />}
                    <div className="my-4 flex items-center justify-center">
                        <Pagination totalCount={data?.count} isCategory={false} paramName="products" />
                    </div>
                </>
            )}
        </>
    );
};

export default Products;
