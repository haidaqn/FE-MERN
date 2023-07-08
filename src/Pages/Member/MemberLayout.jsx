import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MemberLayout = () => {
    const { current } = useSelector((state) => state.user);

    console.log(current);

    return (
        <div>
            <div className="my-5">
                <h1>Profile</h1>
                <div className="">Đang triển khai</div>
            </div>
        </div>
    );
};

export default MemberLayout;
