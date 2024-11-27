import React, { useState } from "react";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import "./App.css";

function App() {
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "password";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle login
  const handleLogin = (username, password) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid credentials! Please try again.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  // Add or update user
  const addUser = (user) => {
    const { fullName, username, role, accessType } = user;

    if (!fullName.trim() || !username.trim()) {
      alert("Full name and username cannot be empty.");
      return;
    }

    const existingUserIndex = users.findIndex((u) => u.username === username);
    if (existingUserIndex > -1) {
      const updatedUsers = [...users];
      updatedUsers[existingUserIndex] = {
        ...updatedUsers[existingUserIndex],
        fullName,
        role,
        accessType,
      };
      setUsers(updatedUsers);
      alert("User updated successfully.");
    } else {
      setUsers([...users, { fullName, username, role, accessType, status: "Active" }]);
      alert("User added successfully.");
    }
  };

  // Toggle user status
  const toggleStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = updatedUsers[index].status === "Active" ? "Inactive" : "Active";
    setUsers(updatedUsers);
  };

  // Delete user
  const deleteUser = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((_, i) => i !== index));
    }
  };
  

  return (
    <div>
      {!isLoggedIn ? (
        <Login errorMessage={errorMessage} onLogin={handleLogin} />
      ) : (
        <AdminPanel
          users={users}
          onAddUser={addUser}
          onToggleStatus={toggleStatus}
          onDeleteUser={deleteUser}
          onLogout={() => setIsLoggedIn(false)}
        />
      )}
    </div>
  );
}

export default App;
