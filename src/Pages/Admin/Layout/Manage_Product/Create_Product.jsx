import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { colors } from '../../../../Utils/Contants';
import { Editor } from '@tinymce/tinymce-react';
import { ButtonCommon, InputForm, SelectForm } from '../../../../Components';
import { fileToBase64 } from '../../../../Utils/commonF';
import { AiFillDelete } from 'react-icons/ai';
import { apiCreateProduct } from '../../../../AxiosClient/apiProducts';

const Create_Product = () => {
    const { token } = useSelector((state) => state.user);
    const schema = yup.object().shape({
        title: yup.string().required('Title is required'),
        quantity: yup.number().positive().required('Quantity is required'),
        price: yup.number().positive().required('Price is required'),
        category: yup.string().required('Category is required'),
        brand: yup.string().required('Brand is required'),
        color: yup.string().required('Color is required'),
        thumb: yup.mixed().required('Thumb is required'),
        images: yup.mixed().required('Please select at least one image file.')
    });
    const [description, setDescription] = useState('');
    const [hover, setHover] = useState(null);
    const [preview, setPreview] = useState({
        thumb: '',
        images: []
    });
    const { categories } = useSelector((state) => state.app);

    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        watch
    } = useForm({
        resolver: yupResolver(schema)
    });

    const handlePreviewThumb = async (file) => {
        if (file?.type !== 'image/png' && file?.type !== 'image/jpeg') return;
        const base64 = await fileToBase64(file);
        setPreview((prev) => ({ ...prev, thumb: base64 }));
    };

    const handlePreviewImages = async (files) => {
        const imagesPreview = [];
        for (let file of files) {
            if (file?.type !== 'image/png' && file?.type !== 'image/jpeg') return;
            const base64 = await fileToBase64(file);
            imagesPreview.push({ name: file.name, path: base64 });
        }
        setPreview((prev) => ({ ...prev, images: imagesPreview }));
    };

    useEffect(() => {
        handlePreviewImages(watch('images'));
    }, [watch('images')]);

    useEffect(() => {
        handlePreviewThumb(watch('thumb')[0]);
    }, [watch('thumb')]);

    const onSubmit = async (data) => {
        if (preview.thumb.length > 0 && preview.images.length > 0) {
            data.thumb = preview.thumb;
            data.images = preview.images;
        }
        const finalPayload = { ...data, description };
        const response = await apiCreateProduct(finalPayload, token);
        console.log(response);
    };

    const handleRemove = (name) => {
        if (preview?.images?.some((item) => item.name === name))
            setPreview((prev) => ({ ...prev, ['images']: prev.images.filter((element) => element.name !== name) }));
    };

    return (
        <div className="my-2 mx-auto bg-white shadow-md p-8 rounded-md overflow-hidden">
            <h1 className="text-2xl font-bold mb-4">Create Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <InputForm
                    label="title:"
                    id="title"
                    type="text"
                    register={register}
                    errors={errors}
                    validate={{ title: 'Title is required' }}
                />
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
                    {!description?.length > 1 && <p className="text-red-500">Description is required</p>}
                </div>
                <div className="flex flex-col gap-4 my-4">
                    <div className="flex gap-5 ">
                        <label className="w-28 h-28 cursor-pointer flex flex-col bg-gray-200 border justify-center items-center gap-1">
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
                            <span className="font-medium capitalize">Upload Thumb</span>
                            <input
                                type="file"
                                id="thumb"
                                className="hidden"
                                name="thumb"
                                {...register('thumb', { required: 'Thumb is required' })}
                            />
                        </label>
                        {preview?.thumb.length > 0 && (
                            <div>
                                <img src={preview.thumb} alt="img" className="h-28 w-28 object-contain" />
                            </div>
                        )}
                    </div>
                    <div className="flex gap-5">
                        <label className="w-28 h-28 cursor-pointer flex flex-col bg-gray-200 border justify-center items-center gap-1">
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
                            <span className="font-medium capitalize">Upload images </span>
                            <input
                                type="file"
                                multiple
                                id="images"
                                name="images"
                                className="hidden"
                                {...register('images', { required: 'Images are required' })}
                            />
                        </label>
                        {preview?.images.length > 0 && (
                            <div className="flex gap-5">
                                {preview?.images?.map((img) => (
                                    <div
                                        className="w-fit relative cursor-pointer"
                                        key={img.name}
                                        onMouseEnter={() => setHover(img.name)}
                                        onMouseLeave={() => setHover(null)}
                                    >
                                        <img src={img.path} alt="img" className="h-28 w-28 object-contain" />
                                        {hover === img.name && (
                                            <div
                                                onClick={() => handleRemove(img.name)}
                                                className="bg-[rgba(0,0,0,0.3)] absolute inset-0 animate-scale-up flex justify-center items-center"
                                            >
                                                <AiFillDelete size={45} color="white" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex gap-5">
                    <InputForm
                        label="Quantity:"
                        id="quantity"
                        type="number"
                        register={register}
                        defaultValue={1}
                        min={1}
                        errors={errors}
                        validate={{ required: 'Quantity is required' }}
                    />
                    <InputForm
                        label="Price:"
                        id="price"
                        type="number"
                        register={register}
                        defaultValue={10000}
                        min={10000}
                        errors={errors}
                        validate={{ required: 'Price is required' }}
                    />
                </div>
                <div className="flex gap-5">
                    <SelectForm
                        label="Category"
                        options={categories?.map((item) => ({ code: item?._id, value: item?.title }))}
                        id="category"
                        register={register}
                        errors={errors}
                        validate={{ category: 'Category is required' }}
                    />
                    <SelectForm
                        label="Brand:"
                        options={categories
                            ?.find((item) => item.title === watch('category'))
                            ?.brand?.map((element) => ({ code: element, value: element }))}
                        id="brand"
                        register={register}
                        errors={errors}
                        validate={{ brand: 'Brand is required' }}
                    />
                    <SelectForm
                        label="Color"
                        options={colors}
                        id="color"
                        register={register}
                        errors={errors}
                        validate={{ color: 'Color is required' }}
                    />
                </div>
                <div className="w-full flex justify-center items-center mt-10">
                    <ButtonCommon
                        type="submit"
                        name="Create new product"
                        style="bg-main w-[50%] capitalize text-white py-2 px-4 rounded-md hover:bg-main/90 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
            </form>
        </div>
    );
};

export default Create_Product;
