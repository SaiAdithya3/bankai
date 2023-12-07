import React from 'react';
import { GoArrowUpRight, GoArrowDownLeft } from "react-icons/go";


const TransactionTableRow = ({ index, flatName, detail, type, price, date, editLink }) => {
    const isIncome = type === 'income';
    return (
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4">{index}</td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {flatName}
            </th>
            <td className="px-6 py-4">{detail}</td>
            <td className="px-6 py-4">{date}</td>
            <td className="px-6 py-4">{price}</td>
            <td className="px-6 justify-center py-4 flex items-center">
                {isIncome ? (
                    <p className="bg-green-300/60 text-center mx-1 items-center flex cursor-pointer rounded-2xl text-green-800"><GoArrowDownLeft className='text-2xl p-1.5'/></p>
                ) : (
                    <p className="bg-red-300/60 text-center mx-1 items-center flex cursor-pointer rounded-2xl  text-red-800"><GoArrowUpRight className='text-2xl p-1.5'/></p>
                )}
            </td>
            {/* <td className="px-6 py-4 text-right">
                <a href={editLink} className="font-medium ">
                    <FiFeather className='text-gray-500 mr-3 cursor-pointer text-2xl border rounded-md p-1 border-gray-300' />
                </a>
            </td> */}
        </tr>
    );
};

export default TransactionTableRow;
