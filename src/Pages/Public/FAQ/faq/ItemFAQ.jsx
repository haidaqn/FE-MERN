import React, { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
const ItemFAQ = ({ index, title, content }) => {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick((prev) => !prev);
    };
    //

    return (
        <div className={`w-full flex flex-col  cursor-pointer ${isClick && 'border'}`} onClick={() => handleClick()}>
            <h1
                className={`w-full  flex justify-between items-center p-5 ${isClick ? 'bg-main text-white' : 'border'}`}
            >
                <span className={`${!isClick && 'hover:text-main'} w-full flex justify-between`}>
                    {index}. {title}
                    <VscAdd size={16} />
                </span>
            </h1>
            {isClick && <h1 className="p-5 ">{content}</h1>}
        </div>
    );
};

export default ItemFAQ;
