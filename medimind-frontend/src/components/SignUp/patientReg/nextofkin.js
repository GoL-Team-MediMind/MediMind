import React from 'react';
import point from '../../../assets/point.png'
import pointblue from '../../../assets/pointblue.png'
import dp from '../../../assets/dp.png'
import { NavLink } from 'react-router-dom'; 
const nextofkin=()=>{
    return(
        <div className='nextofkin'>
        <div className="regcontainer">
 
        
<div className="patientregistrationheader">
    <patientheader>
<a href="/" class="adlogo">
            <p>MediMinds</p>
        </a>

        <ul>
            <li><a href="/doctordashboard">Dashboard</a></li>
            <li><a href="#">Sign Out</a></li>
            <li><img src={dp}></img></li>
        </ul>
        </patientheader>
</div>
<div className="regbody">
<div className='regmenu'>
<h2>Registration Dashboard</h2>
    <ul>
        <li><img src={pointblue } alt="" />Personal information</li>
        <li><img src={pointblue} alt="" />Next of kin details</li>
        <li><img src={point} alt="" />Passport photograph</li>
    </ul>
</div>
<div className="patientregistrationform">
    <h2>Next of kin Bio-data</h2>
    
<input type="text" placeholder=" First Name" id="left" />
<input type="text" placeholder=" Other Names" id="right" /><br />
<select id="left" name="Relationship">
<option value=""disabled selected>Select relationship</option>
  <option value="spouse">Spouse</option>
  <option value="parent">Parent</option>
  <option value="child">Child</option>
  <option value="sibling">Sibling</option>
  <option value="friend">Friend</option>
  <option value="other">Other</option>
            </select>
<input type="text" placeholder=" Home Address" id="right" /> <br />
<input type="text" placeholder=" Phone Number" id="left"/>
<input type="text" placeholder=" E-mail Address" id="right"/> <br />
<input type="text" placeholder=" Occupation" id="left"/>
<select name="Gender" id='right'>
            <option value="" disabled selected>Gender</option>
            <option value="">Male</option>
             <option value="">Female</option>
            </select><br />
<NavLink to="/passport"><button>Next-Step</button></NavLink>
</div></div>
        </div> 
        </div>
    )
}
export default nextofkin;