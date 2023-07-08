import React, { useCallback, useEffect, useState } from 'react';
import { apiGetUsers } from '../../../AxiosClient/apiAdmin';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment-timezone';
import { InputField, Loading } from '../../../Components';
import { useDebounce } from '../../../hooks';

const Manage_User = () => {
    const { token } = useSelector((state) => state.user);
    const [data, setData] = useState(null);
    const [payload, setPayload] = useState({ name: '' });
    const [isLoading, setIsLoading] = useState(false);
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

    useEffect(() => {
        setIsLoading(true);
        const param = {};
        if (queries) {
            param.name = queries;
        }
        fetchData(param);
        setIsLoading(false);
    }, [queries]);

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
                            <InputField
                                w
                                value={payload?.name}
                                setValue={setValue}
                                nameKey="name"
                                placeholder="Tìm kiếm theo tên hoặc mail user..."
                            />
                        </div>
                        <table className="w-full border-collapse table-auto">
                            <thead className="bg-gray-500 text-white text-lg uppercase">
                                <tr>
                                    <th className="border p-2">#</th>
                                    <th className="border p-2">Email</th>
                                    <th className="border p-2">Full Name</th>
                                    <th className="border p-2">Role</th>
                                    <th className="border p-2">Phone</th>
                                    <th className="border p-2">Status</th>
                                    <th className="border p-2">Created At</th>
                                    <th className="border p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((user, index) => (
                                    <tr key={user._id} className="text-center">
                                        <td className="border p-2 text-center text-main">{index + 1}</td>
                                        <td className="border p-2">{user.email}</td>
                                        <td className="border p-2">{`${user.firstName} ${user.lastName}`}</td>
                                        <td className="border p-2">{+user.role === 1111 && 'User'}</td>
                                        <td className="border p-2">{user.mobile}</td>
                                        <td className="border p-2 text-main">
                                            {user.isBlocked ? 'Blocked' : 'Actived'}
                                        </td>
                                        <td className="border p-2 ">{moment(user.createdAt).format('DD/MM/YYYY')}</td>
                                        <td className="border p-2 flex gap-5 items-center justify-center text-main capitalize">
                                            <span className="hover:opacity-80 cursor-pointer hover:underline">
                                                edit
                                            </span>
                                            <span className="hover:opacity-80 cursor-pointer hover:underline">
                                                delete
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default Manage_User;
