import React from 'react'

import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/heroimage2';
import PricingCard from '../components/pricingCard';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading= "PROJECTS." text = "Some of my most recent works" /> 
      <PricingCard /> 
      <Footer/>
    </div>
  )
}

export default Project;