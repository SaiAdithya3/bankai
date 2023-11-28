import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import ProjectDetail from './pages/ProjectDetail';
import Project2 from './pages/Project2';
import CustomerPage from './pages/CustomerPage';
import Construction from './pages/Construction';


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
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/:projectId" element={<Project2 />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
