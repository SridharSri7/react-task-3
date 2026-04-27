import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  const containerStyle = {
    minHeight: "100vh",
    width: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #141e30, #243b55)"
  };

  const cardStyle = {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    textAlign: "center"
  };

  const titleStyle = {
    marginBottom: "15px",
    color: "#2c3e50"
  };

  const infoStyle = {
    textAlign: "left",
    marginBottom: "8px",
    fontSize: "14px"
  };

  const sectionTitle = {
    marginTop: "15px",
    color: "#555"
  };

  const buttonStyle = {
    marginBottom: "15px",
    padding: "8px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#3498db",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s"
  };

  return (
    <div style={containerStyle}>

      <div style={cardStyle}>

        {/* <button
          onClick={() => navigate(-1)}
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.background = "#2980b9"}
          onMouseLeave={(e) => e.target.style.background = "#3498db"}
        >
          ⬅ Back
        </button> */}

        <h2 style={titleStyle}>User Details</h2>

        <p style={infoStyle}><strong>Name:</strong> {user.name}</p>
        <p style={infoStyle}><strong>Email:</strong> {user.email}</p>
        <p style={infoStyle}><strong>Phone:</strong> {user.phone}</p>
        <p style={infoStyle}><strong>Website:</strong> {user.website}</p>

        <p style={infoStyle}><strong>Company:</strong> {user.company?.name}</p>

        <h3 style={sectionTitle}>Address</h3>
        <p style={infoStyle}>{user.address?.street}</p>
        <p style={infoStyle}>{user.address?.city}</p>
        <p style={infoStyle}>{user.address?.zipcode}</p>

      </div>

    </div>
  );
};

export default UserDetails;