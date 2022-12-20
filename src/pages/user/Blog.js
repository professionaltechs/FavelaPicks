import React from 'react'
import {FaShareAlt, FaEye, FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import { BreadcrumbTop } from '../../components/user/BreadcrumbTop'
import { Footer } from '../../components/user/Footer'
import { NavBar } from '../../components/user/NavBar'

export const Blog = () => {
  return (
    <>
    <NavBar/>
      <div>
      {/* <!-- preloader begin -->
      <div className="preloader">
        <img src="assets/img/logo_favelabets.png" alt="" />
      </div>
      <!-- preloader end --> */}

      {/* <!-- breadcrumb begin --> */}
      <BreadcrumbTop title="Blog posts"/>

      {/* <!-- blog begin --> */}
      <div className="blog blog-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-9">
              <div className="section-title">
                <h4 className="sub-title">Our Latest Blogs</h4>
                <h2>Read our amazing tips advise</h2>
                <p>
                  Get probable winning tips from professional betting tipsters
                  across all sports<br />
                  and offers from leading bookmakers! See how it works!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="part-img">
                  <img src="https://static.independent.co.uk/2021/09/01/08/pjimage.jpg?quality=75&width=1200&auto=webp" alt="" />
                  <a href="#" className="view-btn2"><FaEye/></a>
                  <div className="post-date">
                    <span className="date">16</span>
                    <span className="month">Dec</span>
                  </div>
                </div>
                <div className="part-text">
                  <a href="#" className="title"
                    >How could the Premier League resume?</a
                  >
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nobis sint esse vel atque asperiores eligendi vero blanditiis,
                  </p>
                  <a href="#" className="share-btn">
                      <FaShareAlt/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="part-img">
                  <img src="https://static.independent.co.uk/2021/09/01/08/pjimage.jpg?quality=75&width=1200&auto=webp" alt="" />
                  <a href="#" className="view-btn2"><i className="far fa-eye"></i></a>
                  <div className="post-date">
                    <span className="date">26</span>
                    <span className="month">JAn</span>
                  </div>
                </div>
                <div className="part-text">
                  <a href="#" className="title">When coronavirus stops your league</a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                    doloribus aliquid nam temporibus aut?
                  </p>
                  <a href="#" className="share-btn"
                    ><i className="fas fa-share-alt"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="part-img">
                  <img src="https://static.independent.co.uk/2021/09/01/08/pjimage.jpg?quality=75&width=1200&auto=webp" alt="" />
                  <a href="#" className="view-btn2"><i className="far fa-eye"></i></a>
                  <div className="post-date">
                    <span className="date">26</span>
                    <span className="month">JAn</span>
                  </div>
                </div>
                <div className="part-text">
                  <a href="#" className="title">When coronavirus stops your league</a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                    doloribus aliquid nam temporibus aut?
                  </p>
                  <a href="#" className="share-btn"
                    ><i className="fas fa-share-alt"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="part-img">
                  <img src="https://static.independent.co.uk/2021/09/01/08/pjimage.jpg?quality=75&width=1200&auto=webp" alt="" />
                  <a href="#" className="view-btn2"><i className="far fa-eye"></i></a>
                  <div className="post-date">
                    <span className="date">26</span>
                    <span className="month">JAn</span>
                  </div>
                </div>
                <div className="part-text">
                  <a href="#" className="title">When coronavirus stops your league</a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                    doloribus aliquid nam temporibus aut?
                  </p>
                  <a href="#" className="share-btn"
                    ><i className="fas fa-share-alt"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="part-img">
                  <img src="https://static.independent.co.uk/2021/09/01/08/pjimage.jpg?quality=75&width=1200&auto=webp" alt="" />
                  <a href="#" className="view-btn2"><i className="far fa-eye"></i></a>
                  <div className="post-date">
                    <span className="date">26</span>
                    <span className="month">JAn</span>
                  </div>
                </div>
                <div className="part-text">
                  <a href="#" className="title">When coronavirus stops your league</a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                    doloribus aliquid nam temporibus aut?
                  </p>
                  <a href="#" className="share-btn"
                    ><i className="fas fa-share-alt"></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-blog">
                <div className="part-img">
                  <img src="https://static.independent.co.uk/2021/09/01/08/pjimage.jpg?quality=75&width=1200&auto=webp" alt="" />
                  <a href="#" className="view-btn2"><i className="far fa-eye"></i></a>
                  <div className="post-date">
                    <span className="date">26</span>
                    <span className="month">JAn</span>
                  </div>
                </div>
                <div className="part-text">
                  <a href="#" className="title">When coronavirus stops your league</a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                    doloribus aliquid nam temporibus aut?
                  </p>
                  <a href="#" className="share-btn"
                    ><i className="fas fa-share-alt"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div className="bettix-pagination">
            <ul>
              <li>
                <a href="#" className="active">
                  <FaChevronLeft/>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">
                  <FaChevronRight/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- blog end --> */}

    </div>
    <Footer/>
    </>
  )
}
