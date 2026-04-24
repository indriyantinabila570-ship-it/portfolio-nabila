import React from 'react';

const certificates = [
  {
    title: 'Belajar Back-end Pemula Dengan Javascript',
    issuer: 'Dicoding',
    date: '2026',
    image: 'a.jpeg', // ⬅️ masukin gambar di sini
    link: '2.pdf'
  },
  {
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding',
    date: '2026',
    image: 'b.jpeg',
    link: '3.pdf'
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding',
    date: '2026',
    image: 'c.jpeg',
    link: '4.pdf'
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    date: '2026',
    image: 'd.jpeg',
    link: '5.pdf'
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    date: '2026',
    image: 'e.jpeg',
    link: '6.pdf'
  },
  {
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding',
    date: '2026',
    image: 'f.jpeg',
    link: '7.pdf'
  },
  {
    title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
    issuer: 'Dicoding',
    date: '2026',
    image: 'g.jpeg',
    link: '8.pdf'
  },
  {
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding',
    date: '2026',
    image: 'h.jpeg',
    link: '9.pdf'
  },
  {
    title: 'Introduction to Financial Literacy',
    issuer: 'Dicoding',
    date: '2026',
    image: 'i.jpeg',
    link: '10.pdf'
  },
  {
    title: 'Financial Literacy 101',
    issuer: 'Dicoding',
    date: '2026',
    image: 'j.jpeg',
    link: '11.pdf'
  },
  {
    title: 'Certificate Dicoding',
    issuer: 'Dicoding',
    date: '2025-2026',
    image: 'k.jpeg',
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

            {/* ✅ Gambar Sertifikat */}
            <div className="cert-image">
              <img 
                src={cert.image || "/placeholder.png"} 
                alt={cert.title} 
              />
            </div>

            {/* ✅ Info */}
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-date">{cert.date}</div>

              <button 
                onClick={() => openCertificate(cert.link)} 
                className="cert-link"
              >
                Preview →
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;