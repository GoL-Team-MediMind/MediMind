import React, {useState} from 'react'
import point from '../../../assets/point.png'
import pointblue from '../../../assets/pointblue.png'
import { NavLink } from 'react-router-dom'; 
const Appointments=()=>{
    const [currentPage, setCurrentPage] = useState('page1');

    const handleButtonClick = (page) => {
      setCurrentPage(page);
    };
    return(
        <div className="regcontainer">
 
        
<div className="patientregistrationheader">
    <patientheader>
<a href="/" class="adlogo">
            <p>MediMinds</p>
        </a>

        <ul>
     
            
            <li><a href="#">Portal</a></li>
            <li><a href="#">Sign Out</a></li>
        </ul>
        </patientheader>
</div>
<div className="regbody">
<div className='regmenu'>

    <ul id='portalnav'>
       <li  className={currentPage === 'page1' ? 'active' : ''}
          onClick={() => handleButtonClick('page1')}>Home</li>
        <li  className={currentPage === 'page1' ? 'active' : ''}
          onClick={() => handleButtonClick('page2')}>Appointments</li>
        <li  className={currentPage === 'page1' ? 'active' : ''}
          onClick={() => handleButtonClick('page2')}>Medications</li>
        <li  className={currentPage === 'page1' ? 'active' : ''}
          onClick={() => handleButtonClick('page1')}>Health Records</li>
        
    </ul>
</div>
{currentPage === 'page1' && (
<div className="patientregistrationform" id="portalbody">
    <h3 id="portalmsg">Hello,    <span><em>Jane</em></span></h3>
    <h2 id='portalmsg2'>Welcome to your patients portal!</h2>
    <div className="appandmed">
    <div className="appointments">
        <h4>Upcoming appointments</h4>
        <div className="appointmentrecord">
            <div className="appointmentleft">
            <h5><em>12:00 pm</em></h5>
        <h5><em>Dr. John</em></h5>
        <h5><em>124343</em></h5>
        </div>
        <div className="appointmentright">
            <button disabled>Upcoming</button>
        </div>
        </div>
        <div className="appointmentrecord">
            <div className="appointmentleft">
        <h5><em>12:00 pm</em></h5>
        <h5><em>Dr. John</em></h5>
        <h5><em>124343</em></h5>
        </div>
        <div className="appointmentright">
            <button disabled>Upcoming</button>
        </div>
        </div>
        <div className="appointmentrecord">
            <div className="appointmentleft">
        <h5><em>12:00 pm</em>
</h5>
        <h5><em>Dr. John</em></h5>
        <h5><em>124343</em></h5>
        </div>
        <div className="appointmentright">
            <button disabled>Upcoming</button>
        </div>
        </div>
        <button id='morebutton'>View all appointments</button>
    </div>
    <div className="medications">
    <h4>Current medications</h4>
    <div className="appointmentrecord">
            <div className="appointmentleft">
            <h5><em>Paracetamol</em></h5>
        <h5><em>2/day</em></h5>
        <h5><em>124343</em></h5>
        </div>
        <div className="appointmentright">
            <button disabled>Upcoming</button>
        </div>
        </div>
        <div className="appointmentrecord" id='nomore'>
            <div className="appointmentleft">
        <h5><em>No more appointments</em>
</h5>
       
        </div>
        
        </div>
        <div className="medicationrecord" id='nomore'>
            <div className="appointmentleft">
        <h5><em>No more appointments</em>
</h5>
       
        </div>
        
        </div>
        <button id='morebutton'>View all appointments</button>
        </div> 
</div>
<div className="records">
    <h4>Recent Health Records</h4>
    <table id="recordtable">
        <tableheader>
        <th className='recorddate'>Time and Date</th>
        <th className='recordcondition'>Condition</th>
        <th className='recordmedic'>Medic ID</th>
        </tableheader>
        <div id='patientrecord'>
        <tr className='recorddate'><em>12/02/2023 12:00pm</em></tr>
        <tr className='recordcondition'><em>Headache</em></tr>
        <tr className='recordmedic'><em>54321</em></tr>
        </div>
        <div id='patientrecord'>
        <tr className='recorddate'><em>12/02/2023 12:00pm</em></tr>
        <tr className='recordcondition'><em>Back Pain</em></tr>
        <tr className='recordmedic'><em>45678</em></tr>
        </div>
       <div id='patientrecord'>
     <h6><em>No more records</em></h6>
        </div>
        <div id='patientrecord'>
     <h6><em>No more records</em></h6>
        </div>
    </table>
    <button id='morebutton'>View all appointments</button>
</div>

</div>
 )}
 {currentPage === 'page2' && (
        <div className="page">
       <p>Gender:Male</p>
          <p>Address: Nairobi,Kenya</p>
        </div>
      )}
 </div>
        </div> 
    )
}
export default Appointments;