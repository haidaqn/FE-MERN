import React, { memo } from 'react';

const InputForm = ({ label, disabled, placeholder, min, register, errors, id, validate, type = 'text', defaultValue }) => {
    return (
        <div className="flex-1">
            {label && (
                <label htmlFor="quantity" className="block capitalize font-semibold cursor-pointer">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                {...register(id, validate)}
                disabled={disabled}
                placeholder={placeholder}
                min={min}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                defaultValue={defaultValue}
            />
            {errors[id] && <p className=" text-main">{errors[id]?.message}</p>}
        </div>
    );
};

export default memo(InputForm);
