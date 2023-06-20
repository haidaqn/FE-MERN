import React from 'react';
import { NavLink } from 'react-router-dom';
import { iconSlideBar } from '../../../Utils/Contants';
//
const SlideBar = ({ categories }) => {
    return (
        <div className="flex flex-col ">
            {categories?.map((item, index) => (
                <NavLink
                    to={item?.title}
                    key={item?._id}
                    className={({ isActive }) =>
                        `px-7 pb-[14px] pt-[15px] text-lg hover:text-main font-main flex justify-start items-center gap-2 ${
                            isActive ? 'text-main' : 'text-black'
                        }`
                    }
                >
                    <span>{iconSlideBar[index]}</span>
                    <span> {item?.title}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default SlideBar;
