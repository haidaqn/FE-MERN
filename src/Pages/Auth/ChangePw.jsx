import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams, useNavigate } from 'react-router-dom';
import { apiResetPassWord } from '../../AxiosClient/apiUser';
import Swal from 'sweetalert2';
import { Loading } from '../../Components';

const ChangePw = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = {
        newPassword: '',
        confirmNewPassword: ''
    };

    const validationSchema = Yup.object().shape({
        newPassword: Yup.string().required('Vui lòng nhập mật khẩu mới').min(6, 'Mật khẩu phải có ít nhất 6 kí tự'),
        confirmNewPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu xác nhận không khớp')
            .required('Vui lòng xác nhận mật khẩu mới')
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        // Gọi API cập nhật mật khẩu ở đây
        const data = { password: values?.confirmNewPassword, token: token };
        const response = await apiResetPassWord(data);
        setIsLoading(true);
        if (response?.success) {
            setIsLoading(false);
            Swal.fire('', 'Change Password Success !', 'success');
            navigate(`/`);
        } else {
            setIsLoading(false);
            Swal.fire('', 'Change Password Fail !', 'error');
        }
        setSubmitting(false);
    };

    return (
        <div className="my-6">
            <h1 className="text-2xl font-semibold text-center">CẬP NHẬT MẬT KHẨU</h1>
            <div className="">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="flex flex-col gap-3">
                                <div className="mb-4 flex-9">
                                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                                        Mật khẩu mới
                                    </label>
                                    <Field
                                        type="password"
                                        name="newPassword"
                                        className="mt-1 p-3 block border-green-400 w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage name="newPassword" component="div" className="text-red-500" />
                                </div>
                                <div className="mb-4 flex-9">
                                    <label
                                        htmlFor="confirmNewPassword"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Xác nhận mật khẩu mới
                                    </label>
                                    <Field
                                        type="password"
                                        name="confirmNewPassword"
                                        className="mt-1 p-3 block border-green-400 w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage name="confirmNewPassword" component="div" className="text-red-500" />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-main"
                                >
                                    Cập nhật
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            {isLoading && (
                <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center my-10">
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default ChangePw;
