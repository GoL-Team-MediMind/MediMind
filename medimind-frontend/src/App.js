import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Draft from './components/Header/draft';
import Admin from './components/Login/admin/admin'
import Patient from './components/Login/patient/patient'
import Patientreg from './components/SignUp/patientReg/patientReg'
import Editpage from './components/Profile/Editpage/editpage';
import Profilepage from './components/Profile/ProfilePage/profilepage';
import Nextofkin from './components/SignUp/patientReg/nextofkin'
import Passport from './components/SignUp/patientReg/passport'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp/AdminREg/Adminreg"
import Login from "./components/Login/admin/admin"

const App = ( ) => {
  return (
    <div className="App">

    <Routes>
    <Route index element={<Header />} />
    <Route path='/admin' element={<Login  /> } />
    </Routes>

   {/* <Header /> */}
    {/* <Admin  /> */}
    {/* <Patient  /> */}
    {/* <Patientreg   /> */}
    {/* <Nextofkin /> */}
{/* <Editpage  /> */}
{/* <Profilepage  /> */}
{/* <Draft  /> */}
<Passport />

              </div>

  );
}

export default App;
