import React from 'react'

const Overview = () => {
  return (
    <>
        <div className="w-full p-10">
            <div className="text-xl">
                Overview
            </div>
            <div className="flex-col items-center justify-center gap-6 flex m-5 w-1/3 border shadow-lg p-20 rounded-xl">
                <h1 className="text-xl font-semibold">
                  Completion Status
                </h1>
                <p className='font-semibold text-green-900 bg-green-200 px-8 py-1 rounded-full'>58%</p>
            </div>
        </div>
    </>
  )
}

export default Overview