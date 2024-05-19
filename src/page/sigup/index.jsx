import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Signup() {
  const navigate = useNavigate();
  const [userinput, setuserinput] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const hendlesubmit = async (e) => {
    e.preventDefault();
    console.log(userinput);
    try {
      const req = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          Access: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userinput }),
      });
      const res = await req.json();
      console.log(req);
      console.log(res);
      const data = JSON.parse(localStorage.getItem("users")) ?? [];
      localStorage.setItem("users", JSON.stringify([...data, res]));
      localStorage.setItem("user", JSON.stringify(res));
    } catch {}

    navigate("/layout");
    setuserinput({
      name: "",
      email: "",
      pasword: "",
      avatar: "",
    });
  };
  return (
    <>
      <div className="container ou1">
        <form className="inout" onSubmit={hendlesubmit}>
          <div className="div orab">
            <h2 className="sar">Signup</h2>
          </div>
          <div className="orab">
            <TextField
              onChange={(e) =>
                setuserinput((prev) => ({ ...prev, name: e.target.value }))
              }
              value={userinput.name}
              className="input"
              type="text"
              required
              id="outlined-basic"
              label="User name"
              variant="filled"
            />

            <TextField
              onChange={(e) =>
                setuserinput((prev) => ({ ...prev, email: e.target.value }))
              }
              value={userinput.email}
              className="input"
              type="email"
              required
              id="outlined-basic"
              label="Email"
              variant="filled"
            />

            <TextField
              onChange={(e) =>
                setuserinput((prev) => ({ ...prev, password: e.target.value }))
              }
              value={userinput.password}
              className="input"
              type="password"
              required
              id="outlined-basic"
              label="Password"
              variant="filled"
            />

            <TextField
              onChange={(e) =>
                setuserinput((prev) => ({
                  ...prev,
                  avatar: e.target.value,
                }))
              }
              value={userinput.avatar}
              className="input"
              type="url"
              required
              id="outlined-basic"
              label="Avatar"
              variant="filled"
            />
          </div>
          <div className="div1">
            <button className="btn" type="submit">
              Sign up now
            </button>
            <Link to={"/"} className="btn btn4" type="submit">
              Enter to Log in
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

export default Signup;
