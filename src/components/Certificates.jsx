import React from 'react';

const certificates = [
  {
    title: 'Belajar Back-end Pemula Dengan Javascript',
    issuer: 'Dicoding',
    date: '2026',
    icon: '💻⚙️',
    link: '2.pdf'
  },
  {
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding',
    date: '2026',
    icon: '💻⚛️',
    link: '3.pdf'
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding',
    date: '2026',
    icon: '🌐💻',
    link: '4.pdf'
  },
  {
    title: 'Certificate Dicoding',
    issuer: 'Dicoding',
    date: '2025-2026',
    icon: '🎓',
    link: 'sertifikat.pdf'
  }
];

function Certificates() {
  const openCertificate = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="certificates-page container">
      <h2 className="section-title">Certificates obtained</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="cert-icon">{cert.icon}</div>
            <h3>{cert.title}</h3>
            <div className="cert-issuer">{cert.issuer}</div>
            <div className="cert-date">{cert.date}</div>
            <button 
              onClick={() => openCertificate(cert.link)} 
              className="cert-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              View Certificate →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;