import React from 'react';
import { handlePrice, renderStartNumber } from '../../../Utils/commonF';

const TitleProduct = ({ title, price, totalRatings }) => {
    return (
        <small className="flex flex-col my-3 ml-3 justify-start">
            <span className="text-lg">{title.slice(0, 20)}</span>
            <span className="text-base">{handlePrice(price)} VND</span>
            <span className="flex gap-1">{renderStartNumber(totalRatings, 18)}</span>
        </small>
    );
};

export default TitleProduct;
