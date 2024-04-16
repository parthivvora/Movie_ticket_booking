import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import apiRoutes from "../constant/apiRoutes";
import { registerUser } from "../redux/features/userSlice";

function Register() {
  const dispatch = useDispatch();
  const { isLoading, errorMessage, successMessage } = useSelector(
    (state) => state.user
  );

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

  const handleGetUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        window.location.href = apiRoutes.LOGIN;
      }
    });
  };

  return (
    <div>
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span />
            <span />
          </div>
        </div>
      </div>
      <section
        className="account-section bg_img"
        data-background="assets/images/account/account-bg.jpg"
      >
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <span className="cate">welcome</span>
                <h2 className="title">to Boleto </h2>
                {successMessage && <div>{successMessage}</div>}
                {errorMessage && <div>{errorMessage}</div>}
              </div>
              <form
                className="account-form"
                method="post"
                onSubmit={handleSubmitRegister}
              >
                <div className="form-group">
                  <label htmlFor="email1">
                    Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="name1"
                    name="name"
                    onChange={handleGetUserData}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email1">
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    id="email1"
                    name="email"
                    onChange={handleGetUserData}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass1">
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    id="pass1"
                    name="password"
                    onChange={handleGetUserData}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass2">
                    Contact<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Contact"
                    id="pass2"
                    name="contact"
                    onChange={handleGetUserData}
                  />
                </div>
                <div className="form-group checkgroup">
                  <input type="checkbox" id="bal" required defaultChecked />
                  <label htmlFor="bal">
                    I agree to the <a href="#0">Terms, Privacy Policy</a> and{" "}
                    <a href="#0">Fees</a>
                  </label>
                </div>
                <div className="form-group text-center">
                  <button
                    className="login-btn"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? `Loading...` : `Register`}
                  </button>
                </div>
              </form>
              <div className="option">
                Already have an account? <a href={apiRoutes.LOGIN}>Login</a>
              </div>
              <div className="or">
                <span>Or</span>
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
                    <i className="fab fa-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
