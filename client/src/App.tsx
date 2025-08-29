import './App.css'
// Bootstrap Files to be imported here
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Other modules imported here
import LandingPage from './ui/components/landing/landing_page'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthComponent from './ui/components/auth/AuthComponent';
import AuthLoginComponent from './ui/components/auth/AuthLoginComponent';
import DashboardHome from './ui/components/dashboard/DashboardHome';
import Jobs from './ui/components/dashboard/Jobs';
import Posts from './ui/components/dashboard/Posts';
import Projects from './ui/components/dashboard/Projects';
import Dashboard from './ui/components/dashboard/Dashboard';
import Payments from './ui/components/dashboard/Payments';
import Feeds from './ui/components/dashboard/Feeds';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/auth_signup' element={<AuthComponent />} />
          <Route path="/auth_login" element={<AuthLoginComponent />} />
          <Route path='home' element={<DashboardHome />} >
            <Route path="feeds" element={<Feeds />}></Route>
            <Route path="jobs" element={<Jobs />}></Route>
            <Route path="posts" element={<Posts />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="payment" element={<Payments />}></Route>
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
