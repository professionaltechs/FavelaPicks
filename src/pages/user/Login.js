import React, { useContext, useState, useEffect } from "react";
import { axiosInstance } from "../../axios";
import { BreadcrumbTop } from "../../components/user/BreadcrumbTop";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from "../../authContext/AuthProvider";
import { NavBar } from "../../components/user/NavBar";
import { Footer } from "../../components/user/Footer";

export const Login = () => {
  const {user, setUser} = useContext(UserContext);

  const notify = () => toast("You need to agree to terms and conditions!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  const wrongCredentials = () => toast("Please provide correct credentials.", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  let Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const googleSignUp = () => {
    var provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        axiosInstance({
          method: "post",
          url: "/api/user/signIn",
          data: {
            mod: 1,
            name: user.displayName,
            email: user.email,
            userId: user.uid,
          },
        })
          .then((res) => {
            console.log(res);
            if (res.data.status === "success") {
              localStorage.setItem("isLoggedIn", "true");
              localStorage.setItem("userName", user.displayName);
              localStorage.setItem("email", user.email);
              localStorage.setItem("token", res.data.token);
              setUser(prevStat=>{
                return {
                  ...prevStat,
                  isLoggedIn: true,
                  userName: user.displayName,
                  email: user.email,
                  token: res.data.token
                }
              })
              Navigate("/home");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    console.log(check);
    e.preventDefault();
    axiosInstance({
      method: "post",
      url: "/api/user/signIn",
      data: {
        mod: 0,
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userName", res.data.Data.name);
          localStorage.setItem("email", res.data.Data.email);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("membershipStatus", res.data.Data.membershipStatus);
          setUser(prevStat => {
            return {
              ...prevStat,
              isLoggedIn: true,
              userName: res.data.Data.name,
              email: res.data.Data.email,
              token: res.data.token,
              membershipStatus: res.data.Data.membershipStatus
            }
          })
          Navigate("/home");
        }
        else{
          wrongCredentials()
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <NavBar/>
      <div>
        <ToastContainer/>
        <BreadcrumbTop title="User login" />
        <div className="register">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-9">
                <div className="section-title">
                  <h4 className="sub-title">Login To Enter</h4>
                  <h2>Enter into your account</h2>
                  <p>
                    Get probable winning tips from professional betting tipsters
                    across all sports
                    <br />
                    and offers from leading bookmakers! See how it works!
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6">
                <div className="reg-body login">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="bottom-part">
                      <div className="row">
                        <div className="col-xl-7 col-lg-7 d-xl-flex d-lg-flex d-block align-items-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="exampleRadios"
                              id="exampleRadios5"
                              value="option2"
                              checked={check}
                              onChange={()=>{
                                setCheck(prevStat=> !prevStat)
                              }}
                            />
                            <label className="form-check-label" onClick={()=>{
                              setCheck(prevStat=> !prevStat)
                            }}>
                              Remember password
                            </label>
                            <p>
                              <Link to="/signup" className="sign-up">
                                Create a account
                              </Link>
                              <a href="registration.html">Forgot password?</a>
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 text-right">
                          <button
                            onClick={(e) => handleSubmit(e)}
                            type="submit"
                            className="def-btn btn-form w-100"
                          >
                            Login<i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                      <div className="row text-center">
                        <div className="col-12 col-lg-6 my-1 my-lg-0">
                          <button
                            onClick={googleSignUp}
                            className="btn btn-outline-dark w-100 px-4 py-3"
                            style={{ textTransform: "none", width: "230px" }}
                          >
                            <img
                              width="20px"
                              style={{ marginBottom: "3px", marginRight: "5px" }}
                              alt="Google sign-in"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                            />
                            Login with Google
                          </button>
                        </div>
                        <div className="col-12 col-lg-6 my-1 my-lg-0">
                          <a
                            className="btn px-3 py-3 w-100"
                            style={{
                              backgroundColor: "#1877F2",
                              color: "white",
                              textTransform: "none",
                            }}
                            href="#"
                            role="button"
                          >
                            <i
                              className="fa-brands fa-lg fa-facebook"
                              style={{ color: "white" }}
                            ></i>
                            <span className="px-2">Login with Facebook</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
