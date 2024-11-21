import React from "react";

import UserForm from "../components/Users/UserForm";
import "./userManagement.css";

const UserManagement = () => (
  <div className="user-management-container">
    <header className="user-management-header">
      <h1>User Management</h1>
      <p>Manage all users from this centralized platform.</p>
    </header>


      <div className="user-form-container">
    
        <UserForm />
    

    
    </div>
  </div>
);

export default UserManagement;
