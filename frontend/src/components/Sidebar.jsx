import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-full h-[100vh] bg-gray-200 flex flex-col items-center justify-between'>
      <div>
        <h1 className='text-3xl font-bold text-center'>Logo</h1>
      </div>
      <div className='mt-10'>
        <ul className='flex flex-col'>
          <li className='text-xl font-bold'>Dashboard</li>
          <li className='text-xl font-bold'>Dashboard</li>
          <li className='text-xl font-bold'>Dashboard</li>
          <li className='text-xl font-bold'>Dashboard</li>
        </ul>
        </div>

        <div className='w-full p-2'>
          <div className="flex bg-white">
            <img className='w-12 h-12 rounded-full' src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Sidebar