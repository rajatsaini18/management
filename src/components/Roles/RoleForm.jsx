import React, { useState } from "react";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import './roleForm.css'

const RoleForm = () => {
  const [role, setRole] = useState({ name: "", permissions: [] });

  // Default roles and permissions
  const defaultPermissions = {
    ADMIN: ["READ", "WRITE", "DELETE"],
    EDITOR: ["READ", "WRITE"],
    VIEWER: ["READ"],
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setRole((prevRole) => ({ ...prevRole, [name]: value }));
  };

  
  const handleRoleChange = (e) => {
    const roleName = e.target.value;
    setRole({ name: roleName, permissions: defaultPermissions[roleName] || [] });
  };

  
  const addPermission = (permission) => {
    if (!role.permissions.includes(permission)) {
      setRole((prevRole) => ({
        ...prevRole,
        permissions: [...prevRole.permissions, permission],
      }));
    }
  };


  const removePermission = (permission) => {
    setRole((prevRole) => ({
      ...prevRole,
      permissions: prevRole.permissions.filter((perm) => perm !== permission),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Role Data Submitted: ", role);
    setRole({ name: "", permissions: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="role-form">
      <h2>Add/Edit Role</h2>

      <div className="form-group">
        <label>Role Name:</label>
        <select name="name" value={role.name} onChange={handleRoleChange} required>
          <option value="">Select Role</option>
          <option value="ADMIN">ADMIN</option>
          <option value="EDITOR">EDITOR</option>
          <option value="VIEWER">VIEWER</option>
        </select>
      </div>

      <div className="permissions-table">
        <h3>Manage Permissions</h3>
        <table>
          <thead>
            <tr>
              <th>Permission</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {role.permissions.map((perm) => (
              <tr key={perm}>
                <td>{perm}</td>
                <td>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removePermission(perm)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        <div className="permission-buttons">
          {["READ", "WRITE", "DELETE"].map((perm) => (
            <button
              key={perm}
              type="button"
              className="add-btn"
              onClick={() => addPermission(perm)}
            >
              Add {perm}
            </button>
          ))}
        </div>
      </div>


      {role.permissions.length > 0 && (
        <div className="current-permissions">
          <h3>Current Permissions for {role.name}</h3>
          <div className="permissions-list">
            {role.permissions.map((perm) => (
              <div className="permission-item" key={perm}>
                <FaCheckCircle className="icon" />
                <span>{perm}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default RoleForm;
