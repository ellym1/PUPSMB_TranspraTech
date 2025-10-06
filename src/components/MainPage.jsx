import React from 'react';

const MainPage = ({ handleLoginClick }) => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Making Technology Transparent & Accessible</h1>
          <p>TransparaTech provides innovative technology solutions with transparency 
          at the core of everything we do. Building a better future through accessible tech.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.png" alt="TransparaTech Hero" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <h2>About TransparaTech</h2>
          <p>TransparaTech offers a comprehensive range of technology solutions designed to bring 
          transparency and efficiency to your operations.</p>
        </div>
        
       
      </section>

      {/* Features Section */}
      <section id="features-section" className="features-section">
        <div className="features-title">
          <h2><strong>Our Key Features</strong></h2>
          <h3><b>Experience Transparency and Efficiency with TransparaTech</b></h3>
        </div>
        <div className="firstfeatures-image">
          <img src="/about-image.jpg" alt="About TransparaTech" />
        </div>
        <div className="firstfeatures-content">
          <h3><b>Transparency Dashboard</b></h3>
          <p><b>Empowering organizations with real-time visibility and control</b></p>
          <p>Gain instant access to performance data and operational metrics through an intuitive dashboard. Our system visualizes workflows, tracks efficiency, and highlights areas for improvement — enabling faster, smarter, and more transparent decisions.</p>
        </div>
        <div className="secondfeatures-image">
          <img src="/about-image.jpg" alt="About TransparaTech" />
        </div>
        <div className="secondfeatures-content">
          <h3><b>Automation Solutions</b></h3>
          <p><b>Reducing manual work, increasing productivity</b></p>
          <p>Simplify and accelerate your processes through intelligent automation tools that handle repetitive tasks, data entry, and reporting — allowing your team to focus on what truly matters.</p>
        </div>
        <div className="thirdfeature-image">
          <img src="/about-image.jpg" alt="About TransparaTech" />
        </div>
        <div className="thirdfeature-content">
          <h3><b>Data Management Services</b></h3>
          <p><b>Transparent, efficient, and accessible from anywhere</b></p>
          <p>We provide comprehensive data management solutions that enhance organization, accessibility, and reliability. Our services ensure seamless data handling and scalable systems that promote operational transparency and efficiency.</p>
        </div>
        <div className="feature-section_image">
          <img src="" alt=""/>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <h2>TransparaTech</h2>
            <p>Making technology transparent and accessible</p>
          </div>
          <div className="footerlogo-image">
            <img src="" alt=""/>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookies Policy</a></li>
              </ul>
            </div>
            <div className="developer">
              <h4>Developed by</h4>
              <img src="" alt=""/>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TransparaTech. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default MainPage;
