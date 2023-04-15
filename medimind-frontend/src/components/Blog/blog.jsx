import React from 'react';
import "./blog.css"
import {FaArrowLeft} from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Leaders= () => {
  const handleClick =( ) =>{
    ('/')
  }
  const leaders = [
    {
      name: 'Stephen Praise',
      role: 'PRODUCT DESIGNER',
      image: 'https://th.bing.com/th/id/R.727411d0b9e7205e5bd5cdffa3f5c4b6?rik=GkGlJ9vtYHAksQ&pid=ImgRaw&r=0'
    },
    {
      name: 'Aubin',
      role: 'FRONT END DEVELOPER',
      image: 'https://th.bing.com/th/id/R.727411d0b9e7205e5bd5cdffa3f5c4b6?rik=GkGlJ9vtYHAksQ&pid=ImgRaw&r=0'
    },
    {
      name: 'Albert',
      role: 'CLOUD ADVOCATE',
      image: 'https://th.bing.com/th/id/R.727411d0b9e7205e5bd5cdffa3f5c4b6?rik=GkGlJ9vtYHAksQ&pid=ImgRaw&r=0'
    },
    {
      name: 'Oputa Olivia',
      role: 'BACK END DEVELOPER',
      image: 'https://media.licdn.com/dms/image/C4E03AQHd-dtzDCmnnw/profile-displayphoto-shrink_200_200/0/1637251433199?e=1686787200&v=beta&t=hpJo8IK9mELbK1stbEZfJ2bT3tH6m2zTpJHONfhtqoA'
    },
      {
      name: 'Joy Kemunto',
      role: 'FULL STACK DEVELOPER',
      image: 'https://media.licdn.com/dms/image/D4D03AQE1XkjVQ9R_Aw/profile-displayphoto-shrink_200_200/0/1677314203925?e=1686787200&v=beta&t=_BhLOqJAHxslgUQ2LfBes92RnMtR2HkUzMoY2m0qvpE'
    },
    {
      name: 'Stephanie',
      role: 'TEAM COACH',
      image: 'https://th.bing.com/th/id/R.727411d0b9e7205e5bd5cdffa3f5c4b6?rik=GkGlJ9vtYHAksQ&pid=ImgRaw&r=0'
    },
    {
      name: 'Stephanie',
      role: 'TEAM COACH',
      image: 'https://th.bing.com/th/id/R.727411d0b9e7205e5bd5cdffa3f5c4b6?rik=GkGlJ9vtYHAksQ&pid=ImgRaw&r=0'
    },
    {
      name: 'Emily Davis',
      role: 'TEAM COACH',
      image: 'https://th.bing.com/th/id/R.727411d0b9e7205e5bd5cdffa3f5c4b6?rik=GkGlJ9vtYHAksQ&pid=ImgRaw&r=0'
    }
  ];

  return (
    <section className="leaders-section">
    <NavLink to="/">
    <FaArrowLeft  onClick={handleClick}/>
    </NavLink>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="mt-10"
  >
    <path
      fill="rgb(10, 124, 139)"
      fill-opacity="0.9"
      d="M0,288L60,266.7C120,245,240,203,360,186.7C480,171,600,181,720,176C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
  </svg>
      <h2>Medimind Team</h2>
      <div className="leaders-wrapper">
        {leaders.map((leader, index) => (
          <div key={index} className="leader-item">
            <img src={leader.image} alt={leader.name} />
            <h3>{leader.name}</h3>
            <p>{leader.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaders;
