import React, {useState} from 'react'
import { axiosAuthInstance } from '../../../axios';
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export const View = ({currentUser}) => {
    const { height, width } = useWindowDimensions();

  return (
    <div className="border userProfileRightChild" style={{width: width <= 768 ? "90%" : width < 1000 ? "75%" : width < 1290 ? "70%" : "60%"}}>
        <div className='' style={{width: "100%", position: "absolute", flexDirection: "column", top: "0"}}>
            <h2 style={{padding: "15px", borderBottom: "1px solid #ccc"}}>Profile</h2>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>UserName:</label>
            <h5>{currentUser.name}</h5>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>Email:</label>
            <h5>{currentUser.email}</h5>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>Phone:</label>
            <h5>{currentUser.contact ? currentUser.contact : "not provided"}</h5>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>Referal Id:</label>
            <h5>{currentUser.referralId ? currentUser.referralId : "not provided"}</h5>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>Parent Id:</label>
            <h5>{currentUser.parentId ? currentUser.parentId : "not provided"}</h5>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>Bussiness Name:</label>
            <h5>{currentUser.bussinessName ? currentUser.bussinessName : "not provided"}</h5>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>Website:</label>
            <h5>{currentUser.websiteURL ? currentUser.websiteURL : "not provided"}</h5>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>City:</label>
            <h5>{currentUser.city ? currentUser.city : "not provided"}</h5>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>Country:</label>
            <h5>{currentUser.country ? currentUser.country : "not provided"}</h5>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>Postal Code:</label>
            <h5>{currentUser.postalCode ? currentUser.postalCode : "not provided"}</h5><h3></h3>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>Street Address:</label>
            <h5>{currentUser.streetAddress ? currentUser.streetAddress : "not provided"}</h5>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{ fontWeight: "500", fontSize: "18px"}}>Fax:</label>
            <h5>{currentUser.fax ? currentUser.fax : "not provided"}</h5>
        </div>
        <div className='' style={{width: "100%", position: "absolute", flexDirection: "column", bottom: "50px", borderTop: "1px solid #ccc"}}>
            {/* <button className='btn-success' onClick={(e)=> handleSubmit(e)} style={{margin: "10px", borderRadius: "6px", border: "none", padding: "10px 22px"}}>Update</button> */}
        </div>
    </div>
  )
}
