import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { LuPlayCircle } from "react-icons/lu";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

function EventsDetails() {
    const { eventId } = useParams()
    return (
        <div className='event-details-part'>
            <Navbar />
            <section className="event-banner-section bg_img">
                <div className="container">
                    <div className="event-banner">
                        <a href="https://www.youtube.com/embed/GT6-H4BRyqQ" className="video-popup">
                            <span />
                            <LuPlayCircle className='play-btn' />
                        </a>
                    </div>
                </div>
            </section>
            <section className="event-book-search padding-top pt-lg-0">
                <div className="container">
                    <div className="event-search bg_img">
                        <div className="event-search-top">
                            <div className="left">
                                <h3 className="title">Digital Marketing Conference -2020</h3>
                            </div>
                            <div className="right">
                                <ul className="countdown">
                                    <li>
                                        <h2><span className="days">00</span></h2>
                                        <p className="days_text">days</p>
                                    </li>
                                    <li>
                                        <h2><span className="hours">00</span></h2>
                                        <p className="hours_text">hrs</p>
                                    </li>
                                    <li>
                                        <h2><span className="minutes">00</span></h2>
                                        <p className="minu_text">min</p>
                                    </li>
                                    <li>
                                        <h2><span className="seconds">00</span></h2>
                                        <p className="seco_text">sec</p>
                                    </li>
                                </ul>
                                <a href="#0" className="custom-button">book tickets</a>
                            </div>
                        </div>
                        <div className="event-search-bottom">
                            <div className="contact-side">
                                <div className="item">
                                    <div className="item-thumb">
                                        <img src={require("../../images/event/icon/event-icon01.png")} alt="event" />
                                    </div>
                                    <div className="item-content">
                                        <span className="up">3 Days (Friday-Sunday)</span>
                                        <span>70+ Workshops</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-thumb">
                                        <img src={require("../../images/event/icon/event-icon02.png")} alt="event" />
                                    </div>
                                    <div className="item-content">
                                        <span className="up">17 South Sherman Street</span>
                                        <span>Astoria, NY 11106</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-thumb">
                                        <img src={require("../../images/event/icon/event-icon03.png")} alt="event" />
                                    </div>
                                    <div className="item-content">
                                        <span className="up">Drop us a line:</span>
                                        <a href="MailTo:hello@Boleto .com"><span className="__cf_email__" data-cfemail="7e161b1212113e3c11121b0a11">[email&nbsp;protected]</span> .com</a>
                                    </div>
                                </div>
                            </div>
                            <ul className="social-icons">
                                <li>
                                    <a href="#0" className="active">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="active">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="active">
                                        <i className="fab fa-pinterest-p" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="active">
                                        <i className="fab fa-google" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="active">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="event-about padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-between flex-wrap-reverse">
                        <div className="col-lg-7 col-xl-6">
                            <div className="event-about-content">
                                <div className="section-header-3 left-style m-0">
                                    <span className="cate">are you ready to attend?</span>
                                    <h2 className="title">Digital Marketing Conference - <span>2020</span></h2>
                                    <p>Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, tristique senectus et netus et malesuada fames ac turpis egestas ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.Aenean ultricies mi vitae est. Mauris Eonec eu ribero sit amet quam egestas semper. Aenean are ultricies mi senectus et netus et malesuada fames ac turpis egestas.
                                    </p>
                                    <a href="#0" className="custom-button">book tickets</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-7">
                            <div className="event-about-thumb">
                                <img src={require("../../images/event/event-about.jpg")} alt="event" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="speaker-gallery">
                <div className="row m-0">
                    <div className="col-md-6 p-0">
                        <div className="row m-0">
                            <div className="col-sm-6 p-0">
                                <div className="gallery-item two">
                                    <div className="gallery-thumb">
                                        <a href={require("../../images/gallery/gallery01.jpg")} className="img-pop">
                                            <i className="flaticon-loupe" />
                                        </a>
                                        <img src={require("../../images/gallery/gallery01.jpg")} alt="gallery" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 p-0">
                                <div className="gallery-item two">
                                    <div className="gallery-thumb">
                                        <a href={require("../../images/gallery/gallery02.jpg")} className="img-pop">
                                            <i className="flaticon-loupe" />
                                        </a>
                                        <img src={require("../../images/gallery/gallery02.jpg")} alt="gallery" />
                                    </div>
                                </div>
                                <div className="gallery-item two">
                                    <div className="gallery-thumb">
                                        <a href={require("../../images/gallery/gallery03.jpg")} className="img-pop">
                                            <i className="flaticon-loupe" />
                                        </a>
                                        <img src={require("../../images/gallery/gallery03.jpg")} alt="gallery" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="gallery-item">
                            <div className="gallery-thumb">
                                <a href={require("../../images/gallery/gallery04.jpg")} className="img-pop">
                                    <i className="flaticon-loupe" />
                                </a>
                                <img src={require("../../images/gallery/gallery04.jpg")} alt="gallery" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="speaker-section padding-bottom padding-top">
                <div className="container">
                    <div className="section-header-3">
                        <span className="cate">listen to the</span>
                        <h2 className="title">event speakers</h2>
                        <p>World is committed to making participation in the event a harassment free experience for
                            everyone, regardless of level of experience, gender, gender identity and expression</p>
                    </div>
                    <div className="speaker--slider">
                        <div className="speaker-slider owl-carousel owl-theme">
                            <div className="speaker-item">
                                <div className="speaker-thumb">
                                    <a href="event-speaker.html">
                                        <img src={require("../../images/speaker/speaker01.jpg")} alt="speaker" />
                                    </a>
                                </div>
                                <div className="speaker-content">
                                    <h5 className="title">
                                        <a href="event-speaker.html">
                                            Gerard Bryan
                                        </a>
                                    </h5>
                                    <span>lead speaker</span>
                                </div>
                            </div>
                            <div className="speaker-item">
                                <div className="speaker-thumb">
                                    <a href="event-speaker.html">
                                        <img src={require("../../images/speaker/speaker02.jpg")} alt="speaker" />
                                    </a>
                                </div>
                                <div className="speaker-content">
                                    <h5 className="title">
                                        <a href="event-speaker.html">
                                            Raihan Rafuj
                                        </a>
                                    </h5>
                                    <span>lead speaker</span>
                                </div>
                            </div>
                            <div className="speaker-item">
                                <div className="speaker-thumb">
                                    <a href="event-speaker.html">
                                        <img src={require("../../images/speaker/speaker03.jpg")} alt="speaker" />
                                    </a>
                                </div>
                                <div className="speaker-content">
                                    <h5 className="title">
                                        <a href="event-speaker.html">
                                            Bela Bose
                                        </a>
                                    </h5>
                                    <span>lead speaker</span>
                                </div>
                            </div>
                            <div className="speaker-item">
                                <div className="speaker-thumb">
                                    <a href="event-speaker.html">
                                        <img src={require("../../images/speaker/speaker04.jpg")} alt="speaker" />
                                    </a>
                                </div>
                                <div className="speaker-content">
                                    <h5 className="title">
                                        <a href="event-speaker.html">
                                            Grass Hopper
                                        </a>
                                    </h5>
                                    <span>lead speaker</span>
                                </div>
                            </div>
                        </div>
                        <div className="speaker-prev">
                            <FaAnglesRight />
                        </div>
                        <div className="speaker-next">
                            <FaAnglesRight />
                        </div>
                    </div>
                </div>
            </section>
            <section className="statistics-section padding-top padding-bottom bg_img pb-lg-0">
                <div className="container">
                    <div className="section-header-3">
                        <span className="cate">what we have done</span>
                        <h2 className="title">our recent STATISTICS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                    </div>
                    <div className="statistics-wrapper">
                        <div className="row mb--20">
                            <div className="col-md-4">
                                <div className="stat-item">
                                    <div className="stat-thumb">
                                        <img src={require("../../images/statistics/stat01.png")} alt="statistics" />
                                    </div>
                                    <div className="stat-content">
                                        <h3 className=" counter-item odometer" data-odometer-final={450} />
                                        <span className="info">Tickets Booked</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="stat-item">
                                    <div className="stat-thumb">
                                        <img src={require("../../images/statistics/stat02.png")} alt="statistics" />
                                    </div>
                                    <div className="stat-content">
                                        <h3 className=" counter-item odometer" data-odometer-final={500} />
                                        <span className="info">Usefull Sessions</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="stat-item">
                                    <div className="stat-thumb">
                                        <img src={require("../../images/statistics/stat03.png")} alt="statistics" />
                                    </div>
                                    <div className="stat-content">
                                        <h3 className=" counter-item odometer" data-odometer-final={28} />
                                        <span className="info">Talented Speakers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq-section padding-top">
                <div className="container">
                    <div className="section-header-3">
                        <span className="cate">HOW CAN WE HELP?</span>
                        <h2 className="title">Frequently Asked Questions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                    </div>
                    <div className="faq-area padding-bottom">
                        <div className="faq-wrapper">
                            <div className="faq-item">
                                <div className="faq-title">
                                    <h6 className="title">Can I Upgrade my Tickets after Placing an Order?</h6>
                                    <span className="right-icon" />
                                </div>
                                <div className="faq-content">
                                    <p>Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory. </p>
                                    <p>If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </p>
                                </div>
                            </div>
                            <div className="faq-item active open">
                                <div className="faq-title">
                                    <h6 className="title">Why did the delivery method of my tickets change?</h6>
                                    <span className="right-icon" />
                                </div>
                                <div className="faq-content">
                                    <p>Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory. </p>
                                    <p>If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <div className="faq-title">
                                    <h6 className="title">Why is there a different name printed on the tickets
                                        and will this give me problems at my event?</h6>
                                    <span className="right-icon" />
                                </div>
                                <div className="faq-content">
                                    <p>Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory. </p>
                                    <p>If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <div className="faq-title">
                                    <h6 className="title">My tickets are not consecutive seats, are they still
                                        guaranteed together?</h6>
                                    <span className="right-icon" />
                                </div>
                                <div className="faq-content">
                                    <p>Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory. </p>
                                    <p>If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </p>
                                </div>
                            </div>
                            <div className="faq-item">
                                <div className="faq-title">
                                    <h6 className="title">Why is there a different name printed on the tickets
                                        and will this give me problems at my event?</h6>
                                    <span className="right-icon" />
                                </div>
                                <div className="faq-content">
                                    <p>Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory. </p>
                                    <p>If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="event-details padding-bottom padding-top">
                <div className="container">
                    <div className="section-header-3">
                        <span className="cate">EVENT SPONSORS</span>
                        <h2 className="title">Partners &amp; Sponsors</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                    </div>
                    <div className="tabTwo sponsor-tab">
                        <ul className="tab-menu">
                            <li className="active">
                                Platinum Sponsors
                            </li>
                            <li>
                                gold Sponsors
                            </li>
                            <li>
                                silver Sponsors
                            </li>
                        </ul>
                        <div className="tab-area">
                            <div className="tab-item active">
                                <div className="owl-theme owl-carousel sponsor-slider">
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/1.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/2.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/3.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/4.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/5.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="owl-theme owl-carousel sponsor-slider">
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/3.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/4.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/5.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/1.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/2.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="owl-theme owl-carousel sponsor-slider">
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/3.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/1.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/4.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/2.png")} alt="sponsor" />
                                        </a>
                                    </div>
                                    <div className="sponsor-thumb">
                                        <a href="#0">
                                            <img src={require("../../images/sponsor/5.png")} alt="sponsor" />
                                        </a>
                                    </div>
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

export default EventsDetails
