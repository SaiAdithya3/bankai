import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'src/pages/Home';
import Dashboard from 'src/pages/Dashboard';
import Sidebar from 'src/components/Sidebar';
import ProjectDetail from './pages/ProjectDetail';
import Project2 from 'src/pages/Project2';
import CustomerPage from 'src/pages/CustomerPage';
import Construction from 'src/pages/Construction';
import SearchHOC from 'src/utils/utilcomp/SearchHOC';
import Projectms from 'src/pages/Projectms';
import OverView from 'src/components/PMS/pages/OverView';
import Accounts from './pages/Accounts';
import Activities from './pages/Activities';
import NotFound from './pages/NotFound';


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
            <Route path="/projects/:projectId/overview" element={<OverView/>} />
            <Route path="/accounts" element={<Accounts/>} />
            <Route path="/activities" element={<Activities/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/:Link" element={<Project2 />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
