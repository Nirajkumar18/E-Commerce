import React, { useState } from "react";
import "../../index.css";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // Form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommerce App">
      <div>
        <link rel="stylesheet" />
        <div className="login">
          <div className="loginContainer">
            {/* <div className="loginBorder"> */}
            <div className="loginContent">
              <div className="welcome">
                <h1>
                  Create <span> Account</span>
                </h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="formContent">
                  <label htmlFor="username">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="username"
                    placeholder="Enter Name"
                    required
                  />
                </div>
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
                <div className="formContent">
                  <label htmlFor="phone">Contact No.</label>
                  <input
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                    placeholder="Enter Contact No."
                    required
                  />
                </div>
                <div className="formContent">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                    placeholder="Enter Address"
                    required
                  />
                </div>
                <div className="formContent">
                  <label htmlFor="answer">Answer</label>
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    id="exampleInputEmail1"
                    placeholder="What is Your Favorite sports"
                    required
                  />
                </div>
                <div className="login-btn">
                  <button type="submit" value="Sign IN">
                    Create Account
                  </button>
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

export default Register;
