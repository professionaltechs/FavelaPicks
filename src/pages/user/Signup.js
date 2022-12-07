import React from 'react'
import { BreadcrumbTop } from '../../components/user/BreadcrumbTop'

export const Signup = () => {
  return (
    <div>
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
              <form>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <h4 className="sub-title">Personal Information</h4>
                    <input type="text" placeholder="First Name*" />
                    <input type="text" placeholder="Last Name*" />
                    <input type="email" placeholder="Email*" />
                    <input type="text" placeholder="Phone No:*" />
                    <input type="text" placeholder="Choose Your Referral ID*" />
                    <input type="text" placeholder="Parent ID*" />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 additional-info">
                    <h4 className="sub-title">Additional Information</h4>
                    <input type="text" placeholder="Business Name*" />
                    <input
                      type="text"
                      placeholder="Website URL (where applicable)*"
                    />
                    <input type="email" placeholder="Country*" />
                    <div className="row">
                      <div className="col-xl-6 col-lg-6">
                        <input type="text" placeholder="City*" />
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <input type="text" placeholder="Postal Code*" />
                      </div>
                    </div>
                    <input type="text" placeholder="Street Address*" />
                    <input type="text" placeholder="Fax*" />
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
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        id="exampleRadios5"
                        value="option2"
                      />
                      <label className="form-check-label" for="exampleRadios5">
                        I agree to the terms &amp; conditions.
                      </label>
                      <p>
                        (*) We will never share your personal information with third
                        parties.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <button className="def-btn btn-form w-100">
                      Secure Sign Up <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-12 col-lg-6 my-1 my-lg-0">
                    <a
                      className="btn btn-outline-dark w-100 px-4 py-3"
                      href="/users/googleauth"
                      role="button"
                      style={{textTransform: "none", width: "230px"}}
                    >
                      <img
                        width="20px"
                        style={{marginBottom: "3px", marginRight: "5px"}}
                        alt="Google sign-in"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                      />
                      Login with Google
                    </a>
                  </div>
                  <div className="col-12 col-lg-6 my-1 my-lg-0">
                    <a
                      className="btn px-3 py-3 w-100"
                      style={{backgroundColor: "#1877f2", color: "white", textTransform: "none"}}
                      href="#"
                      role="button"
                    >
                      <i
                        className="fa-brands fa-lg fa-facebook"
                        style={{color: "white"}}
                      ></i>
                      <span className="px-2">Login with Facebook</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}
