import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LandingPage from './UI/components/landing/landing_page'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthComponent from './UI/components/auth/AuthComponent';
import AuthLoginComponent from './UI/components/auth/AuthLoginComponent';
import DashboardHome from './UI/components/dashboard/DashboardHome';
import Jobs from './UI/components/dashboard/Jobs';
import Posts from './UI/components/dashboard/Posts';
import Projects from './UI/components/dashboard/Projects';
import Dashboard from './UI/components/dashboard/Dashboard';
import Payments from './UI/components/dashboard/Payments';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/auth_signup' element={<AuthComponent />} />
          <Route path="/auth_login" element={<AuthLoginComponent />} />
          <Route path='home' element={<DashboardHome />} >
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
