import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Teks yang akan diketik (animasi)
  const texts = [
    'Nabila Indriyanti',
    'My Portofolio',
  ];
  
  // Efek typing animation
  useEffect(() => {
    const currentText = texts[currentIndex % texts.length];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Mengetik
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Selesai mengetik, tunggu sebentar lalu hapus
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Menghapus
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? 100 : 150);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, texts]);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sosial Media Links dengan gambar logo dari CDN
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/indriyantinabila570-ship-it', 
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg',
      color: '#333333' 
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@nabilaindriyanti-e7h?si=WOF82ezz3bqF5TWe', 
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg',
      color: '#FF0000' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/nabila-indriyanti-2186b13a5/', 
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
      color: '#0077B5' 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/naabiillaaa5?igsh=MzBqY2xobTgzaXRj', 
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg',
      color: '#E4405F' 
    },
    { 
      name: 'Gmail', 
      url: 'mailto:nabilaindriyanti@gmail.com', 
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg',
      color: '#D14836' 
    },
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/6281234567890', 
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg',
      color: '#25D366' 
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@nabilaajaa93?_r=1&_t=ZS-95dGEVbnsJw', 
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg',
      color: '#000000' 
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <>
      <section className="hero">
        <div className="container-full">
          <div className="hero-wrapper">
            <div className="hero-content">
              {/* Status Badge */}
              <div className="status-badge">
                <span className="status-dot"></span>
                AVAILABLE FOR PROJECTS
              </div>
              
              {/* Greeting */}
              <p className="greeting">Hi, I'm</p>
              
              {/* Animated Name - Efek mengetik */}
              <h1 className="animated-name">
                {displayText}
                <span className="cursor">|</span>
              </h1>
              
              {/* Deskripsi */}
              <p className="hero-description">
                Building premium digital experiences with Design & thoughtful interactions, 
                focused on clarity, performance, and real-world usability.
              </p>
              
              {/* Tombol Download CV */}
              <button className="btn-download" onClick={() => window.open('CV.pdf', '_blank')}>
                Download CV
              </button>
              
              {/* Sosial Media Icons dengan Gambar Logo */}
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="social-icon-btn"
                    onClick={() => handleSocialClick(social.url)}
                    style={{ '--social-color': social.color }}
                    title={social.name}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name}
                      className="social-icon-img"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="hero-image">
              <div className="profile-image">
                <img 
                  src="/1.jpeg" 
                  alt="Profile"
                />
                <div className="profile-badge">
                  <span>✨ Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Proyek Section */}
      <section className="highlight-projects container-full">
        <h2 className="section-title">Featured Highlights</h2>
        <p className="section-subtitle">My best work that showcases my design expertise</p>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">📱</div>
            <h3>Finance App Redesign</h3>
            <p>Complete UI/UX overhaul for mobile banking</p>
            <Link to="/contact" className="highlight-link">Let's Collaborate →</Link>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🛍️</div>
            <h3>Sustainable E-commerce</h3>
            <p>Eco-friendly shopping platform design</p>
            <Link to="/contact" className="highlight-link">Let's Collaborate →</Link>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">📊</div>
            <h3>Healthcare Dashboard</h3>
            <p>Patient data monitoring dashboard</p>
            <Link to="/contact" className="highlight-link">Let's Collaborate →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;