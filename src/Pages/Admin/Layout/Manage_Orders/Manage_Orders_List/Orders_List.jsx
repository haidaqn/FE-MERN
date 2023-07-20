import React from 'react';

const Orders_List = (data) => {
    return (
        <div className="mt-5 overflow-x-auto relative">
            <form>
                <table className="w-full border-collapse table-auto ">
                    <thead className="bg-gray-500 text-white text-lg uppercase">
                        <tr>
                            <th className="border p-2">#</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Phone</th>
                            <th className="border p-2">Total</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center text-lg">
                            <td className="border">1</td>
                            <td className="border">2</td>
                            <td className="border">3</td>
                            <td className="border">4</td>
                            <td className="border">5</td>
                            <td className="border">6</td>
                            <td className="border">7</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Orders_List;
