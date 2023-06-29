import React, { memo, useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../../assets/logo.png';
import { options } from '../../../Utils/Contants';
import { AiFillStar } from 'react-icons/ai';
import { apiRatings } from '../../../AxiosClient/apiProducts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../Store/App/appSlice';
import { toast } from 'react-toastify';

const validationSchema = Yup.object().shape({
    selectedOption: Yup.string().required('Please select an option.')
});

const VoteOption = ({ nameProduct, pid, rerender }) => {
    const dispatch = useDispatch();
    const voteOptionRef = useRef();
    const [selectedOption, setSelectedOption] = useState('');
    const { token } = useSelector((state) => state.user);
    useEffect(() => {
        voteOptionRef.current.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'center' });
    }, []);

    const formik = useFormik({
        initialValues: { message: '', selectedOption: '' },
        validationSchema,
        onSubmit: async (values) => {
            if (values.selectedOption !== '') {
                const data = { star: values.selectedOption, comment: values.message, pid };
                await apiRatings(data, token);
                toast.success('Vote Success!');
                rerender();
                dispatch(showModal({ isShowModal: false, modalChildren: null }));
            }
        }
    });

    const handleOptionClick = (option) => {
        formik.setFieldValue('selectedOption', option);
        setSelectedOption(option);
    };

    const handleSubmit = () => {
        formik.handleSubmit();
    };

    return (
        <div
            ref={voteOptionRef}
            onClick={(e) => {
                e.stopPropagation();
            }}
            className="w-[700px] bg-white py-10 px-5 rounded-lg flex flex-col gap-4 justify-center items-center"
        >
            <img src={logo} alt="Logo" />
            <span className="">{`Voting product ${nameProduct}`}</span>
            <form>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500"
                    placeholder="Please rate the product..."
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                    <span className="text-red-500">{formik.errors.message}</span>
                )}
                <div className="flex gap-5 mt-5">
                    {options?.map((option) => (
                        <div
                            key={option.id}
                            className={`cursor-pointer border flex-1 flex flex-col items-center justify-center rounded-lg p-4 min-w-[100px] hover:opacity-80 ${
                                selectedOption === option.id + 1 ? 'bg-gray-300' : ''
                            }`}
                            onClick={() => handleOptionClick(option.id + 1)}
                        >
                            <AiFillStar size={22} color={`${selectedOption === option.id + 1 ? 'red' : ''}`} />
                            <span className={`${selectedOption === option.id + 1 && 'text-white'}`}>{option.name}</span>
                        </div>
                    ))}
                </div>
                {formik.touched.selectedOption && formik.errors.selectedOption && (
                    <span className="text-red-500">{formik.errors.selectedOption}</span>
                )}
            </form>
            <button
                className="bg-blue-500 text-white px-[40px] py-2 rounded-lg mt-5 w-2/3"
                onClick={() => handleSubmit()}
            >
                Submit
            </button>
        </div>
    );
};

export default memo(VoteOption);
