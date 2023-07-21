import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGetUsers, apiUpdateByUserAdmin } from '../../../../AxiosClient/apiAdmin';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Loading } from '../../../../Components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    mobile: yup.string().min(10, 'Mobile number should be at least 10 digits').required('Mobile number is required')
});

const Edit_User = () => {
    const { uid } = useParams();
    const { token } = useSelector((state) => state.user);
    const [payload, setPayload] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState();
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue
    } = useForm({
        resolver: yupResolver(schema)
    });

    const fetchData = async () => {
        setIsLoading(true);
        const response = await apiGetUsers({ _id: uid }, token);
        if (response?.success) {
            setPayload(response?.users[0]);
            setStatus(payload?.isBlocked);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChangeOption = (value) => {
        setStatus(value ? true : false);
    };

    const onSubmit = async (data) => {
        data.isBlocked = status;

        const response = await apiUpdateByUserAdmin(uid, data, token);
        if (response?.success) {
            navigate(-1);
            toast.success('Thay đổi thành công!');
        } else toast.error('Thay đổi thất bại!');
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold my-2">Edit User</h1>
            {isLoading ? (
                <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center my-10">
                    <Loading />
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-4">
                        <label className="block text-gray-600 text-lg capitalize">Email</label>
                        <input
                            type="text"
                            {...register('email')}
                            defaultValue={payload?.email || ''}
                            className="w-full border border-gray-300 rounded py-2 px-3"
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div className="my-4">
                        <label className="block text-gray-600 text-lg capitalize">First Name</label>
                        <input
                            type="text"
                            {...register('firstName')}
                            defaultValue={payload?.firstName || ''}
                            className="w-full border border-gray-300 rounded py-2 px-3"
                        />
                        {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                    </div>
                    <div className="my-4">
                        <label className="block text-gray-600 text-lg capitalize">Last Name</label>
                        <input
                            type="text"
                            {...register('lastName')}
                            defaultValue={payload?.lastName || ''}
                            className="w-full border border-gray-300 rounded py-2 px-3"
                        />
                        {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                    </div>
                    <div className="my-4">
                        <label className="block text-gray-600 text-lg capitalize">Status</label>
                        <select
                            onChange={(e) => handleChangeOption(+e.target.value)}
                            className="w-full border border-gray-300 rounded py-2 px-3 uppercase"
                            name="status"
                            id="status"
                        >
                            <option value="value">default option</option>
                            <option value="1">Block</option>
                            <option value="0">Active</option>
                        </select>
                    </div>
                    <div className="my-4">
                        <label className="block text-gray-600 text-lg capitalize">Mobile</label>
                        <input
                            type="text"
                            {...register('mobile')}
                            defaultValue={payload?.mobile || ''}
                            className="w-full border border-gray-300 rounded py-2 px-3"
                        />
                        {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 w-[50%] text-white font-bold py-2 px-4 rounded">
                        Save
                    </button>
                </form>
            )}
        </div>
    );
};

export default memo(Edit_User);
