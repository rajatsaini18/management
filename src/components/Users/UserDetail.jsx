import React from "react";

const UserDetail = ({ user }) => {
  if (!user) {
    return <p>Select a user to view details.</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Status:</strong> {user.status}</p>
    </div>
  );
};

export default UserDetail;
