import React, { useEffect } from 'react';
import { apiProducts } from '../../../AxiosClient/apiProducts';
import { Breadcrumbs, Layout } from '../../../Components';

const Products = () => {
    // const fetchData = async () => {
    //     const response = await apiProducts();
    //     // console.log(response);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <div>
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3  mx-[-14%]">
                <Layout>
                    <h1 className="font-bold text-xl">Products</h1>
                    <Breadcrumbs category="Products" />
                </Layout>
            </div>
            <div className="h-56 my-4"></div>
        </div>
    );
};

export default Products;
