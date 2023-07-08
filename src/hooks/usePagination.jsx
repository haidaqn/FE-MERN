import { useMemo } from 'react';
import { generateRange } from '../Utils/commonF';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const usePagination = (totalCountProducts, currentPage, siblingCount = 1, limit = 8) => {
    const paginationArray = useMemo(() => {
        const pageSize = limit;
        const paginationCount = Math.ceil(totalCountProducts / pageSize);
        const totalPaginationItem = siblingCount + 5;
        if (paginationCount <= totalPaginationItem) return generateRange(1, paginationCount);
        const isShowLeft = currentPage - siblingCount > 2;
        const isShowRight = currentPage + siblingCount < paginationCount - 1;

        // 2 th xuat hien dau cham 1 ben nhu exam o duoi
        if (isShowLeft && !isShowRight) {
            const rightStart = totalPaginationItem - 4;
            const rightRange = generateRange(rightStart, paginationCount);
            return [1, <BiDotsHorizontalRounded size={30} />, ...rightRange];
        }
        if (!isShowLeft && isShowRight) {
            const leftRange = generateRange(1, 5);
            return [...leftRange, <BiDotsHorizontalRounded size={30} />, paginationCount];
        }

        // th xuat hien ca 2 ben
        const siblingLeft = Math.max(currentPage - siblingCount, 1);
        const siblingRight = Math.min(currentPage + siblingCount, paginationCount);
        if (isShowLeft && isShowRight) {
            const middleRange = generateRange(siblingLeft, siblingRight);
            return [
                1,
                <BiDotsHorizontalRounded size={30} />,
                ...middleRange,
                <BiDotsHorizontalRounded size={30} />,
                paginationCount
            ];
        }
        //
    }, [totalCountProducts, currentPage, siblingCount]); // luu ket qua

    return paginationArray;
};

export default usePagination;

/* 

[1,2,3,4,5,6]  => th1
[1....,6,7] => th2
[1,2,3,4....9] => th3 
[1,...,6,....9] => th4 


*/
