import React, { useState, useEffect } from 'react';
import StatusBadge from '../utils/utilcomp/StatusBadge';
import MainDash from '../components/Dashboard/MainDash';
import { MainDashProvider } from '../context/AppDataContext';
import { useParams } from 'react-router-dom';
import { IoNotificationsOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import DashHero from '../components/Dashboard/DashHero';
import { useMainDashContext } from '../context/AppDataContext';


const ProjectDetail = () => {
    const { projectId } = useParams();
    return (
        <div className=" h-screen ">
        <div className=" bg-white">
          <DashHero  params={projectId}/>
        </div>
      </div>
    )
}

export default ProjectDetail;
