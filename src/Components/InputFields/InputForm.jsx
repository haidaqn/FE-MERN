import React, { memo } from 'react';

const InputForm = ({ label, disabled, placeholder, register, errors, id, validate, type = 'text', fullWidth, defaultValue }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            {label && <label htmlFor={id}>{label}</label>}
            <input type={type} id={id} {...register(id, validate)} disabled={disabled} placeholder={placeholder} className={`p-1 ${fullWidth ? 'w-full' : 'w-[150px]'}`} defaultValue={defaultValue} />
            {errors[id] && <small className="text-xs text-main">{errors[id]?.message}</small>}
        </div>
    );
};

export default memo(InputForm);
