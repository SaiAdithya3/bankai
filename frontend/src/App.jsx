import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import ProjectDetail from './pages/ProjectDetail';
import Project2 from './pages/Project2';
import CustomerPage from './pages/CustomerPage';
import Construction from './pages/Construction';
import SearchHOC from './utils/utilcomp/SearchHOC';
import Projectms from './pages/Projectms';


function App() {


  return (
    <>
      <div className='flex'>
        <div className='w-[21%] '>
          <Sidebar />
        </div>
        <div className='w-full'>
          <SearchHOC  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Dashboard />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/projects/:projectId" element={<Projectms />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/:Link" element={<Project2 />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
