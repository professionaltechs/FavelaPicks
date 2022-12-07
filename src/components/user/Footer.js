import React from 'react';
import {FaFacebookF, FaTwitter, FaInstagram, FaPinterest} from 'react-icons/fa';
import emailSVG from '../../assets/img/svg/email.svg';
import phoneSVG from '../../assets/img/svg/phone-call.svg'

export const Footer = () => {
  return (
    <div>
    <div className="footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-5 col-md-10">
              <div className="about-widget">
                <a className="site-title" href="index.html"> The Favelabets </a>
                <p>
                  Favelabets offers you all the best online prediction from every
                  corner of the planet with thousands of online prediction
                  markets.
                </p>
                <div className="social">
                  <ul>
                    <li>
                      <a href="#" className="social-icon">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="social-icon">
                        <FaTwitter/>
                      </a>
                      <a href="#" className="social-icon">
                        <FaInstagram/>
                      </a>
                      <a href="#" className="social-icon">
                        <FaPinterest/>
                      </a>
                      <a href="#" className="social-icon">
                        <FaFacebookF />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="support">
                  <ul>
                    <li>
                      <span className="icon">
                        <img src={emailSVG} alt="" />
                      </span>
                      <span className="text">
                        <span className="title">Mail Us</span>
                        <span className="descr">don't@reply.com</span>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <img src={phoneSVG} alt="" />
                      </span>
                      <span className="text">
                        <span className="title">Get In Touch</span>
                        <span className="descr">+88 015 00 00 00</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4">
              <div className="useful-links">
                <h3>Useful links</h3>
                <ul>
                  <li>
                    <a href="#">in-play</a>
                  </li>
                  <li>
                    <a href="#">promotions</a>
                  </li>
                  <li>
                    <a href="#">statics</a>
                  </li>
                  <li>
                    <a href="#">results</a>
                  </li>
                  <li>
                    <a href="#">predict now</a>
                  </li>
                  <li>
                    <a href="#">game results</a>
                  </li>
                  <li>
                    <a href="#">standings</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4">
              <div className="useful-links">
                <h3>Connect Us</h3>
                <ul>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                  <li>
                    <a href="#">blog details</a>
                  </li>
                  <li>
                    <a href="#">service</a>
                  </li>
                  <li>
                    <a href="#">contact us</a>
                  </li>
                  <li>
                    <a href="#">team overview</a>
                  </li>
                  <li>
                    <a href="#">schedule</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4">
              <div className="useful-links">
                <h3>probable Tips</h3>
                <ul>
                  <li>
                    <a href="#">football</a>
                  </li>
                  <li>
                    <a href="#">tennis</a>
                  </li>
                  <li>
                    <a href="#">basketball</a>
                  </li>
                  <li>
                    <a href="#">ice hockey</a>
                  </li>
                  <li>
                    <a href="#">volleyball</a>
                  </li>
                  <li>
                    <a href="#">badminton</a>
                  </li>
                  <li>
                    <a href="#">baseball</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="payment-method">
                    <h6 className="payment-method-title">
                      Payment methods are We accept
                    </h6>
                    <div className="all-method">
                      <div className="single-method">
                        <img src="assets/img/brand-1.png" alt="" />
                      </div>
                      <div className="single-method">
                        <img src="assets/img/brand-2.png" alt="" />
                      </div>
                      <div className="single-method">
                        <img src="assets/img/brand-3.png" alt="" />
                      </div>
                      <div className="single-method">
                        <img src="assets/img/brand-4.png" alt="" />
                      </div>
                      <div className="single-method">
                        <img src="assets/img/brand-5.png" alt="" />
                      </div>

                      <div className="single-method">
                        <img src="assets/img/brand-5.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-footer">
        <div className="container">
          <div className="row text-center">
            <p className="copyright-text">
              <a href="#">Favelabets</a> © 2022. Privacy & Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
