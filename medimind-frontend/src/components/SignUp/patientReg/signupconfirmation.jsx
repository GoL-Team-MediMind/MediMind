import React from 'react';
import point from '../../../assets/point.png'
import pointblue from '../../../assets/pointblue.png'
import dp from '../../../assets/dp.png'
import note from '../../../assets/note.png'
const confirmation=()=>{
    return(
        <div className='nextofkin'>
        <div className="regcontainer">
 
        
<div className="patientregistrationheader">
    <patientheader>
<a href="/" class="adlogo">
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

<div className="patientregistrationform" id='confirmationbody'>
    <h2 id='passporttitle' className='successtitle'>Patient account created successfully!</h2>
   <img id='note' src={note} alt="" />
<h4 id="successmsg">The patient’s  profile as been successfully created. The patient would receive an email with their login ID and other details. You can proceed to  your <a href='/admindashboard
'>dashboard</a> to look up for Patient’s record</h4>

</div></div>
        </div> 
        </div>
        
    )
}
export default confirmation;