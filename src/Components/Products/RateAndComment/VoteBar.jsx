import React, { memo, useEffect, useRef } from 'react';
import { AiFillStar } from 'react-icons/ai';

const VoteBar = ({ rating, countRating, totalRatings }) => {
    const percentRef = useRef();

    useEffect(() => {
        const widthPercent = Math.round((countRating * 100) / totalRatings);
        percentRef.current.style.cssText = `right : ${100 - widthPercent}%`;
    }, [countRating, totalRatings]);

    return (
        <div className="flex items-center gap-5 text-sm text-gray-500">
            <div className="flex flex-1 items-center gap-1">
                <span className="text-lg">{rating}</span>
                <AiFillStar color="orange" size={18} />
            </div>
            <div className="w-full flex-9 h-[8px] rounded-lg bg-gray-300 relative">
                <div ref={percentRef} className="bg-main rounded-lg absolute inset-0"></div>
            </div>
            <div className="flex-2">{`${countRating || 0} đánh giá`} </div>
        </div>
    );
};

export default memo(VoteBar);
