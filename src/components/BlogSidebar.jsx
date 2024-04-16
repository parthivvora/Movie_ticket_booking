import React from 'react'
import { CiSearch } from "react-icons/ci";

function BlogSidebar() {
    return (
        <div className="col-lg-4 col-sm-10 col-md-8">
            <aside>
                <div className="widget widget-search">
                    <h5 className="title">search</h5>
                    <form className="search-form">
                        <input type="text" placeholder="Enter your Search Content" required />
                        <button type="submit"><CiSearch className='search-icon' />Search</button>
                    </form>
                </div>
                <div className="widget widget-follow">
                    <h5 className="title">Follow Us</h5>
                    <ul className="social-icons">
                        <li>
                            <a href="#0">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="#0">
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
                <div className="widget widget-categories">
                    <h5 className="title">categories</h5>
                    <ul>
                        <li>
                            <a href="#0">
                                <span>Showtimes &amp; Tickets</span><span>50</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>Latest Trailers</span><span>43</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>Coming Soon </span><span>34</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>In Theaters</span><span>63</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>Release Calendar</span><span>11</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>Stars</span><span>30</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <span>Horror Movie </span><span>55</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="widget widget-tags">
                    <h5 className="title">featured tags</h5>
                    <ul>
                        <li>
                            <a href="#0">creative</a>
                        </li>
                        <li>
                            <a href="#0">design</a>
                        </li>
                        <li>
                            <a href="#0">skill</a>
                        </li>
                        <li>
                            <a href="#0">template</a>
                        </li>
                        <li>
                            <a href="#0" className="active">landing</a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default BlogSidebar
