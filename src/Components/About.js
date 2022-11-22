import React from 'react'
import illustration from '../Assets/img1.svg'
import '../Styles/About.css'
import item1 from '../Assets/item1.svg'
import item2 from '../Assets/item2.svg'
import item3 from '../Assets/item3.svg'


function About() {
  return (
    <>
       <div class="section-2 aboutContainer grid">
    <div class="section-2__left flex">
        <div class="section-2--title">Want anything to be easy with <b >LaslesVPN.</b></div>
        <div class="section-2--text">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.</div>
        <button class="section-2--btn ">Get Started</button>
    </div>
    <img src={illustration} alt="" class="section-2__right responsiveImage"/>
  </div>
  <div className="profile aboutContainer">
        <div className="item">
            <img src={item1} alt=""  className='Ig'/>
            <div className='details'>
                <div className='num'>90+</div>
                <div>Users</div>
            </div>
        </div>
        <div className="item">
            <img src={item2} alt=""  className='Ig'/>
            <div className='details'>
                <div className='num'>30+</div>
                <div>Locations</div>
            </div>
        </div>  <div className="item">
            <img src={item3} alt=""  className='Ig'/>
            <div className='details'>
                <div className='num'>50+</div>
                <div>Servers</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
