import React, { useEffect, useState } from "react";
import apiRoutes from "../constant/apiRoutes";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorMsg,
  clearSuccessMsg,
  loginUser,
} from "../redux/features/userSlice";

function Login() {
  const dispatch = useDispatch();
  const { isLoading, errorMessage, successMessage } = useSelector(
    (state) => state.user
  );

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleGetUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        window.location.href = apiRoutes.HOME;
      }
    });
  };

  useEffect(() => {
    return () => {
      dispatch(clearSuccessMsg());
      dispatch(clearErrorMsg());
    };
  }, [dispatch]);
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
      <section className="account-section bg_img">
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <span className="cate">hello</span>
                <h2 className="title">welcome back</h2>
                {successMessage && <div>{successMessage}</div>}
                {errorMessage && <div>{errorMessage}</div>}
              </div>
              <form
                className="account-form"
                method="post"
                onSubmit={handleSubmitRegister}
              >
                <div className="form-group">
                  <label htmlFor="email2">
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
                  <label htmlFor="pass3">
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
                <div className="form-group checkgroup">
                  <input type="checkbox" id="bal2" required defaultChecked />
                  <label htmlFor="bal2">remember password</label>
                  <a href="#0" className="forget-pass">
                    Forget Password
                  </a>
                </div>
                <div className="form-group text-center">
                  <button className="login-btn" disabled={isLoading}>
                    {" "}
                    {isLoading ? `Loading...` : `Login`}
                  </button>
                </div>
              </form>
              <div className="option">
                Don't have an account? <a href={apiRoutes.REGISTER}>Register</a>
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

export default Login;
