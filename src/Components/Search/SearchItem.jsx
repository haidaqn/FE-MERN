import React, { memo, useState, useEffect } from 'react';
import icons from '../../Utils/icons';
import { useNavigate, createSearchParams, useSearchParams, useLocation } from 'react-router-dom';
import { apiProducts } from '../../AxiosClient/apiProducts';
import { handlePrice } from '../../Utils/commonF';
import useDebounce from '../../hooks/useDebounce';

const { AiOutlineDown } = icons;

const SearchItem = ({ name, js, activeClick, handleChangeFilter, type, elementSelect }) => {
    const [selected, setSelected] = useState([]);
    const [bestPrice, setBestPrice] = useState(0);
    const location = useLocation();
    const [price, setPrice] = useState({ from: '', to: '' });
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const handleSelect = (item) => {
        const already = selected.find((element) => element === item);
        if (already) setSelected((prev) => prev.filter((element) => element !== item));
        else setSelected((prev) => [...prev, item]);
        handleChangeFilter(null);
    };

    const fetchBestPrice = async () => {
        const response = await apiProducts({ limit: 1, sort: '-price' });
        if (response?.success) setBestPrice(response?.products[0]?.price);
    };

    useEffect(() => {
        if (selected?.length > 0) {
            let param = [];
            for (let i of params.entries()) param.push(i);
            const queries = {};
            for (let i of param) queries[i[0]] = i[1];
            queries.color = selected.join(',');
            navigate({
                pathname: location.pathname,
                search: createSearchParams(queries).toString()
            });
        } else navigate(location.pathname);
    }, [selected]);

    useEffect(() => {
        if (type === 'input') fetchBestPrice();
    }, [price.from, price.to]);

    const debouncePriceFrom = useDebounce(price.from, 500);
    const debouncePriceTo = useDebounce(price.to, 500);

    useEffect(() => {
        const data = {};
        if (+price?.from > 0) data.from = Number(price.from);
        if (+price?.to > 0) data.to = Number(price.to);
        navigate({
            pathname: location.pathname,
            search: createSearchParams(data).toString()
        });
    }, [debouncePriceFrom, debouncePriceTo]);

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
                <div className="absolute top-[calc(100%+5px)] left-0 w-fit p-4 text-gray-600 bg-white border-[2px] z-10">
                    {type === 'checkbox' ? (
                        <div className="">
                            <small className="flex gap-20 text-base">
                                <h2 className="whitespace-nowrap">{selected?.length} Selected </h2>
                                <span
                                    className="underline hover:text-main"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelected([]);
                                        handleChangeFilter(null);
                                    }}
                                >
                                    Reset
                                </span>
                            </small>
                            <small onClick={(e) => e.stopPropagation()} className="flex flex-col mt-2">
                                {elementSelect?.map((color) => (
                                    <div
                                        key={color.code}
                                        className="flex  items-center gap-4 text-base cursor-pointer"
                                        onClick={() => handleSelect(color.name)}
                                    >
                                        <input
                                            readOnly
                                            type={type}
                                            name={color.value}
                                            id={color.value}
                                            checked={selected.some((element) => element === color.value)}
                                            className="w-4 h-4 rounded focus:ring-blue-500 border-gray-300"
                                        />
                                        <label className="capitalize">{color?.value}</label>
                                    </div>
                                ))}
                            </small>
                        </div>
                    ) : type === 'input' ? (
                        <div className="whitespace-nowrap">
                            <small className="flex gap-20 text-base">
                                <h2 className="whitespace-nowrap">{`The highest price is ${handlePrice(bestPrice)} VND`}</h2>
                                <span
                                    className="underline hover:text-main"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setPrice({ from: '', to: '' });
                                        handleChangeFilter(null);
                                    }}
                                >
                                    Reset
                                </span>
                            </small>
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                className="border-t flex justify-center items-center gap-3 "
                            >
                                <div className="p-3 flex gap-3 justify-center items-center">
                                    <label htmlFor="from">from</label>
                                    <input
                                        value={price.from}
                                        onChange={(e) => setPrice((prev) => ({ ...prev, from: e.target.value }))}
                                        type="number"
                                        name="from"
                                        id="from"
                                        className=" focus:ring-blue-500 border-gray-300 py-2 px-3 outline outline-offset-2 outline-1"
                                    />
                                </div>
                                <div className="p-3 flex gap-3 justify-center items-center">
                                    <label htmlFor="to">to</label>
                                    <input
                                        value={price.to}
                                        onChange={(e) => setPrice((prev) => ({ ...prev, to: e.target.value }))}
                                        type="number"
                                        name="to"
                                        id="to"
                                        className=" focus:ring-blue-500 border-gray-300 py-2 px-3 outline outline-offset-2 outline-1"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>khong co type</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default memo(SearchItem);
