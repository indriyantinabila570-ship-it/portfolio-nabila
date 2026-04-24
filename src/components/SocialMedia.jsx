import React from 'react';

const skills = [
  { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
];

const tools = [
  { name: 'Figma', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
  { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
];

function Skills() {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Skills & Tools</h2>

      {/* ✅ Skills */}
      <h3 className="sub-title">Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* ✅ Tools */}
      <h3 className="sub-title">Tools</h3>
      <div className="skills-grid">
        {tools.map((tool, index) => (
          <div key={index} className="skill-card">
            <img src={tool.icon} alt={tool.name} />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;