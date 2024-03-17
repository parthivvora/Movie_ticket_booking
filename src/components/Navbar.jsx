import React from 'react'

function Navbar() {
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
            <div className="overlay" />
            <a href="#0" className="scrollToTop">
                <i className="fas fa-angle-up" />
            </a>
            <header className="header-section">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <a href="index.html">
                                <img src={require("../images/logo/logo.png")} alt="logo" />
                            </a>
                        </div>
                        <ul className="menu">
                            <li>
                                <a href="/" className="active">Home</a>
                            </li>
                            <li>
                                <a href="/">movies</a>
                            </li>
                            <li>
                                <a href="/">events</a>
                            </li>
                            <li>
                                <a href="/">sports</a>
                            </li>
                            <li>
                                <a href="/">blog</a>
                            </li>
                            <li>
                                <a href="/">about</a>
                            </li>
                            <li>
                                <a href="contact.html">contact</a>
                            </li>
                            <li className="header-button pr-0">
                                <a href="sign-up.html">join us</a>
                            </li>
                        </ul>
                        <div className="header-bar d-lg-none">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
