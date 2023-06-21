import React from 'react';

const ItemOutService = ({ title, content, img }) => {
    return (
        <div className="flex-1 flex flex-col justify-center items-center mb-9">
            <img src={img} alt="" className="h-[64px] w-[64px]" />
            <h1 className="text-base text-gray-500 mt-3">{title}</h1>
            <span className="text-[12px] text-gray-500 text-center">{content}</span>
        </div>
    );
};

export default ItemOutService;
