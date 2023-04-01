import React, { useState } from "react";
import "../../index.css";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Login - Ecommerce App">
      <div>
        <link rel="stylesheet" />
        <div className="login">
          <div className="loginContainer">
            {/* <div className="loginBorder"> */}
            <div className="loginContent">
              <div className="welcome">
                <h1>
                  Welcome <span> Back</span>
                </h1>
                <p>Please login to see your account</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="formContent">
                  <label htmlFor="useremail">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="useremail"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="formContent">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassowrd(e.target.value)}
                    id="password"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="button"
                    className="btn forgot-btn"
                    onClick={() => {
                      navigate("/forgot-password");
                    }}
                  >
                    Forgot Password
                  </button>
                </div>

                <div className="login-btn">
                  <button type="submit" value="Sign IN">
                    Login
                  </button>
                </div>
                <div className="sign-in">
                  <a
                    type="submit"
                    value="Create Account"
                    href="index.html#joining"
                  >
                    Sign-in
                  </a>
                </div>
              </form>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <script src="JS/gym2.js"></script>
    </Layout>
  );
};

export default Login;
