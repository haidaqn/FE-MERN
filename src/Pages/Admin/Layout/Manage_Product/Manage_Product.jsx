import React, { useEffect, useState } from 'react';
import { apiProducts } from '../../../../AxiosClient/apiProducts';
import Product_Item_Manage from './Product_Item_Manage';

const Manage_Product = () => {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        const response = await apiProducts();
        if (response?.success) setData(response?.products);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(data);

    return (
        <div>
            <h1 className="text-2xl font-bold my-2">Manage Product</h1>
            <div className="flex flex-col gap-3">
                {data?.map((product) => (
                    <Product_Item_Manage key={product?._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Manage_Product;
