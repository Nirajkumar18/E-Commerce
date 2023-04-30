import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";
import Dashboard from "./../../pages/user/Dashboard";
import { useAuth } from "../../context/auth";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const [auth, setAuth] = useAuth();
  return (
    // <div className="footer">
    <>
      <div className="footer">
        <div className="footerContent">
          <h3>Quick Links</h3>
          <a className="links" href="/">
            Home
          </a>
          <a className="links" href="/about">
            About
          </a>
          <a className="links" href="/contact">
            Contact
          </a>
          <a className="links" href="/categories">
            Categories
          </a>
          <NavLink
            to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
            className="dropdown-item"
          >
            Dashboard
          </NavLink>
          <a className="links" href="/cart">
            Cart
          </a>
          <a className="links" href="/register">
            Register
          </a>
        </div>

        <div className="footerContent">
          <h3>Categories</h3>
          <a className="links" href="/categories">
            Categories
          </a>
          <a className="links" href="/category/mens-fashion">
            Mens Fashion
          </a>
          <a className="links" href="/category/men's-watch">
            Men's Watch
          </a>
          <a className="links" href="/category/women-fashion">
            Women's Fashion
          </a>
          <a className="links" href="/category/accessories">
            Accessories
          </a>
        </div>

        <div className="footerContent">
          <h3>Contact Us</h3>
          <p>
            {" "}
            <i className="fas fa-phone"></i> +91 8397867595{" "}
          </p>
          <p>
            {" "}
            <i className="fas fa-phone"></i> +111-222-3333{" "}
          </p>
          <p>
            {" "}
            <i className="fas fa-envelope"></i> 0818ansh.ag@gmail.com{" "}
          </p>
          <p>
            {" "}
            <i className="fas fa-map"></i> Sirsa, India - 125055{" "}
          </p>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-pinterest"></a>
          </div>
        </div>

        <div className="footerContent">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input
              type="email"
              name=""
              className="email"
              placeholder="enter your email"
              id=""
            />
            <button className="footerBtn">Subscribe</button>
          </form>
        </div>
        <div className="credit">
          Created by <span> Mr. Ansh Goyal </span> | all rights reserved!
        </div>
      </div>
    </>
  );
};

export default Footer;
