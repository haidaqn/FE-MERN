import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, Link } from 'react-router-dom';
import { apiLogin } from '../../AxiosClient/apiUser';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Store/User/userSlice';
import { AiFillHome } from 'react-icons/ai';
import path from '../../Utils/path';
import { Loading } from '../../Components';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        password: Yup.string().required('Vui lòng nhập mật khẩu').min(6, 'Mật khẩu phải có ít nhất 6 kí tự')
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        setIsLoading(true);
        const response = await apiLogin(values);
        if (response?.success) {
            setIsLoading(false);
            if (!response?.userData?.isBlocked) {
                Swal.fire('', 'LOGIN Successfully', 'success');
                dispatch(login({ isLogin: true, token: response?.accessToken, userData: response?.userData }));
                if (+response?.userData?.role === 1111) navigate('/');
                else navigate('/admin/dashboard');
            } else {
                setIsLoading(false);
                Swal.fire('', 'Tài Khoản bạn đã bị khóa, hãy liên hệ với Admin để giải quyết!!', 'error');
            }
        } else {
            setIsLoading(false);
            Swal.fire('', 'LOGIN FAIL', 'error');
        }
        setSubmitting(false);
    };

    return (
        <div className="flex flex-col justify-center items-center relative h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6 relative">
                    <Link to="/">
                        <span className="absolute left-0">
                            <AiFillHome />
                        </span>
                    </Link>
                    Đăng nhập
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
                                    className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Mật khẩu
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-main"
                            >
                                Đăng nhập
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="flex justify-between items-center w-full max-w-md mt-3">
                <Link to={'/' + path.RESET_PASSWORD}>
                    <span className="text-main opacity-80 capitalize ">quên mật khẩu?</span>
                </Link>
                <NavLink to="/register">
                    <span className="text-main opacity-80 capitalize ">tạo tài khoản?</span>
                </NavLink>
            </div>
            {isLoading && (
                <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center my-10">
                    <Loading />
                </div>
            )}
        </div>
    );
};

export default Login;
