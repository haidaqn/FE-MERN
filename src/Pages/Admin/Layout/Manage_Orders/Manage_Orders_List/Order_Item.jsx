import React from 'react';

const Order_Item = (data, index) => {
    return (
        <>
            <tr className="text-center text-lg">
                <td className="border">
                    <span>{index}</span>
                </td>
                <td className="border">
                    <span>{data?.email}</span>
                </td>
                <td className="border">
                    <span>{`${data?.firstName} ${data?.lastName}`}</span>
                </td>
                <td className="border">
                    <span>{data?.mobile}</span>
                </td>
                <td className="border">
                    <span>{data?.mobile}</span>
                </td>
                <td className="border">
                    <span>{data?.mobile}</span>
                </td>
                <td className="border">
                    <span>{data?.mobile}</span>
                </td>
            </tr>
        </>
    );
};

export default Order_Item;
