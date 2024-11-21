import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const API_URL = "https://my.api.mockaroo.com/mockdata.json?key=62b28720";

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">User List</h2>
      <div className="table-wrapper">
        {users.length > 0 ? (
          <table className="user-list-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="table-row">
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        user.status === "Active" ? "active" : "inactive"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data-message">No users to display.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
