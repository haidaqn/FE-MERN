import React, { memo } from 'react';

const Button = ({ name, handleClick, style, iconBefore, iconAfter, fw, type }) => {
    return (
        <button
            type={type}
            className={
                style
                    ? style
                    : `hover:opacity-90 flex justify-center items-center mt-2 p-2 text-[14px] text-white font-bold bg-main uppercase rounded-md ${
                          fw ? 'w-full' : 'w-fit'
                      }`
            }
            onClick={() => handleClick && handleClick()}
        >
            {iconBefore}
            {name}
            {iconAfter}
        </button>
    );
};

export default memo(Button);
