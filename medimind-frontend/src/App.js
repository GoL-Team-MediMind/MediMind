import React,{ useRef }from 'react';
import './App.css';
import Header from './components/Header/header';
import Admin from './components/Login/admin/admin'
import Patient from './components/Login/patient/patient'
import Patientreg from './components/SignUp/patientReg/patientReg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp/AdminREg/Adminreg"
import Login from "./components/Login/admin/admin"

const App = ( ) => {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route index element={<Header />} />
    <Route path='/admin' element={<Login  /> } />

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
