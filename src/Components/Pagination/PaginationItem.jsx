import React from 'react';
import clsx from 'clsx';
import { useSearchParams, useParams, useNavigate, createSearchParams } from 'react-router-dom';

const PaginationItem = ({ isCategory, paramName, children }) => {
    const [params] = useSearchParams();
    const { [paramName]: paramValue } = useParams();
    const navigate = useNavigate();

    const handlePagination = () => {
        let param = [];
        for (let i of params.entries()) param.push(i);
        const queries = {};
        for (let i of param) queries[i[0]] = i[1];
        if (Number(children)) queries.page = children;
        navigate({
            pathname: `/${isCategory ? paramValue : paramName}`,
            search: createSearchParams(queries).toString()
        });
    };

    return (
        <button
            className={clsx(
                'w-10 h-10 text-xl flex justify-center',
                !Number(children) ? 'items-end' : 'items-center hover:rounded-full hover:bg-gray-300',
                +params.get('page') === +children && 'bg-gray-300 rounded-full'
            )}
            type="button"
            disabled={!Number(children)}
            onClick={handlePagination}
        >
            {children}
        </button>
    );
};

export default PaginationItem;
