import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import "./userForm.css";

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const API_URL = "https://my.api.mockaroo.com/mock.json?key=0f927f70";

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Add or Edit user
  const handleSaveUser = (e) => {
    e.preventDefault();
    const userExists = users.some((u) => u.email === currentUser.email);

    if (userExists) {
      // Edit user
      const updatedUsers = users.map((u) =>
        u.email === currentUser.email ? currentUser : u
      );
      setUsers(updatedUsers);
      alert("User updated successfully.");
    } else {
      // Add new user
      const newUser = { id: users.length + 1, ...currentUser };
      setUsers([...users, newUser]);
      alert("User added successfully.");
    }

    setShowForm(false);
    setCurrentUser(null);
  };

  // Delete user
  const handleDeleteUser = (email) => {
    const updatedUsers = users.filter((u) => u.email !== email);
    setUsers(updatedUsers);
    alert("User deleted successfully.");
  };

  // Open form for adding a new user
  const handleAddClick = () => {
    setCurrentUser({ name: "", email: "", role: "", status: "Active" });
    setShowForm(true);
  };

  // Open form for editing an existing user
  const handleEditClick = (user) => {
    setCurrentUser(user);
    setShowForm(true);
  };

  // Reset form
  const resetForm = () => {
    setCurrentUser(null);
    setShowForm(false);
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-form-container">
     
      <div className="user-actions">
        <button onClick={handleAddClick} className="add-btn">
          <FaUserPlus /> Add User
        </button>
      </div>

      <div className="user-list">
        <h3>Existing Users</h3>
        {users.length > 0 ? (
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                  <span
                
                      className={`status-badge ${
                        user.status === "Active" ? "active" : "inactive"
                      }`}
                    >{user.status}</span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleEditClick(user)}
                      className="edit-btn"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.email)}
                      className="delete-btn"
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users available.</p>
        )}
      </div>

      {/* Form for Add/Edit */}
      {showForm && (
        <div className="form-popup">
          <h3>{currentUser.id ? "Edit User" : "Add User"}</h3>
          <form onSubmit={handleSaveUser}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={currentUser.name}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, name: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={currentUser.email}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, email: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select
                value={currentUser.role}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, role: e.target.value })
                }
                required
              >
                <option value="" disabled>
                  Select role
                </option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                value={currentUser.status}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, status: e.target.value })
                }
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn">
                Save
              </button>
              <button type="button" onClick={resetForm} className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserForm;
