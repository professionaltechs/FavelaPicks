import React, { useState } from 'react'
import { BreadcrumbTop } from '../../components/user/BreadcrumbTop'
import { GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { auth } from '../../auth/firebase';
import { axiosInstance } from '../../axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {
  let Navigate = useNavigate();
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
  const notifySuccess = () => toast("You need to agree to terms and conditions!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const [check, setCheck] = useState(false);
  console.log(check)

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

  const googleSignUp = ()=>{
    console.log("_______________---------------------")
    if(check==false){
      notify()
    }else{
      var provider = new GoogleAuthProvider();
      signInWithPopup(auth,provider).then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user)
      axiosInstance({
        method: "post",
        url: "/api/user/",
        data: {
          mod: 1,
          name: user.displayName,
          email: user.email,
          userId: user.uid
        }
      }).then(res => {
        console.log(res)
        if(res.data.status === "success"){
          Navigate("/")
        }
      }).catch(err => {console.log(err)})
  
      }).catch((err)=>{console.log(err)})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(check==false){
      notify()
    }else{
      console.log("here")
      console.log(name)
      console.log(email)
      console.log(password)
      console.log(contact)
      console.log(referralId)
      console.log(parentId)
      console.log(bussinessName)
      console.log(websiteURL)
      console.log(country)
      console.log(city)
      console.log(postalCode)
      console.log(streetAddress)
      console.log(fax)
  
      axiosInstance({
        method: "post",
        url: "/api/user/",
        data: {
          mod: 0,
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
      }).then((res => {
        console.log(res)
        setName("")
        setEmail("")
        setPassword("")
        setContact("")
        setReferralId("")
        setParentId("")
        setBussinessName("")
        setCity("")
        setCountry("")
        setFax("")
        setStreetAddress("")
        setPostalCode("")
        setWebsiteURL("")
        if(res.data.status === "success"){
          notifySuccess()
          Navigate("/")
        }
      })).catch(err => {
        console.log(err)
      })
    }
  }

  return (
    <div>
        <ToastContainer/>
        {/* <div className="preloader">
          <img src="assets/img/logo_favelabets.png" alt="" />
        </div> */}
        {/* <!-- preloader end --> */}
        
        {/* <!-- breadcrumb begin --> */}
        <BreadcrumbTop title="Registration"/>
        
        <div className="register">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-9">
                <div className="section-title">
                  <h4 className="sub-title">Signup To Enter</h4>
                  <h2>Create a free account</h2>
                  <p>
                    Get probable winning tips from professional betting tipsters
                    across all sports<br />
                    and offers from leading bookmakers! See how it works!
                  </p>
                </div>
              </div>
            </div>
            <div className="reg-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <h4 className="sub-title">Personal Information</h4>
                    <input required type="text" placeholder="User Name*" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="Email*" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input required type="password" placeholder="Password*" value={password} onChange={e => setPassword(e.target.value)}/>
                    <input required type="text" placeholder="Phone No:*" value={contact} onChange={e => setContact(e.target.value)}/>
                    <input required type="text" placeholder="Choose Your Referral ID" value={referralId} onChange={e => setReferralId(e.target.value)}/>
                    <input required type="text" placeholder="Parent ID" value={parentId} onChange={e => setParentId(e.target.value)}/>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 additional-info">
                    <h4 className="sub-title">Additional Information</h4>
                    <input required type="text" placeholder="Business Name*" value={bussinessName} onChange={e => setBussinessName(e.target.value)}/>
                    <input required
                      type="text"
                      placeholder="Website URL (where applicable)*"value={websiteURL} onChange={e => setWebsiteURL(e.target.value)}
                    />
                    <input required type="text" placeholder="Country*" value={country} onChange={e => setCountry(e.target.value)}/>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <input required type="text" placeholder="City*" value={city} onChange={e => setCity(e.target.value)}/>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <input required type="text" placeholder="Postal Code*" value={postalCode} onChange={e => setPostalCode(e.target.value)}/>
                      </div>
                    </div>
                    <input required type="text" placeholder="Street Address*" value={streetAddress} onChange={e => setStreetAddress(e.target.value)}/>
                    <input required type="text" placeholder="Fax*" value={fax} onChange={e => setFax(e.target.value)}/>
                  </div>
                </div>
                <div className="term-condition">
                  <h4 className="title">Terms and Conditions</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="form-check" >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        id="exampleRadios5"
                        value="option2"
                        checked = {check}
                        onChange={()=>{
                          setCheck(prevStat=> !prevStat)
                        }}
                      />
                      <label className="form-check-label" onClick={()=>{
                          setCheck(prevStat=> !prevStat)
                        }} style={{display: "inline"}}>
                        I agree to the terms &amp; conditions.
                      </label>
                      <p>
                        (*) We will never share your personal information with third
                        parties.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <button type='submit' className="def-btn btn-form w-100">
                      Secure Sign Up <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-12 col-lg-6 my-1 my-lg-0">
                    <button
                      type='button'
                      onClick={googleSignUp}
                      className="btn btn-outline-dark w-100 px-4 py-3"
                      style={{textTransform: "none", width: "230px"}}
                    >
                      <img
                        width="20px"
                        style={{marginBottom: "3px", marginRight: "5px"}}
                        alt="Google sign-in"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                      />
                      SignUp with Google
                    </button>
                  </div>
                  <div className="col-12 col-lg-6 my-1 my-lg-0">
                    <button
                      type='button'
                      className="btn px-3 py-3 w-100"
                      style={{backgroundColor: "#1877f2", color: "white", textTransform: "none"}}
                    >
                      <i
                        className="fa-brands fa-lg fa-facebook"
                        style={{color: "white"}}
                      ></i>
                      <span className="px-2">SignUp with Facebook</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}
