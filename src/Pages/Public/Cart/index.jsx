import React, { useCallback, useEffect, useState } from 'react';
import { Breadcrumbs, Layout, Loading } from '../../../Components';
import { apiDeleteCart, apiAddToCart, apiGetAll } from '../../../AxiosClient/apiAddCart';
import { apiCreateOrders } from '../../../AxiosClient/apiOrders';
import { useSelector } from 'react-redux';
import ItemCart from './ItemCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { token } = useSelector((state) => state.user);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [cart, setCart] = useState(null);
    const fetchData = async () => {
        const response = await apiGetAll(token);
        if (response?.success) setCart(response?.cart);
        setIsLoading(false);
    };

    const handleDeleteCart = useCallback(
        async (data) => {
            const response = await apiDeleteCart(data, token);
            if (response?.success) {
                setCart((cart) => cart.filter((item) => item.product._id !== data.pid));
                toast.success('Xóa thành công !');
            } else toast.error('Xóa không thành công !');
        },
        [cart]
    );

    const handleCreateOrder = async () => {
        const response = await apiCreateOrders(token);
        if (response?.success) {
            await apiAddToCart({ reset: '1' }, token);
            toast.success('Tạo đơn hàng thành công !');
            navigate('/orders');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="">
            <div className="bg-[#f7f7f7] pt-2 flex flex-col gap-3 pb-3 mb-3 mx-[-14%]">
                <Layout>
                    <h1 className="font-bold text-xl">Cart</h1>
                    <Breadcrumbs category="Cart" />
                </Layout>
            </div>
            {isLoading ? (
                <div className="flex justify-center items-center my-10">
                    <Loading />
                </div>
            ) : (
                <>
                    {cart?.length ? (
                        <div className="flex flex-col gap-3 mt-6">
                            {cart?.map((item) => (
                                <ItemCart
                                    key={item?._id}
                                    product={item.product}
                                    quantity={item.quantity}
                                    handleDeleteCart={handleDeleteCart}
                                />
                            ))}
                            <div className="my-5 flex justify-center">
                                <div
                                    className="border p-3 rounded-lg bg-main/95 text-white text-xl hover:opacity-80 cursor-pointer"
                                    onClick={() => handleCreateOrder()}
                                >
                                    <span className="">Tạo Đơn Hàng</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-xl flex justify-center items-center my-5">Chưa có sản phẩm !</div>
                    )}
                </>
            )}
            <div className="h-96"></div>
        </div>
    );
};

export default Cart;
