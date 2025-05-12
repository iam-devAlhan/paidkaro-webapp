import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LandingPage from './UI/components/landing/landing_page'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthComponent from './UI/components/auth/AuthComponent';
import AuthLoginComponent from './UI/components/auth/AuthLoginComponent';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/auth_signup' element={<AuthComponent />} />
          <Route path="/auth_login" element={<AuthLoginComponent />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
