import React, {useState} from 'react'
import { axiosAuthInstance } from '../../../axios';
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export const Edit = () => {
    const { height, width } = useWindowDimensions();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [referralId, setReferralId] = useState("");
    const [parentId, setParentId] = useState("");
  
    const [bussinessName, setBussinessName] = useState("");
    const [websiteURL, setWebsiteURL] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [fax, setFax] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === "" || email === "" || password === "" || contact === "" || referralId === "" || parentId === "" || bussinessName === "" || websiteURL === "" || country === "" || city === "" || postalCode === "" || streetAddress === "" || fax  === ""){
            alert("pls fill up all fields")
        }else{
            axiosAuthInstance({
                method: "post",
                url: "api/user/editDetails",
                data: {
                    name,
                    email,
                    password,
                    contact,
                    referralId,
                    parentId,
                    bussinessName,
                    websiteURL,
                    country,
                    city,
                    postalCode,
                    streetAddress,
                    fax
                }
            }).then(res => {
                console.log(res)
            }).catch(err => console.log(err))
        }
    }
  return (
    <div className="border userProfileRightChild" style={{width: width <= 768 ? "90%" : width < 1000 ? "75%" : width < 1290 ? "70%" : "60%"}}>
        <div className='' style={{width: "100%", position: "absolute", flexDirection: "column", top: "0"}}>
            <h2 style={{padding: "15px", borderBottom: "1px solid #ccc"}}>Profile</h2>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>UserName:</label>
            <input required type="text" placeholder='UserName' value={name} onChange={(e)=>{
                setName(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Email:</label>
            <input required type="text" placeholder='Email' value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Password:</label>
            <input required type="text" placeholder='Password' value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Phone:</label>
            <input required type="text" placeholder='Phone' value={contact} onChange={(e)=>{
                setContact(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Referal Id:</label>
            <input required type="text" placeholder='Referal' value={referralId} onChange={(e)=>{
                setReferralId(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Parent Id:</label>
            <input required type="text" placeholder='Parent Id' value={parentId} onChange={(e)=>{
                setParentId(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Bussiness Name:</label>
            <input required type="text" placeholder='Bussiness Name' value={bussinessName} onChange={(e)=>{
                setBussinessName(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Website:</label>
            <input required type="text" placeholder='Website' value={websiteURL} onChange={(e)=>{
                setWebsiteURL(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>City:</label>
            <input required type="text" placeholder='City' value={city} onChange={(e)=>{
                setCity(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Country:</label>
            <input required type="text" placeholder='Country' value={country} onChange={(e)=>{
                setCountry(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Postal Code:</label>
            <input required type="text" placeholder='Postal Code' value={postalCode} onChange={(e)=>{
                setPostalCode(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Street Address:</label>
            <input required type="text" placeholder='Street Address' value={streetAddress} onChange={(e)=>{
                setStreetAddress(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
            <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Fax:</label>
            <input required type="text" placeholder='Fax' value={fax} onChange={(e)=>{
                setFax(e.target.value)
            }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
        </div>
        <div className='' style={{width: "100%", position: "absolute", flexDirection: "column", bottom: "0", borderTop: "1px solid #ccc"}}>
            <button className='btn-success' onClick={(e)=> handleSubmit(e)} style={{margin: "10px", borderRadius: "6px", border: "none", padding: "10px 22px"}}>Update</button>
        </div>
    </div>
  )
}
