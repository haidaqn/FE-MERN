import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from '../../Components';
import {} from '../../Pages';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import icons from '../../Utils/icons';

const { BsFillTelephoneFill, AiOutlineMail } = icons;

const MemberLayout = () => {
    const { current } = useSelector((state) => state.user);

    console.log(current);

    return (
        <div>
            <div className="flex justify-between items-center w-full my-4">
                <Link to={'/'}>
                    <img src={logo} alt="logo" />
                </Link>
                <div className="grid grid-cols-2 text-[13px]">
                    <div className="col-span-1">
                        <div className="font-bold flex items-center justify-start ">
                            <span className="mx-[19px]">
                                <BsFillTelephoneFill style={{ color: 'red' }} size={12} />
                            </span>
                            <span>(+1800) 000 8808</span>
                        </div>
                        <div className="">Mon-Sat 9:00AM - 8:00PM</div>
                    </div>
                    <div className=" col-span-1 font-bold flex items-center ">
                        <span className="mx-[5px]">
                            <AiOutlineMail style={{ color: 'red' }} size={12} />
                        </span>
                        <span className="text-center">SUPPORT@TADATHEMES.COM</span>
                    </div>
                    <div className="">Online Support 24/7</div>
                </div>
            </div>
        </div>
    );
};

export default MemberLayout;
