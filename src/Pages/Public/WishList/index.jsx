import React, { useCallback, useEffect, useState } from 'react';
import { apiGetAllWishlist, apiDeleteWishList } from '../../../AxiosClient/apiWishList';
import { useSelector } from 'react-redux';
import { Breadcrumbs, Layout, Loading } from '../../../Components';
import ItemWishlist from './ItemWishlist';
import { toast } from 'react-toastify';

const WishList = () => {
    const { token } = useSelector((state) => state.user);
    const [wishlists, setWishlists] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async () => {
        const response = await apiGetAllWishlist(token);
        if (response?.success) setWishlists(response?.wishlist);
        setIsLoading(false);
    }, [token]);

    const handleDeleteWishlist = useCallback(
        async (pid) => {
            const response = await apiDeleteWishList({ pid }, token);
            if (response?.success) {
                setWishlists((prevWishlists) => prevWishlists.filter((wishlist) => wishlist._id !== pid));
                toast.success('Xóa thành công !');
            } else toast.error('Xóa không thành công !');
        },
        [wishlists]
    );

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3 mb-3 mx-[-14%]">
                <Layout>
                    <h1 className="font-bold text-xl">Wishlists</h1>
                    <Breadcrumbs category="Wishlists" />
                </Layout>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center my-10">
                    <Loading />
                </div>
            ) : (
                <>
                    {wishlists?.length ? (
                        <div className="mb-10">
                            <div className="flex flex-col gap-5">
                                {wishlists?.map((wishlist) => (
                                    <ItemWishlist
                                        key={wishlist?._id}
                                        wishlist={wishlist}
                                        handleDeleteWishlist={handleDeleteWishlist}
                                        token={token}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-xl flex justify-center items-center my-5">
                            Chưa có sản phẩm nào ở Wishlists !
                        </div>
                    )}
                </>
            )}
            <div className="h-[300px]"></div>
        </>
    );
};

export default WishList;
