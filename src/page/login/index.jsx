import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [userName, setname] = useState("");
  const [pasword, setpasword] = useState("");
  const naviate = useNavigate();
  const hendlesubmit = (e) => {
    e.preventDefault();
    console.log(userName);

    let inpuy = userName;
    let pasWord = pasword;

    const data = JSON.parse(localStorage.getItem("users")) ?? [];
    const userf = data.filter(({ email, pasword }) => {
      console.log(email == inpuy && pasword == pasWord);
      return email == inpuy && pasword === pasWord;
    });
    console.log(userf);
    if (userf.length) {
      localStorage.setItem("user", JSON.stringify(true));
      naviate("/layout");
    } else {
      localStorage.setItem("user", JSON.stringify(false));
    }
  };
  return (
    <>
      <div className="container ou">
        <form className="inout" onSubmit={hendlesubmit}>
          <div className="div orab">
            <h2 className="sar">Login</h2>
          </div>
          <div className="orab">
            <TextField
              className="input"
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={userName}
              type="text"
              required
              id="outlined-basic"
              label="Email"
              variant="filled"
            />

            <TextField
              className="input"
              onChange={(e) => {
                setpasword(e.target.value);
              }}
              value={pasword}
              type="password"
              required
              id="outlined-basic"
              label="Password"
              variant="filled"
            />
          </div>
          <div className="div1">
            <button className="btn" type="submit">
              Log in now
            </button>
            <Link to={"/signup"} className="btn btn4" type="submit">
              Enter to sign up
            </Link>
          </div>
        </form>
        {/* <div className="orab orab7">
          <>Don’t have an account yet? Register for free</>
        </div> */}
      </div>
    </>
  );
}

export default Login;
