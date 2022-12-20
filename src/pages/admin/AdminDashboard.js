import { Link, useNavigate } from "react-router-dom"
import {FiLogOut} from "react-icons/fi"
import {AiOutlineSearch, AiOutlineDown} from "react-icons/ai"
import {MdOutlineSpaceDashboard, MdOutlineMiscellaneousServices, MdFormatListBulleted, MdOutlineFileUpload} from "react-icons/md"
import {BsCalendar3Event} from 'react-icons/bs'
import { useState } from "react"
import "../../assets/css/adminDashboard.css"
import { UserList } from "../../components/admin/UserList"
import { EventCreate } from "../../components/admin/EventCreate"
import { EventView } from "../../components/admin/EventView"
import { EventEdit } from "../../components/admin/EventEdit"

export const AdminDashboard = () => {
    const [eventDropDown, seteventDropDown] = useState(false);
    const [showComponent, setShowComponent] = useState("userList");
    const [search, setSearch] = useState("");
    const [pop, setPop] = useState(false);

    let Navigate = useNavigate()
    return(
        <>
            <div className="parentContainer">
                    <div>
                        <div>
                            <h2 style={{textAlign:"center", marginTop: "10%", fontSize: "28px", textTransform: "uppercase", color: "#F04E45", fontWeight: "700"}}>Favelapicks</h2>
                            <ul style={{padding: 0, margin: "20% 0", textAlign: "left"}}>
                                <li onClick={ () => {
                                    setShowComponent("userList")
                                    seteventDropDown(false)
                                } }>
                                    <Link>
                                        <BsCalendar3Event size={30}/>
                                        <div style={{display: "flex",alignItems: "center", paddingLeft: "40px", fontSize: "16px"}}>
                                            <span style={{paddingRight: "5px"}}>USERS</span>
                                            <AiOutlineDown size={20}/>
                                        </div>
                                    </Link>
                                </li>
                                {/* <li 
                                    className={(userDropDown && showComponent === "userList") ? "activate" : (userDropDown && showComponent !== "userList") ? "" : "deactivate"} 
                                    onClick = {() => setShowComponent("userList")}
                                    style = {{padding: "10px 20px"}}>
                                    <Link style={{display: "flex",alignItems: "flex-end",paddingLeft: "40px"}}>
                                        <MdOutlineFileUpload size={30}/>
                                        <span >LIST</span>
                                    </Link>
                                </li> */}
                                <li onClick={ () => {
                                    seteventDropDown(!eventDropDown)
                                } }>
                                    <Link>
                                        <BsCalendar3Event size={30}/>
                                        <div style={{display: "flex",alignItems: "center", paddingLeft: "40px", fontSize: "16px"}}>
                                            <span style={{paddingRight: "5px"}}>MEMBERSHIP</span>
                                            {/* <AiOutlineDown size={20} style={{transform: "rotateX(90)"}}/> */}
                                        </div>
                                    </Link>
                                </li>
                                <li 
                                    className={(eventDropDown && showComponent === "eventCreate") ? "activate" : (eventDropDown && showComponent !== "eventCreate") ? "" : "deactivate"} 
                                    onClick = {() => setShowComponent("eventCreate")}
                                    style = {{padding: "10px 20px"}}>
                                    <Link style={{display: "flex",alignItems: "flex-end",paddingLeft: "40px"}}>
                                        <MdOutlineFileUpload size={30}/>
                                        <span >CREATE</span>
                                    </Link>
                                </li>
                                <li 
                                    className={(eventDropDown && showComponent === "eventView") ? "activate" : (eventDropDown && showComponent !== "eventView") ? "" : "deactivate"} 
                                    onClick = {() => setShowComponent("eventView")}
                                    style = {{padding: "10px 20px"}}>
                                    <Link style={{display: "flex", alignItems: "flex-end", paddingLeft: "40px"}}>
                                        <MdFormatListBulleted size={30}/>                                                                                                                                                                                            
                                        <span>VIEW</span>
                                    </Link>
                                </li>
                                <li 
                                    className={(eventDropDown && showComponent === "eventEdit") ? "activate" : (eventDropDown && showComponent !== "eventEdit") ? "" : "deactivate"} 
                                    onClick = {() => setShowComponent("eventEdit")}
                                    style = {{padding: "10px 20px"}}>
                                    <Link style={{display: "flex", alignItems: "flex-end", paddingLeft: "40px"}}>
                                        <MdFormatListBulleted size={30}/>                                                                                                                                                                                            
                                        <span>EDIT</span>
                                    </Link>
                                </li>
                                <li onClick={() => {
                                    localStorage.clear()
                                    Navigate("/adminlogin")
                                }}>
                                    <Link>
                                    <FiLogOut size={30}/>
                                    <span>LOGOUT</span>
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", height: "98vh", width: "80%", borderRadius: "25px"}}>
                            <div style={{display:"flex",justifyContent: "space-between", height: "13vh", alignItems: "center"}}>
                                <h2 style={{paddingLeft: "30px"}}><span style={{color:"#F04E45", fontWeight: "600"}}>Admin Portal</span> </h2>
                                <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "50px"}}>
                                    <div className="border shadow" style={{borderRadius: "10px", padding: "0 8px"}}>
                                        <button style={{height: "40px", padding: "0 10px", border: "none", backgroundColor: "transparent"}}>
                                            <AiOutlineSearch/>
                                        </button>
                                        <input 
                                            style={{height: "40px", padding: "0 10px", border: "none", outline: "none"}} 
                                            placeholder = "Search"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            />
                                    </div>
                                    <div style={{paddingLeft: "30px"}}>
                                        <h5 style={{padding: 0, margin: 0}}>Admin</h5>
                                        {/* <h6 style={{padding: 0, margin: 0}}>customer#2342</h6> */}
                                    </div>
                                    <button onClick={() => {
                                        localStorage.clear()
                                        Navigate("/adminlogin")
                                    }} className="border shadow" style={{ marginLeft: "30px", padding: "5px 10px",backgroundColor: "white", borderRadius: "10px"}}><FiLogOut/></button>
                                </div>
                            </div>

                            <div style={{height: "84vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                {showComponent === "userList" ? <UserList search={search.toLowerCase()}/> : null}
                                {showComponent === "eventCreate" ? <EventCreate search={search.toLowerCase()}/> : null}
                                {showComponent === "eventView" ? <EventView search={search.toLowerCase()}/> : null}
                                {showComponent === "eventEdit" ? <EventEdit search={search.toLowerCase()}/> : null}
                            </div>

                        </div>
                    </div>
            </div>
        </>
    )
}
