import React, { useState } from "react";
import UserTable from "./UserTable";

function AdminPanel({ users, onAddUser, onToggleStatus, onDeleteUser, onLogout }) {
  const [formInputs, setFormInputs] = useState({
    fullName: "",
    username: "",
    role: "select--one",
    accessType: "select--one",
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    onAddUser(formInputs);
    setFormInputs({ fullName: "", username: "", role: "Viewer", accessType: "select--one" });
    setEditingIndex(null);
  };

  const handleEditUser = (index) => {
    const userToEdit = users[index];
    if (!userToEdit) {
      console.error("Invalid user index:", index);
      return;
    }
    setFormInputs(userToEdit); // Pre-fill the form
    setEditingIndex(index); // Track the index for updates
  };

  return (
    <div className="admin-container">
      <h2>Role-Based Management System</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Enter full name"
        value={formInputs.fullName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={formInputs.username}
        onChange={handleInputChange}
      />
      <select name="role" value={formInputs.role} onChange={handleInputChange}>
        <option value="select--one">select--one</option>
        <option value="Viewer">Viewer</option>
        <option value="Editor">Editor</option>
        <option value="Admin">Admin</option>
      </select>
      <select name="accessType" value={formInputs.accessType} onChange={handleInputChange}>
        <option value="select--one">select--one</option>
        <option value="Read-Only">Read-Only</option>
        <option value="Read-Write">Read-Write</option>
        <option value="Full Access">Full Access</option>
      </select>
      <button onClick={handleAddUser}>{editingIndex !== null ? "Update User" : "Add User"}</button>

      <UserTable
        users={users}
        onToggleStatus={onToggleStatus}
        onDeleteUser={onDeleteUser}
        onEditUser={handleEditUser}
      />

      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default AdminPanel;
