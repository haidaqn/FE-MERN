import React from 'react';

const HoverIcon = ({ icon }) => {
    return (
        <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-500 hover:text-white">
            {icon}
        </div>
    );
};

export default HoverIcon;
