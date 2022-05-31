import React from 'react'

export const RegisterSection = () => {
  return (
      <div className="container">
          <div className="row">
              <div className="col-xl-6 offset-xl-3">
                  <div className="utf-login-register-page-aera margin-bottom-50">
                      <div className="utf-welcome-text-item">
                          <h3>Create Your New Account!</h3>
                          <span>Don't Have an Account? <a href="/login">Log In!</a></span>
                      </div>
                      <div className="utf-account-type">
                          <div>
                              <input type="radio" name="utf-account-type-radio" id="freelancer-radio" className="utf-account-type-radio" checked />
                              <label htmlFor="freelancer-radio" title="Employer" data-tippy-placement="top" className="utf-ripple-effect-dark"><i className="icon-material-outline-business-center"></i> Employer</label>
                          </div>
                          <div>
                              <input type="radio" name="utf-account-type-radio" id="employer-radio" className="utf-account-type-radio" />
                              <label htmlFor="employer-radio" title="Candidate" data-tippy-placement="top" className="utf-ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> Candidate</label>
                          </div>
                      </div>

                      <form method="post" id="utf-register-account-form">
                          <div className="utf-no-border">
                              <input type="text" className="utf-with-border" name="name-register" id="name-register" placeholder="User Name" required />
                          </div>
                          <div className="utf-no-border">
                              <input type="text" className="utf-with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Email Address" required />
                          </div>
                          <div className="utf-no-border margin-bottom-18">
                              <select className="selectpicker utf-with-border" data-size="5" title="Select Jobs">
                                  <option>Web Designer</option>
                                  <option>Web Developer</option>
                                  <option>Graphic Designer</option>
                                  <option>Android Developer</option>
                                  <option>IOS Developer</option>
                                  <option>UI/UX Designer</option>
                                  <option>Graphics Designer</option>
                              </select>
                          </div>
                          <div className="utf-no-border">
                              <input type="password" className="utf-with-border" name="password-register" id="password-register" placeholder="Password" required />
                          </div>
                          <div className="utf-no-border">
                              <input type="password" className="utf-with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repeat Password" required />
                          </div>
                          <div className="checkbox margin-top-10">
                              <input type="checkbox" id="two-step0"/>
                                  <label htmlFor="two-step0"><span className="checkbox-icon"></span> I Have Read and Agree to the <a href="/">Terms &amp; Conditions</a></label>
                          </div>
                      </form>
                      <button className="button full-width utf-button-sliding-icon ripple-effect margin-top-10" type="submit">Create An Account <i className="icon-feather-chevron-right"></i></button>
                  </div>
              </div>
          </div>
      </div>
  )
}
