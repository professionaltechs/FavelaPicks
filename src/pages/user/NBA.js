import React from 'react'
import { BreadcrumbTop } from '../../components/user/BreadcrumbTop'
import { LeadershipTable } from '../../components/user/picks/LeadershipTable'
import { NewsContainer } from '../../components/user/picks/NewsContainer'
import { StatsTable } from '../../components/user/picks/StatsTable'

export const NBA = () => {
  return (
    <div>
        <BreadcrumbTop title="Find your tipster"/>
        <NewsContainer categorry="NBA" rssLINK='https://rss.app/feeds/tws8VcDCf1Mkp5or.xml'/>
        <StatsTable/>

        {/* <div className="tipster-list">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-9">
                <div className="section-title">
                <h4 className="sub-title">Our Expert Tipsters</h4>
                <h2>We bring together skilled tipsters</h2>
                <p>
                    Get probable winning tips from professional betting tipsters
                    across all sports<br />
                    and offers from leading bookmakers! See how it works!
                </p>
                </div>
            </div>
            </div>
            <div className="card-slider owl-carousel owl-theme">
            <div>
                <div className="single-tipster">
                <div className="img-cover">
                    <div className="part-img">
                    <img
                        src="assets/img/team_logos/Los_Angeles_Lakers_logo.png"
                        alt=""
                    />
                    <a href="#0" className="taken-btn follow-btn">
                        <span className="text"> Follow </span>
                        <span className="icon">
                        <i className="far fa-bell"></i>
                        </span>
                    </a>
                    <a href="#0" className="taken-btn view-btn">
                        <span className="text"> View </span>
                        <span className="icon">
                        <i className="far fa-eye"></i>
                        </span>
                    </a>
                    </div>
                </div>
                <div className="part-text">
                    <div className="tipster-bio">
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div className="single-tipster">
                <div className="img-cover">
                    <div className="part-img">
                    <img
                        src="assets/img/team_logos/Los_Angeles_Lakers_logo.png"
                        alt=""
                    />
                    <a href="#0" className="taken-btn follow-btn">
                        <span className="text"> Follow </span>
                        <span className="icon">
                        <i className="far fa-bell"></i>
                        </span>
                    </a>
                    <a href="#0" className="taken-btn view-btn">
                        <span className="text"> View </span>
                        <span className="icon">
                        <i className="far fa-eye"></i>
                        </span>
                    </a>
                    </div>
                </div>
                <div className="part-text">
                    <div className="tipster-bio">
                    <span className="tipster-name">Los Angeles Lakers</span>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div className="single-tipster">
                <div className="img-cover">
                    <div className="part-img">
                    <img
                        src="assets/img/team_logos/Los_Angeles_Lakers_logo.png"
                        alt=""
                    />
                    <a href="#0" className="taken-btn follow-btn">
                        <span className="text"> Follow </span>
                        <span className="icon">
                        <i className="far fa-bell"></i>
                        </span>
                    </a>
                    <a href="#0" className="taken-btn view-btn">
                        <span className="text"> View </span>
                        <span className="icon">
                        <i className="far fa-eye"></i>
                        </span>
                    </a>
                    </div>
                </div>
                <div className="part-text">
                    <div className="tipster-bio">
                    <span className="tipster-name">Los Angeles Lakers</span>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div className="single-tipster">
                <div className="img-cover">
                    <div className="part-img">
                    <img
                        src="assets/img/team_logos/Brooklyn_Nets_logo.png"
                        height="140px"
                        width="140px"
                        alt=""
                    />
                    <a href="#0" className="taken-btn follow-btn">
                        <span className="text"> Follow </span>
                        <span className="icon">
                        <i className="far fa-bell"></i>
                        </span>
                    </a>
                    <a href="#0" className="taken-btn view-btn">
                        <span className="text"> View </span>
                        <span className="icon">
                        <i className="far fa-eye"></i>
                        </span>
                    </a>
                    </div>
                </div>
                <div className="part-text">
                    <div className="tipster-bio">
                    <span className="tipster-name">Brooklyn Nets</span>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div className="single-tipster">
                <div className="img-cover">
                    <div className="part-img">
                    <img src="assets/img/team_logos/Boston_Celtics.png" alt="" />
                    <a href="#0" className="taken-btn follow-btn">
                        <span className="text"> Follow </span>
                        <span className="icon">
                        <i className="far fa-bell"></i>
                        </span>
                    </a>
                    <a href="#0" className="taken-btn view-btn">
                        <span className="text"> View </span>
                        <span className="icon">
                        <i className="far fa-eye"></i>
                        </span>
                    </a>
                    </div>
                </div>
                <div className="part-text">
                    <div className="tipster-bio">
                    <span className="tipster-name">Boston Celtics</span>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div className="single-tipster">
                <div className="img-cover">
                    <div className="part-img">
                    <img
                        src="assets/img/team_logos/Toronto_Raptors_logo.png"
                        alt=""
                    />
                    <a href="#0" className="taken-btn follow-btn">
                        <span className="text"> Follow </span>
                        <span className="icon">
                        <i className="far fa-bell"></i>
                        </span>
                    </a>
                    <a href="#0" className="taken-btn view-btn">
                        <span className="text"> View </span>
                        <span className="icon">
                        <i className="far fa-eye"></i>
                        </span>
                    </a>
                    </div>
                </div>
                <div className="part-text">
                    <div className="tipster-bio">
                    <span className="tipster-name">Toronto Raptors</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div> */}

        <LeadershipTable/>
        <div style={{height: "60px"}}></div>
    </div>
  )
}
