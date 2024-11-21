import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">RBAC Dashboard</h1>
        <p className="dashboard-subtitle">
          Manage users, roles, and permissions efficiently.
        </p>
      </header>

      {/* Add Image Here */}
      <div className="dashboard-image">
        <img src="src/Image/Image.jpg" alt="Dashboard Overview" />
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card" onClick={() => navigate("/users")}>
          <h3>Users</h3>
          <p>View and manage all registered users.</p>
          <button className="dashboard-button">Manage Users</button>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/roles")}>
          <h3>Roles</h3>
          <p>Define and manage roles with specific permissions.</p>
          <button className="dashboard-button">Manage Roles</button>
        </div>

        <div className="dashboard-card" onClick={() => navigate("/permissions")}>
          <h3>Permissions</h3>
          <p>Assign or edit permissions for roles.</p>
          <button className="dashboard-button">Manage Permissions</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
