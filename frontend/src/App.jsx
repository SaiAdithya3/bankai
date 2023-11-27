import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import ProjectDetail from './pages/ProjectDetail';


function App() {


  return (
    <>
      <div className='flex'>
        <div className='w-[21%] '>
          <Sidebar />
        </div>
        <div className='w-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
