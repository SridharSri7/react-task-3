import React, { useEffect, useState } from "react";

const CrudApp = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);


  const containerStyle = {
  maxWidth: "700px",
  margin: "40px auto",
  padding: "20px",
  background: "#f4f6f8",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  textAlign: "center"
};

const formStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
  justifyContent: "center"
};

const inputStyle = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "8px 15px",
  border: "none",
  background: "#3498db",
  color: "#fff",
  borderRadius: "6px",
  cursor: "pointer"
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse"
};

const editBtn = {
  marginRight: "5px",
  padding: "5px 10px",
  background: "#2ecc71",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const deleteBtn = {
  padding: "5px 10px",
  background: "#e74c3c",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};


  // 🔹 GET (Fetch users)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data)); // limit for UI
  }, []);

  // 🔹 ADD / UPDATE
  const handleSubmit = () => {
    if (!name || !email) return;

    if (editId) {
      // UPDATE
      const updatedUsers = users.map((user) =>
        user.id === editId ? { ...user, name, email } : user
      );
      setUsers(updatedUsers);
      setEditId(null);
    } else {
      // CREATE
      const newUser = {
        id: users.length + 1, // Simple ID generation
        name,
        email
      };
      setUsers([...users, newUser]);
    }

    setName("");
    setEmail("");
  };

  // 🔹 DELETE
  const handleDelete = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };

  // 🔹 EDIT
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  return (
    <div style={containerStyle}>
      <h2>CRUD App</h2>

      {/* Form */}
      <div style={formStyle}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleSubmit} style={buttonStyle}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* Table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => handleEdit(user)}
                  style={editBtn}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(user.id)}
                  style={deleteBtn}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp;