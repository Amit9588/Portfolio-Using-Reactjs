import React from 'react'
import Navbar from '../components/navbar';
import Heroimage from '../components/heroimage';
import Footer from '../components/Footer';
import Work from '../components/work'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimage/>
      {/* <Work/> */}
      <Footer/>
    </div>
  )
}

export default Home;
