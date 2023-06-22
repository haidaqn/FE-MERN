import React from 'react';
import icons from '../../../Utils/icons';
import { Layout } from '../../../Components';
//

const { AiFillHome, BsFillTelephoneFill, AiOutlineMail, GrFacebookOption, GrInstagram, GrTwitter, GrPinterest } = icons;

const Footer = () => {
    return (
        <>
            <div className="bg-[#191919] text-white w-full ">
                <Layout>
                    <div className="flex">
                        <div className="flex-2  mt-2">
                            <div className=" flex flex-col gap-5">
                                <h1 className="text-base border-l-[3px] border-main pl-3">ABOUT US</h1>
                                <small className="text-xs mt-1 flex justify-start items-center">
                                    <span className="flex items-center justify-center p-1">
                                        <AiFillHome size={13} />
                                    </span>
                                    <span className="text-xs">
                                        <span className="">Address: </span>
                                        <span className="text-gray-400">Lo Giao Viet Hung Dong Anh Ha Noi</span>
                                    </span>
                                </small>
                                <small className="flex justify-start items-center">
                                    <span className="flex items-center justify-center p-1">
                                        <BsFillTelephoneFill size={12} />
                                    </span>
                                    <span className="text-xs">
                                        <span className="">Phone: </span>
                                        <span className="text-gray-400">033538**5*</span>
                                    </span>
                                </small>
                                <small className="flex justify-start items-center">
                                    <span className="flex items-center justify-center p-1">
                                        <AiOutlineMail size={13} />
                                    </span>
                                    <span className="text-xs">
                                        <span className="">Mail: </span>
                                        <span className="text-gray-400"> haidang02032003@gmail.com</span>
                                    </span>
                                </small>
                            </div>
                            <div className="flex gap-4 mt-5 w-full">
                                <span className="p-2 bg-gray-600 rounded-sm cursor-pointer">
                                    <GrFacebookOption size={18} color="white" />
                                </span>
                                <span className="p-2 bg-gray-600 rounded-sm cursor-pointer">
                                    <GrInstagram size={18} color="white" />
                                </span>
                                <span className="p-2 bg-gray-600 rounded-sm cursor-pointer">
                                    <GrTwitter size={18} color="white" />
                                </span>
                                <span className="p-2 bg-gray-600 rounded-sm cursor-pointer">
                                    <GrPinterest size={18} color="white" />
                                </span>
                            </div>
                        </div>
                        <div className="flex-2 flex pb-6  mt-2">
                            <span className="flex-1">
                                <h1 className="text-base border-l-[3px] border-main pl-3">INFORMATION</h1>
                                <div className="flex flex-col gap-3 mt-5 text-gray-500">
                                    <span>Typography</span>
                                    <span>Gallery</span>
                                    <span>Store Location</span>
                                    <span>Today's Deals</span>
                                    <span>Contact</span>
                                </div>
                            </span>
                            <span className="flex-1">
                                <h1 className="text-base border-l-[3px] border-main pl-3">WHO WE ARE</h1>
                                <div className="flex flex-col gap-3 mt-5 text-gray-500">
                                    <span>Typography</span>
                                    <span>Gallery</span>
                                    <span>Store Location</span>
                                    <span>Today's Deals</span>
                                    <span>Contact</span>
                                </div>
                            </span>
                            <span className="flex-1">
                                <h1 className="text-base border-l-[3px] border-main pl-3">#DIGITALWORLDSTORE</h1>
                            </span>
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    );
};

export default Footer;
