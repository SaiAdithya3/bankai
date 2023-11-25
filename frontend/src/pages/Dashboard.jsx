import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-[20%]'>
          <Sidebar />
        </div>
        <div className='bg-black h-full w-[80%] text-white '>
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  )
}

export default Dashboard