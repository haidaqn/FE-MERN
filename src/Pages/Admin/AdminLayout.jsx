import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminLayout = () => {
    const { current } = useSelector((state) => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (+current?.role !== 2003) navigate('/');
    }, []);

    return <div>AdminLayout</div>;
};

export default AdminLayout;
