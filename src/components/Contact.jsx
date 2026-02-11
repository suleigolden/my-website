import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your visions. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a 
              href="mailto:john.doe@example.com" 
              className="contact-link email-link"
            >
              📧 john.doe@example.com
            </a>
            <a 
              href="https://linkedin.com/in/johndoe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link linkedin-link"
            >
              💼 LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
