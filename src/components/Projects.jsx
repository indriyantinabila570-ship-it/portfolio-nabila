import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Finance App Redesign',
    description: 'Complete UI/UX overhaul for a mobile banking application, improving user engagement by 40%.',
    tags: ['UI Design', 'UX Research', 'Prototyping']
  },
  {
    title: 'E-commerce Platform',
    description: 'Product design for a sustainable fashion marketplace with focus on seamless checkout experience.',
    tags: ['Product Design', 'User Flow', 'Responsive']
  },
  {
    title: 'Health Dashboard',
    description: 'Designing a responsive dashboard for healthcare providers to monitor patient data efficiently.',
    tags: ['Dashboard', 'Data Visualization', 'Accessibility']
  }
];

function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="highlight-tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <Link to="/contact" className="highlight-link">View Case Study →</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;