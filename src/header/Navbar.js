import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../logo.png';
import { FaPhone, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showCallForm, setShowCallForm] = useState(false);
  const [callFormData, setCallFormData] = useState({
    phone: '',
    language: 'Hindi',
    message: ''
  });
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [signInFormData, setSignInFormData] = useState({
    email: '',
    password: ''
  });

  const toggleMobileMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);
  const toggleAccountDropdown = () => setShowAccountDropdown(prev => !prev);
  const closeAccountDropdown = () => setShowAccountDropdown(false);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    closeAccountDropdown();
  };

  const handleSignInChange = (e) => {
    setSignInFormData({
      ...signInFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Handle sign in submission here
    console.log('Sign in submitted:', signInFormData);
    setShowSignInForm(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-container${isScrolled ? ' fixed' : ''}`}>
      {/* Main navigation */}
      <div className="navbar-main">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </a>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            {['Buy Used Car','Sell Car','Car Finance','New Cars','Car Services'].map(item => (
              <li key={item} onClick={closeMenu}>
                <a href={`#${item.replace(/\s+/g, '').toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-extras">
          <button className="call-us-btn" onClick={() => { setShowCallForm(true); setShowSignInForm(false); }}>
            <FaPhone /> Call Us
          </button>
          <button className="account-btn" onClick={() => { setShowSignInForm(true); setShowCallForm(false); }}>
            <FaUser /> Sign In
          </button>
          {showCallForm && (
            <div className="call-form-overlay">
              <div className="call-form">
                <div className="call-form-header">
                  <h3>Request call back</h3>
                  <button className="close-btn" onClick={() => setShowCallForm(false)}>close</button>
                </div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  console.log('Call form submitted:', callFormData);
                  setShowCallForm(false);
                }}>
                  <label>
                    Phone Number
                    <input
                      type="text"
                      name="phone"
                      value={callFormData.phone}
                      onChange={(e) => setCallFormData({...callFormData, phone: e.target.value})}
                    />
                  </label>
                  <label>
                    Language
                    <select
                      name="language"
                      value={callFormData.language}
                      onChange={(e) => setCallFormData({...callFormData, language: e.target.value})}
                    >
                      <option value="Hindi">English</option>
                      <option value="Hindi">Hindi</option>
                          <option value="Hindi">Marathi</option>
                    </select>
                  </label>
                  <label>
                    
                    <textarea
                      name="message"
                      value={callFormData.message}
                      onChange={(e) => setCallFormData({...callFormData, message: e.target.value})}
                      placeholder="Tell us what you need help with"
                    />
                    <p>To have a Car Tech India representative call you,
                       please click below. We are operational between 9 AM - 9 PM"</p>
                  </label>
                  <button type="submit" className="submit-btn">Call Me</button>
                </form>
              </div>
            </div>
          )}
          {showSignInForm && (
            <div className="account-dropdown">
              <div className="auth-form">
                <div className="call-form-header">
                  <h3>Sign In</h3>
                  <button className="close-btn" onClick={() => setShowSignInForm(false)}>close</button>
                </div>
                <form onSubmit={handleSignInSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={signInFormData.email}
                    onChange={handleSignInChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signInFormData.password}
                    onChange={handleSignInChange}
                  />
                  <button type="submit" className="submit-btn">Sign In</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
