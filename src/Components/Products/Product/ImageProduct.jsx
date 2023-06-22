import React from 'react';

const ImageProduct = ({ img, w }) => {
    return (
        <div className="flex justify-center items-center mt-3 ">
            <img src={img} alt="" className={`${w ? 'w-[85px]' : 'w-[90%]'}`} />
        </div>
    );
};

export default ImageProduct;
