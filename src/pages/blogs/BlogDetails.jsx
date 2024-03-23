import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import "../../styles/main.css"
import apiRoutes from '../../constant/apiRoutes'
import BlogSidebar from '../../components/BlogSidebar'
import { BiConversation, BiShareAlt } from "react-icons/bi";


function BlogDetails() {
    return (
        <div className='blog-details-part'>
            <Navbar />
            <section className="main-page-header speaker-banner bg_img">
                <div className="container">
                    <div className="speaker-banner-content">
                        <h2 className="title">blog single</h2>
                        <ul className="breadcrumb">
                            <li>
                                <a href={apiRoutes.HOME}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href={apiRoutes.BLOG}>
                                    blog
                                </a>
                            </li>
                            <li>
                                blog single
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="blog-section padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-lg-8 mb-50 mb-lg-0">
                            <article>
                                <div className="post-item post-details">
                                    <div className="post-thumb">
                                        <img src={require("../../images/blog/blog01.jpg")} alt="blog" />
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta text-center">
                                            <div className="item">
                                                <a href="#0">
                                                    <BiConversation className='comment-icon' />
                                                    <span>30</span>
                                                </a>
                                            </div>
                                            <div className="item">
                                                <a href="#0">
                                                    <BiShareAlt className='share-icon' />
                                                    <span>22</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="entry-content p-0">
                                                <div className="left">
                                                    <span className="date">Dece 15, 2020 BY </span>
                                                </div>
                                            </div>
                                            <div className="post-header">
                                                <h4 className="m-title">
                                                    Cheap Movie Tickets - Bring Your Loved Ones to See New Releases
                                                </h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis.
                                                </p>
                                                <blockquote>
                                                    Modi perferendis ipsa, dolorum eaque accusantium! Velitlibero fugit dolores repellendus consequatur nisi, deserunt aperiam a ea ex hic, iusto atque, quas. Aliquam rerum dolores saepe sunt, assumenda voluptas.
                                                </blockquote>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis.
                                                </p>
                                                <h4 className="title">
                                                    Bring Your Loved Ones to See New Releases
                                                </h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis.
                                                </p>
                                            </div>
                                            <div className="tags-area">
                                                <div className="tags">
                                                    <span>
                                                        Tags :
                                                    </span>
                                                    <div className="tags-item">
                                                        <a href="#0"> Tickets </a>
                                                        <a href="#0"> Coming Soon </a>
                                                        <a href="#0"> Movies </a>
                                                    </div>
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
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">
                                                            <i className="fab fa-pinterest" />
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
                                </div>
                                <div className="blog-comment">
                                    <h5 className="title">comments</h5>
                                    <ul className="comment-area">
                                        <li>
                                            <div className="blog-thumb">
                                                <a href="#0">
                                                    <img src={require("../../images/blog/author.jpg")} alt="blog" />
                                                </a>
                                            </div>
                                            <div className="blog-thumb-info">
                                                <span>13 days ago</span>
                                                <h6 className="title"><a href="#0">carl morgan</a></h6>
                                            </div>
                                            <div className="blog-content">
                                                <p>
                                                    Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris. Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="blog-thumb">
                                                <a href="#0">
                                                    <img src={require("../../images/blog/author.jpg")} alt="blog" />
                                                </a>
                                            </div>
                                            <div className="blog-thumb-info">
                                                <span>13 days ago</span>
                                                <h6 className="title"><a href="#0">john flores</a></h6>
                                            </div>
                                            <div className="blog-content">
                                                <p>
                                                    Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris. Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="blog-thumb">
                                                <a href="#0">
                                                    <img src={require("../../images/blog/author.jpg")} alt="blog" />
                                                </a>
                                            </div>
                                            <div className="blog-thumb-info">
                                                <span>13 days ago</span>
                                                <h6 className="title"><a href="#0">carl morgan</a></h6>
                                            </div>
                                            <div className="blog-content">
                                                <p>
                                                    Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris. Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="leave-comment">
                                        <h5 className="title">leave comment</h5>
                                        <form className="blog-form">
                                            <div className="form-group">
                                                <input type="text" placeholder="Enter Your Full Name" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" placeholder="Enter Your Email Address" required />
                                            </div>
                                            <div className="form-group">
                                                <textarea placeholder="Write A Message" required defaultValue={""} />
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" defaultValue="Submit Now" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BlogDetails
