import React, {useState} from 'react'
import point from '../../../assets/point.png'
import pointblue from '../../../assets/pointblue.png'
import { NavLink } from 'react-router-dom'; 
const appoint = [
    [
      '11/02/2023',
      '12:30',
      'Dr. Smith',
      'Dermatology',
      'Virtual'
    ],
    [
      '11/02/2023',
      '12:30',
      'Dr. Smith',
      'Dermatology',
      'Virtual'
    ],
    [
      '11/02/2023',
      '12:30',
      'Dr. Smith',
      'Dermatology',
      'Virtual'
    ],
    [
      '11/02/2023',
      '12:30',
      'Dr. Smith',
      'Dermatology',
      'Virtual'
    ],
    [
      '11/02/2023',
      '12:30',
      'Dr. Smith',
      'Dermatology',
      'Virtual'
    ]
  ];
const medication=[
    ["Paracetamol",
    "1/ day",
"Headache",
"12th/June/2023"]
];
  function createCard([date,time,name,department,location]) {
    return (
      <div className="card" onClick={() => { window.location.href='#'; }}>
        <div className="uppercard"><h3>{date}</h3>
        <h4>{time}</h4></div>
       <div className="lowercard"> <h4>{name}</h4>
        <p>{department}</p>
        <p>{location}</p>
        <button>Cancel Appointment</button></div>
      </div>
    );
  }
    function createCard2([date,name,dosage,reason]) {
    return (
      <div className="card" onClick={() => { window.location.href='#'; }}>
        <div className="uppercard"><h3>{name}</h3>
        <h4>{dosage}</h4></div>
       <div className="lowercard"> <h4>{reason}</h4>
        <p>{date}</p>
        <button>Cancel Appointment</button></div>
      </div>
    );
  }
const Patientdashboard=()=>{

    const [currentPage, setCurrentPage] = useState('page1');
    let page1temp;
    let page2temp;
    let page3temp;
    let page4temp;
    if(currentPage=='page1'){
page1temp="oddnav";
page2temp="";
page3temp="";
page4temp=""
    }
    if(currentPage=='page2'){
        page2temp="oddnav";
        page1temp="";
        page3temp="";
        page4temp="";    }
            if(currentPage=='page3'){
                page3temp="oddnav";
                page2temp="";
                page1temp="";
                page4temp="";
                    }
                    if(currentPage=='page4'){
                        page4temp="oddnav";
                        page2temp="";
                        page1temp="";
                        page3temp="";
                            }
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
     
            
            <li><a href="/profilepage">Profile</a></li>
            <li><a href="#">Sign Out</a></li>
        </ul>
        </patientheader>
</div>
<div className="regbody">
<div className='regmenu'>

    <ul id='portalnav'>
       <li id={page1temp}  className={currentPage === 'page1' ? 'active' : ''}
          onClick={() => handleButtonClick('page1')}>Home</li>
        <li id={page2temp} className={currentPage === 'page2' ? 'active' : ''}
          onClick={() => handleButtonClick('page2')}>Appointments</li>
        <li  id={page3temp}className={currentPage === 'page3' ? 'active' : ''}
          onClick={() => handleButtonClick('page3')}>Medications</li>
        <li  id={page4temp} className={currentPage === 'page4' ? 'active' : ''}
          onClick={() => handleButtonClick('page4')}>Health Records</li>
        
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
       
        
            <div className='appointmentcontainer'>
              <section className="nav">
                
              </section>
        
              <section id="works">
                <div className="row">
                  <div className="column">
                  <h3 id="portalmsg">Hello,    <span><em>Jane</em></span></h3>
    <h2 id='portalmsg2'>Welcome to your appointments page!</h2>
                  </div>
                </div>
              </section>
        
              <section className="appointment">
                <div className="card-container">
                  {appoint.map(blog => createCard(blog))}
                </div>
              </section>
        
            </div>
         
      )}{currentPage === 'page3' && (
       
        <div className='appointmentcontainer'>
          <section className="nav">
            
          </section>
    
          <section id="works">
            <div className="row">
              <div className="column">
              <h3 id="portalmsg">Hello,    <span><em>Jane</em></span></h3>
<h2 id='portalmsg2'>Welcome to your medication folio!</h2>
              </div>
            </div>
          </section>
    
          <section className="appointment">
            <div className="card-container">
              {medication.map(blog => createCard(blog))}
            </div>
          </section>
    
        </div>
        
  )}{currentPage === 'page4' && (
       
    <div className='appointmentcontainer'>
         <div className="column">
                  <h3 id="portalmsg">Hello,    <span><em>Jane</em></span></h3>
    <h2 id='portalmsg2'>Welcome to your records page!</h2>
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

</div>
    </div>
    
)}
 </div>
        </div> 
    )
}
export default Patientdashboard;