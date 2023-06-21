import React, { useState, useEffect } from 'react';
import { tabs } from '../../../Utils/Contants';
import { ProductsList } from '../../../Components';
import { useSelector } from 'react-redux';
import product1 from '../../../assets/product1.png';
import product2 from '../../../assets/product2.png';
//

const BestSeller = () => {
    const { newProducts, oldProducts } = useSelector((state) => state.products);
    const [activedTab, setActivedTab] = useState(+1);

    return (
        <div className="w-full flex flex-col gap-5">
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
            <div className="w-full ">
                <ProductsList products={activedTab === 1 ? oldProducts : newProducts} />
            </div>
            <div className="flex gap-5 w-full ">
                <img src={product1} alt="" className="flex-1" />
                <img src={product2} alt="" className="flex-1" />
            </div>
        </div>
    );
};

export default BestSeller;
