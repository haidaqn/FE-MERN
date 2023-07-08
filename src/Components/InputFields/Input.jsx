import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const InputField = ({ type, setValue, nameKey, value, invalidFields, setInvalidFields, w, placeholder }) => {
    return (
        <div className={`${w ? 'w-[300px]' : 'w-full mt-3'} relative`}>
            <input
                type={type || 'text'}
                className="px-4 pb-3 pt-3 rounded-sm border mb-1 w-full text-sm font-light outline-none"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value, nameKey)}
            />
        </div>
    );
};

export default InputField;
