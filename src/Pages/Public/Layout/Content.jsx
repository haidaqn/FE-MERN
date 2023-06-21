import React from 'react';
import icons from '../../../Utils/icons';
import logo from '../../../assets/logo.png';

const { AiOutlineMail, AiOutlineHeart, BsFillTelephoneFill, BsFillBagFill } = icons;

const Content = () => {
    return (
        <div className="flex justify-between items-center w-full my-4">
            <img src={logo} alt="logo" />
            <div className="grid grid-cols-3 text-[13px]">
                <div className="col-span-1">
                    <div className="font-bold flex items-center justify-start ">
                        <span className="mx-[19px]">
                            <BsFillTelephoneFill style={{ color: 'red' }} size={12} />
                        </span>
                        <span>(+1800) 000 8808</span>
                    </div>
                    <div className="">Mon-Sat 9:00AM - 8:00PM</div>
                </div>
                <div className="col-span-1flex flex-col justify-center items-center text-center">
                    <div className="font-bold flex items-center ">
                        <span className="mx-[5px]">
                            <AiOutlineMail style={{ color: 'red' }} size={12} />
                        </span>
                        <span className="text-center">SUPPORT@TADATHEMES.COM</span>
                    </div>
                    <div className="">Online Support 24/7</div>
                </div>
                <div className="col-span-1 space-x-16 justify-end flex items-center">
                    <AiOutlineHeart color="red" size={35} />
                    <BsFillBagFill size={35} color="red" />
                </div>
            </div>
        </div>
    );
};

export default Content;
