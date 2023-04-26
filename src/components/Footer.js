import "./footerstyles.css"

import React from 'react'

import { FaHome, FaLinkedin, FaHackerrank, FaGithub, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff"
                ,marginRight:"2rem"}}/>
                <div>
                    <p>Housing Society</p>
                    <p>India</p>
                </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size ={20} style={{color :"#fff",
                    marginRight: "2rem"}} />
                    9588582883</h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size ={20} style={{color :"#fff",
                    marginRight: "2rem"}} />
                    phenomenalreigns3@gmail.com</h4>
                </div>
            </div>

            

            <div className="right">
                <h4>About me</h4>
                <p>Hello My Name is Amit Pawar.Welcome to my Portfolio website! I am a skilled website developer with a passion for creating exceptional online experiences.
                    I enjoy developing new projects. Thank You !  </p>
                <div className='social'>
                <FaLinkedin size ={20} style={{color :"#fff",
                    marginRight: "2rem"}} />
                    {/* amit-pawar-a81159238/ */}

                <FaHackerrank size ={20} style={{color :"#fff",
                    marginRight: "2rem"}} />
                    {/* https://www.hackerrank.com/phenomenalreign1 */}

                <FaGithub size ={20} style={{color :"#fff",
                    marginRight: "2rem"}} />
                    {/* https://github.com/Amit9588     */}
                       
                
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer