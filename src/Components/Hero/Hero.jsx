import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is thoughtfully crafted to equip students with the knowledge, skills, and real-world experiences they need to become the changemakers of tomorrow.</p>
        <button className='btn'>Explore more <img src= {dark_arrow} alt="" /></button>
    
    </div>
      
    </div>
  )
}

export default Hero
