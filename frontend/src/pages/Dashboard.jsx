import React from 'react';
import MainDash from '../components/Dashboard/MainDash';

const Dashboard = () => {
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