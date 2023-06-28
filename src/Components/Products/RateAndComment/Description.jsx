import React, { memo } from 'react';

const Description = ({ description }) => {
    return (
        <ul className="flex flex-col gap-2 list-disc ml-5">
            {description?.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default memo(Description);
