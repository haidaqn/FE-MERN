import React, { useState } from 'react';
import { product_information } from '../../Utils/Contants';

const ProductInformation = () => {
    const [active, setActive] = useState(0);

    //

    return (
        <div>
            <div className=" flex gap-3 relative bottom-[-1px]">
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
            </div>
            <div className="w-full border">
                <div className="p-4">
                    {product_information.some((product) => product.id === +active + 1) && (
                        <span>{product_information[active].content}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;
