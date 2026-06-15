import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          Dormly<span style={{ color: "#2563eb" }}>PH</span>
        </div>

        {/* Links */}
        <ul className={open ? "nav-links active" : "nav-links"}>
          <li><a href="/">Home</a></li>
          <li><a href="/dorms">Dorms</a></li>
          <li><a href="/rankings">Rankings</a></li>
          <li><a href="/about">About</a></li>
        </ul>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <a className="login" href="/login">Log in</a>
          <a className="signup" href="/register">Join Dormly</a>
        </div>

        {/* Mobile menu */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>
    </nav>
  );
}

export default Navbar;