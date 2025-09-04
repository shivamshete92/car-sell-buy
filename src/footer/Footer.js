import React from 'react';
import './Footer.css';

const Footer = () => {
  const companyLinks = [
    'About Us', 'Careers', 'Press kit', 'Blog', 'Article', 'News', 'Privacy Policy', 'Sustainability', 'Testimonials', 'Discover'
  ];

  const buySellLinks = [
    'Buy used car', 'Sell used car', 'Used car valuation', 'Motor insurance', 'Check & pay challan', 'Check vehicle details', 'Explore new cars', 'Scrap your car', 'e-Challan for Telangana'
  ];

  const helpLinks = [
    'Help & support', 'FAQs', 'Security', 'Contact us', 'Become a partner', 'RC transfer status', 'Terms & conditions'
  ];

  const socialLinks = [
    'Facebook', 'x', 'Instagram', 'Youtube', 'LinkedIn', 'App Store', 'Play Store'
  ];

  const globalLinks = [
    'Australia', 'UAE'
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            {companyLinks.map(link => (
              <li key={link}>
                <a href={`#${link.replace(/\s+/g, '').toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Buy & Sell</h4>
          <ul>
            {buySellLinks.map(link => (
              <li key={link}>
                <a href={`#${link.replace(/\s+/g, '').toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help & Support</h4>
          <ul>
            {helpLinks.map(link => (
              <li key={link}>
                <a href={`#${link.replace(/\s+/g, '').toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social Links</h4>
          <ul>
            {socialLinks.map(link => (
              <li key={link}>
                <a href={`#${link.replace(/\s+/g, '').toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h4>We are global</h4>
          <ul>
            {globalLinks.map(link => (
              <li key={link}>
                <a href={`#${link.replace(/\s+/g, '').toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 CAR TECH INDIA, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
