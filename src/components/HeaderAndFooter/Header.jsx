import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <h1 className="header-title">DashBoard</h1>
        <nav className="header-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/permissions">Permissions</a></li>
            <li><a href="/roles">Roles</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
