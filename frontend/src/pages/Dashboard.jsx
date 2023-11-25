import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDash from '../components/Dashboard/MainDash';

const Dashboard = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-[20%]'>
          <Sidebar />
        </div>
        <div className='bg-black h-full w-[80%] text-white '>
          <MainDash />
        </div>
      </div>
    </>
  )
}

export default Dashboard