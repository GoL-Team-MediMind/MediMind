import React from 'react';
import "./service.css"
import {FaArrowLeft} from "react-icons/fa"
import { NavLink } from "react-router-dom"

const ServiceSection = () => {

  const handleClick =( ) =>{
    ('/')
  }
  return (
    <section className="service-section">
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
      <h2>Our Services</h2>
      <div className="service-wrapper">
        <div className="service-item">
          <h3>Nutrition</h3>
          <p>We design beautiful and user-friendly websites that will help you stand out from the competition.</p>
        </div>
        <div className="service-item">
          <h3>Screening</h3>
          <p>We create eye-catching graphics that will enhance your brand and help you connect with your audience.</p>
        </div>
        <div className="service-item">
          <h3>Creating Awareness</h3>
          <p>We help you reach your target audience through effective marketing campaigns that drive results.</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
