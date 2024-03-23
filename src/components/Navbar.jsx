import React from 'react'
import apiRoutes from '../constant/apiRoutes'

function Navbar() {
    const { pathname } = window.location
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
                                <a href={apiRoutes.HOME} className={`${pathname == apiRoutes.HOME ? 'active' : ''}`}>Home</a>
                            </li>
                            <li>
                                <a href={apiRoutes.MOVIE} className={`${pathname == apiRoutes.MOVIE || pathname == apiRoutes.MOVIEDETAILS ? 'active' : ''}`}>movies</a>
                            </li>
                            <li>
                                <a href={apiRoutes.EVENT} className={`${pathname == apiRoutes.EVENT ? 'active' : ''}`}>events</a>
                            </li>
                            <li>
                                <a href={apiRoutes.BLOG} className={`${pathname == apiRoutes.BLOG ? 'active' : ''}`}>blog</a>
                            </li>
                            <li>
                                <a href={apiRoutes.ABOUT} className={`${pathname == apiRoutes.ABOUT ? 'active' : ''}`}>about</a>
                            </li>
                            <li>
                                <a href={apiRoutes.CONTACT} className={`${pathname == apiRoutes.CONTACT ? 'active' : ''}`}>contact</a>
                            </li>
                            <li className="header-button pr-0">
                                <a href={apiRoutes.LOGIN}>join us</a>
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
