import React from 'react'

import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/heroimage2';
import Aboutcontent from '../components/Aboutcontent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading = "ABOUT" text = "I am a friendly Full Stack Developer." />
      <Aboutcontent/>
      <Footer/>

    </div>
  )
}

export default About;