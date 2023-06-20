import React, { useState, useEffect } from 'react';
import { tabs } from '../../../Utils/Contants';
import { ProductsList } from '../../../Components';
import { getNewProducts, getOldProducts } from '../../../Store/Product/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
//

const BestSeller = () => {
    const { newProducts, oldProducts } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [activedTab, setActivedTab] = useState(+1);

    useEffect(() => {
        dispatch(getNewProducts());
        dispatch(getOldProducts());
    }, []);

    return (
        <div className="w-full">
            <div className="uppercase text-6 flex mb-1 border-b-[3px] border-main space-x-3">
                {tabs?.map((item) => (
                    <span
                        key={item.id}
                        onClick={() => setActivedTab(item.id)}
                        className={`font-bold text-5 capitalize p-[10px] border-r  cursor-pointer ${
                            activedTab === item.id ? 'text-black' : 'text-gray-500'
                        }`}
                    >
                        {item.name}
                    </span>
                ))}
            </div>
            <div className="w-full">
                <ProductsList products={activedTab === 1 ? oldProducts : newProducts} />
            </div>
        </div>
    );
};

export default BestSeller;
