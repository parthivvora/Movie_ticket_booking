import React from 'react'
import "../../styles/main.css"
import apiRoutes from '../../constant/apiRoutes'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { BiConversation } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import BlogSidebar from '../../components/BlogSidebar'

function Blog() {
    return (
        <div className='blog-part'>
            <Navbar />
            <section className="main-page-header speaker-banner bg_img">
                <div className="container">
                    <div className="speaker-banner-content">
                        <h2 className="title">blog</h2>
                        <ul className="breadcrumb">
                            <li>
                                <a href={apiRoutes.HOME}>
                                    Home
                                </a>
                            </li>
                            <li>
                                blog
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="blog-section padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mb-50 mb-lg-0">
                            <article>
                                <div className="post-item">
                                    <div className="post-thumb">
                                        <a href="blog-details.html">
                                            <img src={require("../../images/blog/blog01.jpg")} alt="blog" />
                                        </a>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-header">
                                            <h4 className="title">
                                                <a href={`${apiRoutes.BLOG}/1`}>
                                                    Increase Event Ticket Sales For Film Production With the Right Advertising Strategies
                                                </a>
                                            </h4>
                                            <div className="meta-post">
                                                <a href="#0" className="mr-4"><BiConversation className='comment-icon' />20 Comments</a>
                                                <a href="#0"><IoEyeOutline className='view-icon' />466 View</a>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac cursus leo. Nullam dolor nunc, hendrerit non velit id, pharetra viverra elit.
                                            </p>
                                        </div>
                                        <div className="entry-content">
                                            <div className="left">
                                                <span className="date">Dece 15, 2020 BY </span>
                                                <div className="authors">
                                                    <div className="thumb">
                                                        <a href="#0"><img src={require("../../images/blog/author.jpg")} alt="#0" /></a>
                                                    </div>
                                                    <h6 className="title"><a href="#0">Alvin Mcdaniel</a></h6>
                                                </div>
                                            </div>
                                            <a href={`${apiRoutes.BLOG}/1`}>Read More <GoArrowRight className='read-more-icon' /></a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div className="pagination-area text-center">
                                <a href="#0"><i className="fas fa-angle-double-left" /><span>Prev</span></a>
                                <a href="#0">1</a>
                                <a href="#0">2</a>
                                <a href="#0" className="active">3</a>
                                <a href="#0">4</a>
                                <a href="#0">5</a>
                                <a href="#0"><span>Next</span><i className="fas fa-angle-double-right" /></a>
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Blog
