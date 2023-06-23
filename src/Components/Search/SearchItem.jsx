import React, { memo, useState, useEffect } from 'react';
import icons from '../../Utils/icons';
import { colors } from '../../Utils/Contants';
import { useNavigate, createSearchParams, useParams } from 'react-router-dom';

const { AiOutlineDown } = icons;

const SearchItem = ({ name, js, activeClick, handleChangeFilter, type = 'checkbox' }) => {
    const [selected, setSelected] = useState([]);
    const { category } = useParams();
    const navigate = useNavigate();
    const handleSelect = (item) => {
        const already = selected.find((element) => element === item);
        if (already) setSelected((prev) => prev.filter((element) => element !== item));
        else setSelected((prev) => [...prev, item]);
        handleChangeFilter(null);
    };

    useEffect(() => {
        navigate({
            pathname: `/${category}`,
            search: createSearchParams({
                color: selected
            }).toString()
        });
    }, [selected]);

    return (
        <div
            onClick={() => handleChangeFilter(name)}
            className={`border-[2px] relative cursor-pointer flex px-4 py-2 items-center gap-4  ${
                !js && 'justify-center'
            } hover:border-gray-700`}
        >
            <h1 className="text-base text-gray-600">{name}</h1>
            <span className="">
                <AiOutlineDown />
            </span>
            {activeClick === name && (
                <div className="absolute top-[calc(100%+5px)] left-0 w-fit p-4 bg-white border-[2px] z-10">
                    {type === 'checkbox' ? (
                        <div className="">
                            <small className="flex gap-20 text-base">
                                <h2 className="whitespace-nowrap">{selected?.length} Selected </h2>
                                <span
                                    className="underline hover:text-main"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelected([]);
                                    }}
                                >
                                    Reset
                                </span>
                            </small>
                            <small onClick={(e) => e.stopPropagation()} className="flex flex-col mt-2">
                                {colors.map((color) => (
                                    <div key={color.id} className="flex gap-4 text-base">
                                        <input
                                            readOnly
                                            type={type}
                                            name={color.color}
                                            onClick={() => handleSelect(color.color)}
                                            id={color.color}
                                            checked={selected.some((element) => element === color.color)}
                                            className="w-4 h-4 rounded focus:ring-blue-500 border-gray-300"
                                        />
                                        <label className="capitalize">{color?.color}</label>
                                    </div>
                                ))}
                            </small>
                        </div>
                    ) : (
                        <div className="whitespace-nowrap">type khác checkbox</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default memo(SearchItem);
