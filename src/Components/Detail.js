import React from 'react'
import illustration2 from '../Assets/img2.svg'
import tick from '../Assets/item4.svg'
import '../Styles/Details.css'

function Detail() {
  return (
    <>
      <div className='section-3 aboutContainer'>
        <img src={illustration2} alt=""  className='section-3__left'/>
        <div className='details'>
            <div className='detail1'>We Provide  Many<span>Features You Can Use</span></div>
            <div className='detail2'>You can explore the features that we provide with fun and have their own functions each feature.</div>
            <div>
                <div>
                    <img src={tick} alt="" />
                    <span>Powerfull online protection.</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Internet without borders.</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Supercharged VPN.</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>No specific time limits.</span>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Detail
