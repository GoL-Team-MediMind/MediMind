import React from 'react';
import point from '../../../assets/point.png'
import pointblue from '../../../assets/pointblue.png'
import dp from '../../../assets/dp.png'
import note from '../../../assets/note.png'
import search from '../../../assets/search.png'
import register from '../../../assets/check.png'
const doctordashboard=()=>{
    return(
        <div className='nextofkin'>
        <div className="regcontainer">
 
        
<div className="patientregistrationheader">
    <patientheader>
<a href="#" class="adlogo">
            <p>MediMinds</p>
        </a>

        <ul>
            <li><a href="#" id='odd'>Dashboard</a></li>
            <li><a href="#" >Blogspot</a></li>
            <li><a href="#" >Profile</a></li>
            <li><a href="/medic">Sign Out</a></li>
            <li><img src={dp}></img></li>
        </ul>
        </patientheader>
</div>
<div className="regbody">

<div className="patientregistrationform" id='confirmationbody'>
    <h2 id='passporttitle' className='successtitle'>Medic's dashboard</h2>
    <h4 id='option'>Select any of the option below to get started</h4>
    <div className='choices'>
 <a href="/patientreg" class="leftoption">  <img id='search'  src={register} alt="" />
 <h2>Register a new patient</h2>
 </a>
  <a href="/patientpoll" class="rightoption"> <img id='search' src={search} alt="" />
  <h2>Look up a patient with <br /> "patient id"</h2></a></div>
</div></div>
        </div> 
        </div>
    )
}
export default doctordashboard;