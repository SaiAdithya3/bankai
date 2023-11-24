import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[80vh] flex-col items-center justify-center">
        <h2 className='text-2xl font-bold py-6'>Welcome home kid 🦥🎉!</h2>
        <button className="py-2 px-4 text-lg text-white bg-gradient-to-r from-slate-600 to-slate-800  hover:bg-black rounded-xl shadow-2xl hover:scale-110 transition-all">Yowaimo!</button>
      </div>
    </>
  )
}

export default Home