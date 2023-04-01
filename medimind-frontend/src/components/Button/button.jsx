import React from "react";
import {GrLinkedin} from "react-icons/gr"
import {FaGithubSquare} from "react-icons/fa"
import {GrInstagram} from "react-icons/gr"
import {FaFacebookSquare} from "react-icons/fa"
import "../Button/button.css"

const Button = ( ) => {
    return (
            <div className="social-list">
            <a href="https://www.linkedin.com/in/" ><GrLinkedin/></a>
            <a href="https://github.com/" ><FaGithubSquare/></a>
            <a href="https://instagram.com" ><GrInstagram/></a>
            <a href="https://facebook.com/" ><FaFacebookSquare/></a>
            </div>

    )
}

export default Button
