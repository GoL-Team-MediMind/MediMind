import React, {useState} from 'react'
import point from '../../assets/point.png'
import pointblue from '../../assets/pointblue.png'
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
        </div>
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
const MedicEdit=()=>{

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
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const openPopup = () => {
      setIsPopupVisible(true);
    }
  
    const closePopup = () => {
      setIsPopupVisible(false);
    }
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
        <div className="floating-button">
      <button className="main-button">+</button>
      <div className="expanded-buttons">
        <button className={currentPage === 'page5' ? 'active' : ''}
          onClick={() => handleButtonClick('page5')}>Add appointment</button>
        <button className={currentPage === 'page6' ? 'active' : ''}
          onClick={() => handleButtonClick('page6')}>Add medication</button>
         <button className={currentPage === 'page7' ? 'active' : ''}
          onClick={() => handleButtonClick('page7')}>Add record</button>
      </div>
    </div>
    </ul>
</div>
{currentPage === 'page1' && (
<div className="patientregistrationform" id="portalbody">

    <h3 id="portalmsg">Hello,</h3>
    <h2 id='portalmsg2'>Welcome to <span><em>Jane</em></span> 's portal</h2>
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
        <button  onClick={() => handleButtonClick('page2')} id='morebutton' >View all appointments</button>
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
        <button id='morebutton' onClick={() => handleButtonClick('page3')}>View all medications</button>
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
        <div class='recordexpandable'>
        <tr className='recorddate'><em>12/02/2023 12:00pm</em></tr>
        <tr className='recordcondition'><em>Headache</em></tr>
        <tr className='recordmedic'><em>54321</em></tr>
        </div>
        <div class='recordexpandable'>
        <tr className='recorddate'><em>12/02/2023 12:00pm</em></tr>
        <tr className='recordcondition'><em>Back Pain</em></tr>
        <tr className='recordmedic'><em>45678</em></tr>
        </div>
       <div class='recordexpandable'>
     <h6><em>No more records</em></h6>
        </div>
        <div class='recordexpandable'>
     <h6><em>No more records</em></h6>
        </div>
    </table>
    <button id='morebutton' onClick={() => handleButtonClick('page4')}>View all records</button>
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
                  <h3 id="portalmsg">Hello,</h3>
    <h2 id='portalmsg2'>Welcome to <span><em>Jane</em></span> 's portal</h2>
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
              <h3 id="portalmsg">Hello,</h3>
    <h2 id='portalmsg2'>Welcome to <span><em>Jane</em></span> 's portal</h2>
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
         <h3 id="portalmsg">Hello,</h3>
    <h2 id='portalmsg2'>Welcome to <span><em>Jane</em></span> 's portal</h2>
                  </div>
     <div className="records">
    <h4>Recent Health Records</h4>
    <table id="recordtable">
        <tableheader>
        <th className='recorddate'>Time and Date</th>
        <th className='recordcondition'>Condition</th>
        <th className='recordmedic'>Medic ID</th>
        </tableheader>
        <div class="recordexpandable " id='patientrecord'>
        <tr className='recorddate'><em>12/02/2023 12:00pm</em></tr>
        <tr className='recordcondition'><em>Headache</em></tr>
        <tr className='recordmedic'><em>54321</em></tr>
        </div>
        <div  class="recordexpandable" id='patientrecord'>
        <tr className='recorddate'><em>12/02/2023 12:00pm</em></tr>
        <tr className='recordcondition'><em>Back Pain</em></tr>
        <tr className='recordmedic'><em>45678</em></tr>
        </div>
       <div id='patientrecord' class="recordexpandable">
     <h6><em>No more records</em></h6>
        </div>
        <div id='patientrecord' class>
     <h6><em>No more records</em></h6>
        </div>
    </table>

</div>
    </div>
    
)}
{currentPage === 'page5' && (
       
       <div className='appointmentcontainer'>
           
            <div className="column">
                     <h3 id="portalmsg" className="addstitle">Add appointment</h3>
                     <div className="appointmentform">
                        <form action="">
                            <input type="text" placeholder='Department'/><br />
                            <input type="date"/><br />
                            <input type="time" /><br />
                            <select name="location">
            <option value="" disabled selected>Mode</option>
            <option value="">Virtual</option>
             <option value="">In-person</option>
            </select><br />
            <input type="text" placeholder='location' disabled /><br />
            <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>
<button>Add</button>
<button id='clear'>Cancel</button>
                        </form>
                     </div>
                     </div>

       </div>
       
   )}
   {currentPage === 'page6' && (
       
       <div className='appointmentcontainer'>
           
            <div className="column">
                     <h3 id="portalmsg" className="addstitle">Add medication</h3>
                     <div className="appointmentform">
                        <form action="">
                            <input type="text" placeholder='Name'/><br />
                            <input type="text" placeholder='Reason'/><br />
                            <select name="Dose">
            <option value="" disabled selected>Times per day</option>
            <option value="">1</option>
             <option value="">2</option>
             <option value="">3</option>
             <option value="">4</option>
             <option value="">5+</option>
            </select><br/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>
<button>Add</button>
<button id='clear'>Cancel</button>
                        </form>
                     </div>
                     </div>

       </div>
       
   )}
   {currentPage === 'page7' && (
       
       <div className='appointmentcontainer'>
           
            <div className="column">
                     <h3 id="portalmsg" className="addstitle">Add record</h3>
                     <div className="appointmentform">
                        <form action="">
                            <input type="text" placeholder='Condition'/><br />
                            <input type="text" placeholder='Reason'/><br />
                            <select name="Status">
            <option value="" disabled selected>Status</option>
            <option value="">Severe</option>
             <option value="">Moderate</option>

            </select><br/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea><br />
            <textarea name="" id="caution" cols="30" rows="10" placeholder='Caution'></textarea>
<button>Add</button>
<button id='clear'>Cancel</button>
                        </form>
                     </div>
                     </div>

       </div>
       
   )}
   
 </div>
        </div> 
    )
}
export default MedicEdit;