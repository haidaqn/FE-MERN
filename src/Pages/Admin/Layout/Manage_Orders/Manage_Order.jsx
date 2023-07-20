import React, { useEffect, useState } from 'react';
import { apiGetOrdersAdmin } from '../../../../AxiosClient/apiOrders';
import { useSelector } from 'react-redux';
import { Loading } from '../../../../Components';
import Orders_List from './Manage_Orders_List/Orders_List';

const Manage_Order = () => {
    //

    const { token } = useSelector((state) => state.user);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await apiGetOrdersAdmin(token);
        if (response?.success) setData(response?.response);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    return (
        <div>
            <h1 className="text-2xl font-bold my-2">Manage Orders</h1>
            {isLoading ? (
                <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center my-10 h-96">
                    <Loading />
                </div>
            ) : (
                <Orders_List data={data} />
            )}
        </div>
    );
};

export default Manage_Order;
