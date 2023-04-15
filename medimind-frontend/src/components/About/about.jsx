import React from 'react'
import './about.css'
import {FaArrowLeft} from "react-icons/fa"
import { NavLink } from "react-router-dom"

const About = () => {
    const handleClick =( ) =>{
        ('/')
      }

    return (
        <div className='about' >
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
        <div className="arrow">

        </div>
            <div className='container'>

                <img src='https://th.bing.com/th/id/R.1d440f97cf3eec0fa096d63bfe21c745?rik=bNyQAqsGMO8wFw&pid=ImgRaw&r=0' alt='john' width={500} height={450} />

                <div className='col-2'>
                    <h2 className='header-about'>About Us</h2>
                    <span className='line'></span>
                    <h4 className='header-did'><b><u>Did you know?</u></b></h4>
                    <p>Over 689 million people live below the poverty line, on less than $1.90 per day.
                        There are many challenges that the poor face such as lack of education, employment, income and productive resources.<br/><br/>
                        Our aim is to help the less fortunate receive treatment without worrying about their expenses or challenges.<br/><br/>
                        We do this by providing a platform where poor/needy can be able to view their records from our system and,
                        obtain scholarships from donors and raise funds for food and healthcare services.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default About
