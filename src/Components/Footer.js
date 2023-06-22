import "./FooterStyles.css";
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="left">
        <div className="location">
           <FaHome size={20} style={{color: "#fff", marginRight:"2 rem" }} /> 
           </div>
       <div>
        <p>Uttara, Dhaka-1230</p>
        <p>Bangladesh</p>
       </div>
       <div className="phone">
       <FaPhone size={20} style={{color: "#fff", marginRight:"2 rem" }} />
        </div>
       <div>
        <p>+8801617922683</p>
       </div>
       <div className="email">
       <FaMailBulk size={20} style={{color: "#fff", marginRight:"2 rem" }} />
        </div>
        <div>
        <p>musfiqur207@gmail.com</p>
       </div>

       </div>
       
        <div className="right">
        <h4>About me.</h4>
        <p>Welcome to my website! My name is Musfiqur Rahman, and I'm thrilled to have you here.</p>
        <div className="social">
        <FaFacebook size={30} style={{color: "#fff",marginRight:"1 rem" }} />
        <FaLinkedin size={30} style={{color: "#fff",marginRight:"1 rem" }} />
        <FaGithub size={30} style={{color: "#fff",marginRight:"1 rem" }} />
        <FaTwitter size={30} style={{color: "#fff",marginRight:"1 rem" }} />
        </div>
      </div>
      </div>
      </div>
   
  )
}

export default Footer
