import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function submit() {
    localStorage.setItem("user", JSON.stringify(false));
    navigate("/");
  }
  return (
    <header className="headercontainer">
      <h2>Logo</h2>
      <nav className="navbar">
        <div className="nav">
          <ul>
            <li>
              <Link className="btn btn4" onClick={submit}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
