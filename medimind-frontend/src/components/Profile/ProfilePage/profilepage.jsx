import React,  { useState } from 'react';
import dp from '../../../assets/dp.png'
import edit from '../../../assets/edit.png'
import { NavLink } from 'react-router-dom'; 

const Profilepage =()=>{

      const [currentPage, setCurrentPage] = useState('page1');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };
    return(
        <div className="profilepagecontainer">
    <div className="editpageheader">
         <img src={dp} id="profilepic"alt="" />
   <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#" id='current'>Profile</a></li>
            <li><a href="#">Book appointment</a></li>
            <li><a href="#">Health Ed</a></li>
        </ul>
   <br />
    </div>
    <div className="nameheader">
    <h1>Jane Doe <span>(City,Country)</span></h1>
    <a href="/editpage"><img id='edit' src={edit} alt="" /></a>
    </div>
<h3 id='title'>Patient</h3>
    
    <div className="infoheader">
<a id='contact' className={currentPage === 'page1' ? 'active' : ''}
          onClick={() => handleButtonClick('page1')}>Contact information</a>
<a  id='basic' className={currentPage === 'page2' ? 'active' : ''}
          onClick={() => handleButtonClick('page2')}>Basic information</a>
    </div>
    <hr />
    {currentPage === 'page1' && (
        <div className="page">
          <p>Phone: +222222334342</p>
          <p>E-mail:someone@example.com</p>
          <p>Address:someone@example.com</p>

        </div>
      )}
      {currentPage === 'page2' && (
        <div className="page">
       <p>Gender:Male</p>
          <p>Address: Nairobi,Kenya</p>
        </div>
      )}
<h4 className="creatorid">
      Account created on <span className='date'> 1/1/2023</span> by <span> [Admin Id] </span>
      </h4>
    </div>
    
)
}
export default Profilepage;