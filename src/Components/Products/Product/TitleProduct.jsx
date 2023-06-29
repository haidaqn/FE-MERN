import React from 'react';
import { handlePrice, renderStartNumber } from '../../../Utils/commonF';
import { Link } from 'react-router-dom';

const TitleProduct = ({ title, price, totalRatings, id, jc, category }) => {
    return (
        <small className={`flex flex-col my-3 ml-3 ${jc ? 'justify-center items-center' : 'justify-start'}`}>
            <Link to={`/${category?.toLowerCase()}/${id}/${title}`}>
                <span className="text-lg hover:text-main">{title?.slice(0, 20)}</span>
            </Link>
            <span className="text-base">{handlePrice(price)} VND</span>
            <span className="flex gap-1">{renderStartNumber(Math.round(totalRatings), 18)}</span>
        </small>
    );
};

export default TitleProduct;
