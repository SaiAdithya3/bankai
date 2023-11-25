import React from 'react';
import { FiFeather } from "react-icons/fi";

const TableRow = ({ index, flatName, size, status, price, editLink }) => {
    const isBooked = status === 'booked';
    return (
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4">{index}</td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {flatName}
            </th>
            <td className="px-6 py-4">{size}</td>
            <td className="px-6 py-4 flex items-center">
                {isBooked ? (
                    <p className="bg-green-300/60 text-center px-2 mx-1 py-1 items-center flex cursor-pointer rounded-2xl text-xs text-green-800"><span className='p-0.5 border border-green-800 mr-1 rounded-full'></span>Booked</p>
                    ) : (
                    <p className="bg-red-300/60 text-center px-2 mx-1 py-1 items-center flex cursor-pointer rounded-2xl text-xs text-red-800"><span className='p-0.5 border border-red-800 mr-1 rounded-full'></span>Not-Booked</p>
                )}
            </td>
            <td className="px-6 py-4">{price}</td>
            <td className="px-6 py-4 text-right">
                <a href={editLink} className="font-medium ">
                    <FiFeather className='text-gray-500 mr-3 text-2xl border rounded-md p-1 border-gray-300'/>
                </a>
            </td>
        </tr>
    );
};

export default TableRow;
