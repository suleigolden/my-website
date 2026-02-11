import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-name">John Doe</h1>
        <h2 className="hero-title">Full Stack Software Engineer</h2>
        <p className="hero-intro">
          Passionate about building scalable web applications and creating 
          exceptional user experiences. I love turning complex problems into 
          simple, beautiful, and intuitive solutions.
        </p>
      </div>
    </section>
  )
}

export default Hero
