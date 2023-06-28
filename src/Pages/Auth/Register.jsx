import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, Link } from 'react-router-dom';
import { apiRegister } from '../../AxiosClient/apiUser';
import Swal from 'sweetalert2';
import { AiFillHome } from 'react-icons/ai';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = {
        email: '',
        password: '',
        lastName: '',
        firstName: '',
        mobile: ''
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        password: Yup.string().required('Vui lòng nhập mật khẩu').min(6, 'Mật khẩu phải có ít nhất 6 kí tự'),
        lastName: Yup.string().required('Vui lòng nhập họ'),
        firstName: Yup.string().required('Vui lòng nhập tên'),
        mobile: Yup.string().required('Vui lòng nhập số điện thoại')
    });
    const handleSubmit = async (values, { setSubmitting }) => {
        // console.log('Register:', values);
        setIsLoading(true);
        const response = await apiRegister(values);
        if (response?.success) {
            Swal.fire('', 'Check mail để hoàn tất đăng ký', 'question');
            navigate('/');
        } else {
            Swal.fire('', 'REGISTER FAIL', 'error');
        }
        setSubmitting(false);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6 relative">
                    <Link to="/">
                        <span className="absolute left-0">
                            <AiFillHome />
                        </span>
                    </Link>
                    Đăng ký
                </h1>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    className=" py-2 px-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="email" component="div" className="text-main" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Mật khẩu
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    className=" py-2 px-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="password" component="div" className="text-main" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                        Họ
                                    </label>
                                    <Field
                                        type="text"
                                        name="lastName"
                                        className=" py-2 px-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage name="lastName" component="div" className="text-main" />
                                </div>
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                        Tên
                                    </label>
                                    <Field
                                        type="text"
                                        name="firstName"
                                        className=" py-2 px-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage name="firstName" component="div" className="text-main" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                    Số điện thoại
                                </label>
                                <Field
                                    type="text"
                                    name="mobile"
                                    className=" py-2 px-4 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="mobile" component="div" className="text-red-500" />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-main"
                            >
                                Đăng ký
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="flex justify-between items-center w-full max-w-md mt-3">
                <Link to={'/'}>
                    <span className="text-main opacity-80 capitalize ">trang chủ</span>
                </Link>
                <NavLink to="/login">
                    <span className="text-main opacity-80 capitalize ">đăng nhập?</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Register;
