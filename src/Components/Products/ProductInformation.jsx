import React, { memo, useState } from 'react';
import { product_information } from '../../Utils/Contants';
import Rating from './RateAndComment/Rating';
import Description from './RateAndComment/Description';

const ProductInformation = ({ ratings, description, totalRatings, title, pid }) => {
    const [active, setActive] = useState(3);

    return (
        <div className="relative">
            <div className=" flex gap-3 relative bottom-[-1px]">
                <span
                    onClick={() => setActive(3)}
                    className={`uppercase text-base font-medium cursor-pointer  p-2 ${
                        active === 3 ? 'bg-white border border-b-0' : 'bg-gray-200'
                    }`}
                >
                    DESCRIPTION
                </span>
                {product_information.map((tab, index) => (
                    <span
                        onClick={() => setActive(index)}
                        className={`uppercase text-base font-medium cursor-pointer  p-2 ${
                            active === index ? 'bg-white border border-b-0' : 'bg-gray-200'
                        }`}
                        key={tab?.id}
                    >
                        {tab?.name}
                    </span>
                ))}
                <span
                    onClick={() => setActive(4)}
                    className={`uppercase text-base font-medium cursor-pointer  p-2 ${
                        active === 4 ? 'bg-white border border-b-0' : 'bg-gray-200'
                    }`}
                >
                    Customer Review
                </span>
            </div>
            <div className="w-full h-full border">
                <div className="p-4">
                    {active === 3 && (
                        <div className="w-full">
                            <Description description={description} />
                        </div>
                    )}
                    {product_information.some((product) => product.id === +active) && (
                        <div className="w-full">{product_information[active].content}</div>
                    )}
                    {active === 4 && (
                        <div className="w-full">
                            <Rating title={title} ratings={ratings} totalRatings={totalRatings} pid={pid} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default memo(ProductInformation);
