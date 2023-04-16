import React from 'react';
import dp from '../../assets/dp.png'
import note from '../../assets/lookup.png'
import { NavLink } from 'react-router-dom'; 
const confirmation=()=>{
    return(
        <div className='nextofkin'>
        <div className="regcontainer">
 
        
<div className="patientregistrationheader">
    <patientheader>
<a href="#" class="adlogo">
            <p>MediMinds</p>
        </a>

        <ul>
            <li><a href="/doctordashboard">Dashboard</a></li>
            <li><a href="/medic">Sign Out</a></li>
            <li><img src={dp}></img></li>
        </ul>
        </patientheader>
</div>
<div className="regbody">

<div className="patientregistrationform" id='confirmationbody'>
   <img id='note' class="poll" src={note} alt="" />
   <h2 className="successtitle" id='passporttitle'>Patients Poll</h2>
<h4 id="successmsg" className='searchdesc'>  You can search for patients with their ID to see their medical records</h4>
<input type="text" id="searchbar" placeholder='Search by Patient ID...'></input>
<NavLink to="/medicedit"><button id='searchbutton'>Search</button></NavLink>

</div></div>
        </div> 
        </div>
    )
}
export default confirmation;