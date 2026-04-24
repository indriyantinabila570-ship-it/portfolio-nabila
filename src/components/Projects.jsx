// projects.jsx
import React from 'react';

const projects = [
  {
    title: 'GALERI PRESTASI · THREE PEAT',
    description: 'Sebuah website yang menunjukkan prestasi seorang siswi',
    tags: ['Kementerian Besi', 'Data Indonesia 2024', 'OSN Krim (Medal Game)'],
    image: '/api/placeholder/400/200',
    link: '#'
  },
  {
    title: 'MoneyPath',
    description: 'Website keuangan yang saya kembangkan bersama dengan tim saya',
    tags: ['Finance', 'Team Project', 'Web Development'],
    image: '/api/placeholder/400/200',
    link: '#'
  },
  {
    title: 'ps Victory',
    description: 'Platform pembelajaran dan pengembangan diri',
    tags: ['Education', 'E-Learning', 'Interactive'],
    image: '/api/placeholder/400/200',
    link: '#'
  },
  {
    title: 'Indonesian Culture',
    description: 'Pelestarian dan pengenalan budaya Indonesia melalui digital',
    tags: ['Culture', 'Heritage', 'Digital Archive'],
    image: '/api/placeholder/400/200',
    link: '#'
  }
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