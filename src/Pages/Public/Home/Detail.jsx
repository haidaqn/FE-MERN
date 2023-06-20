import React, { useEffect, useState } from 'react';
import icons from '../../../Utils/icons';
import { apiProducts } from '../../../AxiosClient/apiProducts';
import { Count } from '../../../Components';
import { handlePrice, renderStartNumber } from '../../../Utils/commonF';
import errorImg from '../../../assets/product.png';

const { AiFillStar, AiOutlineMenu } = icons;
let interval;
const Detail = () => {
    const [payload, SetPayload] = useState({ hour: 0, minutes: 0, seconds: 0 });
    const [data, SetData] = useState(null);
    const [expireTime, setExpireTime] = useState(false);
    const fetchData = async () => {
        const response = await apiProducts({ limit: 1, page: Math.round(Math.random() * 10), totalRatings: 5 });
        if (response?.success) {
            SetData(response?.products[0]);
            const h = 23 - new Date().getHours();
            const m = 60 - new Date().getMinutes();
            const s = 60 - new Date().getSeconds();
            SetPayload({ hour: h, minutes: m, seconds: s });
        }
    };

    useEffect(() => {
        interval && clearInterval(interval);
        fetchData();
    }, [expireTime]);
    useEffect(() => {
        interval = setInterval(() => {
            if (payload?.seconds > 0) {
                SetPayload((prev) => ({ ...prev, seconds: +prev.seconds - 1 }));
            } else {
                if (payload?.minutes > 0) {
                    SetPayload((prev) => ({ ...prev, minutes: +prev.minutes - 1 }));
                    SetPayload((prev) => ({ ...prev, seconds: 60 }));
                } else {
                    if (payload?.hour > 0) {
                        SetPayload((prev) => ({ ...prev, hour: +prev.hour - 1 }));
                        SetPayload((prev) => ({ ...prev, minutes: 60 }));
                        SetPayload((prev) => ({ ...prev, seconds: 60 }));
                    } else {
                        setExpireTime(!expireTime);
                    }
                }
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [payload.seconds, payload.minutes, payload.hour]);

    //

    return (
        <div className="px-5 my-5">
            <small className="flex items-center mb-10 ">
                <span className="absolute left-[210px]">
                    <AiFillStar color="red" size={22} />
                </span>
                <span className="uppercase text-[22px] text-[#505050] font-semibold text-center w-full">
                    daily deals
                </span>
            </small>
            <div className="flex flex-col justify-center items-center">
                <img src={data?.thumb || errorImg} alt="logo" />
                <span className="text-base cursor-pointer font-bold ">{data?.title.slice(0, 25)}</span>
                <div className="flex h-4 my-[6px]">{renderStartNumber(data?.totalRatings, 20)}</div>
                <div className="flex h-4 text-lg">{handlePrice(data?.price)} VND</div>
            </div>
            <div className="flex gap-3 my-5">
                <Count time={payload.hour} name="Hours" />
                <Count time={payload.minutes} name="Minutes" />
                <Count time={payload.seconds} name="Seconds" />
            </div>
            <button className="uppercase text-white flex gap-2 justify-center items-center w-full bg-main py-1  hover:bg-gray-800">
                <AiOutlineMenu />
                <span>options</span>
            </button>
        </div>
    );
};

export default Detail;
