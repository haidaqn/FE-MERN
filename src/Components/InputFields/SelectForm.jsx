import React from 'react';

const SelectForm = ({ label, options = [], id, register, validate, errors }) => {
    return (
        <div className="flex-1">
            {label && (
                <label htmlFor="quantity" className="block capitalize font-semibold cursor-pointer">
                    {label}
                </label>
            )}
            <select
                id={id}
                {...register(id, validate)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            >
                <option value="">Select a {label}</option>
                {options?.map((option) => (
                    <option className="capitalize" key={option?.code}>
                        {option?.value}
                    </option>
                ))}
            </select>
            {errors[id] && <p className=" text-main">{errors[id]?.message}</p>}
        </div>
    );
};

export default SelectForm;
