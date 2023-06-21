import React from 'react';
import { anhdoc, anhdoi1, anhdoi2, anhto } from '../../../assets/Cart_Products';

const Container = () => {
    return (
        <div className="flex justify-between">
            <img src={anhto} alt="hinhanh" className="w-[50%] object-contain" />
            <div className="flex flex-col justify-between w-[24%] object-contain">
                <img src={anhdoi1} alt="hinhanh" />
                <img src={anhdoi2} alt="hinhanh" />
            </div>
            <img src={anhdoc} alt="hinhanh" className="w-[24%] object-contain" />
        </div>
    );
};
export default Container;
