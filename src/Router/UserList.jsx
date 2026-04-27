import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    minHeight: "100vh",
    width:"700px",
    color: "white"
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  }

  const cardStyle = {
    background: "#fff",
    color: "#333",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: "0.3s",
    cursor: "pointer"
  }

  const linkStyle = {
    textDecoration: "none",
    color: "#2c3e50",
    fontWeight: "bold",
    fontSize: "16px"
  }

  return (
    <div style={containerStyle}>
      <h1>User List</h1>

      <div style={gridStyle}>
        {users.map((person) => (
          <div
            key={person.id}
            style={cardStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <Link to={`/users/${person.id}`} style={linkStyle}>
              {person.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList