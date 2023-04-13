import React from 'react';


const admin=()=>{
    return(
<div className="admin">
    <div className="layer3">
        <adheader>
        <a href="#" class="adlogo">
            <p>MediMinds</p>
        </a>

        <ul>
            <li><a href="#">About</a></li>
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
            <button>Log-in</button>
            <h6>New User? <a><span>Create account</span></a></h6>
        </form>
    </div>
    </div>
    </div> )
}
export default admin;