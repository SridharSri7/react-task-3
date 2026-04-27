import React from 'react'
import useFetchHook from './useFetchHook';

const Users = () => {

  const { users, loading, error } = useFetchHook("https://jsonplaceholder.typicode.com/users");

  if (loading) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  if (error) return <h1 style={{ textAlign: "center", color: "red" }}>{error}</h1>;

  const containerStyle = {
    padding: "30px",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    minHeight: "100vh",
    color: "#fff",
    textAlign: "center"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  };

  const cardStyle = {
    background: "#fff",
    color: "#333",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    textAlign: "left",
    transition: "0.3s",
    cursor: "pointer"
  };

  const titleStyle = {
    marginBottom: "10px",
    color: "#2c3e50"
  };

  return (
    <div style={containerStyle}>
      <h1 style={{color:"white"}}>User Details</h1>

      <div style={gridStyle}>
        {users.map((user) => (
          <div
            key={user.id}
            style={cardStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3 style={titleStyle}>{user.name}</h3>

            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company?.name}</p>
            <p><strong>Catch Phrase:</strong> {user.company?.catchPhrase}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users;