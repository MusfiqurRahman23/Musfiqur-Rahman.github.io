import React from 'react'
import "./AboutContentStyles.css";
import { Link } from 'react-router-dom';
import React1 from"../assets/react1.png";
import React2 from"../assets/react2.jpeg";
const pdfFileUrl ="http://localhost:3000/Musfiq-CV.pdf";
const AboutContent=()=> {
  const downloadFileAtURL=(url)=>{
      const fileName= url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href=url;
      aTag.setAttribute("download",fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    
   
  };
  return (
    <div className='about'>
      <div className='left'>
        <h1 >Who am I?</h1>
        <p>I am a react front-end developer.I create resonsive secure website for my clients.</p>
        <Link to="/Contact"><button className='btn'>Contact</button></Link>
        <div className='br'>
        <Link to="/Resume"></Link>
          <button onClick={()=>{downloadFileAtURL (pdfFileUrl);}} className='btn'>Dowload My-CV</button>
        </div>
       
      </div>
      <div className='right'>
        <div className="img-container">
            <div className='img-stack top'>
                <img src={React1} className='img' alt='react'/>
                <div className='img-stack bottom'>
                <img src={React2} className='img' alt='rea'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
