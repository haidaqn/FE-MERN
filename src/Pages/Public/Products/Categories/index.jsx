import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';
import { Breadcrumbs, Layout, SearchItem, InputSelected, Pagination, Loading } from '../../../../Components';
import { apiProducts } from '../../../../AxiosClient/apiProducts';
import { colors, sortBy } from '../../../../Utils/Contants';
import PageItem from '../PageItem';

//

const Category = () => {
    const { category } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [productCategories, setProductCategories] = useState(null);
    const [activeClick, setActiveClick] = useState(null);
    const [sort, setSort] = useState(null);
    const [params] = useSearchParams();
    const fetchDataCategory = async (queries) => {
        setIsLoading(true);
        const response = await apiProducts(queries);
        if (response?.success) setProductCategories(response);
        setIsLoading(false);
    };

    useEffect(() => {
        let param = [];
        for (let i of params.entries()) param.push(i);
        let queries = {};
        for (let item of params) queries[item[0]] = item[1];
        let priceQuery = {};
        if (queries.from && queries.to) {
            priceQuery = { $and: [{ price: { gte: queries.from } }, { price: { lte: queries.to } }] };
            delete queries.price;
        }
        if (queries?.from) queries.price = { gte: queries.from };
        if (queries?.to) queries.price = { lte: queries.to };
        delete queries.from;
        delete queries.to;
        const q = { category, ...priceQuery, ...queries, limit: 8 };
        fetchDataCategory(q);
        window.scrollTo(0, 0);
    }, [params]);

    const handleChangeFilter = useCallback(
        (name) => {
            if (activeClick === name) setActiveClick(null);
            else setActiveClick(name);
        },
        [activeClick]
    );

    const changeValue = useCallback(
        (value) => {
            setSort(value);
        },
        [sort]
    );

    useEffect(() => {
        if (sort?.length > 0)
            navigate({
                pathname: `/${category}`,
                search: createSearchParams({
                    sort: sort
                }).toString()
            });
    }, [sort]);

    //

    return (
        <>
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3 mx-[-14%]">
                <Layout>
                    <h1 className="font-bold text-xl cursor-pointer">{category}</h1>
                    <Breadcrumbs category={category} />
                </Layout>
            </div>
            <div className="my-5 border flex p-4">
                <div className="flex-5 flex flex-col gap-2">
                    <span className="text-lg text-gray-500">Filter by</span>
                    <small className="flex-5 flex gap-4">
                        <SearchItem name="Price" activeClick={activeClick} handleChangeFilter={handleChangeFilter} type="input" />
                        <SearchItem name="Color" type="checkbox" elementSelect={colors} activeClick={activeClick} handleChangeFilter={handleChangeFilter} />
                    </small>
                </div>
                <div className="flex-2 flex  flex-col gap-2">
                    <span className="text-lg text-gray-500">Sort by</span>
                    <div className="w-full">
                        <InputSelected value={sort} options={sortBy} changeValue={changeValue} />
                    </div>
                </div>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center my-10">
                    <Loading />
                </div>
            ) : (
                <>
                    {productCategories?.count > 0 ? (
                        <PageItem products={productCategories?.products} />
                    ) : (
                        <div className="my-3 h-[200px] flex justify-center items-center">
                            <h1 className="text-2xl font-semibold ">Không có sản phẩm nào !</h1>
                        </div>
                    )}
                    <div className="flex items-center justify-center my-4">
                        <Pagination totalCount={productCategories?.count} />
                    </div>
                </>
            )}
        </>
    );
};

export default Category;
