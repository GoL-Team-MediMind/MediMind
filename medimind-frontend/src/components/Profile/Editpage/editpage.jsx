import React from 'react';
import dp from '../../../assets/dp.png'
import menu from '../../../assets/menu.png'
import close from '../../../assets/close.png'
import menu1 from '../../../assets/menu1.png'
import { NavLink } from 'react-router-dom'; 

const editpage=()=>{
    return(
<div className="editpage">
<div className="leftprofile">
   <div className="editpageheader"> 
   <h1>Profile</h1>
   <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="/profilepage">Profile</a></li>
            <li><a href="#">Book appointment</a></li>
            <li><a href="/patient">Sign out</a></li>
        </ul>
   <br />
   </div>
    <img id="dp" src={dp} alt="" />

    <h2>Contact information</h2>

    <label htmlFor="Username">Display name</label><br />
    <input type="username" /><br />
    <label htmlFor="E-mail">E-mail</label><br />
    <input type="email" /><br />
    <NavLink to="/profilepage"><button>Update Information</button></NavLink>
    <h2>Change Password</h2 >
    <label htmlFor="">Current Password</label><br />
    <input type="password" /><br />
    <label htmlFor="">New Password</label><br />
    <input type="text" /><br />
    <label htmlFor="">Confirm New Password</label><br />
    <input type="text" /><br />
    <NavLink to="/profilepage"><button>Change Password</button></NavLink>
    <hr />
    <button id="delete">Delete Account</button>
</div>
<div className="rightprofile">

</div>
</div>
    )
}
export default editpage;