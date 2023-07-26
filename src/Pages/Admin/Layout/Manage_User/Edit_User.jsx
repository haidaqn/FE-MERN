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
import { InputForm } from '../../../../Components';

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
        <div className=" my-2 bg-white shadow-md p-8 rounded-md overflow-hidden">
            <h1 className="text-2xl font-bold my-2">Edit User</h1>
            {isLoading ? (
                <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center my-10">
                    <Loading />
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <InputForm
                        label="Email:"
                        id="email"
                        type="text"
                        register={register}
                        errors={errors}
                        validate={{ email: 'email is required' }}
                        defaultValue={payload?.email || ''}
                    />
                    <InputForm
                        label="First Name:"
                        id="firstName"
                        type="text"
                        register={register}
                        errors={errors}
                        validate={{ firstName: 'First Name is required' }}
                        defaultValue={payload?.firstName || ''}
                    />
                    <InputForm
                        label="Last Name:"
                        id="lastName"
                        type="text"
                        register={register}
                        errors={errors}
                        validate={{ lastName: 'Last Name is required' }}
                        defaultValue={payload?.lastName || ''}
                    />
                    <div className="">
                        <label className="block text-lg capitalize">Status:</label>
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
                    <InputForm
                        label="Mobile:"
                        id="mobile"
                        type="text"
                        register={register}
                        errors={errors}
                        validate={{ mobile: 'Mobile is required' }}
                        defaultValue={payload?.mobile || ''}
                    />
                    <div className="flex gap-8 justify-between capitalize ">
                        <h1
                            className="bg-gray-500 hover:bg-gray-700 w-[50%] text-white font-bold py-2 px-4 rounded text-center cursor-pointer"
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            cancel
                        </h1>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 w-[50%] text-white font-bold py-2 px-4 rounded">
                            Save
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default memo(Edit_User);
