import React, { useState } from 'react';

const Product_Detail_Image = ({ thumb, images }) => {
    const [image, setImage] = useState(null);
    return (
        <>
            <div className="w-full">
                <div className="max-w-[480px] max-h-[480px] object-contain overflow-hidden border p-12 ">
                    <img src={image || thumb} alt="" />
                </div>
            </div>
            <div className="flex gap-6 mt-3">
                {images?.slice(0, 3).map((item, index) => (
                    <img
                        src={item}
                        onClick={() => setImage(item)}
                        alt="logo"
                        key={index}
                        className="w-[100px] border p-5 flex-1 cursor-pointer object-contain"
                    />
                ))}
            </div>
        </>
    );
};

export default Product_Detail_Image;
