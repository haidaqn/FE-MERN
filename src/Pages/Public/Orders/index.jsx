import React, { useEffect, useState } from 'react';
import { Breadcrumbs, Layout, Loading } from '../../../Components';
import { apiGetOrders } from '../../../AxiosClient/apiOrders';
import { useSelector } from 'react-redux';
import OrderList from './OrderList';

const Orders = () => {
    const { token } = useSelector((state) => state.user);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const response = await apiGetOrders(token);
        if (response?.success) setData(response?.response);
        setIsLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3 mb-3 mx-[-14%]">
                <Layout>
                    <h1 className="font-bold text-xl">Orders</h1>
                    <Breadcrumbs category="Orders" />
                </Layout>
            </div>
            <div className="my-5 flex flex-col gap-5">
                {isLoading ? (
                    <div className="flex justify-center items-center my-10">
                        <Loading />
                    </div>
                ) : (
                    <>
                        {data?.map((Order, index) => (
                            <OrderList key={Order?._id} Order={Order} index={index} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Orders;
