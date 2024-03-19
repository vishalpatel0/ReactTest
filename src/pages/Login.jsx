import React from "react";
import { useState } from "react";

const Login = () => {
  const [myform, setMyform] = useState({ email: "", password: "" });

  function Login(e) {
    e.preventDefault();
    console.log(myform);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>

          <div className="col-6 card shadow mt-4 p-4">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={Login}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  value={myform.email}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setMyform({ ...myform, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  value={myform.password}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setMyform({ ...myform, password: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
