import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg'
import  '../Styles/CommonClassses.css'

function Navbar() {

  const[hidden , setHidden] =useState(true)
  function show(){
    setHidden(!hidden)
  }

  return (
    
    <>
      <div className='container nav'>
        <img src={Logo} alt="" className='responsiveImage img1' />
        <div className= {hidden?"links hidden":'links '}>
            <a href="1">About</a>
            <a href="2">Features</a>
            <a href="3">Pricing</a>
            <a href="4">Testimonials</a>
            <a href="5">Help</a>
        </div>
        <div className="navbar__icons">
                <i className="bi bi-list" onClick={show}></i>
            </div>
        <div className="btns">
            <button className='btn1'>Sing In</button>
            <button className='btn2'>Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
