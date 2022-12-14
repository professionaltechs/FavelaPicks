import React from 'react'
import { stripeCheckOutFunction } from '../../../functions'
// import StripeCheckoutClass from '../stripe/StripeCheckoutClass'

export const Card = ({daysCycle, price, description, discount, id}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-2 text-center">
        <div className="py-4 px-2">
            <p>{daysCycle} Days <span style={{backgroundColor: discount === "0" ? "yellow" : ""}}>{discount === "0" ? "No Savings" : `Save ${discount}%`}</span></p>
            <h1><span>$</span>{price} <span>USD</span></h1>
            <p style={{color: "white"}}>{description}</p>
            {/* <StripeCheckoutClass/> */}
            
            <button className="btn" onClick={()=>stripeCheckOutFunction(id)}>Purchase</button>
            {/* <form action="/create-checkout-session" method="POST">
                <button type="submit">
                    Checkout
                </button>
            </form> */}
        </div>
    </div>
  )
}