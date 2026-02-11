import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.',
      githubLink: 'https://github.com/johndoe/ecommerce-platform'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool built with React and Express. Users can create projects, assign tasks, track progress, and collaborate in real-time.',
      githubLink: 'https://github.com/johndoe/task-manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard application that displays current weather conditions and forecasts. Built with React and integrated with weather APIs.',
      githubLink: 'https://github.com/johndoe/weather-dashboard'
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
