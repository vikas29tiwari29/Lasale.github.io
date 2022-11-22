import React from 'react'
import '../Styles/Testimonials.css'
import person1 from '../Assets/person1.png'
import person2 from '../Assets/person2.png'
import person3 from '../Assets/person3.png'

function Testimonials() {
  return (
    <div className='testimonials aboutContainer'>
       <div className='Testimonials-text'>
            <div className='title'>Trusted by Thousands of <br /><span>Happy Customer</span></div>
            <div className='text'>These are the stories of our customers who have joined us with great <br /><div className='textP2'>pleasure when using this crazy feature.</div></div>
        </div>
        <div className='reviewSection'>
        <div className='reviewCard1'> 
        <div className='reviews'>
                <img src={person3} alt="3" className='personPic'/>
            <div className="person">
                <div className='pName'>Viezh Robert</div>
                <div className='pLocation'>Warsaw Poland</div>
            </div>
            <div className='rating'>4.5 ⭐</div>
        </div>
        <div className='pr'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
        </div>
        <div className='reviewCard2'> 
        <div className='reviews'>
                <img src={person1} alt="3" className='personPic'/>
            <div className="person">
                <div className='pName'>Yessica Christy</div>
                <div className='pLocation'>Shanxi China</div>
            </div>
            <div className='rating'>4.5 ⭐</div>
        </div>
        <div className='pr'>“I like it because I like to travel far and still can connect with high speed.”.</div>
        </div>
        <div className='reviewCard3'> 
        <div className='reviews'>
                <img src={person2} alt="3" className='personPic'/>
            <div className="person3">
                <div className='pName'>Kim Young Jou</div>
                <div className='pLocation'>Seoul South Korea</div>
            </div>
            <div className='rating'>4.5 ⭐</div>
        </div>
        <div className='pr'>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</div>
        </div>
        </div>
        <div className="controler">
            <div className='left'>
                <div className='l1'></div>
                <div className='l2'></div>
                <div className='l3'></div>
                <div className='l4'></div>
            </div>
            <div className='right'>
                <div className='r1'><i class="bi bi-arrow-left"></i></div>
                <div className='r2'><i class="bi bi-arrow-right"></i></div>
            </div>
        </div>
        <div className="lastSection">
            <div className='last-text'>
            <div className='title2'>Subscribe Now for  <br /><span> Get Special Features!
</span></div>
                <div className='text2'>Let's subscribe with us and find the fun</div>
            </div>
            <button className='btn4'>Subscribe Now</button>
        </div>
    </div>
  )
}

export default Testimonials
