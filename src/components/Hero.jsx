import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">Welcome</div>
        <h1 className="hero-name">
          <span className="hero-name-first">John</span>{' '}
          <span className="hero-name-last">Doe</span>
        </h1>
        <h2 className="hero-title">Full Stack Software Engineer</h2>
        <p className="hero-intro">
          Passionate about building scalable web applications and creating 
          exceptional user experiences. I love turning complex problems into 
          simple, beautiful, and intuitive solutions.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="hero-btn hero-btn-primary">View My Work</a>
          <a href="#contact" className="hero-btn hero-btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
