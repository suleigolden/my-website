import React from 'react'
import './Skills.css'

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Git',
    'Python',
    'SQL',
    'TypeScript',
    'Express.js',
    'MongoDB',
    'REST APIs'
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
