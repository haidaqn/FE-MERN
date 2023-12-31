import React, { useEffect } from 'react';
import { handlePrice, renderStartNumber } from '../../../../Utils/commonF';
import { Description } from '../../../../Components';
import { useSelector } from 'react-redux';
import { apiAddToCart } from '../../../../AxiosClient/apiAddCart';
import { toast } from 'react-toastify';

const Detail_Information = ({ data, quantity, setQuantity }) => {
    const { token } = useSelector((state) => state.user);
    const increment = () => {
        if (quantity < data?.quantity) {
            setQuantity((prev) => +prev + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity((prev) => +prev - 1);
        }
    };

    const handleAddToCart = async (data) => {
        const response = await apiAddToCart(data, token);
        if (response?.success) toast.success('Thêm thành công !');
        else toast.error('Thêm không thành công !');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //

    return (
        <>
            <small className="px-5 pt-2 flex flex-col gap-2">
                <span className="text-[30px]">{handlePrice(data?.price)} VND</span>
                <span className="flex h-4 gap-4 items-center">
                    <span className="flex h-4 justify-center items-center">
                        {renderStartNumber(Math.round(data?.totalRatings), 22)}
                    </span>
                    <span className="flex justify-center items-center text-sm text-main">
                        ( Sold: {data?.sold}, In Stock : {data?.quantity})
                    </span>
                </span>
                <Description description={data?.description} />
            </small>
            <div className="w-full flex gap-5 items-center mx-5">
                <span className="uppercase">Quantity :</span>
                <div className="flex items-center my-4 ">
                    <button
                        onClick={() => decrement()}
                        className={`${
                            quantity > 0 ? 'bg-gray-500' : 'bg-gray-300'
                        } hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-l`}
                    >
                        -
                    </button>
                    <input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="text-lg text-center w-12 px-2 py-1"
                    />
                    <button
                        onClick={() => increment()}
                        className={`${
                            quantity < data?.quantity ? 'bg-gray-500' : 'bg-gray-300'
                        } hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-r`}
                    >
                        +
                    </button>
                </div>
            </div>
            <div
                className="w-full text-center my-3 hover:opacity-80"
                onClick={() => handleAddToCart({ pid: data?._id, quantity })}
            >
                <button className="p-4 bg-main w-[90%] rounded-md uppercase">add to cart</button>
            </div>
        </>
    );
};

export default Detail_Information;
