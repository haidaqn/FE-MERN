import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

const Product_Detail_Image = ({ thumb, images }) => {
    const [image, setImage] = useState(null);
    return (
        <>
            <div className="w-full">
                <div className="w-[480px] border p-12 ">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: image || thumb
                            },
                            largeImage: {
                                src: image || thumb,
                                width: 1800,
                                height: 1200
                            },
                            enlargedImageContainerDimensions: {
                                width: '100%',
                                height: '100%'
                            },
                            hoverDelayInMs: 300 // Độ trễ khi hover (300ms ở đây)
                        }}
                    />
                </div>
            </div>
            <div className="flex gap-6 mt-3">
                {images?.slice(0, 3).map((item, index) => (
                    <img
                        src={item}
                        onClick={() => setImage(item)}
                        alt="logo"
                        key={index}
                        className="w-[100px] border p-5 flex-1 cursor-pointer"
                    />
                ))}
            </div>
        </>
    );
};

export default Product_Detail_Image;
