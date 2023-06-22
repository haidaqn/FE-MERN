import React from 'react';
import { Layout } from '../../Components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { apiForgotPassword } from '../../AxiosClient/apiUser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ResetPw = () => {
    const navigate = useNavigate();
    const initialValues = {
        email: ''
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email')
    });
    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(values);
        const response = await apiForgotPassword(values);
        console.log(response);
        if (response?.success) {
            Swal.fire('', 'Vui lòng kiểm tra email', 'success');
            navigate('/');
        }
        setSubmitting(false);
    };

    return (
        <div className="my-10 w-full">
            <h1 className="text-2xl mt-3 font-semibold text-center">RESET YOUR PASSWORD</h1>
            <h1 className="my-2 p-1 mx-4 text-gray-600 text-center">
                We will send you on email to reset your password
            </h1>
            <Layout>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="flex gap-5">
                                <div className="mb-4 flex-9">
                                    <Field
                                        placeholder="Email : Example@gmail.com"
                                        type="email"
                                        name="email"
                                        className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500" />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 h-[50px] text-center  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-main"
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Layout>
        </div>
    );
};

export default ResetPw;
