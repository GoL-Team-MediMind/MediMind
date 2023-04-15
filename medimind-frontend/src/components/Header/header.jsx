import React from "react";
import "../Css/style.css"
import hospital from "../../assets/hospital-building.png"
import layers from "../../assets/layers.png"
import shield from "../../assets/shield.png"
import targeting from "../../assets/targeting.png"
import puzzle from "../../assets/puzzle.png"
import medical from "../../assets/medical.png"
import lan1 from "../../assets/lan1.jpg"
import lan2 from "../../assets/lan2.jpg"
import lan3 from "../../assets/lan3.jpg"
import lan4 from "../../assets/lan4.jpg"
import Footer from "../Footer/footer";
import Loader from "../Loader/loader";
import { NavLink } from "react-router-dom";
const Header = ( ) => {
    return (
        <>

            <section class="header">

            <header>

                <a href="#" class="logo">
                    <p>MediMinds</p>
                </a>

                <ul>
                                    <li>
                    <NavLink to="/aboutus">About Us
                    </NavLink></li>
                    <li>
                    <NavLink to="/service">Services
                    </NavLink></li>
                    <li>
                    <NavLink to="/aboutus">Team
                    </NavLink></li>
                    <li>
                    <NavLink to="/aboutus">Contact Us
                    </NavLink></li>

                </ul>
                <div className="login" id="adminpanel">


                    <NavLink to="/admin">
                    Admin panel
                    </NavLink>
                </div>
            </header>
            <div className="content">
                <div className="box">
                    <h2>Access your patient's <span>health </span>data and records remotely, anytime and anywhere.<img src={hospital} /></h2>
                    <p>By ensuring that health data is stored safely and securely,
                        patients and healthcare providers can work together more effectively to
                        ensure that individuals receive the primary health care they need to maintain
                        good health and wellbeing.</p>
                    <NavLink to="/medic"><button class="b1"><span>Medic</span></button></NavLink>
                    <NavLink to="/patient"><button class="b2"><span>Patient</span></button></NavLink>


                </div>
                <div className="ryt">
                    <div className="part1">
                    <img className="pic1" src={lan4} alt="" />
                    <img className="pic2" src={lan1} alt="" />
                        </div>
                        <div className="part2">
                    <img className="pic3" src={lan2} alt="" />
                    <img className="pic4" src={lan3} alt="" />
                        </div>

            </div>


</div>
        </section>
        <section class="info">
            <div class="infodiv">
<ul>
    <li>
        <img src={layers} alt="" />
        <h2>Systematic information</h2>
        <p>Our web app utilizes a robust and intuitive organizational system to help you efficiently manage your data and keep your workflow streamlined.</p>
    </li>
    <li>
<img src={shield} alt="" />
<h2>Protected information</h2>
        <p>Our web app employs state-of-the-art encryption and multi-factor authentication to ensure that your sensitive information is always protected and secure.</p>

    </li>
    <li>
<img src={targeting} alt="" />
<h2>Precise information</h2>
        <p>Built on a foundation of rigorous data validation and quality control measures, our web app ensures that you can always rely on accurate and precise information..</p>

    </li>


</ul>
            </div>
            </section>
            <section >
<div className="info2">
    <div className="layer">
    <div className="title">
    <h1>OUR RANGE OF <span>SERVICES</span></h1>
    <hr />
    </div>

    <div class="point1">
<img src={medical} alt="" />
<p>Our cloud-based health data storage service is scalable and accessible from anywhere,
     which makes it an ideal solution for healthcare organizations of all sizes. With our service,
      you can store and manage your health data from a central location,
    allowing you to streamline your operations and improve efficiency.</p>
    </div>
    <div class="point2">
    <img src={puzzle} alt="" />
<p>Our service also provides education and resources to help individuals take control of their own health.
     Our platform includes a range of educational materials, such as articles, videos, and infographics,
     that cover topics such as disease prevention, healthy living, and managing chronic conditions..</p>
    </div>
    </div>
</div>
<div className="join">


    <h2>Say goodbye to the hassle of accessing your health records!
         Medimind's smart platform simplifies access to primary healthcare while securely storing your health data,
         so you can focus on what really matters - your health.</h2>
         <div className="create">
<h3>Join our community and be a catalyst for change in the healthcare
    industry by promoting access to primary care for all. <button><a href="">Join Us</a> </button></h3>

    </div>

</div>

<div className="donation">
    <div className="layer2">
    <h1>Would you like to make a meaningful contribution to cancer patients in need by donating funds?</h1>
    <button><p>Donate</p></button>
    </div>
</div>

            </section>
<Footer />

            </>
    )
}

export default Header
