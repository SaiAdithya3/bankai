import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import ProjectDetail from './pages/ProjectDetail';
import CustomerPage from './pages/CustomerPage';
import Construction from './pages/Construction';


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
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
