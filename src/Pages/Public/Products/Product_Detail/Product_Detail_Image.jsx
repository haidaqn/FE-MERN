import React, { useState } from 'react';

const Product_Detail_Image = ({ thumb, images }) => {
    const [image, setImage] = useState(null);
    return (
        <>
            <div className="w-full">
                <img src={image || thumb} alt="" className="w-[450px] cursor-pointer border p-12" />
            </div>
            <div className="flex gap-6 mt-3">
                {images?.slice(0, 3).map((item, index) => (
                    <img
                        src={item}
                        onClick={() => setImage(item)}
                        alt=""
                        key={index}
                        className="w-[100px] border p-5 flex-1 cursor-pointer"
                    />
                ))}
            </div>
        </>
    );
};

export default Product_Detail_Image;
