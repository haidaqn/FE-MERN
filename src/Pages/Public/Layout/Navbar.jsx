import React from 'react';
import icons from '../../../Utils/icons';
import { navigation } from '../../../Utils/Contants';
import { NavLink } from 'react-router-dom';
const { AiOutlineCaretDown } = icons;

const Navbar = () => {
    return (
        <div className="flex items-center justify-between border-y-[1px] ">
            <div className="py-2 flex space-x-12 items-center  uppercase ">
                {navigation.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.id}
                        className={({ isActive }) =>
                            `flex justify-center items-center gap-2 ${isActive ? 'text-red-500' : 'hover:text-red-500'}`
                        }
                    >
                        <span>{item.value}</span>
                        <span>
                            <AiOutlineCaretDown />
                        </span>
                    </NavLink>
                ))}
            </div>
            <input
                type="text"
                className="outline-none "
                placeholder="Search Something"
                onClick={() => {
                    alert('Tính năng đang phát triển !');
                }}
            />
        </div>
    );
};

export default Navbar;
