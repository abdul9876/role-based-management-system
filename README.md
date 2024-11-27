# Role Based Access Control App
This is a React-based application where users can be added, assigned roles, and access types. The users can also be updated or deleted from the system. The application is designed to demonstrate user management with basic functionalities like adding, editing, and deleting users.
## Features
- **Add Users**: Add users by filling out a form with details such as full name, username, role, and access type.
- **Edit Users**: Update user information by clicking the "Edit" button next to each user.
- **Delete Users**: Remove users from the list by clicking the "Delete" button.
- **Role and Access Control**: Users can be assigned different roles (Viewer, Editor, Admin) and access types (Read-Only, Read-Write, Full Access).
- **User Status**: Toggle between "Active" and "Inactive" status for each user.


## Tech Stack
- **React**: In this project, React is used to create dynamic views and handle the user interaction with the application, such as adding, editing, and deleting users.
- **CSS**: In this project, basic CSS is used for layout, positioning, and styling of form elements, buttons, and tables.
-**JavaScript (ES6+)**:This includes handling user input, updating the state, toggling user status, and managing the overall flow of the app.
Modern JavaScript (ES6 and above) features like arrow functions, destructuring, and template literals are used throughout the code for cleaner and more concise logic.
-**HTML (via JSX)**:  is the structure and skeleton of the app, which is rendered dynamically using React.

## Installation

To run the application locally, follow the steps below:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/abdul9876/role-based-management-system.git
   
OR Download the ZIP file of the code and unzip it in the local system

2. **Navigate to the Project Directory**:
cd role_based_management_system

3. **Install Denpendencies**
npm install

4. **Start the application**
npm start
## Usage
This project has a login page as where username:- admin and password:- password

## File structure

1. **`public/`**:
   - **`index.html`**: This is the HTML file where the root `<div id="root">` is located. This is where the entire React application is rendered.
2. **`src/`**:
   - **`components/`**: Contains all the React components used in the project.
     - **`Login.js`**: Handles the login functionality for the admin panel. It accepts the username and password and authenticates the user.
     - **`AdminPanel.js`**: The core component that allows the admin to manage users, including adding, editing, deleting, and toggling user statuses.
     - **`UserTable.js`**: Displays the list of users in a table format, with options to edit or delete users and toggle their active/inactive status.
   - **`App.js`**: The main React component that manages the application state and renders different components based on whether the user is logged in or not.
   - **`App.css`**: Contains the styling for the main App component.

3. **`package.json`**:
   - Contains the metadata for the project, including project name, version, dependencies (such as React), scripts, and other configurations.
   - This file is also used for managing project dependencies (such as React, ReactDOM, and other libraries).

4. **`package-lock.json`**:
   - Ensures consistent dependency versions are installed across different environments. This file locks down the exact versions of the dependencies.

5. **`README.md`**:
   - This file, which provides important information about the project, including the purpose of the app, the technologies used, and how to run the application.






