import React from 'react'
import '../Styles/Services.css'
import free from '../Assets/Free.svg'

function Services() {
  return (
    <div className='service  container'>
        <div className='section-1'>
            <div className='title'>Choose Your Plan</div>
            <div className='text'>See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.</div>
        </div>
        <div class="section-1__cards" >
            <div class="section-1__cards--1">
                <img src={free} alt="" className='Igc responsiveImages'/>
                <div className="tag">Free</div>
              
                <div class="features">
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Unlimited Bandwidth</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Encypted Connection</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>No Traffic Logs</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Works On All Devices</span>
                   </div>  
                </div>
                <div className="price">
                    <div className="amount">Free</div>
                </div>
                <button className="btn3">Select</button>
            </div>
            <div class="section-1__cards--2">
                <img src={free} alt="" className='Igc responsiveImages'/>
                <div className="tag">Standard Plan</div>
              
                <div className="features">
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Unlimited Bandwidth</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Encrypted Connection</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>No Traffic Logs</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Works On All Devices</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Connect Anywhere</span>
                   </div> 
                </div>
                <div className="price">
                    <span className="amount">$9</span>
                    <span className="time">/mo</span>
                </div>
                <button className="btn3">Select</button>
            </div>
            <div className="section-1__cards--3">
                <img src={free} alt="" className='Igc responsiveImage'/>
                <div className="tag">Premium Plan</div>
              
                <div className="features">
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Unlimited Bandwidth</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Encrypted Connection</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>No Traffic Logs</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Works On All Devices</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Connect Anywhere</span>
                   </div> 
                   <div className="list">
                    <i className="bi bi-check-lg"></i>
                    <span className='listItem'>Get New Features</span>
                   </div> 
                </div>
                <div className="price">
                    <span className="amount">$12</span>
                    <span className="time">/mo</span>
                </div>
                <button className="btn31">Select</button>
            </div>
        </div>
    
    </div>
  )
}

export default Services
