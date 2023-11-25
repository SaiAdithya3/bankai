import React from 'react';
import StatusBadge from '../utils/utilcomp/StatusBadge';

const ProjectDetail = () => {
    return (
        <div>
            <div className='flex items-center p-4'>
                <h1 className='text-xl font-bold m-4'>The Sky Villas</h1>
                <StatusBadge color='green' text='Ongoing'/>
                <StatusBadge color='pink' text='Warning'/>
                <StatusBadge color='red' text='Upcoming'/>
                <StatusBadge color='blue' text='Completed'/>
                <StatusBadge color='yellow' text='Warning'/>
             </div>
        </div>
    )
}

export default ProjectDetail