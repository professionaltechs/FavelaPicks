import React from "react";
import Moment from 'react-moment';


export const NewsBox = ({ width , background, title, date, categorry, description, sourceLink }) => {
  return (
    <div className="mb-2" style={{ width: width, display: 'flex' }}>
      <div className='newsBottomImg'>
        <a href={sourceLink}>
            <div
            style={{
                background: `url(${background}) center center no-repeat`,
                backgroundSize: 'cover',
                width: width == "50%" ? "180px" : "130px",
                height: width == "50%" ? "180px" : "130px",
                border: '1px solid black',
            }}
            ></div>
        </a>
      </div>
      <div className="newsBottomText mx-3">
        <a href={sourceLink}><h5>{title}</h5></a>
        <h6>
          <span>{categorry}</span><Moment format="DD/MM/YYYY">{date}</Moment>
        </h6>
        <p>{description}</p>
      </div>
    </div>
  );
};
