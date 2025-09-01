import './App.css'
// Bootstrap Files to be imported here
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Other modules imported here
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './ui/components/landing/landing_page'
import AuthComponent from './ui/components/auth/AuthComponent';
import AuthLoginComponent from './ui/components/auth/AuthLoginComponent';
import DashboardRoutes from './routes/DashboardRoutes';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/auth_signup' element={<AuthComponent />} />
          <Route path="/auth_login" element={<AuthLoginComponent />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
