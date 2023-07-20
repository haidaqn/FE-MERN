import React, { useCallback, useEffect, useState } from 'react';
import { apiGetUsers, apiDeleteUser } from '../../../../AxiosClient/apiAdmin';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment-timezone';
import { InputField, Loading } from '../../../../Components';
import { useDebounce } from '../../../../hooks';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';

//

const Manage_User = () => {
    const { token } = useSelector((state) => state.user);
    const [data, setData] = useState(null);
    const [payload, setPayload] = useState({ name: '' });
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async (params) => {
        setIsLoading(true);
        const response = await apiGetUsers(params, token);
        if (response?.success) setData(response?.users);
        setIsLoading(false);
    };

    const queries = useDebounce(payload.name, 800);

    const setValue = useCallback(
        (value, nameKey) => {
            setPayload((prev) => ({ ...prev, [nameKey]: value }));
        },
        [payload]
    );

    const handleDeleteUser = (idUser) => {
        Swal.fire({
            title: 'Xác nhận xóa',
            text: 'Bạn có chắc chắn muốn xóa người dùng này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await apiDeleteUser(idUser, token);
                if (response?.success) Swal.fire('Đã xóa!', 'Người dùng đã được xóa thành công.', 'success');
                else Swal.fire('Đã hủy', 'Người dùng không bị xóa.', 'error');
            }
        });
    };

    useEffect(() => {
        const param = {};
        if (queries) {
            param.name = queries;
        }
        fetchData(param);
    }, [queries]);

    //

    return (
        <div>
            <h1 className="text-2xl font-bold my-2">Manage User</h1>
            {isLoading ? (
                <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center my-10 h-96">
                    <Loading />
                </div>
            ) : (
                <>
                    <div className="overflow-x-auto relative">
                        <div className="flex justify-end py-4">
                            <InputField w value={payload?.name} setValue={setValue} nameKey="name" placeholder="Tìm kiếm theo tên hoặc mail user..." />
                        </div>
                        <form>
                            <table className="w-full border-collapse table-auto">
                                <thead className="bg-gray-500 text-white text-lg uppercase">
                                    <tr>
                                        <th className="border p-2">#</th>
                                        <th className="border p-2">Email</th>
                                        <th className="border p-2">First Name</th>
                                        <th className="border p-2">Last Name</th>
                                        <th className="border p-2">Role</th>
                                        <th className="border p-2">Phone</th>
                                        <th className="border p-2">Status</th>
                                        <th className="border p-2">Created At</th>
                                        <th className="border p-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((user, index) => (
                                        <tr key={user._id} className="text-center text-lg">
                                            <td className=" h-[80px] border py-2 px-3 text-center text-main">{index + 1}</td>
                                            <td className=" h-[80px] border py-2 px-3">
                                                <span>{user.email}</span>
                                            </td>
                                            <td className=" h-[80px] border py-2 px-3">
                                                <span>{user.firstName}</span>
                                            </td>
                                            <td className=" h-[80px] border py-2 px-3">
                                                <span>{user.lastName}</span>
                                            </td>
                                            <td className=" h-[80px] border py-2 px-3">
                                                <span>{+user.role === 1111 && 'User'}</span>
                                            </td>
                                            <td className=" h-[80px] border py-2 px-3">
                                                <span>{user.mobile}</span>
                                            </td>
                                            <td className=" border py-2 px-3 text-center flex justify-center items-center">
                                                <div className="h-[80px] flex justify-center items-center gap-4">
                                                    {user.isBlocked ? (
                                                        <>
                                                            <span>
                                                                <FaCircle size={18} color="red" />
                                                            </span>
                                                            <span className="uppercase text-sm font-semibold">blocked</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>
                                                                <FaCircle size={18} color="green" />
                                                            </span>
                                                            <span className="uppercase text-sm font-semibold">actived</span>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                            <td className=" h-[80px] border py-2 px-3 ">{moment(user.createdAt).format('DD/MM/YYYY')}</td>
                                            <td className={`h-[80px] border py-2 px-3 flex gap-5 items-center justify-center text-main capitalize`}>
                                                <Link to={`/admin/manage-user/${user._id}`}>
                                                    <span className="flex items-center justify-center h-[80px] hover:opacity-80 cursor-pointer hover:underline">edit</span>
                                                </Link>
                                                <span onClick={() => handleDeleteUser(user._id)} className="flex items-center justify-center h-[80px] hover:opacity-80 cursor-pointer hover:underline">
                                                    delete
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default Manage_User;
