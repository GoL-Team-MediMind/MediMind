import React from 'react';
import dp from '../../../assets/dp.png'
import menu from '../../../assets/menu.png'
import close from '../../../assets/close.png'
import menu1 from '../../../assets/menu1.png'

const editpage=()=>{
    return(
<div className="editpage">
<div className="leftprofile">
   <div className="editpageheader"> 
   <h1>Profile</h1>
   <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Book appointment</a></li>
            <li><a href="#">Health Ed</a></li>
        </ul>
   <br />
   </div>
    <img id="dp" src={dp} alt="" />

    <h2>Contact information</h2>

    <label htmlFor="Username">Display name</label><br />
    <input type="username" /><br />
    <label htmlFor="E-mail">E-mail</label><br />
    <input type="email" /><br />
    <button>Update Information</button>
    <h2>Change Password</h2 >
    <label htmlFor="">Current Password</label><br />
    <input type="password" /><br />
    <label htmlFor="">New Password</label><br />
    <input type="text" /><br />
    <label htmlFor="">Confirm New Password</label><br />
    <input type="text" /><br />
    <button>Change Password</button>
    <hr />
    <button id="delete">Delete Account</button>    
</div>
<div className="rightprofile">

</div>
</div>
    )
}
export default editpage;