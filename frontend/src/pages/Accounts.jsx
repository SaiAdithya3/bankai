import React from 'react'

const Accounts = () => {
  return (
    <>
      <div className="flex p-8">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Accounts</h2>
        </div>
        <div className="w-1/2 text-right">
          <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all">
            Add Account
          </button>
        </div>
      </div>
    </>
  )
}

export default Accounts