import React from 'react';
import './contact.css';
import contactImage from '../../assets/bg.jpg';
import {FaArrowLeft} from "react-icons/fa"
import { NavLink } from "react-router-dom"

function Contact() {
    const handleClick =( ) =>{
        ('/')
      }
  return (
    <div className="contact">
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
      <div className="contact__image-container">
        <img src={contactImage} alt="Contact us" />
      </div>
      <div className="contact__form-container">
        <h2>Get in touch with us!!!</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
