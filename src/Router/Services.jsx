import { Link, Outlet } from "react-router-dom";

const Services = () => {

  const containerStyle = {
    textAlign: "center",
    marginTop: "30px"
  };

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    padding: "10px 18px",
    borderRadius: "20px",
    fontWeight: "500",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#333" }}>Our Services</h2>

      <nav style={navStyle}>
        <Link
          to="webapp"
          style={linkStyle}
          onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          Web Development
        </Link>

        <Link
          to="app"
          style={linkStyle}
          onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          App Development
        </Link>

        <Link
          to="uiux"
          style={linkStyle}
          onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          UI/UX Design
        </Link>
      </nav>

      <div style={{ marginTop: "30px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Services;