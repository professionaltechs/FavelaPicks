import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaMapMarkerAlt, FaPhone, FaRegEnvelope, FaGlobe} from 'react-icons/fa'
import { BreadcrumbTop } from '../../components/user/BreadcrumbTop'
import { Footer } from '../../components/user/Footer'
import { NavBar } from '../../components/user/NavBar'

export const Contact = () => {
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
      <BreadcrumbTop title="Contact us"/>

      {/* <!-- contact begin --> */}
      <div className="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-10">
              <div className="section-title">
                <h4 className="sub-title">Contact With Us</h4>
                <h2>Get in touch with Authority</h2>
                <p>
                  Get probable winning tips from professional betting tipsters
                  across all sports<br />
                  and offers from leading bookmakers! See how it works!
                </p>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-xl-8 col-lg-8 col-md-7">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <label for="fullName">Full Name</label>
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Ex: John Doe"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <label for="phoneNo">Phone No</label>
                      <input
                        type="text"
                        id="phoneNo"
                        placeholder="+96 xxx xxx xxx"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <label for="emailAdd">Email</label>
                      <input
                        type="text"
                        id="emailAdd"
                        placeholder="Ex: yourmail@do.main"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <label for="mailSubject">Subject</label>
                      <input
                        type="text"
                        id="mailSubject"
                        placeholder="Ex: Service"
                      />
                    </div>
                  </div>
                  <label for="yourMessage">Subject</label>
                  <textarea
                    id="yourMessage"
                    placeholder="Ex: Hello Admin!"
                  ></textarea>
                  <button className="submit-btn">Submit</button>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div className="contact-information">
                <div className="about-site">
                  <p>
                    Bettix offers you all the best online betting from every
                    corner of the planet with thousands of online betting markets.
                  </p>
                </div>
                <ul className="info-list">
                  <li>
                    <span className="icon">
                      <FaMapMarkerAlt/>
                    </span>
                    <span className="text">
                      2870 Whitetail Lane, Dallas, TX 75240
                    </span>
                  </li>

                  <li>
                    <span className="icon">
                      <FaPhone/>
                    </span>
                    <span className="text"> 469-280-5769 </span>
                  </li>
                  <li>
                    <span className="icon">
                      <FaRegEnvelope/>
                    </span>
                    <span className="text"> HarryJRohrbach@dayrep.com </span>
                  </li>
                  <li>
                    <span className="icon">
                      <FaGlobe/>
                    </span>
                    <span className="text"> scandalloo.com </span>
                  </li>
                </ul>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaPinterest/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656168.0432930731!2d115.35539228254618!3d40.17440721560081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2sBeijing%2C%20China!5e0!3m2!1sen!2sbd!4v1584906265895!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
      {/* <!-- contact end --> */}
    </div>
      <Footer/>
    </>
  )
}
