import React from 'react'

export const BreadcrumbTop = ({title}) => {
  return (
    <div className="breadcrumb-betipsta">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7">
                <div className="part-text">
                    <h2 className="title">{title}</h2>
                    <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>{title}</li>
                    </ul>
                </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                <div className="part-img">
                    <img src="" alt="" />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
