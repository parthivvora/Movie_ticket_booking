import React, { useEffect, useState } from "react";
import "../../styles/main.css";
import apiRoutes from "../../constant/apiRoutes";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BiConversation } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import BlogSidebar from "../../components/BlogSidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogsSlice } from "../../redux/features/blogSlice";
import Pagination from "react-js-pagination";

function Blog() {
  const dispatch = useDispatch();
  const { isLoading, blogData } = useSelector((state) => state.blog);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfFirstResult = (currentPage - 1) * itemsPerPage + 1;
  const indexOfLastResult = Math.min(
    currentPage * itemsPerPage,
    blogData.length
  );

  useEffect(() => {
    dispatch(getAllBlogsSlice());
  }, [dispatch]);

  return (
    <div className="blog-part">
      <Navbar />
      {isLoading && <h1>Loading</h1>}
      <section className="main-page-header speaker-banner bg_img">
        <div className="container">
          <div className="speaker-banner-content">
            <h2 className="title">blog</h2>
            <ul className="breadcrumb">
              <li>
                <a href={apiRoutes.HOME}>Home</a>
              </li>
              <li>blog</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="blog-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-50 mb-lg-0">
              {blogData
                ?.slice(indexOfFirstResult - 1, indexOfLastResult)
                ?.map((blog, index) => (
                  <article key={index}>
                    <div className="post-item">
                      <div className="post-thumb">
                        <a href="blog-details.html">
                          <img src={blog?.blogImage} alt="blog-img" />
                        </a>
                      </div>
                      <div className="post-content">
                        <div className="post-header">
                          <h4 className="title">
                            <a href={`${apiRoutes.BLOG}/${blog._id}`}>
                              {blog?.blogDescription}
                            </a>
                          </h4>
                          <div className="meta-post">
                            <a href="#0" className="mr-4">
                              <BiConversation className="comment-icon" />
                              20 Comments
                            </a>
                          </div>
                          <p>{blog?.blogDescription}</p>
                        </div>
                        <div className="entry-content">
                          <div className="left">
                            <span className="date">
                              {new Date(blog?.createdAt).toLocaleString(
                                "en-US",
                                {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}{" "}
                              BY
                            </span>
                            <div className="authors">
                              <div className="thumb">
                                <a href="#0">
                                  <img
                                    src={require("../../images/blog/author.jpg")}
                                    alt="#0"
                                  />
                                </a>
                              </div>
                              <h6 className="title">
                                <p>Admin</p>
                              </h6>
                            </div>
                          </div>
                          <a href={`${apiRoutes.BLOG}/${blog._id}`}>
                            Read More{" "}
                            <GoArrowRight className="read-more-icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              <div className="pagination-area text-center">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={itemsPerPage}
                  totalItemsCount={blogData.length}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange}
                  itemClass="abc"
                  itemClassFirst="first"
                  itemClassLast="last"
                />
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
