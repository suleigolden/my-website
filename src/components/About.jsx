import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a Full Stack Software Engineer with a passion for creating 
            efficient, scalable, and user-friendly applications. With expertise 
            in both frontend and backend technologies, I bring ideas to life 
            through clean code and thoughtful design.
          </p>
          <p className="about-text">
            When I'm not coding, I enjoy contributing to open-source projects, 
            learning new technologies, and sharing knowledge with the developer 
            community. I believe in writing code that is not only functional 
            but also maintainable and elegant.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
