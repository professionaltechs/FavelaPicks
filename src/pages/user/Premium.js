import React from 'react'

export const Premium = () => {
  return (
    <div>
        <div className="plans">
        <video autoPlay muted loop id="myVideo">
            <source src="https://global-uploads.webflow.com/60b68dbdc9283512ab5ec8d5/60d52584a28b84623c6ceaa6_IMG_0448-transcode.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <h1>MEMBERSHIPS</h1>
        <div className="container m-auto row px-5">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-2 text-center">
            <div className="py-4 px-2">
                <p>7 Days <span style={{backgroundColor: "yellow"}}>No Savings</span></p>
                <h1><span>$</span>150 <span>USD</span></h1>
                <p style={{color: "white"}}>Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays.</p>
                <button className="btn">Purchase</button>
            </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-2 text-center">
            <div className="py-4 px-2">
                <p>7 Days <span>Save 33%</span></p>
                <h1><span>$</span>150 <span>USD</span></h1>
                <p style={{color: "white"}}>Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays.</p>
                <button className="btn">Purchase</button>
            </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-2 text-center">
            <div className="py-4 px-2">
                <p>7 Days <span>Save 33%</span></p>
                <h1><span>$</span>150 <span>USD</span></h1>
                <p style={{color: "white"}}>Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays.</p>
                <button className="btn">Purchase</button>
            </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-2 text-center">
            <div className="py-4 px-2">
                <p>7 Days <span>Save 33%</span></p>
                <h1><span>$</span>150 <span>USD</span></h1>
                <p style={{color: "white"}}>Access To Daily Selections Including Guaranteed Picks, Straight Picks, And Duck Parlays.</p>
                <button className="btn">Purchase</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
