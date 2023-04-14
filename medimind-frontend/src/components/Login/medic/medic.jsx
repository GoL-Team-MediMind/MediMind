import React from 'react';
import { NavLink } from 'react-router-dom'; 

const admin=()=>{
    return(
<div className="admin">
    <div className="layer3">
        <adheader>
        <NavLink to="/" class="adlogo" id='adlogo'>
            <p>MediMinds</p>
            </NavLink>

        <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact US</a></li>
        </ul>

    </adheader>

    <div className="adminlog">
        <form action="">
            <h2>Log in as a medic</h2>
            <h4 className='cred'>User ID</h4>
            <input type="text" />
            <h4 className='cred'>Password</h4>
            <input type="password" />
            <a href="" className='forgot'><p>Forgot your password?</p></a>
            <NavLink to="/doctordashboard"><button>Log-in</button></NavLink>
            <h6>New User? <a><span>Create account</span></a></h6>
        </form>
    </div>
    </div>
    </div> )
}
export default admin;
