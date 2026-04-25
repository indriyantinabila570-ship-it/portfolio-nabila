// projects.jsx
import React from 'react';

const projects = [
  {
    title: 'SmartPlanner',
    description: 'Sebuah website yang menunjukkan prestasi seorang siswi',
    tags: ['Productivity', 'Task Management', 'Daily Planner'],
    image: '41.jpeg', // atau pakai screenshot/thumbnail project
    link: 'https://daily-planne-app.vercel.app/' // ✅ Ganti dengan URL hosting asli
  },
  {
    title: 'MoneyPath',
    description: 'Website keuangan yang saya kembangkan bersama dengan tim saya',
    tags: ['Finance', 'Team Project', 'Web Development'],
    image: '71.jpeg',
    link: 'https://moneypath-7777.firebaseapp.com/' // ✅ Ganti dengan URL hosting asli
  },
  {
    title: 'healthy-lifestyle',
    description: 'Sebuah website yang menunjukkan prestasi seorang siswi',
    tags: ['Wellness App', 'Healthy Living', 'Fitness & Nutrition'],
    image: '42.jpeg', // atau pakai screenshot/thumbnail project
    link: 'https://healthy-lifestyle-app.vercel.app/' // ✅ Ganti dengan URL hosting asli
  },
];
function Projects() {
  const openProject = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            {/* Gambar dengan efek overlay */}
            <div className="project-image">
              <img 
                src={project.image || "/placeholder.png"} 
                alt={project.title} 
              />
              <div className="image-overlay"></div>
            </div>

            {/* Content */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="highlight-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <button 
                onClick={() => openProject(project.link)} 
                className="project-link"
              >
                View Project →
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;