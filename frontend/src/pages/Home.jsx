import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import userjson from '../utils/user.json';

const Home = () => {
  const user = userjson["user"];
  const [currentTime, setCurrentTime] = useState('Monday, November 27');
  const current = new Date();
  const time = `${current.getHours()}:${current.getMinutes()}`;

  // function padTo2Digits(num) {
  //   return num.toString().padStart(2, '0');
  // }
  // function formatDate(date) {
  //   const months = ["January", "February", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  //   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  //   return (
  //     [
  //       // date.getFullYear(),
  //       days[date.getDay()],
  //       // padTo2Digits(date.getMonth() + 1),
        
  //     ].join('  ') +
  //     '  ' +
  //     [
  //       months[date.getMonth()],
  //       date.getDate()
  //     ]
  //   );
  // }

  // const updateCurrentTime = () => {
  //   const now = new Date();
  //   const formattedTime = formatDate(now);
  //   setCurrentTime(formattedTime)
  // };
  // setInterval(() => {
  //   updateCurrentTime();
  // }, 10000);

  const notify = () => toast.success('Modda guduv ra erripuka!.');

  return (
    <>
      {/* <Navbar /> */}
      <div className="flex h-[80vh] flex-col items-center justify-center">
        <h2 className='text-lg font-bold py-2'>{currentTime}</h2>
        <h2 className='text-2xl font-bold pb-6'>Good afternoon {user.name} 🦥🎉!</h2>
        <button onClick={notify} className="py-2 px-4 text-lg text-white bg-gradient-to-r from-slate-600 to-slate-800  hover:bg-black rounded-xl shadow-2xl hover:scale-110 transition-all">Yowaimo!</button>
        <Toaster />
      </div>
    </>
  )
}

export default Home