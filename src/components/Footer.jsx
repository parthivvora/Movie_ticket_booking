import React, { useState } from "react";
import "../styles/main.css";
import apiRoutes from "../constant/apiRoutes";
import { useSelector } from "react-redux";
import { errorHandler, successHandler } from "../global/responseHandler";
import { addSubscribe } from "../global/apiCall";

function Footer() {
  const { isAuthenticated } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");

  const handleSubmitSubscribe = async (e) => {
    e.preventDefault();
    isAuthenticated
      ? await addSubscribe({ email: email })
          .then((response) => {
            successHandler(response.data.message);
            setEmail("");
          })
          .catch((error) => {
            errorHandler(error.response.data.message);
          })
      : errorHandler("Please, Firstly login...!");
  };
  return (
    <footer className="footer-section">
      <div className="newslater-section padding-bottom">
        <div className="container">
          <div className="newslater-container bg_img">
            <div className="newslater-wrapper">
              <h5 className="cate">subscribe to Boleto </h5>
              <h3 className="title">to get exclusive benifits</h3>
              <form
                className="newslater-form"
                method="post"
                onSubmit={handleSubmitSubscribe}
              >
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">subscribe</button>
              </form>
              <p>We respect your privacy, so we never share your info</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-top">
          <div className="logo">
            <a href={apiRoutes.HOME}>
              <img
                src={require("../images/footer/footer-logo.png")}
                alt="footer"
              />
            </a>
          </div>
          <ul className="social-icons">
            <li>
              <a href="#0">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#0" className="active">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-pinterest-p" />
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-google" />
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-area">
            <div className="left">
              <p>
                Copyright © 2020.All Rights Reserved By <a href="#0">Boleto </a>
              </p>
            </div>
            <ul className="links">
              <li>
                <a href="#0">About</a>
              </li>
              <li>
                <a href="#0">Terms Of Use</a>
              </li>
              <li>
                <a href="#0">Privacy Policy</a>
              </li>
              <li>
                <a href={apiRoutes.APPDOWNLOAD}>App Download</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
