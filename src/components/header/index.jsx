import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function submit() {
    localStorage.setItem("user", JSON.stringify(false));
    navigate("/");
  }
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);
  const data2 = Array(data);
  console.log(data2);
  return (
    <header className="headercontainer">
      <h2>Logo</h2>
      <nav className="navbar">
        <div className="nav">
          <ul className="ol">
            <li>
              {data2.map(({ name }) => {
                return <p>Hello {name}</p>;
              })}
            </li>
            <li>
              {data2.map(({ avatar }) => {
                return (
                  <Link to="/layout/myprofil" className="btn bty">
                    My profile{" "}
                    <img
                      style={{ width: "30px", borderRadius: "50%" }}
                      src={avatar}
                      alt="avatar"
                    />
                  </Link>
                );
              })}
            </li>
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
