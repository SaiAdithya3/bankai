import React,{lazy,Suspense} from 'react'
import { useMainDashContext } from '../../../context/AppDataContext'
import TestDashCompo from './../../../Tests/TestDashCompo'
const Ongoing = lazy(() => import("./../DashProjects/Ongoing"));
const Upcoming = lazy(() => import("./../DashProjects/Upcoming"));
const Completed = lazy(() => import("./../DashProjects/Completed"));

const components = {
  Ongoing: Ongoing,
  Upcoming: Upcoming,
  Completed: Completed,
};

const DashOverView = () => {
    
    const { activeMenuLinks } = useMainDashContext();
    const ComponentToRender = components[activeMenuLinks] || null;



  return (
    <>
    <div className='flex justify-between items-center px-10 py-7'>
        <TestDashCompo />
    </div>
    <Suspense fallback={<div>Loading...</div>}>
        {ComponentToRender && <ComponentToRender />}
    </Suspense>
    </>
  )
}

export default DashOverView