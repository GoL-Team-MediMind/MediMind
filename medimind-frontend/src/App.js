import React,{ useRef }from 'react';
import './App.css';
import Header from './components/Header/header';
import Admin from './components/Login/medic/medic'
import Patient from './components/Login/patient/patient'
import Patientreg from './components/SignUp/patientReg/patientReg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp/AdminREg/Adminreg"
import Login from "./components/Login/medic/medic"
import Doctordashboard from "./components/Dashboard/doctordashboard/doctordashboard"
import Patientpoll from "./components/Dashboard/patientpoll"
import Editpage from "./components/Profile/Editpage/editpage"
import Profilepage from "./components/Profile/ProfilePage/profilepage"

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
    <Route path='/patientpoll' element={<Patientpoll  /> } />

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
