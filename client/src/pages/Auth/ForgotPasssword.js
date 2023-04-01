import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../index.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

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
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <div>
        <link rel="stylesheet" />
        <div className="login">
          <div className="loginContainer">
            {/* <div className="loginBorder"> */}
            <div className="loginContent">
              <div className="welcome">
                <h1>
                  Reset <span> Password</span>
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
                <div className="formContent">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    id="password"
                    placeholder="Enter Your New Password"
                    required
                  />
                </div>

                <div className="login-btn">
                  <button type="submit" value="Sign IN">
                    Reset
                  </button>
                </div>
              </form>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;
