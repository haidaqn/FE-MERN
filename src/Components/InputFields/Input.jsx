import React from 'react';

const InputField = ({ type, setValue, nameKey, value, invalidFields, setInvalidFields }) => {
    return (
        <div className="w-full relative mt-3">
            {value.trim() !== '' && (
                <label
                    className="animate-slide-top-sm text-[13px] absolute top-[-8px] left-[7px] blog bg-white px-1 text-main font-medium"
                    htmlFor={nameKey}
                >
                    {nameKey?.slice(0, 1)?.toUpperCase() + nameKey?.slice(1)}
                </label>
            )}
            <input
                type={type || 'text'}
                className="px-4 pb-3 pt-3 rounded-sm border mb-1 w-full text-sm font-light outline-none"
                placeholder={nameKey?.slice(0, 1)?.toUpperCase() + nameKey?.slice(1)}
                value={value}
                onChange={(e) => setValue((prev) => ({ ...prev, [nameKey]: e.target.value }))}
            />
        </div>
    );
};

export default InputField;
