import React from 'react';
import { NavLink } from 'react-router-dom'; 


const patient=()=>{
    return(
<div className="patient">
    <div className="layer3">
        <adheader>
        <a href="/" class="adlogo">
            <p>MediMinds</p>
        </a>

        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact US</a></li>
        </ul>
        
    </adheader>

    <div className="patientlog">
        <form action="">
            <h2>Enter your details to <br/>access your health portal</h2>
            <h4 className='cred'>Medical ID <h7>(Or mobile phone number)</h7></h4>
            <input type="text" />
            <h4 className='cred'>Password</h4>
            <input type="password" />
            <a href="" className='forgot'><p>Forgot your password?</p></a>
          <NavLink to="/profilepage"><button>Log-in</button></NavLink>  
            <h6>New User? <a><span>Create account</span></a></h6>
        </form>
    </div>
    </div>
    </div> )
}
export default patient;