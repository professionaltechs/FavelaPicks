import React,{useEffect} from 'react'

import bannerVIDEO from '../../assets/video/football.mp4'
import ballInStadium from '../../assets/img/footbal_in_stadium.jpg'
// import messiPROFILE from '../../assets/img/testimonial/Lionel_Messi.jpg'
import neymarPROFILE from '../../assets/img/testimonial/Neymar_Jr.jpg'
import ronaldoPROFILE from '../../assets/img/testimonial/Cristiano_Ronaldo.jpg'
import NBA from '../../assets/img/nba.png'
import messiPROFILE from "../../assets/img/thumb_image.png"
import patrickProfile from "../../assets/img/maholmes.png"
import Profile from "../../assets/img/Jahmyr-Gibbs-Suits-crop-741x1024.webp"
import Profilee from "../../assets/img/clove.png"
import lukaPROFILE from "../../assets/img/luca.webp"

import rightArrow from '../../assets/img/icon/right-arrow.png'
import houseFullStadium from '../../assets/img/housefull_stadium.jpg'

import {FaChartPie, FaChartBar, FaUserAlt, FaFootballBall, FaRegEnvelope, FaRegLightbulb, FaLightbulb, FaRegCheckSquare, FaCreditCard} from 'react-icons/fa'
import {AiFillSafetyCertificate} from 'react-icons/ai'

