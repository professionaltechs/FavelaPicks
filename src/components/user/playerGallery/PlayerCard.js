import React from 'react'

import {FaThumbsUp, FaArrowDown} from 'react-icons/fa'

export const PlayerCard = ({sourceIMG}) => {
  return (
    <div>
        <img
        src={sourceIMG}
        alt=""
        />
        <button style={{top: "25px", right: "30px", borderRadius: "22%", padding: "7px 7px"}}>
        <FaThumbsUp/> 36
        </button>
        <button style={{bottom: "25px", left: "80px", width: "45px", height: "45px"}}>
        <FaThumbsUp/>
        </button>
        <button style={{bottom: "25px", right: "80px", width: "45px", height: "45px"}}>
        <FaArrowDown/>
        </button>
    </div>
  )
}
