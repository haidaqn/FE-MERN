import React from 'react';
import icons from '../../../../Utils/icons';

const { BsShieldLockFill, BsCartCheckFill, AiFillGift, VscDebugStepBack, BiPhoneCall } = icons;

const Properties = () => {
    return (
        <>
            <div className="w-full flex items-center gap-3 border p-2">
                <span className="rounded-full p-2 bg-black">
                    <BsShieldLockFill size={20} color="white" />
                </span>
                <div className="flex flex-col">
                    <span className="">Guarantee</span>
                    <span className="text-sm text-gray-500">Quality Checked</span>
                </div>
            </div>
            <div className="w-full flex items-center gap-3 border p-2">
                <span className="rounded-full p-2 bg-black">
                    <BsCartCheckFill size={20} color="white" />
                </span>
                <div className="flex flex-col">
                    <span className="">Free Shipping</span>
                    <span className="text-sm text-gray-500">Free On All Products</span>
                </div>
            </div>
            <div className="w-full flex items-center gap-3 border p-2">
                <span className="rounded-full p-2 bg-black">
                    <AiFillGift size={20} color="white" />
                </span>
                <div className="flex flex-col">
                    <span className="">Special Gift Cards</span>
                    <span className="text-sm text-gray-500">Special Gift Cards</span>
                </div>
            </div>
            <div className="w-full flex items-center gap-3 border p-2">
                <span className="rounded-full p-2 bg-black">
                    <VscDebugStepBack size={20} color="white" />
                </span>
                <div className="flex flex-col">
                    <span className="">Free Return</span>
                    <span className="text-sm text-gray-500">Within 7 Days</span>
                </div>
            </div>
            <div className="w-full flex items-center gap-3 border p-2">
                <span className="rounded-full p-2 bg-black">
                    <BiPhoneCall size={20} color="white" />
                </span>
                <div className="flex flex-col">
                    <span className="">Consultancy</span>
                    <span className="text-sm text-gray-500">Lifetime 24/7/356</span>
                </div>
            </div>
        </>
    );
};

export default Properties;
