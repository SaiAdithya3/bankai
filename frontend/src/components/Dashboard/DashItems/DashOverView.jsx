import React from 'react'
import Ongoing from './../DashProjects/Ongoing'
import Completed from './../DashProjects/Completed'
import Upcoming from './../DashProjects/Upcoming'
import { MainDashProvider } from '../../../context/AppDataContext'

const DashOverView = () => {
  return (
    <>
    <div className='flex   justify-between items-center px-10 py-7'>
        <Ongoing />
        <Upcoming />
        <Completed />
        <Ongoing  />
    </div>
    </>
  )
}

export default DashOverView