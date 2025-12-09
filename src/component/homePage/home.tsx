import "./home.scss"
import { useState } from "react"

const Home = () => {
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  const handleSearch = () => {
    console.log({ destination, checkIn, checkOut })
  }

  const destinations = [
    { id: 1, name: "Paris", icon: "🗼", price: "$1,200" },
    { id: 2, name: "Tokyo", icon: "🗾", price: "$1,500" },
    { id: 3, name: "Dubai", icon: "🏙️", price: "$900" },
    { id: 4, name: "New York", icon: "🗽", price: "$1,100" },
  ]

  return (
    <>
      {/* Background */}
      <div className="hero-background"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            It's a Big World<br />
            <span className="gradient-text">Go Explore</span>
          </h1>
          <p className="hero-subtitle">
            Discover amazing destinations and create unforgettable memories with us
          </p>

          {/* Search Box */}
          <div className="search-box">
            <div className="search-input-group">
              <div className="input-wrapper">
                <label>Destination</label>
                <input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label>Check In</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label>Check Out</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <button className="btn-search" onClick={handleSearch}>
                🔍 Search
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations">
        <div className="container">
          <div className="section-header">
            <h2>Popular Destinations</h2>
            <p>Choose from our curated list of amazing travel spots</p>
          </div>

          <div className="destinations-grid">
            {destinations.map((dest) => (
              <div key={dest.id} className="destination-card">
                <div className="card-icon">{dest.icon}</div>
                <h3>{dest.name}</h3>
                <p className="card-price">{dest.price}</p>
                <button className="btn-explore">Explore →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Travigo?</h2>
            <p>Experience travel like never before</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✈️</div>
              <h3>Best Prices</h3>
              <p>Get the best deals on flights, hotels, and packages</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Booking</h3>
              <p>Your data is protected with bank-level security</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Expert Support</h3>
              <p>24/7 customer support to help you anytime</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Coverage</h3>
              <p>Access to destinations worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="dashboard-preview">
        <div className="container">
          <h2>Your Personal Travel Dashboard</h2>
          <div className="dashboard-image">
            <div className="placeholder">
              📱 Dashboard Image Preview
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
