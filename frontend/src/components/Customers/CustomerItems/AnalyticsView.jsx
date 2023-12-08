import React, { useState } from 'react';
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { Bar, Line, Pie } from 'react-chartjs-2';
import CustomerTableRow from './customertablerow';


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


const AnalyticsView = () => {
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
  return (
    <>
      <div className="flex flex-col p-8 w-full">
        <div className="flex items-start gap-4">
          <div className="flex flex-col w-2/3">
            <div className="flex gap-5 w-full">
              <div className="flex flex-col border gap-2 cursor-pointer shadow-lg rounded-2xl px-8 py-6 w-full">
                <h1 className='font-semibold text-sm'>Total Customers</h1>
                <div className="flex items-center gap-2">
                  <h1 className='font-bold text-xl'>2,356</h1>
                  <span className='bg-green-200 px-2 py-1 rounded-xl text-green-800 font-semibold flex items-center text-xs gap-1'><FaArrowTrendUp className='' />+2.3%</span>
                </div>
              </div>
              <div className="flex flex-col border gap-2 cursor-pointer shadow-lg rounded-2xl px-8 py-6 w-full">
                <h1 className='font-semibold text-sm'>This year</h1>
                <div className="flex items-center gap-2">
                  <h1 className='font-bold text-xl'>478</h1>
                  <span className='bg-red-200 px-2 py-1 rounded-xl text-red-800 font-semibold flex items-center text-xs gap-1'><FaArrowTrendDown className='' />+5%</span>
                </div>
              </div>
              <div className="flex  flex-col border gap-2 cursor-pointer shadow-lg rounded-2xl px-8 py-6 w-full">
                <h1 className='font-semibold text-sm'>This month</h1>
                <div className="flex items-center gap-2">
                  <h1 className='font-bold text-xl'>86</h1>
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
                <span className='text-md font-semibold w-full p-2'>New Customers in Part years</span>
                <Bar data={userData} options={options} />
              </div>
              <div className="flex flex-col rounded-xl border gap-6 w-full px-8 py-4 bg-gray-50">
                <span className='text-md font-semibold w-full p-2'>Yearly Statistics</span>
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

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-1/3">
            <div className="bg-gray-100 p-4 w-full h-screen rounded-2xl">
              <h1 className='font-semibold text-md pb-4 pt-2'>Project wise customers</h1>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500   overflow-y-auto">
                <thead className="text-xs text-gray-700 uppercase rounded-lg bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 text-center py-3">
                      Project
                    </th>
                    <th scope="col" className="px-6 text-center py-3">
                      Customers
                    </th>
                  </tr>
                </thead>
                <tbody >
                    <CustomerTableRow id={1} name='Project 1' projects={23} />
                    <CustomerTableRow id={2} name='Project 2' projects={23} />
                    <CustomerTableRow id={3} name='Project 3' projects={23} />
                    <CustomerTableRow id={4} name='Project 4' projects={23} />
                    <CustomerTableRow id={5} name='Project 5' projects={23} />
                    <CustomerTableRow id={6} name='Project 6' projects={23} />
                    <CustomerTableRow id={7} name='Project 7' projects={23} />
                    <CustomerTableRow id={8} name='Project 8' projects={23} />
                    <CustomerTableRow id={9} name='Project 9' projects={23} />
                    <CustomerTableRow id={10} name='Project 10' projects={23} />
                    <CustomerTableRow id={11} name='Project 11' projects={23} />
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default AnalyticsView