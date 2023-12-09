import React from 'react'
import Wms from './Wms'
import MainWms from './MainWms'
import SearchHOC from 'src/utils/utilcomp/SearchHOC'

const WmsDashboard = () => {
    return (
        <>
            <div className="flex">
                <div className='bg-[#fbfafc] h-full w-[100%]  '>
                    <SearchHOC />
                    <MainWms />
                </div>
            </div>
        </>
    )
}

export default WmsDashboard