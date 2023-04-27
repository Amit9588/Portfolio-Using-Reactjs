import { Link } from "react-router-dom"
import "./AboutcontentStyles.css"
import img5 from "../Assets/img5.jpg"
import img6 from "../Assets/img6.png"
import React from 'react'

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I ?</h1>
            <p>I am a Full Stack Developer. I create responsive secure website for my clients.</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="image-stack top">
                <img src={img5} className="img" alt="true"></img>
            </div>
            <div className="image-stack bottom">
                <img src={img6} className="img" alt="true"></img>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent