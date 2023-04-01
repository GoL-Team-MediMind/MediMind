import React from "react";
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
  <div className="footer">
       <a href="#" className="logo">
       <img src={Logo} alt="logo" />
          <p>MediMinds</p>
          </a>

                  <ul>
      <li>
        <th>Company</th>
          <p><a href="">Home</a></p>
          <p><a href="">About</a></p>
          <p><a href="">Services</a></p>
       </li>
      <li>
      <th>Our Products</th>
          <p><a href="">HRS</a></p>
          <p><a href="">Health Education</a></p>
          <p><a href="">Donate</a></p>
      </li>
      <li>
      <th>Company</th>
          <p><a href="">Support</a></p>
          <p><a href="">Make a suggestion</a></p>
          <p><a href="">FAQs</a></p>
      </li>

  </ul>
  <div className="copy">
  <p>©2023 Medimind. All rights reserved.</p>

  </div>
  </div>
  )}

export default Footer;
