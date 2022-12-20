import React, {useEffect, useState, useContext} from 'react'
import useWindowDimensions from "../../hooks/useWindowDimensions";
import timCook from "../../assets/img/tim-cook.jpg"
import cover from "../../assets/img/cover.jpg"
import { axiosAuthInstance } from '../../axios';
import { Edit } from '../../components/user/userProfile/Edit';
import { View } from '../../components/user/userProfile/View';
import Moment from 'react-moment';
import {UserContext} from '../../authContext/AuthProvider'
import { NavBar } from '../../components/user/NavBar';
import { Footer } from '../../components/user/Footer';

export const UserProfile = () => {
    const { height, width } = useWindowDimensions();

    const {user} = useContext(UserContext)

    console.log(user)

    const [currentUser, setCurrentUser] = useState({});
    const [membership, setMembership] = useState({});

    const preemail = localStorage.getItem("email");
    const [current, setCurrent] = useState("view")

    useEffect(() => {
        axiosAuthInstance({
            method: "post",
            url: "api/user/userDetails",
        }).then(res => {
            console.log(res.data)
            setMembership(res.data.membership)
            setCurrentUser(res.data.user)
        }).catch(err => console.log(err))
    }, [])
    

  return (
    <>
        <NavBar/>
        <div className='userProfileContainer' style={{padding: width < 1290 ? "0 10px" : "0 0", backgroundImage: `url(${cover})`}}>
            <div style={{flexDirection: width <=768 ? "column" : "row"}}>
                <div className= "border userProfileLeftChild" style={{width: width <= 768 ? "90%" : width < 1000 ? "25%" : width < 1290 ? "30%" : "20%"}}>
                    <div style={{height: "9rem", width: "9rem"}}>
                        <img src={timCook} style={{borderRadius: "50%", width: "100%", height: "100%"}}/>
                    </div>
                    <h3 style={{textAlign: "center", fontSize: "20px", margin: "6px 0px 0px 0px"}}>{currentUser?.name}</h3>
                    <p style={{textAlign: "center", fontSize: "16px", color: "#A0ACB9"}}>Member</p>
                    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                        <div className='border' style={{width: "100%",fontSize: "20px", display: "flex", justifyContent: "space-between", padding: "15px 15px", fontSize: "18px"}}>Membership Type 
                            <span style={{color: "orange", fontWeight: "bold"}}>{
                                (new Date(membership.validityDate).getTime() > new Date().getTime()) ? "PREMIUM" : "FREE"
                            }</span>
                        </div>
                        {membership ? <div className='border' style={{width: "100%",fontSize: "20px", display: "flex", justifyContent: "space-between", padding: "15px 15px", fontSize: "18px"}}>Membership Validity 
                            <span style={{color: "orange", fontWeight: "bold"}}>
                                <Moment format="YYYY/MM/DD" >
                                    {membership?.validityDate}
                                    {/* 1671480963907 */}
                                </Moment>
                            </span>
                        </div> : null
                        }
                        <div className='border' style={{width: "100%",fontSize: "20px", display: "flex", justifyContent: "space-between", padding: "15px 15px", fontSize: "18px"}}>Membership Status 
                            <span style={{color: "orange", fontWeight: "bold"}}>{
                                user.membershipStatus == 1 ? "VALID" : "EXPIRED"
                            }</span>
                        </div>
                        {/* <div className='border' style={{width: "100%",fontSize: "20px", display: "flex", justifyContent: "space-between", padding: "15px 15px", fontSize: "18px"}}>Opportunities applied <span style={{color: "orange", fontWeight: "bold"}}>32</span></div> */}
                    </div>
                    <div style={{margin: "0"}}>
                        {current === "view" ? <button onClick={()=>setCurrent("edit")} style={{backgroundColor: "#ffffff", color: "grey", marginTop: "20px", border: "1px solid #ccc", borderRadius: "6px", padding: "10px 60px", fontWeight: "600"}}>Edit Profile</button> : null}
                        {current === "edit" ? <button onClick={()=>setCurrent("view")} style={{backgroundColor: "#ffffff", color: "grey", marginTop: "20px", border: "1px solid #ccc", borderRadius: "6px", padding: "10px 60px", fontWeight: "600"}}>View Profile</button> : null}
                    </div>
                </div>
                {current === "edit" ? <Edit/> : <View currentUser={currentUser}/>}
            </div>
        </div>
        <Footer/>
    </>
  )
}