// Country Flags
import UnitedKingdom from '../../assets/img/flag/001-united-kingdom.png'
import Germany from '../../assets/img/flag/003-germany.png'
import UnitedStates from '../../assets/img/flag/002-united-states.png'
import Brazil from '../../assets/img/flag/004-brazil.png'
import Sweden from '../../assets/img/flag/005-sweden.png'
import Canada from '../../assets/img/flag/006-canada.png'
import Portugal from '../../assets/img/flag/007-portugal.png'
import Ireland from '../../assets/img/flag/008-ireland.png'
import SouthAfrica from '../../assets/img/flag/009-south-africa.png'
import Israel from '../../assets/img/flag/010-israel.png'
import SaudiArabia from '../../assets/img/flag/011-saudi-arabia.png'
import Bangladesh from '../../assets/img/flag/012-bangladesh.png'
import Mauritania from '../../assets/img/flag/013-mauritania.png'
import Bhutan from '../../assets/img/flag/016-bhutan.png'
import Tonga from '../../assets/img/flag/017-tonga.png'
import Niger from '../../assets/img/flag/014-niger.png'
import NorfolkIsland from '../../assets/img/flag/015-norfolk-island.png'
import Nepal from '../../assets/img/flag/020-nepal.png'
import { TestimonialSlider } from '../../components/user/home/TestimonialSlider'

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
    {/* <!-- preloader begin --> */}
    {/* <div className="preloader">
      <img src="assets/img/logo_favelabets.png" alt="" />
    </div> */}
    {/* <!-- preloader end --> */}

    {/* <!-- banner begin --> */}
    <div className="banner" id="header">
      <video autoPlay muted loop id="myVideo">
        <source src={bannerVIDEO} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="container" style={{height: "90vh"}}>
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-10 col-md-9">
            <div className="banner-content">
              <h4 className="subtitle">QUANTUM COMPUTING SPORTS DATA WITH MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE</h4>
              <h1>HIGH PRECISION SPORTS PICKS</h1>
              <p>
              Get Artifical Intelligence to make the winning decision for you!
              </p>
              <a href="#" className="banner-btn"> Join Now </a>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-3 d-xl-flex d-lg-flex d-block align-items-end"
          >
          </div>
        </div>
      </div>
    </div>
    {/* <!-- banner end --> */}

    <div className="about">
        <div className="container">
          <div className="row justify-content-xl-between justify-content-lg-between justify-content-md-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="part-text">
                <h4 className="subtitle">Know About Us</h4>
                <h2>Learn and Become Smarter Everyday.</h2>
                <p>
                  A sports betting tool developed by an NASA Scientist that uses
                  cutting edge machine learning and artificial intelligence
                  software to help you predict sports betting outcomes. All
                  partnerships inquiries are welcome.
                </p>
                <p></p>
                <a href="#0" className="learn-more-btn">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="part-img">
                <img
                  style={{objectFit: "cover"}}
                  src={NBA}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* <div className="about">
      <div className="container">
        <div
          className="row justify-content-xl-between justify-content-lg-between justify-content-md-center"
        >
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="part-text">
              <h4 className="subtitle">Know About Us</h4>
              <h2>Get profit from our Tipster</h2>
              <p>
                We believe that Betipter is the most extensive betting platform
                available for all kind of sports bettors, who are really wanting
                to bet on online betting site. We’ve built tools that help
                provide responsibility to your betting decisions.
              </p>
              <p>
                We've highlighted your personal strengths and weaknesses, as
                well as providing knowledgeable tipsters that would compliment
                your existing betting portfolio.
              </p>
              <a href="#0" className="learn-more-btn">Learn More</a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="part-img">
              <img src={ballInStadium} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <!-- about end -->? */}

    <div className=''>
      <div className='container' id="why-section">
        <h1>Why Favela Bets Artificial Intelligence?</h1>
        <p>Unlike other picks services based on the gut instinct of some handicapper, Favela Bets Artificial Intelligence generates picks that are rooted in Artificial Intelligence with Quantum Computing</p>
        <div className='row justify-content-center'>
          <div className='col-8 col-md-4 mx-auto mx-md-0'>
            <div style={{display: "flex", justifyContent: "center"}}><img src='https://lh3.googleusercontent.com/ssz-77B7tTIrZrDn2mX70e0AlpKCE8ZMYcHcafKT-gocdX-f-ZMqrWJ9sf-gsU85g-b7y6HVoFoUHyNAUYLu=w311'/></div>
            <h3 style={{textAlign: "center", color: "rgb(82, 94, 114)"}}>Powered by AI</h3>
            <p style={{textAlign: "center"}}><span style={{fontWeight: "600", color: "rgb(82, 94, 114"}}>Favela Bets Artificial Intelligence uses our own custom AI technology</span> to harness the knowledge, injuries, and scoial media insight in real-time, generating predictions that have been shown to outperform other industry leading prediction sites.</p>
          </div>
          <div className='col-8 col-md-4 mx-auto mx-md-0'>
            <div style={{display: "flex", justifyContent: "center"}}><img src='https://lh3.googleusercontent.com/ssz-77B7tTIrZrDn2mX70e0AlpKCE8ZMYcHcafKT-gocdX-f-ZMqrWJ9sf-gsU85g-b7y6HVoFoUHyNAUYLu=w311'/></div>
            <h3  style={{textAlign: "center", color: "rgb(82, 94, 114)"}}>Rooted in Machine Learning</h3>
            <p style={{textAlign: "center"}}><span style={{fontWeight: "600", color: "rgb(82, 94, 114"}}>Rooted in the Technical principle</span> of Polynomial Regression , our machine learning models connect to networked databases called “Clusters” that think together as a system, creating an AI-powered “Super Intelligence” that outperforms not only in speed but also accuracy. Favela Bets believes in data theory and collects and stores all data related to each sport model. </p>
          </div>
          <div className='col-8 col-md-4 mx-auto mx-md-0'>
            <div style={{display: "flex", justifyContent: "center"}}><img src='https://lh3.googleusercontent.com/ssz-77B7tTIrZrDn2mX70e0AlpKCE8ZMYcHcafKT-gocdX-f-ZMqrWJ9sf-gsU85g-b7y6HVoFoUHyNAUYLu=w311'/></div>
            <h3  style={{textAlign: "center", color: "rgb(82, 94, 114)"}}>Clear & Transparent</h3>
            <p style={{textAlign: "center"}}><span style={{fontWeight: "600", color: "rgb(82, 94, 114"}}>Favela Bets Artificial Intelligence data visualizations</span> give clarity and transparency. This sample Heat Map shows the result of a prediction of a single game, picking Miami Heat's player Tyler Herro to drop 18-22 points.</p>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- leaderboard begin  --> */}
    <div className="leaderboard">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-10">
            <div className="section-title">
              <h4 className="sub-title">Tipster Rankings</h4>
              <h2>Our most  tipster</h2>
              <p>
                Get probable winning tips from professional betting tipsters
                across all sports<br />
                and offers from leading bookmakers! See how it works!
              </p>
            </div>
          </div>
        </div>
        <div className="leaderboard tipster-page">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12 col-lg-12">
                <div className="leaderboard-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Sport</th>
                        <th scope="col">Players</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          NBA
                        </th>
                        <td>
                          <a href="#0" className="tipster-pic">
                            <img
                            className='usSmallImgimg'
                              src={lukaPROFILE}
                              alt=""
                            />
                          </a>
                        </td>
                        <td>
                          <span className="profit"> Luka Dončić </span>
                        </td>
                        <td>
                          <a href="playerGallery.html" className="buy-tips-btn">
                            Get Predictions Now
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          NCAA Basketball
                        </th>
                        <td>
                          <a href="#0" className="tipster-pic">
                            <img
                            className='usSmallImgimg'
                              src={Profilee}
                              alt=""
                            />
                          </a>
                        </td>
                        <td>
                          <span className="profit"> Caleb Love </span>
                        </td>
                        <td>
                          <a href="playerGallery.html" className="buy-tips-btn">
                            Get Predictions Now
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          College Football
                        </th>
                        <td>
                          <a href="#0" className="tipster-pic">
                            <img
                            className='usSmallImgimg'
                              src={Profile}
                              alt=""
                            />
                          </a>
                        </td>
                        <td>
                          <span className="profit"> Jahmyr Gibbs </span>
                        </td>
                        <td>
                          <a href="playerGallery.html" className="buy-tips-btn">
                            Get Predictions Now
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          NFL
                        </th>
                        <td>
                          <a href="#0" className="tipster-pic">
                            <img
                            className='usSmallImgimg'
                              src={patrickProfile}
                              alt=""
                            />
                          </a>
                        </td>
                        <td>
                          <span className="profit"> Patrick Mahomes </span>
                        </td>
                        <td>
                          <a href="playerGallery.html" className="buy-tips-btn">
                            Get Predictions Now
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Futbol
                        </th>
                        <td>
                          <a href="#0" className="tipster-pic">
                            <img
                            className='usSmallImgimg'
                              src={messiPROFILE}
                              alt=""
                            />
                          </a>
                        </td>
                        <td>
                          <span className="profit"> Lionel Messi </span>
                        </td>
                        <td>
                          <a href="playerGallery.html" className="buy-tips-btn">
                            Get Predictions Now
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="buttons-cover">
                  <a href="#0" className="load-more-btn"
                    >Load more <i className="fas fa-sync"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- leaderboard end  --> */}

    {/* <!-- statics begin --> */}
    <div className="statics">
      <div style={{height: "60px", backgroundColor: "white",}}>
        <div className="part-statics">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-6 col-md-3">
              <div className="single-static">
                <div className="part-img">
                  <FaChartPie style={{fontSize: "70px", marginTop: "15px", color: "#383838"}}/>
                </div>
                <div className="part-text">
                  <span className="number">14,202</span>
                  <h4 className="title">Total Predictions</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6 col-md-3">
              <div className="single-static">
                <div className="part-img">
                  <FaChartBar style={{fontSize: "70px", marginTop: "15px", color: "#383838"}}/>
                </div>
                <div className="part-text">
                  <span className="number">56.7%</span>
                  <h4 className="title">Prediction Accuracy</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6 col-md-3">
              <div className="single-static">
                <div className="part-img">
                  <FaUserAlt style={{fontSize: "70px", marginTop: "15px", color: "#383838"}}/>
                </div>
                <div className="part-text">
                  <span className="number">1200</span>
                  <h4 className="title">Total Users</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6 col-md-3">
              <div className="single-static">
                <div className="part-img">
                  <FaFootballBall style={{fontSize: "70px", marginTop: "15px", color: "#383838"}}/>
                </div>
                <div className="part-text">
                  <span className="number">7500</span>
                  <h4 className="title">Total Tipster</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{height: "200px"}}></div>
    </div>
    {/* <!-- statics end --> */}

    {/* <!-- feature begin --> */}
    <div className="feature">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-9">
            <div className="section-title">
              <h4 className="sub-title">Why Choose Us</h4>
              <h2>Features that users get</h2>
              <p>
                Get probable winning tips from professional betting tipsters
                across all sports<br />
                and offers from leading bookmakers! See how it works!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-xl-between justify-content-lg-center">
          <div
            className="col-xl-8 col-lg-10 d-xl-flex d-lg-flex d-block align-items-center"
          >
            <div className="part-all-feature">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                  <div className="single-feature">
                    <div className="part-icon">
                      <FaRegEnvelope style={{fontSize: "40px", marginTop: "30px"}} />
                    </div>
                    <div className="part-text">
                      <h4 className="title">Receive by Mail</h4>
                      <a href="#0"
                        >Read More
                        <img src={rightArrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                  <div className="single-feature">
                    <div className="part-icon">
                      <FaRegLightbulb style={{fontSize: "40px", marginTop: "30px"}}/>
                    </div>
                    <div className="part-text">
                      <h4 className="title">Guaranteed Tips</h4>
                      <a href="#0"
                        >Read More
                        <img src={rightArrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                  <div className="single-feature">
                    <div className="part-icon">
                      <FaLightbulb style={{fontSize: "40px", marginTop: "30px"}}/>
                    </div>
                    <div className="part-text">
                      <h4 className="title">100% Proofed Tips</h4>
                      <a href="#0"
                        >Read More
                        <img src={rightArrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                  <div className="single-feature">
                    <div className="part-icon">
                      <FaRegCheckSquare style={{fontSize: "40px", marginTop: "30px"}}/>
                    </div>
                    <div className="part-text">
                      <h4 className="title">Verified Odds</h4>
                      <a href="#0"
                        >Read More
                        <img src={rightArrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                  <div className="single-feature">
                    <div className="part-icon">
                      <AiFillSafetyCertificate style={{fontSize: "40px", marginTop: "30px"}}/>
                    </div>
                    <div className="part-text">
                      <h4 className="title">Buyer Protection</h4>
                      <a href="#0"
                        >Read More
                        <img src={rightArrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                  <div className="single-feature">
                    <div className="part-icon">
                      <FaCreditCard style={{fontSize: "40px", marginTop: "30px"}}/>
                    </div>
                    <div className="part-text">
                      <h4 className="title">Credits Based System</h4>
                      <a href="#0"
                        >Read More
                        <img src={rightArrow} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3">
            <div className="part-img">
              <img src={houseFullStadium} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- feature end --> */}

    {/* <!-- testimonial begin --> */}
    {/* <TestimonialSlider/> */}
    {/* <div className="testimonial">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-sm-10">
            <div className="testimonial-slider owl-carousel owl-theme">
              <div className="single-testimonial">
                <div className="part-img">
                  <div className="part-pic">
                    <img src={neymarPROFILE} alt="" />
                  </div>
                </div>
                <div className="part-text">
                  <i className="icon-for-quot fas fa-quote-left"></i>
                  <p>
                    Neymar da Silva Santos Júnior (born 5 February 1992), known
                    as Neymar, is a Brazilian professional footballer who plays
                    as a forward for Ligue 1 club Paris Saint-Germain and the
                    Brazil national team.
                  </p>
                  <span className="position"> Footballer </span>
                  <span className="user-name"> Neymar Jr </span>
                </div>
              </div>
              <div className="single-testimonial">
                <div className="part-img">
                  <div className="part-pic">
                    <img src={messiPROFILE} alt="" />
                  </div>
                </div>
                <div className="part-text">
                  <i className="icon-for-quot fas fa-quote-left"></i>
                  <p>
                    Lionel Andrés Messi (born 24 June 1987), also known as Leo
                    Messi, is an Argentine professional footballer who plays as
                    a forward for Ligue 1 club Paris Saint-Germain and captains
                    the Argentina national team.
                  </p>
                  <span className="position"> Footballer </span>
                  <span className="user-name"> Lionel Messi </span>
                </div>
              </div>
              <div className="single-testimonial">
                <div className="part-img">
                  <div className="part-pic">
                    <img
                      src={ronaldoPROFILE}
                      alt=""
                    />
                  </div>
                </div>
                <div className="part-text">
                  <i className="icon-for-quot fas fa-quote-left"></i>
                  <p>
                    Ronaldo is a Portuguese given name equivalent to the English
                    Ronald. It became a common name in all Portuguese-speaking
                    countries, being also prevalent in Italy and
                    Spanish-speaking countries.
                  </p>
                  <span className="position"> Footballer </span>
                  <span className="user-name"> Cristiano Ronaldo </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <!-- testimonial end --> */}

    {/* <!-- blog begin --> */}
    {/* <div className="blog">
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
                <a href="#" className="view-btn2"><i className="far fa-eye"></i></a>
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
                <a href="#" className="share-btn"
                  ><i className="fas fa-share-alt"></i
                ></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="single-blog">
              <div className="part-img">
                <img src="https://www.aljazeera.com/wp-content/uploads/2022/10/2022-02-23T220928Z_600397290_UP1EI2N1K1NIB_RTRMADP_3_SOCCER-ENGLAND-LIV-LEE-REPORT.jpg?resize=770%2C513" alt="" />
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
          <div className="col-xl-4 col-lg-6 col-md-8">
            <div className="single-sidebar">
              <div className="popular-news">
                <div className="single-post">
                  <div>
                    <div className="part-img">
                      <img src="https://i.guim.co.uk/img/media/260c12ad3e29378548a80b10edf4beddcfd64a1a/0_114_4026_2416/master/4026.jpg?width=300&quality=85&auto=format&fit=max&s=05c7b9b5adf8983b2b71cecac40613e0" alt="" />
                    </div>
                  </div>
                  <div className="part-text">
                    <a href="#">How could the Premier League resume?</a>
                    <div className="time">
                      <span className="date">29-08-1995</span>
                      <span className="clock">12:00 am</span>
                    </div>
                  </div>
                </div>
                <div className="single-post">
                  <div>
                    <div className="part-img">
                      <img src="https://i.guim.co.uk/img/media/260c12ad3e29378548a80b10edf4beddcfd64a1a/0_114_4026_2416/master/4026.jpg?width=300&quality=85&auto=format&fit=max&s=05c7b9b5adf8983b2b71cecac40613e0" alt="" />
                    </div>
                  </div>
                  <div className="part-text">
                    <a href="#">How could the Premier League resume?</a>
                    <div className="time">
                      <span className="date">29-08-1995</span>
                      <span className="clock">12:00 am</span>
                    </div>
                  </div>
                </div>
                <div className="single-post">
                  <div>
                    <div className="part-img">
                      <img src="https://i.guim.co.uk/img/media/260c12ad3e29378548a80b10edf4beddcfd64a1a/0_114_4026_2416/master/4026.jpg?width=300&quality=85&auto=format&fit=max&s=05c7b9b5adf8983b2b71cecac40613e0" alt="" />
                    </div>
                  </div>
                  <div className="part-text">
                    <a href="#">How could the Premier League resume?</a>
                    <div className="time">
                      <span className="date">29-08-1995</span>
                      <span className="clock">12:00 am</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="vew-more-news bet-btn bet-btn-base">
            <i className="fas fa-redo"></i> See More News
          </a>
        </div>
      </div>
    </div> */}
    {/* <!-- blog end --> */}

    {/* <!-- newsletter begin --> */}
    <div className="newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-xl-11 col-lg-10 d-xl-flex d-lg-flex d-block align-items-center"
          >
            <div className="newsletter-area">
              <div className="part-text">
                <h3 className="sub-title">Get Always Update News</h3>
                <h2>favelabets Newsletter</h2>
              </div>
              <div className="part-form">
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email address here...@"
                  />
                  <button type="submit">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2343/2343805.png"
                      alt=""
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- newsletter end --> */}

    {/* <!-- available-countries begin --> */}
    {/* <div className="available-countries">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8">
            <div className="section-title">
              <h4 className="sub-title">Countries Where We're Available</h4>
              <h2>We're spread all over the world</h2>
              <p>
                Get probable winning tips from professional betting tipsters
                across all sports<br />
                and offers from leading bookmakers! See how it works!
              </p>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-xl-start justify-content-lg-center justify-content-start"
        >
          <div className="col-xl-2 col-lg-1">
          </div>
          <div className="col-xl-8 col-lg-10">
            <div className="flags">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={UnitedKingdom} alt="" />
                    <span>united kingdom</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Germany} alt="" />
                    <span>germany</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={UnitedStates} alt="" />
                    <span>united states</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Brazil} alt="" />
                    <span>brazil</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Sweden} alt="" />
                    <span>sweden</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Canada} alt="" />
                    <span>canada</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Portugal} alt="" />
                    <span>portugal</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Ireland} alt="" />
                    <span>ireland</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={SouthAfrica} alt="" />
                    <span>south africa</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Israel} alt="" />
                    <span>israel</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={SaudiArabia} alt="" />
                    <span>saudi arabia</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Bangladesh} alt="" />
                    <span>bangladesh</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Mauritania} alt="" />
                    <span>mauritania</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Bhutan} alt="" />
                    <span>bhutan</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Tonga} alt="" />
                    <span>tonga</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Niger} alt="" />
                    <span>niger</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={NorfolkIsland} alt="" />
                    <span>norfolk island</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-3 col-sm-2">
                  <div className="single-flag">
                    <img src={Nepal} alt="" />
                    <span>nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <!-- available-countries end --> */}
    <div style={{height: "30px"}}></div>
  </div>
  )
}
