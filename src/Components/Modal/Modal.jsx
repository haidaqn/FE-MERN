import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../../Store/App/appSlice';

const Modal = ({ children }) => {
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => dispatch(showModal({ isShowModal: false, modalChildren: null }))}
            className="absolute inset-0 z-50 bg-[rgba(0,0,0,0.3)] flex justify-center items-center"
        >
            {children}
        </div>
    );
};

export default Modal;
