import React, { Fragment, useState } from 'react';
import { adminSlideBar } from '../../../Utils/Contants';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineCaretDown, AiOutlineLogout } from 'react-icons/ai';
import Swal from 'sweetalert2';
import path from '../../../Utils/path';
import { apiLogout } from '../../../AxiosClient/apiUser';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Store/User/userSlice';

//

const active = 'bg-gray-300';
const notActive = 'hover:bg-gray-300';

const NavBar = () => {
    const [actived, setActived] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        Swal.fire({
            text: 'Log Out',
            cancelButtonText: 'NO',
            confirmButtonText: 'Yes',
            showCancelButton: true
        }).then(async (response) => {
            if (response.isConfirmed) {
                await apiLogout();
                dispatch(logout({ isLogin: false, token: null, userData: null }));
                navigate(`/${path.HOME}`);
            }
        });
    };
    const handleActived = (id) => {
        if (actived.some((item) => item === +id)) setActived((prev) => prev.filter((element) => element !== +id));
        else setActived((prev) => [...prev, +id]);
    };

    return (
        <div className="flex flex-col gap-4 capitalize text-lg">
            {adminSlideBar.map((item) => (
                <Fragment key={item.id}>
                    {item.type === 'SINGLE' && (
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => ` flex items-center gap-5 border p-3 rounded-lg ${isActive ? `${active}` : `${notActive}`}`}
                        >
                            <span>{item.icon}</span>
                            <span className=" ">{item.text}</span>
                        </NavLink>
                    )}
                    {item.type !== 'SINGLE' && (
                        <div className="flex flex-col gap-1">
                            <div
                                onClick={() => handleActived(item.id)}
                                className={`flex items-center justify-between cursor-pointer border p-3 rounded-lg  ${
                                    actived.some((el) => +el === +item.id) ? `${active}` : `${notActive}`
                                }`}
                            >
                                <small className="flex items-center gap-5 text-lg">
                                    <span>{item.icon}</span>
                                    <span className="">{item.text}</span>
                                </small>
                                <AiOutlineCaretDown />
                            </div>
                            {actived.some((el) => +el === +item.id) && (
                                <div className="pl-5 mt-2 flex flex-col gap-3">
                                    {item.submenu.map((el) => (
                                        <NavLink
                                            key={el.text}
                                            to={el.path}
                                            className={({ isActive }) =>
                                                `flex items-center gap-5 border p-3 rounded-lg ${isActive ? `${active}` : `${notActive}`}`
                                            }
                                        >
                                            <span className="">{el.text}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </Fragment>
            ))}
            <div className="flex items-center gap-5 border p-3 rounded-lg" onClick={() => handleLogout()}>
                <AiOutlineLogout size={30} />
                <h1>Log out</h1>
            </div>
        </div>
    );
};

export default NavBar;
