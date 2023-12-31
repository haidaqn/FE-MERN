import React from 'react';
import { usePagination } from '../../hooks';
import PaginationItem from './PaginationItem';

const Pagination = ({ totalCount, limit }) => {
    const pagination = usePagination(totalCount, 2, limit);
    return (
        <div className="flex items-center gap-3">
            {pagination?.map((item, index) => (
                <PaginationItem key={item} index={index}>
                    {item}
                </PaginationItem>
            ))}
        </div>
    );
};

export default Pagination;
