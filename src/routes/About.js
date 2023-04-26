import React from 'react'

import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/heroimage2';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading = "ABOUT" text = "I am a friendly Front End Developer." />
      <Footer/>
    </div>
  )
}

export default About;