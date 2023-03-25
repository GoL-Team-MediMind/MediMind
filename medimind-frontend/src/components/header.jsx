import React from "react";
import "../components/Css/style.css"
import Logo from "../assets/logo.png"

const Header = ( ) => {
    return (
        <section>
        <div className="circle"></div>
        <header>
            <a href="#" class="logo">
                <img src={Logo} alt="logo" />
<h3>MediMind</h3>
            </a>

            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
         </header>
         <div className="content">
        <div className="box">
            <h2>Get access to primary <span>  health care</span> anywhere you are!</h2>
             <p>High-quality health care helps prevent diseases and improve quality of life.
             Healthy People 2030 focuses on improving health care quality and making sure
             all people get the health care services they need. Helping health care
             providers communicate more effectively can help improve health and well-being.</p>
             <a href="about">What we Offer</a>
             </div>
             <div className="image">

             </div>
         </div>
    </section>
    )
}

export default Header
