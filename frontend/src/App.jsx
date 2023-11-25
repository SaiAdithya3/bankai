import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';


function App() {


  return (
    <>
      <div className='flex'>
        <div className='w-[18%]'>
          <Sidebar />
        </div>
        <div className='w-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
