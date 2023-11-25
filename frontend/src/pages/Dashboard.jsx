import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-[18%]'>
          <Sidebar />
        </div>
        <div className='bg-white flex items-center justify-center w-[100%] text-black '>
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  )
}

export default Dashboard