import React from 'react'
import '../Styles/Help.css'
import logo from '../Assets/Logo.svg'
import facebook from '../Assets/Facebook.svg'
import twitter from '../Assets/Twitter.svg'
import instagram from '../Assets/Instagram.svg'

function Help() {
  return (
    <div className='help hContainer'>
        <div className='help-left'>
            <img src={logo} alt="l" className='Lg'/>
            <div className='left-text'><b>LaslesVPN </b> is a private virtual network that</div>
            <div className='left-text'> has unique features and has high security.</div>
            <div className='social-icons'>
                <img src={facebook} alt=""  className='Sig'/>
                <img src={twitter} alt=""  className='Sig'/>
                <img src={instagram} alt=""  className='Sig'/>
            </div>
            <div className='left-text'>©2020LaslesVPN</div>
        </div>
        <div className='help-right'>
            <div className='right1'>
                <div className='right1-title'>Product</div>
                <div className='left-text'>Download</div>
                <div className='left-text'>Pricing</div>
                <div className='left-text'>Location</div>
                <div className='left-text'>Server</div>
                <div className='left-text'>Countries</div>
                <div className='left-text'>Blog</div>
            </div>
            <div className='right1'>
                <div className='right1-title'>Engage</div>
                <div className='left-text'>LasaleVPN?</div>
                <div className='left-text'>FAQ</div>
                <div className='left-text'>Tutorials</div>
                <div className='left-text'>About Us</div>
                <div className='left-text'>Privacy</div>
                <div className='left-text'>Terms And Conditions</div>
            </div>
            <div className='right1'>
                <div className='right1-title'>Earn Money</div>
                <div className='left-text'>Affiliate</div>
                <div className='left-text'>Become Partner</div>
            </div>
        </div>
      
    </div>
  )
}

export default Help
