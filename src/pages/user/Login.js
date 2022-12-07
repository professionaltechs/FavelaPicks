import React from 'react'
import { BreadcrumbTop } from '../../components/user/BreadcrumbTop'

export const Login = () => {
  return (
    <div>
      <BreadcrumbTop title="User login"/>
      <div className="register">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-9">
              <div className="section-title">
                <h4 className="sub-title">
                  Login To Enter
                </h4>
                <h2>Enter into your account</h2>
                <p>Get probable winning tips from professional betting tipsters across all sports<br />
                  and offers from leading bookmakers! See how it works!</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="reg-body login">
                <form>
                  <input type="text" placeholder="Username"/>
                  <input type="password" placeholder="Password"/>
                  <div className="bottom-part">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 d-xl-flex d-lg-flex d-block align-items-center">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios5"
                            value="option2" />
                          <label className="form-check-label">
                            Remember password
                          </label>
                          <p>
                            <a href="registration.html" className="sign-up">Create a account</a>
                            <a href="registration.html">Forgot password?</a>
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-5 text-right">
                        <button className="def-btn btn-form w-100">Login<i className="fas fa-arrow-right"></i></button>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-12 col-lg-6 my-1 my-lg-0">
                        <a className="btn btn-outline-dark w-100 px-4 py-3" href="/users/googleauth" role="button" style={{textTransform:"none", width: "230px"}}>
                          <img width="20px" style={{marginBottom:"3px", marginRight:"5px"}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                          Login with Google
                        </a>
                      </div>
                      <div className="col-12 col-lg-6 my-1 my-lg-0">
                        <a className="btn px-3 py-3 w-100" style={{backgroundColor: "#1877F2", color: "white", textTransform:"none"}} href="#" role="button">
                          <i className="fa-brands fa-lg fa-facebook" style={{color: "white"}}></i>
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
  )
}
