import React, {useEffect, useState} from 'react'
import useWindowDimensions from "../../hooks/useWindowDimensions";
import timCook from "../../assets/img/tim-cook.jpg"
import cover from "../../assets/img/cover.jpg"
import { axiosAuthInstance } from '../../axios';


export const UserProfile = () => {
    const { height, width } = useWindowDimensions();

    const preemail = localStorage.getItem("email");

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
        // console.log(name)
        // console.log(email)
        // console.log(password)
        // console.log(contact)
        // console.log(referralId)
        // console.log(websiteURL)
        // console.log(bussinessName)

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

    useEffect(() => {
        axiosAuthInstance({
            method: "post",
            url: "api/user/userDetails",
            data: {
                email: preemail
            }
        }).then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
    }, [])
    

  return (
    <div className='userProfileContainer' style={{padding: width < 1290 ? "0 10px" : "0 0", backgroundImage: `url(${cover})`}}>
        <div style={{flexDirection: width <=768 ? "column" : "row"}}>
            <div className= "border userProfileLeftChild" style={{width: width <= 768 ? "90%" : width < 1000 ? "25%" : width < 1290 ? "30%" : "20%"}}>
                <div style={{height: "9rem", width: "9rem"}}>
                    <img src={timCook} style={{borderRadius: "50%", width: "100%", height: "100%"}}/>
                </div>
                <h3 style={{textAlign: "center", fontSize: "20px", margin: "0"}}>Tim Cook</h3>
                <p style={{textAlign: "center", fontSize: "16px", color: "#A0ACB9"}}>CEO of Apple</p>
                <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                    <div className='border' style={{width: "100%",fontSize: "20px", display: "flex", justifyContent: "space-between", padding: "15px 15px", fontSize: "18px"}}>Opportunities applied <span style={{color: "orange", fontWeight: "bold"}}>32</span></div>
                    <div className='border' style={{width: "100%",fontSize: "20px", display: "flex", justifyContent: "space-between", padding: "15px 15px", fontSize: "18px"}}>Opportunities applied <span style={{color: "orange", fontWeight: "bold"}}>32</span></div>
                    <div className='border' style={{width: "100%",fontSize: "20px", display: "flex", justifyContent: "space-between", padding: "15px 15px", fontSize: "18px"}}>Opportunities applied <span style={{color: "orange", fontWeight: "bold"}}>32</span></div>
                </div>
                <div style={{margin: "0"}}>
                    <button style={{backgroundColor: "#ffffff", color: "grey", marginTop: "20px", border: "1px solid #ccc", borderRadius: "6px", padding: "10px 60px", fontWeight: "600"}}>Edit Profile</button>
                </div>
            </div>
            <div className="border userProfileRightChild" style={{width: width <= 768 ? "90%" : width < 1000 ? "75%" : width < 1290 ? "70%" : "60%"}}>
                <div className='' style={{width: "100%", position: "absolute", flexDirection: "column", top: "0"}}>
                    <h2 style={{padding: "15px", borderBottom: "1px solid #ccc"}}>Profile</h2>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>UserName:</label>
                    <input type="text" placeholder='UserName' value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Email:</label>
                    <input type="text" placeholder='Email' value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Password:</label>
                    <input type="text" placeholder='Password' value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Phone:</label>
                    <input type="text" placeholder='Phone' value={contact} onChange={(e)=>{
                        setContact(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Referal Id:</label>
                    <input type="text" placeholder='Referal' value={referralId} onChange={(e)=>{
                        setReferralId(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Parent Id:</label>
                    <input type="text" placeholder='Parent Id' value={parentId} onChange={(e)=>{
                        setParentId(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Bussiness Name:</label>
                    <input type="text" placeholder='Bussiness Name' value={bussinessName} onChange={(e)=>{
                        setBussinessName(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Website:</label>
                    <input type="text" placeholder='Website' value={websiteURL} onChange={(e)=>{
                        setWebsiteURL(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>City:</label>
                    <input type="text" placeholder='City' value={city} onChange={(e)=>{
                        setCity(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Country:</label>
                    <input type="text" placeholder='Country' value={country} onChange={(e)=>{
                        setCountry(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Postal Code:</label>
                    <input type="text" placeholder='Postal Code' value={postalCode} onChange={(e)=>{
                        setPostalCode(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Street Address:</label>
                    <input type="text" placeholder='Street Address' value={streetAddress} onChange={(e)=>{
                        setStreetAddress(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                <div style={{width: width <= 768 ? "100%" : "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label style={{marginBottom: "4px", fontWeight: "500", fontSize: "18px"}}>Fax:</label>
                    <input type="text" placeholder='Fax' value={fax} onChange={(e)=>{
                        setFax(e.target.value)
                    }} style={{border: "1.5px solid #CBD5E0", borderRadius: "5px", padding: " 8px 16px"}}/>
                </div>
                {/* <div style={{width: "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label>City</label>
                    <select id="cars" name="cars" style={{padding: "6px 15px"}}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div style={{width: "50%", display: "flex", flexDirection: "column", padding: "15px 15px 0 15px"}}>
                    <label>City</label>
                    <select style={{padding: "6px 15px"}}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div> */}
                <div className='' style={{width: "100%", position: "absolute", flexDirection: "column", bottom: "0", borderTop: "1px solid #ccc"}}>
                    <button className='btn-success' onClick={(e)=> handleSubmit(e)} style={{margin: "10px", borderRadius: "6px", border: "none", padding: "10px 22px"}}>Update</button>
                </div>
            </div>
        </div>
        {/* <div className="img">
            <img src="./tim-cook-modified.png" alt=""/>
            <p style={{textAlign: "center", fontSize: "21px", fontWeight: "bolder"}}>Tim Cook<br/><span style={{color: "grey", fontSize: "17px"}}>Ceo People</span></p><br/>
            <hr/>
            <span className="lusi">Opportunities applied <span style={{color: "orange", fontWeight: "bold"}}>32</span></span>
            <hr/>
            <span className="lusi">Opportunities Won<span style={{color: "green", fontWeight: "bold"}}>32</span></span>
            <hr/>
            <span className="lusi">Current Opportunities <span style={{color: "green", fontWeight: "bold"}}>32</span></span>
            <hr/><br/><br/>
            <a className="zinda"href="#">View public profile</a>
            <a className="margaya" href="#">https://www.youtube.com</a><br/><button className="email"><i className="fa-solid fa-envelope"></i></button>
        </div> */}
        {/* <div className="quara">
            <div className="start">
                <span className="intro"><a href="#">Account Setting</a></span>
                <span className="intro"><a href="#">Account Setting</a></span>
                <span className="intro"><a href="#">Account Setting</a></span>
            </div>
            <hr/>
            <div className="container">
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="Enter your name" required/>
                            </div>
                            <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="Enter your username" required/>
                            </div>
                            <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter your email" required/>
                            </div>
                            <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" placeholder="Enter your number" required/>
                            </div>
                            <div className="input-box">
                            <span className="details">City</span>
                            <select id="cars" name="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="input-box">
                            <span className="details">Country</span>
                            <select id="cars" name="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                        <div className="btn-style">
                            <button className="updated">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> */}
    </div>
  )
}
