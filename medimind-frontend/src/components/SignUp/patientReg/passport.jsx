import React from 'react';
import point from '../../../assets/point.png'
import pointblue from '../../../assets/pointblue.png'
import dp from '../../../assets/dp.png'
const passportupload=()=>{
    return(
        <div className='nextofkin'>
        <div className="regcontainer">
 
        
<div className="patientregistrationheader">
    <patientheader>
<a href="#" class="adlogo">
            <p>MediMinds</p>
        </a>

        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Sign Out</a></li>
            <li><img src={dp}></img></li>
        </ul>
        </patientheader>
</div>
<div className="regbody">
<div className='regmenu'>
<h2>Registration Dashboard</h2>
    <ul>
        <li><img src={pointblue} alt="" />Personal information</li>
        <li><img src={pointblue} alt="" />Next of kin details</li>
        <li><img src={pointblue} alt="" />Passport photograph</li>
    </ul>
</div>
<div className="patientregistrationform">
    <h2 id='passporttitle'>Passport photograph</h2>
    <p id='passportdesc'>We require you to upload a passport photograph of yourself to keep a record of your identity</p>
<input type="file" placeholder=" First Name" id="left" />

<button>Submit</button>
</div></div>
        </div> 
        </div>
    )
}
export default passportupload;