import React from 'react';
import { renderStartNumber, roundDecimal } from '../../../Utils/commonF';
import VoteBar from './VoteBar';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../../Store/App/appSlice';
import VoteOption from './VoteOption';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import path from '../../../Utils/path';
import Comment from '../Comment/index';

const Rating = ({ ratings, totalRatings, title, pid, rerender }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLogin } = useSelector((state) => state.user);
    const handleVoteClick = () => {
        if (isLogin) {
            dispatch(
                showModal({
                    isShowModal: true,
                    modalChildren: <VoteOption nameProduct={title} pid={pid} rerender={rerender} />
                })
            );
        } else {
            Swal.fire({
                text: 'Login to vote',
                cancelButtonText: 'Cancel',
                confirmButtonText: 'Go to Login',
                showCancelButton: true
            }).then((response) => {
                if (response.isConfirmed) navigate(`/${path.LOGIN}`);
            });
        }
    };

    return (
        <>
            <div className="flex w-full">
                <div className="flex-4 gap-3 flex flex-col items-center justify-center border rounded-l-[20px] ">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[30px] font-normal">{`${totalRatings}/5`}</span>
                        <span className="flex">{renderStartNumber(roundDecimal(totalRatings), 24)}</span>
                    </div>
                    <span className="text-lg font-semibold">{`${
                        ratings?.length > 0 ? `${ratings?.length}` : 'Chưa có'
                    } đánh giá !`}</span>
                </div>
                <div className="flex-6 pl-5 flex flex-col gap-3 border rounded-r-[20px] p-4">
                    {Array.from(Array(5).keys())
                        .reverse()
                        .map((item) => (
                            <VoteBar
                                rating={item + 1}
                                key={item}
                                countRating={ratings?.filter((rating) => rating.star === item + 1)?.length}
                                totalRatings={ratings?.length || 1}
                            />
                        ))}
                </div>
            </div>
            <div className="flex flex-col my-4 items-center justify-center">
                <span className="text-lg font-medium">Do you review this product ?</span>
                <Button
                    handleClick={() => handleVoteClick()}
                    name="Rate Now !"
                    style="hover:opacity-90 flex justify-center items-center mt-2 p-2 text-[14px] text-white font-bold bg-main uppercase rounded-md w-[300px]"
                />
            </div>
            <div className="flex flex-col gap-3">
                {ratings?.map((rating) => (
                    <Comment
                        key={rating?._id}
                        time={rating?.updateAt}
                        name={`${rating?.postedBy?.firstName} ${rating?.postedBy?.lastName}`}
                        comment={rating?.comment}
                        rating={rating?.star}
                    />
                ))}
            </div>
        </>
    );
};

export default Rating;
