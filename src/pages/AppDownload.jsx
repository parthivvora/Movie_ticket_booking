import React from 'react'
import apiRoutes from '../constant/apiRoutes'
import "../styles/main.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AppDownload() {
    return (
        <div className='app-dowload-part'>
            <Navbar />
            <section className="speaker-banner bg_img">
                <div className="container">
                    <div className="speaker-banner-content">
                        <h2 className="title">App Download</h2>
                        <ul className="breadcrumb">
                            <li>
                                <a href={apiRoutes.HOME}>
                                    Home
                                </a>
                            </li>
                            <li>
                                App Download
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="apps-seciton padding-top pt-lg-0">
                <div className="container">
                    <div className="apps-wrapper bg-six padding-top padding-bottom">
                        <div className="bg_img apps-bg" />
                        <div className="section-header-3">
                            <span className="cate">get Boleto app</span>
                            <h2 className="title">app download</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 offset-lg-5">
                                <div className="content">
                                    <h5 className="title">MAKE LIFE EASIER</h5>
                                    <p>
                                        As the largest mobile platform in the country, we have the right
                                        services, the know-how and the expertise to make your buying
                                        transition to mobile simple, easy and painless.
                                    </p>
                                    <ul className="app-button">
                                        <li>
                                            <a href="#0">
                                                <img src={require("../images/apps/apps03.png")} alt="apps" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <img src={require("../images/apps/apps02.png")} alt="apps" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="counter--area">
                                    <div className="counter-item">
                                        <div className="d-flex justify-content-center align-items-center mb-10">
                                            <h4 className="odometer title" data-odometer-final={50} />
                                            <h4 className="title">M+</h4>
                                        </div>
                                        <p className="info">apps downloads</p>
                                    </div>
                                    <div className="counter-item">
                                        <div className="d-flex justify-content-center align-items-center mb-10">
                                            <h4 className="odometer title" data-odometer-final={15} />
                                            <h4 className="title">M+</h4>
                                        </div>
                                        <p className="info">tickets a month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-section padding-bottom padding-top">
                <div className="container">
                    <div className="section-header-3">
                        <span className="cate">POWERFUL and FLEXIBLE</span>
                        <h2 className="title">robust feature</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras neque est, aliquam eu
                            dignissim eget, eleifend at nunc. Curabitur non dapibus nulla.
                        </p>
                    </div>
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-sm-6 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-thumb">
                                    {/* <img src={require("./../images/feature/icon01.png")} alt="feature"> */}
                                    <i className="fas fa-ship" />
                                </div>
                                <div className="feature-content">
                                    <h5 className="title">Brand New</h5>
                                    <p>Brand New User Interface with Latest Technology</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="feature-item active">
                                <div className="feature-thumb">
                                    {/* <img src={require("./../images/feature/icon02.png")} alt="feature"> */}
                                    <i className="fas fa-store-alt" />
                                </div>
                                <div className="feature-content">
                                    <h5 className="title">seat map</h5>
                                    <p>New Seat Map Feature for Ease of Ticket Booking</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-thumb">
                                    {/* <img src={require("./../images/feature/icon03.png")} alt="feature"> */}
                                    <i className="fab fa-java" />
                                </div>
                                <div className="feature-content">
                                    <h5 className="title">F&amp;B</h5>
                                    <p>Buy Food While Booking Tickets. Relax and Enjoy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="feature-item">
                                <div className="feature-thumb">
                                    {/* <img src={require("./../images/feature/icon04.png")} alt="feature"> */}
                                    <i className="fas fa-ticket-alt" />
                                </div>
                                <div className="feature-content">
                                    <h5 className="title">ticket filter</h5>
                                    <p>Filter Your Movie Based on choose</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AppDownload
