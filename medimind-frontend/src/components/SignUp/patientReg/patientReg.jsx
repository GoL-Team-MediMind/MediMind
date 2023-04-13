import React from 'react'

const patientreg=()=>{
    return(
        <div className="regcontainer">
   {/* <div className="leftreg ">
    <div className="layer4">
<a href="#" class="adlogo">
            <p>MediMinds</p>
        </a>
        </div>
        </div>
        <regheader>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        </regheader>
        <div className="signupform">
            <h3>Get started on the path to better health- Sign up now.</h3>
            <input type="text" id="fname"placeholder='First Name'/>
            <input type="text" id="lname"placeholder='Last Name'/>
            <input type="mail" placeholder='E-mail' /><br />
            <input type="text" placeholder='Password'/><br />
            <input type="text"  placeholder='Confirm Password'/><br />
            <select name="document">
            <option value="" disabled selected>ID</option>
            <option value="">National ID</option>
             <option value="">Passport</option>
            </select><br />
            <input type="text" placeholder='Document Number'/><br/>
            <input type="text" placeholder='Address'/><br />
            <select name="Gender">
            <option value="" disabled selected>Gender</option>
            <option value="">Male</option>
             <option value="">Female</option>
            </select><br />
            <input type="date" placeholder='Date of Birth'/><br />
             <button>Create Account</button>
        </div>

        */}
        
<div className="patientregistrationheader">
    <patientheader>
<a href="#" class="adlogo">
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
<p>New User? <a href="">Create account</a></p>
</div>
        </div> 
    )
}
export default patientreg;