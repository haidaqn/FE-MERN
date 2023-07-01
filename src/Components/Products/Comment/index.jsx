import React, { memo } from 'react';
import { renderStartNumber } from '../../../Utils/commonF';
import moment from 'moment';
import { AiOutlineUser } from 'react-icons/ai';

const Comment = ({ name, comment, time, rating }) => {
    return (
        <div className="border flex p-5 rounded-xl">
            <div className="flex flex-1 flex-col items-center gap-4">
                <AiOutlineUser size={50} />
                <span className="text-lg">{`${name ? name : 'Ẩn Danh'}`}</span>
            </div>
            <div className="flex-5 flex flex-col gap-4 items-center justify-center">
                <span>{comment || `${name} không đánh giá gì về sản phẩm !`}</span>
                <span className="flex gap-1">{renderStartNumber(rating)}</span>
            </div>
            <span className="text-sm text-gray-500">{moment(time)?.fromNow()}</span>
        </div>
    );
};

export default memo(Comment);
