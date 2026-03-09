import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

export default function Navbar() {

  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  return (
    <nav className="navbar">

      <div className="logo">MICROSOFT CLUB</div>

      <div className="nav-links">

        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/join">Contact</NavLink>

        <div className="theme-toggle">
          <span>☀</span>

          <label className="switch">
            <input
              type="checkbox"
              onChange={() => setDark(!dark)}
            />
            <span className="slider"></span>
          </label>

          <span>🌙</span>
        </div>

      </div>

    </nav>
  );
}