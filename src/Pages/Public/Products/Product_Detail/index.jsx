import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiProduct } from '../../../../AxiosClient/apiProducts';
import { handlePrice, renderStartNumber } from '../../../../Utils/commonF';
import Properties from './Properties';
import Product_Detail_Image from './Product_Detail_Image';
import { Breadcrumbs } from '../../../../Components';
import { Layout } from '../../../../Components';

const Product_Detail = () => {
    const { pid, category, title } = useParams();
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const response = await apiProduct(pid);
        if (response?.success) setData(response?.product);
    };

    useEffect(() => {
        fetchData();
    }, [pid]);

    return (
        <>
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3 mx-[-14%]">
                <Layout>
                    <h1 className="font-bold text-xl">{data?.title}</h1>
                    <Breadcrumbs category={category} title={title} />
                </Layout>
            </div>
            <div className="flex gap-7 my-3">
                <div className="flex-2 flex flex-col gap-5">
                    <Product_Detail_Image thumb={data?.thumb} images={data?.images} />
                </div>
                <div className="flex-3 border">
                    <small className="px-5 pt-2 flex flex-col gap-2">
                        <span className="text-[30px]">{handlePrice(data?.price)} VND</span>
                        <span className="flex h-4 ">{renderStartNumber(data?.totalRatings, 22)}</span>
                        <div className="ml-5">
                            <ul className="mt-2 list-disc text-[15px] flex flex-col gap-2">
                                {data?.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </small>
                </div>
                <div className="flex-2 flex flex-col gap-3 ">
                    <Properties />
                </div>
            </div>
        </>
    );
};

export default memo(Product_Detail);
