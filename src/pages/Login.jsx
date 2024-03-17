import React from 'react'
import apiRoutes from '../constant/apiRoutes'

function Login() {
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
                            </div>
                            <form className="account-form">
                                <div className="form-group">
                                    <label htmlFor="email2">Email<span>*</span></label>
                                    <input type="email" placeholder="Enter Your Email" id="email1" name='email' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass3">Password<span>*</span></label>
                                    <input type="password" placeholder="Enter Your Password" id="pass1" name='password' />
                                </div>
                                <div className="form-group checkgroup">
                                    <input type="checkbox" id="bal2" required defaultChecked />
                                    <label htmlFor="bal2">remember password</label>
                                    <a href="#0" className="forget-pass">Forget Password</a>
                                </div>
                                <div className="form-group text-center">
                                    <button className='login-btn'>Login</button>
                                </div>
                            </form>
                            <div className="option">
                                Don't have an account? <a href={apiRoutes.REGISTER}>Register</a>
                            </div>
                            <div className="or"><span>Or</span></div>
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

    )
}

export default Login
