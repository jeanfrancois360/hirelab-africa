import React from 'react'

export const LoginSection = () => {
  return (
      <div className="container">
          <div className="row">
              <div className="col-xl-6 offset-xl-3">
                  <div className="utf-login-register-page-aera margin-bottom-50">
                      <div className="utf-welcome-text-item">
                          <h3>Welcome Back Sign in to Continue</h3>
                          <span>Don't Have an Account? <a href="/register">Sign Up!</a></span>
                      </div>
                      <form method="post" id="login-form">
                          <div className="utf-no-border">
                              <input type="text" className="utf-with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required />
                          </div>
                          <div className="utf-no-border">
                              <input type="password" className="utf-with-border" name="password" id="password" placeholder="Password" required />
                          </div>
                          <div className="checkbox margin-top-10">
                              <input type="checkbox" id="two-step" />
                                  <label htmlFor="two-step"><span className="checkbox-icon"></span> Remember Me</label>
                          </div>
                          <a href="forgot-password.html" className="forgot-password">Forgot Password?</a>
                      </form>
                      <button className="button full-width utf-button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Log In <i className="icon-feather-chevron-right"></i></button>
                      <div className="utf-social-login-separator-item"><span>Or Login in With</span></div>
                      <div className="utf-social-login-buttons-block">
                          <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Facebook</button>
                          <button className="google-login ripple-effect"><i className="icon-brand-google"></i> Google+</button>
                          <button className="twitter-login ripple-effect"><i className="icon-brand-twitter"></i> Twitter</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
