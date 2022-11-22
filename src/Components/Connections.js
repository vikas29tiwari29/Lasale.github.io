import React from 'react'
import '../Styles/Connections.css'
import global from '../Assets/global.svg'
import social1 from '../Assets/social1.svg'
import social2 from '../Assets/social2.svg'
import social3 from '../Assets/social3.svg'
import social4 from '../Assets/social4.svg'
import social5 from '../Assets/social5.svg'

function Connections() {
  return (
    <div className='connection aboutContainer'>
        <div className='section-text'>
            <div className='title'>Huge Global Network <br /><span>of Fast VPN</span></div>
            <div className='text'>See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.</div>
        </div>
        <div className="IG">
            <img src={global} alt=""  className='glob'/>
        </div>
        <div className="socials aboutContainer">
            <img src={social1} alt="1" className='big'/>
            <img src={social2} alt="2" className='big'/>
            <img src={social3} alt="3" className='big'/>
            <img src={social4} alt="4" className='big'/>
            <img src={social5} alt="5" className='big'/>
        </div>
    </div>
  )
}

export default Connections
