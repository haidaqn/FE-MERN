import React from 'react';
import { usePagination } from '../../hooks';
import PaginationItem from './PaginationItem';

const Pagination = ({ totalCount }) => {
    const pagination = usePagination(totalCount, 2);

    return (
        <div className="flex items-center gap-3">
            {pagination?.map((item) => (
                <PaginationItem key={item}>{item}</PaginationItem>
            ))}
        </div>
    );
};

export default Pagination;
