import "./HeroImgStyles.css";
import React from 'react'
import {Link} from "react-router-dom";
import IntroImg from "../assets/intro-img.jpg"

const HeroImg=()=> {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt ="introimg"/> 
      </div>
      <div className="content">
        <p>Hi, I'm Musfiqur Rahman</p>
        <h1>React Developer</h1>
        <div>
           <Link to="/project" className="btn">Projects </Link>
           <Link to="/contact" className="btn-light">Contact </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg

