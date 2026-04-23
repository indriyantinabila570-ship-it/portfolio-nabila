import React from 'react';

function Contact() {
  // Ganti dengan alamat rumah Anda
  const address = "Gg. bah iting, RT01/RW04, KP.Bojong Sari, Kec.ciomas,Kab.bogor";
  
  // Koordinat contoh (Jakarta) - Ganti dengan koordinat rumah Anda
  const latitude = -6.2088;
  const longitude = 106.8456;
  
  // OpenStreetMap embed URL dengan marker
  const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.05}%2C${latitude-0.05}%2C${longitude+0.05}%2C${latitude+0.05}&layer=mapnik&marker=${latitude}%2C${longitude}`;

  return (
    <div className="contact-page container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>Have a project in mind? I'd love to hear about it. Feel free to reach out through any of these channels.</p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>indriyantinabila570@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>+62 852 1017 6256</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <span>linkedin.com/in/nabila-indriyanti</span>
            </div>
          </div>
        </div>
        <div className="map-container">
          <iframe 
            title="Home Address Map"
            src={mapEmbedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '15px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div className="address-text">
            📍 {address}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;