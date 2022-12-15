import React, { useState } from 'react'
import { stripeCheckOutFunction } from '../../../functions'

export const Card = ({daysCycle, price, description, discount, id}) => {
  const email = localStorage.getItem("email");
  const [open, setOpen] = useState(false);
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-2 text-center">
        <div className="py-4 px-2">
            <p>{daysCycle} Days <span style={{backgroundColor: discount === "0" ? "yellow" : ""}}>{discount === "0" ? "No Savings" : `Save ${discount}%`}</span></p>
            <h1><span>$</span>{price} <span>USD</span></h1>
            <p style={{color: "white"}}>{description}</p>   
            <button className="btn" onClick={()=>setOpen(true)}>Purchase</button>

            <div className={open ? "activeModal" : "deactiavte"}>
              <div style={{width:"30vh", height: "34vh", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRadius: "13px",}}>
                <button className='derive' onClick={()=>{email !== null || email !== "" ? stripeCheckOutFunction(id) : alert("Kindly Login First")}}>Stripe</button>
                <button className='don' onClick={()=> {
                  email !== null || email !== "" ?
                  window.location.href = `https://backend.favelapicks.com/paypal/${id}`
                  : alert("Kindly Login First")
                } }>Paypal</button>
                <button className='shah' onClick={()=>setOpen(false)}>Cancel</button>
              </div>
            </div>
        </div>

    </div>
  )
}