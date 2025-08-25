import React from 'react'
import HeroImg from '../assets/hero-img.webp'
import '../CSS/Hero.css'
import CRED from '../assets/cred-logo.png'

function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-main-heading'>
            <h2>
                Digital Dreams Engineered to Reality
            </h2>
            <p>
                At AMK Web Innovation, we craft powerful digital experiences that engage audiences and transform ideas into impactful online solutions.
            </p>
            <div className='hero-button'>
                <button className='get-started'>Get Started</button>
                <button className='explore'>Explore feautures</button>
            </div>
        </div>
        <div className='hero-image'>
            <img src={HeroImg} alt="hero" />
        </div>
        
    </div>
  )
}

export default Hero