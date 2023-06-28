import React from 'react';

const InputSelected = ({ value, options, changeValue }) => {
    return (
        <div className="border focus:ring-blue-500  border-gray-300  cursor-pointer">
            <select className="px-[8px] py-4 w-full" value={value} onChange={(e) => changeValue(e.target.value)}>
                <option value="Choose">Choose</option>
                {options?.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default InputSelected;
// className = 'w-4 h-4 rounded focus:ring-blue-500 border-gray-300';
