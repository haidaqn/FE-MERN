import React from 'react';
import clsx from 'clsx';
import { useSearchParams, useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { ButtonCommon } from '../../Components';

const PaginationItem = ({ children, index }) => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const handlePagination = () => {
        let param = [];
        for (let i of params.entries()) param.push(i);
        const queries = {};
        for (let i of param) queries[i[0]] = i[1];
        if (Number(children)) queries.page = children;
        navigate({
            pathname: location.pathname,
            search: createSearchParams(queries).toString()
        });
    };

    return (
        <ButtonCommon
            style={clsx(
                'w-10 h-10 text-xl flex justify-center',
                !Number(children) ? 'items-end' : 'items-center hover:rounded-full hover:bg-gray-300',
                +params.get('page') === +children && 'bg-gray-300 rounded-full',
                index === 0 && 'bg-gray-300 rounded-full'
            )}
            handleClick={handlePagination}
            name={children}
        />
    );
};

export default PaginationItem;
