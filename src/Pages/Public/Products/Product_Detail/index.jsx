import React, { memo, useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { apiProduct } from '../../../../AxiosClient/apiProducts';
import Properties from './Properties';
import Product_Detail_Image from './Product_Detail_Image';
import { Breadcrumbs } from '../../../../Components';
import { Layout, ProductInformation } from '../../../../Components';
import Detail_Information from './Detail_Information';

const Product_Detail = () => {
    const { pid, category, title } = useParams();
    const [data, setData] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [update, setUpdate] = useState(false);
    const fetchData = async () => {
        const response = await apiProduct(pid);
        if (response?.success) setData(response?.product);
    };

    const handleAddToCart = useCallback(async () => {}, []);

    useEffect(() => {
        fetchData();
    }, [update]);

    const rerender = useCallback(() => {
        setUpdate(!update);
    }, []);

    return (
        <div className="mb-5 ">
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3  mx-[-14%]">
                <Layout>
                    <h1 className="font-bold text-xl">{data?.title}</h1>
                    <Breadcrumbs category={category} title={title} />
                </Layout>
            </div>
            <div className="flex gap-7 mt-5 mb-3">
                <div className="flex-2 flex flex-col gap-5">
                    <Product_Detail_Image thumb={data?.thumb} images={data?.images} />
                </div>
                <div className="flex-3 border">
                    <Detail_Information quantity={quantity} setQuantity={setQuantity} data={data} />
                </div>
                <div className="flex-2 flex flex-col gap-3 ">
                    <Properties />
                </div>
            </div>
            <div className="w-full">
                <ProductInformation
                    ratings={data?.ratings}
                    description={data?.description}
                    totalRatings={data?.totalRatings}
                    title={title}
                    pid={pid}
                    rerender={rerender}
                />
            </div>
        </div>
    );
};

export default memo(Product_Detail);
