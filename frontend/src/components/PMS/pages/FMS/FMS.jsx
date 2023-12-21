import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { Bar, Line, Pie } from 'react-chartjs-2';
import BarChart from '../../components/BarChart';
import TransactionTableRow from '../../components/TransactionTableRow';


export const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 800,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 456,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 788,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 900,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 43,
    userLost: 234,
  },
  {
    id: 6,
    year: 2021,
    userGain: 900,
    userLost: 4555,
  },
  {
    id: 7,
    year: 2020,
    userGain: 450,
    userLost: 234,
  },
];

const FMS = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        // label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#000",
        ],
        borderRadius: 10,
        // borderColor: "black",
        // borderWidth: 2,
      },
    ],
  });
  const options = {
    scales: {
      x: {

        grid: {
          display: false
        },
        border: {
          display: true
        }
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false
        },
        border: {
          display: false
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const { projectId } = useParams();
  return (
    <>
      <div className="flex flex-col p-8 w-full">
        <h1 className='text-lg font-semibold pb-4 mx-2'>Finance Management System </h1>
        <div className="flex items-start gap-4">
          <div className="flex flex-col w-2/3">
            <div className="flex gap-5 w-full">
              <div className="flex flex-col border gap-2 cursor-pointer shadow-lg rounded-2xl px-8 py-6 w-full">
                <h1 className='font-semibold text-sm'>Revenue</h1>
                <div className="flex items-center gap-2">
                  <h1 className='font-bold text-xl'>₹89,680</h1>
                  <span className='bg-green-200 px-2 py-1 rounded-xl text-green-800 font-semibold flex items-center text-xs gap-1'><FaArrowTrendUp className='' />+2.3%</span>
                </div>
              </div>
              <div className="flex flex-col border gap-2 cursor-pointer shadow-lg rounded-2xl px-8 py-6 w-full">
                <h1 className='font-semibold text-sm'>Expenses</h1>
                <div className="flex items-center gap-2">
                  <h1 className='font-bold text-xl'>₹12,720</h1>
                  <span className='bg-red-200 px-2 py-1 rounded-xl text-red-800 font-semibold flex items-center text-xs gap-1'><FaArrowTrendDown className='' />+5%</span>
                </div>
              </div>
              <div className="flex  flex-col border gap-2 cursor-pointer shadow-lg rounded-2xl px-8 py-6 w-full">
                <h1 className='font-semibold text-sm'>Revenue</h1>
                <div className="flex items-center gap-2">
                  <h1 className='font-bold text-xl'>₹89,680</h1>
                  <span className='bg-green-200 px-2 py-1 rounded-xl text-green-800 font-semibold flex items-center text-xs gap-1'><FaArrowTrendUp className='' />+2.3%</span>
                </div>
              </div>
              <div className='flex flex-col items-center gap-4 justify-center w-full'>
                <button className='bg-black text-white px-2 py-2 text-sm rounded-xl w-full hover:scale-105 shadow-xl transition-all'>Details</button>
                <button className='bg-black text-white px-2 text-sm py-2 rounded-xl w-full hover:scale-105 shadow-xl transition-all'>Analytics</button>
              </div>
            </div>

            <div className="flex gap-4 items-start py-4 w-full">
              <div className="flex flex-col rounded-xl border gap-6 w-full px-8 py-4 bg-gray-50">
                <span className='text-md font-semibold w-full p-2'>Financial Performance</span>
                <Bar data={userData} options={options} />
              </div>
              <div className="flex flex-col rounded-xl border gap-6 w-full px-8 py-4 bg-gray-50">
                <span className='text-md font-semibold w-full p-2'>Income Statistics</span>
                <Line data={userData} options={options} />
              </div>
            </div>

            <div className="flex gap-4 items-start py-4 w-full">
              <div className="flex flex-col rounded-xl border gap-6 w-full px-8 py-4 bg-gray-50 ">
                <div className="flex items-center justify-between">
                  <span className='text-lg font-semibold w-full p-2'>Recent Transactions</span>
                  <button className="bg-black text-white px-6 py-2 text-sm rounded-xl hover:scale-105 shadow-xl transition-all">Details</button>
                </div>
                <div className='h-64 overflow-y-auto '>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500  overflow-y-auto">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Flat Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DETAIL
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    AMOUNT
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DATE & TIME
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    TRANSACTION
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody >
                           <TransactionTableRow index={1} flatName='A-101' detail='Maintenance' type='income' date='02 Aug' price='₹ 12,000' editLink='#' />
                           <TransactionTableRow index={2} flatName='A-101' detail='Registration' type='expense' date='08 Aug' price='₹ 1,000' editLink='#' />
                           <TransactionTableRow index={3} flatName='Block C' detail='Flooring' type='expense' date='27 Aug' price='₹ 8,000' editLink='#' />
                           <TransactionTableRow index={4} flatName='D-301' detail='Margin Payment' type='income' date='15 Aug' price='₹ 54,000' editLink='#' />
                           <TransactionTableRow index={4} flatName='D-301' detail='Margin Payment' type='income' date='15 Aug' price='₹ 54,000' editLink='#' />
                           <TransactionTableRow index={4} flatName='D-301' detail='Margin Payment' type='income' date='15 Aug' price='₹ 54,000' editLink='#' />
                           <TransactionTableRow index={4} flatName='D-301' detail='Margin Payment' type='income' date='15 Aug' price='₹ 54,000' editLink='#' />
                           <TransactionTableRow index={4} flatName='D-301' detail='Margin Payment' type='income' date='15 Aug' price='₹ 54,000' editLink='#' />
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-1/3">
            <div className="bg-gray-100 p-4 w-full h-screen rounded-2xl">

            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default FMS