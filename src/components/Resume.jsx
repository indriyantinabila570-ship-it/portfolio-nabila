import React from "react";

function Resume() {
  return (
    <div className="resume-page container">
      <h2 className="section-title">About Me</h2>

      {/* About Section */}
      <div className="resume-section">
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <p>
                Nama saya <strong>Nabila Indriyanti</strong>, atau biasa dipanggil Nabila.
                Saat ini saya sedang menempuh pendidikan di SMKN 1 Ciomas
                dengan jurusan PPLG (Pengembangan Perangkat Lunak & Gim).
              </p>

              <p>
                Saya memiliki minat besar dalam pengembangan web, khususnya dalam
                menciptakan tampilan digital yang menarik dan fungsional.
                Saya terbiasa menggunakan HTML, CSS, JavaScript, dan React
                untuk membangun aplikasi yang responsif dan user-friendly.
              </p>

              <p>
                Saya selalu berusaha menggabungkan desain modern dengan pengalaman
                pengguna yang optimal, serta terus belajar dan mengembangkan
                keterampilan agar dapat mengikuti perkembangan teknologi terbaru.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="resume-section">
        <h3 className="resume-section-title">
          <span className="section-icon">⚡</span> Skills & Tools
        </h3>

        <div className="skills-container">
          <div className="skills-category">
            <h4>Design Tools</h4>
            <div className="skills-list">
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Canva</span>
            </div>
          </div>

          <div className="skills-category">
            <h4>Frontend</h4>
            <div className="skills-list">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Tailwind CSS</span>
            </div>
          </div>

          <div className="skills-category">
            <h4>Soft Skills</h4>
            <div className="skills-list">
              <span className="skill-tag">Communication</span>
              <span className="skill-tag">Teamwork</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Time Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Download CV */}
      <div className="resume-download">
        <button
          className="btn"
          onClick={() => window.open("CV.pdf", "_blank")}
        >
          📄 Download Full CV (PDF)
        </button>
      </div>
    </div>
  );
}

export default Resume;