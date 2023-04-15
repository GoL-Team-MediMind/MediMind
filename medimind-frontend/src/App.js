import React,{ useRef }from 'react';
import './App.css';
import Header from './components/Header/header';
import Patient from './components/Login/patient/patient'
import Patientreg from './components/SignUp/patientReg/patientReg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp/AdminREg/Adminreg"
import Login from "./components/Login/medic/medic"
import Doctordashboard from "./components/Dashboard/doctordashboard/doctordashboard"
import Patientpoll from "./components/Dashboard/patientpoll"
import Editpage from "./components/Profile/Editpage/editpage"
import Profilepage from "./components/Profile/ProfilePage/profilepage"
import Admin from "./components/Login/admin/admin"
import Admindashboard from "./components/Dashboard/admindashboard/admindashboard"
import Nextofkin from './components/SignUp/patientReg/nextofkin';
import Passport from './components/SignUp/patientReg/passport';
import Signupconfirmation from './components/SignUp/patientReg/signupconfirmation';
import Patientdashboard from "./components/Dashboard/patientdashboard/patientdashboard";
import About from './components/About/about';
import Service from './components/Service/service';

const App = ( ) => {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route index element={<Header />} />
    <Route path='/medic' element={<Login  /> } />
    <Route path='/patient' element={<Patient  /> } />
    <Route path='/patientreg' element={<Patientreg  /> } />
    <Route path='/doctordashboard' element={<Doctordashboard  /> } />
    <Route path='/editpage' element={<Editpage  /> } />
    <Route path='/profilepage' element={<Profilepage  /> } />
    <Route path='/admin' element={<Admin  /> } />
    <Route path='/admindashboard' element={<Admindashboard  /> } />
    <Route path='/patientpoll' element={<Patientpoll  /> } />
    <Route path='/nextofkin' element={<Nextofkin  /> } />
    <Route path='/passport' element={<Passport  /> } />
    <Route path='/signupconfirmation' element={<Signupconfirmation  /> } />
    <Route path='/patientdashboard' element={<Patientdashboard  /> } />
    <Route path='/aboutus' element={<About  /> } />
    <Route path='/service' element={<Service  /> } />

   {/* <Header /> */}
    {/* <Admin  /> */}
    {/* <Patient  /> */}
    {/* <Patientreg   /> */}
    </Routes>
              </div>
              </BrowserRouter>
  );
}

export default App;
