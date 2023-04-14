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
            <h2>Log in as an admin</h2>
            <h4 className='cred'>Admin ID</h4>
            <input type="text" />
            <h4 className='cred'>Password</h4>
            <input type="password" />
            <a href="" className='forgot'><p>Forgot your password?</p></a>
            <NavLink to="/admindashboard"><button>Log-in</button></NavLink>
            
        </form>
    </div>
    </div>
    </div> )
}
export default admin;
