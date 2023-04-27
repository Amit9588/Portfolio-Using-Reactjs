import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/heroimage2';
import Form from "../components/form"
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading ="Contact" text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;