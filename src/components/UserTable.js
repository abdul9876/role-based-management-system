import React from "react";

function UserTable({ users, onToggleStatus, onDeleteUser, onEditUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Username</th>
          <th>Role</th>
          <th>Access Type</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.fullName}</td>
            <td>{user.username}</td>
            <td>{user.role}</td>
            <td>{user.accessType}</td>
            <td>
              <button
                className={`toggle-button ${user.status === "Active" ? "" : "inactive"}`}
                onClick={() => onToggleStatus(index)}
              >
                {user.status}
              </button>
            </td>
            <td>
              <button onClick={() => onEditUser(index)}>Edit</button>
              <button onClick={() => onDeleteUser(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
