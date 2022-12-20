import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from '../../assets/img/footbal_in_stadium.jpg'
import { axiosInstance } from "../../axios";

export const AdminLogin = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        axiosInstance({
            method: "post",
            url: "/api/admin/signIn",
            data: {
                email,
                password
            }
        }).then(res => {
            console.log(res);
            setMessage(res.data.message);
            if(res.data.status === "success"){
                navigate("/admindashboard")
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div style={{display: "grid", gridTemplateColumns: "65vw 35vw", position: "relative", textAlign: "center"}}>
            <div className="item">
                <div style={{ marginTop: "15%", textAlign: "center" }}>
                    <h1 style={{ fontWeight: "600", color: "#EE4048" }}>ADMIN LOGIN</h1>
                        <div style={{ margin: "3%" }}>
                            <label style={{ color: "#8f8f8f" }}>EMAIL</label><br />
                            <input style={{ border: "none", borderBottom: "1px solid #8f8f8f", padding: "1%", width: "45%" }}
                                type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div style={{ margin: "3%" }}>
                            <label style={{ color: "#8f8f8f" }}>PASSWORD</label><br />
                            <input style={{ border: "none", borderBottom: "1px solid #8f8f8f", padding: "1%", width: "45%" }}
                                type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div style={{ marginTop: "2%", color: "#8f8f8f" }}>
                            Forget Password?
                        </div>
                        <div style={{ marginTop: "3%" }}>
                            <button
                                onClick={(event) => {handleSubmit(event)}}
                                className="signIn-fill"
                                style={{ width: "45%", padding: "1.5%", backgroundColor: "#EE4048", color: "white", borderRadius: "2rem", border: "none" }}>SIGN
                                IN</button>
                        </div>
                        <h3>{message}</h3>
                </div>
            </div>
            <div className="item">
                <div className="login-cover"
                    style={{
                        backgroundImage:
                            `linear-gradient(90deg, rgba(0, 0, 0, 0.4826681014202556) 0%, rgba(0, 0, 0, 0.7878781854538691) 100%, rgba(0, 0, 0, 1) 100%),url(${banner})`, height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "right top"
                    }}
                    >
                    {/* <div>
                        <h1 style={{ color: "white", paddingTop: "15%" }}>New Here?</h1>
                        <p style={{ color: "white", fontSize: "18px", marginTop: "2%" }}>Sign Up</p>
                        <div style={{ marginTop: "80%" }}>
                            <button onClick={() => navigate("/signup")}
                                className="signUp-trans"
                                style={{ width: "70%", padding: "2%", border: "2px solid white", color: "white", backgroundColor: "transparent", borderRadius: "2rem" }}>Sign
                                Up</button>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
