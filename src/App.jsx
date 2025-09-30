import { useState } from 'react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="App">
      {/* Navigation */}
      <header id="top">
        <nav>
          <div className="logo">
            <a href="#top">
              <h1>TransparaTech</h1>
            </a>
          </div>
          <ul className={mobileMenuOpen ? "nav-links active" : "nav-links"}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="get-started">Get Started</button>
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

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
          <h2>Our Services</h2>
          <p>TransparaTech offers a comprehensive range of technology solutions designed to bring 
          transparency and efficiency to your operations.</p>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="icon">💻</div>
            <h3>Software Development</h3>
            <p>Custom-built applications and solutions tailored to your business needs, with transparent development processes.</p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
          <div className="service-card">
            <div className="icon">📊</div>
            <h3>Data Analytics</h3>
            <p>Transform your data into actionable insights with our advanced analytics solutions, making complex data understandable.</p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
          <div className="service-card">
            <div className="icon">☁️</div>
            <h3>Cloud Solutions</h3>
            <p>Scalable and secure cloud infrastructure and migration services to optimize your operations and reduce costs.</p>
            <a href="#" className="learn-more">Learn more →</a>
          </div>
        </div>
        <div className="view-all">
          <button className="btn-primary">View All Services</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-image">
          <img src="/about-image.jpg" alt="About TransparaTech" />
        </div>
        <div className="about-content">
          <h2>About TransparaTech</h2>
          <p>Founded in 2020, TransparaTech was born from a simple idea: technology should be transparent, 
          understandable, and accessible to everyone. We believe that technology solutions shouldn't 
          feel like black boxes - our clients deserve to understand what they're investing in.</p>
          <p>Our team of experts is passionate about demystifying complex technology and creating 
          solutions that are not only powerful but also transparent in their operation and value.</p>
          <h3>Our Core Values</h3>
          <ul className="values-list">
            <li>Transparency in all our processes and communication</li>
            <li>Innovation that solves real-world problems</li>
            <li>Accessibility for users of all technical backgrounds</li>
            <li>Excellence in every aspect of our work</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Have questions about our services or want to discuss your project? 
          Reach out to us and experience our transparent approach firsthand.</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>info@transparatech.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Office</h4>
                <p>
                  123 Transparency Way<br />
                  Tech Valley, CA 94103<br />
                  United States
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can we help you?" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="6" placeholder="Tell us about your project or inquiry..."></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <h2>TransparaTech</h2>
            <p>Making technology transparent and accessible</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Software Development</a></li>
                <li><a href="#">Data Analytics</a></li>
                <li><a href="#">Cloud Solutions</a></li>
                <li><a href="#">Cybersecurity</a></li>
              </ul>
            </div>
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
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TransparaTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
