import "./HeroImageStyles.css";
import React from 'react'
import intro from "../Assets/211.jpg"
import { Link } from "react-router-dom";
const Heroimage = () => {
  return ( <div className="hero">
    <div className="mask">
      <img className="211" src={intro}
      alt="intro"></img>
  </div>
  <div className="content">
    <p>Hi , I'M A WEBDEVELOPER</p>
    <h1> Full Stack Developer </h1>
    <div>
      <Link to ="/project"
      className="btn">Project
      </Link>

      <Link to ="/contact"
      className="btn btn-light">Contact</Link>
    </div>
  </div>
  </div>
  )
}

export default Heroimage; 