import "./navbar.scss"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-section">
          <div className="logo">
            <span className="logo-text">✈️ Travigo</span>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Destinations</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li className="price-filter">
              <select name="price" id="price-select">
                <option value="" hidden>Budget</option>
                <option value="budget">Budget ($)</option>
                <option value="moderate">Moderate ($$)</option>
                <option value="luxury">Luxury ($$$)</option>
              </select>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="btn-login">Log In</button>
            <button className="btn-register">Register</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
