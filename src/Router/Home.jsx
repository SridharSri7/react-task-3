import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    padding: "15px 25px",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    borderRadius: "12px",
    margin: "20px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
  }

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "500",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "0.3s"
  }

  return (
    <div>

      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
      </nav>

      <h2 style={{ textAlign: "center" }}>
        Welcome to the Home Page
      </h2>

    </div>
  )
}

export default Home