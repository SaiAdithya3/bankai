import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDash from '../components/Dashboard/MainDash';
import { MainDashProvider } from '../context/AppDataContext';
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
  const notify = () => toast.success('Modda guduv ra erripuka!.');
  return (
    <>
      <div className='flex'>
        <div className='bg-[#fbfafc] h-full w-[100%]  '>
        {/* <MainDashProvider> */}
          <MainDash />
        {/* </MainDashProvider> */}
        </div>
      </div>
    </>
  )
}

export default Dashboard