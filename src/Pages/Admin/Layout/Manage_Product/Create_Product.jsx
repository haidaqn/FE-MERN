import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { colors } from '../../../../Utils/Contants';

const Create_Product = () => {
    const schema = yup.object().shape({
        title: yup.string().required('Title is required'),
        quantity: yup.number().positive().required('Quantity is required'),
        price: yup.number().positive().required('Price is required'),
        category: yup.string().required('Category is required'),
        // thumb: yup.string().url('Please enter a valid URL for the thumbnail').required('Thumbnail URL is required'),
        brand: yup.string().required('Brand is required'),
        color: yup.string().required('Color is required')
    });
    const [brand, setBrand] = useState(null);
    const [description, setDescription] = useState(null);
    const { categories } = useSelector((state) => state.app);

    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue
    } = useForm({
        resolver: yupResolver(schema)
    });

    const handleSetBrand = (name) => {
        categories.forEach((category) => {
            if (name === '') return setBrand([]);
            if (category?.title === name) return setBrand(category?.brand);
        });
    };

    // const upLoadImages = async (e) => {
    //     const files = [...e?.target?.files];
    //     if (files?.length > 0) {
    //         try {
    //             const data = new FormData();
    //             files?.forEach((file) => data.append('file', file));
    //             console.log(data);
    //             // const response = await axios.post('/api/upload', data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // };

    const onSubmit = (data) => {
        console.log({ ...data, description });
    };

    return (
        <div className="my-2 mx-auto bg-white shadow-md p-8 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Create Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <label htmlFor="title" className="block font-semibold cursor-pointer">
                        Title:
                    </label>
                    <input
                        name="title"
                        id="title"
                        type="text"
                        {...register('title')}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <p className="text-red-500">{errors.title?.message}</p>
                </div>
                <div>
                    <label htmlFor="descriptions" className="block font-semibold cursor-pointer">
                        Descriptions:
                    </label>
                    <Editor
                        apiKey="lspnfel0cnsoazym68matquiqkvggekxr7lbdxmlva38sse6"
                        initialValue={description}
                        init={{
                            height: 150,
                            menubar: true,
                            plugins: [
                                'advlist',
                                'autolink',
                                'lists',
                                'link',
                                'image',
                                'charmap',
                                'print',
                                'preview',
                                'anchor',
                                'searchreplace',
                                'visualblocks',
                                'code',
                                'fullscreen',
                                'insertdatetime',
                                'media',
                                'table',
                                'paste',
                                'code',
                                'help',
                                'wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help'
                        }}
                        onChange={(e) => setDescription(e.target.getContent())}
                    />
                    {!description?.length && <p className="text-red-500">Description is required</p>}
                </div>
                {/* <div>
                    <label htmlFor="thumb" className="block font-semibold cursor-pointer">
                        Thumbnail :
                    </label>
                    <label className="w-24 cursor-pointer h-24 flex flex-col bg-gray-200 border justify-center items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                            />
                        </svg>
                        <span className="text-lg font-medium">upload</span>
                        <input {...register('thumb')} multiple type="file" onChange={(e) => upLoadImages(e)} className="hidden" />
                    </label>
                    <p className="text-red-500">{errors.thumb?.message}</p>
                </div> */}
                <div className="flex gap-5">
                    <div className="flex-1">
                        <label htmlFor="quantity" className="block font-semibold cursor-pointer">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            {...register('quantity')}
                            min={1}
                            defaultValue={1}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <p className="text-red-500">{errors.quantity?.message}</p>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="price" className="block font-semibold cursor-pointer">
                            Price:
                        </label>
                        <input
                            type="number"
                            {...register('price')}
                            min={10000}
                            defaultValue={10000}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <p className="text-red-500">{errors.price?.message}</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex-1">
                        <label htmlFor="category" className="block font-semibold cursor-pointer">
                            Category:
                        </label>
                        <select
                            {...register('category')}
                            onChange={(e) => handleSetBrand(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <option value="">Select a category</option>
                            {categories?.map((category) => (
                                <option key={category?._id} value={category?.title}>
                                    {category?.title}
                                </option>
                            ))}
                        </select>
                        <p className="text-red-500">{errors.category?.message}</p>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="brand" className="block font-semibold cursor-pointer">
                            Brand:
                        </label>
                        <select
                            {...register('brand')}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <option value="">Select a brand</option>
                            {brand?.map((item) => (
                                <option key={item}>{item}</option>
                            ))}
                        </select>
                        <p className="text-red-500">{errors.brand?.message}</p>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="color" className="block font-semibold cursor-pointer">
                            Color:
                        </label>
                        <select
                            {...register('color')}
                            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                        >
                            <option value="">Select a color</option>
                            {colors?.map((color) => (
                                <option key={color?._id} className="capitalize">
                                    {color?.name}
                                </option>
                            ))}
                        </select>
                        <p className="text-red-500">{errors.color?.message}</p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center mt-10">
                    <button
                        type="submit"
                        className="bg-main w-[50%] capitalize text-white py-2 px-4 rounded-md hover:bg-main/90 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Create new product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Create_Product;
