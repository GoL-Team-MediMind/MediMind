import React from 'react'
import point from '../../../assets/point.png'
import pointblue from '../../../assets/pointblue.png'
const patientreg=()=>{
    return(
        <div className="regcontainer">
 
        
<div className="patientregistrationheader">
    <patientheader>
<<<<<<< HEAD
<a href="#" class="adlogo">
=======
<a href="/" class="adlogo">
>>>>>>> route-path
            <p>MediMinds</p>
        </a>

        <ul>
     
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact US</a></li>
        </ul>
        </patientheader>
</div>
<div className="regbody">
<div className='regmenu'>
<h2>Registration Dashboard</h2>
    <ul>
        <li><img src={pointblue} alt="" />Personal information</li>
        <li><img src={point} alt="" />Next of kin details</li>
        <li><img src={point} alt="" />Passport photograph</li>
    </ul>
</div>
<div className="patientregistrationform">
    <h2>Patient Bio-data</h2>
    
<input type="text" placeholder=" First Name" id="left" />
<input type="text" placeholder=" Other Names" id="right" /><br />
<input type="date" placeholder=" Date of Birth " size="30" id="left" />
<input type="text" placeholder=" Home Address" id="right" /> <br />
<input type="text" placeholder=" Phone Number" id="left"/>
<input type="text" placeholder=" E-mail Address" id="right"/> <br />
<input type="text" placeholder=" Occupation" id="left"/>
<select name="Gender" id='right'>
            <option value="" disabled selected>Gender</option>
            <option value="">Male</option>
             <option value="">Female</option>
            </select><br />
<button>Next-Step</button>
<p>Already have an account? <a href="">Log-in</a></p>
</div></div>
        </div> 
    )
}
export default patientreg;