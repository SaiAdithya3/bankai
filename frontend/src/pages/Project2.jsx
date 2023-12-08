import React from 'react';
import { useParams } from 'react-router-dom';
import DashHero from '../components/Dashboard/DashHero';


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
