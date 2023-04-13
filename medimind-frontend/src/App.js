import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Admin from './components/Login/admin/admin'
import Patient from './components/Login/patient/patient'
import Patientreg from './components/SignUp/patientReg/patientReg'
const App = ( ) => {
  return (
    <div className="App">
    {/* <Header /> */}
    {/* <Admin  /> */}
    {/* <Patient  /> */}
    <Patientreg   />

              </div>

  );
}

export default App;
