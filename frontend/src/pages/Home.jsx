import React from 'react'
import Navbar from '../components/Navbar';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const notify = () => toast.success('Modda guduv ra erripuka!.');

  return (
    <>
      <Navbar />
      <div className="flex h-[80vh] flex-col items-center justify-center">
        <h2 className='text-2xl font-bold py-6'>Welcome home kid 🦥🎉!</h2>
        <button onClick={notify} className="py-2 px-4 text-lg text-white bg-gradient-to-r from-slate-600 to-slate-800  hover:bg-black rounded-xl shadow-2xl hover:scale-110 transition-all">Yowaimo!</button>
        <Toaster />
      </div>
    </>
  )
}

export default Home