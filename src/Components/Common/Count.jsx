import React from 'react';

const Count = ({ time, name }) => {
    return (
        <div className="flex flex-1 flex-col justify-center items-center bg-[#F4F4F4] px-[5px] py-[10px]">
            <span className="text-base">{time}</span>
            <span className="text-gray-300 text-sm">{name}</span>
        </div>
    );
};

export default Count;
