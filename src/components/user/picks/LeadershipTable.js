import React from 'react'
import { Link } from 'react-router-dom'
import messiPROFILE from '../../../assets/img/testimonial/Lionel_Messi.jpg'

export const LeadershipTable = () => {
  return (
    <div className="leaderboard tipster-page">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12">
                <div className="leaderboard-table">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Players</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1<span className="rank-number"> st</span></th>
                        <td>
                        <a href="#0" className="tipster-pic">
                            <img src={messiPROFILE} alt="" />
                        </a>
                        </td>
                        <td>
                        <span className="profit"> Lionel Messi </span>
                        </td>
                        <td>
                        <Link to="/playerGallery" className="buy-tips-btn"> View Gallery </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2<span className="rank-number"> nd</span></th>
                        <td>
                        <a href="#0" className="tipster-pic">
                            <img src={messiPROFILE} alt="" />
                        </a>
                        </td>
                        <td>
                        <span className="profit"> Cristiano Ronaldo </span>
                        </td>
                        <td>
                            <Link to="/playerGallery" className="buy-tips-btn"> View Gallery </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3<span className="rank-number"> rd</span></th>
                        <td>
                        <a href="#0" className="tipster-pic">
                            <img src={messiPROFILE} alt="" />
                        </a>
                        </td>
                        <td>
                        <span className="profit"> Muhammad Salah </span>
                        </td>
                        <td>
                            <Link to="/playerGallery" className="buy-tips-btn"> View Gallery </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4<span className="rank-number"> th</span></th>
                        <td>
                        <a href="#0" className="tipster-pic">
                            <img src={messiPROFILE} alt="" />
                        </a>
                        </td>
                        <td>
                        <span className="profit"> Benzema </span>
                        </td>
                        <td>
                            <Link to="/playerGallery" className="buy-tips-btn"> View Gallery </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5<span className="rank-number"> th</span></th>
                        <td>
                        <a href="#0" className="tipster-pic">
                            <img src={messiPROFILE} alt="" />
                        </a>
                        </td>
                        <td>
                        <span className="profit"> Neymar </span>
                        </td>
                        <td>
                            <Link to="/playerGallery" className="buy-tips-btn"> View Gallery </Link>
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
  )
}
