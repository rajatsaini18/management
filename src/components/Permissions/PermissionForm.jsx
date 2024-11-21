import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import './permissionForm.css'

const PermissionForm = () => {
  const [permission, setPermission] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Permission Submitted: ", permission);
    setPermission("");
  };

  return (
    <form onSubmit={handleSubmit} className="permission-form">
      <h2>Add Permission</h2>

      <div className="form-group">
        <label>Permission Name:</label>
        <input
          type="text"
          value={permission}
          onChange={(e) => setPermission(e.target.value)}
          required
          className="input-field"
        />
      </div>

      <button type="submit" className="submit-btn">
        <FaPlusCircle /> Add Permission
      </button>
    </form>
  );
};

export default PermissionForm;
