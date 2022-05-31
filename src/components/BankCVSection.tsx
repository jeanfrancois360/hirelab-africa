import React from 'react'

export const BankCVSection = () => {
    return (
        <div className="container">
      <div className="row">
      <div className="col-xl-12 col-lg-12 utf-content-right-offset-aera">
          <div className="utf-boxed-list-headline-item">
                        <h3><i className="icon-feather-upload-cloud"></i> Bank your CV</h3>
          </div>
          <div className="utf-billing-form-item">
              <form method="post">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="utf-no-border">
                              <label htmlFor="fristname">Frist Name</label>
                              <input className="utf-with-border" name="name" type="text" id="fristname" placeholder="Frist Name" required />
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="utf-no-border">
                              <label htmlFor="lastname">Last Name</label>
                              <input className="utf-with-border" name="name" type="text" id="lastname" placeholder="Last Name" required />
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="utf-no-border">
                              <label htmlFor="email">Email Address</label>
                              <input className="utf-with-border" name="email" type="email" id="email" placeholder="Email Address" required />
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="utf-no-border">
                              <label htmlFor="phone">Phone Number</label>
                              <input className="utf-with-border" name="phone" type="text" id="phone" placeholder="Phone Number" required />
                          </div>
                       </div>
                                <div className="col-xl-12 col-md-12 col-sm-12">
                                    <div className="utf-submit-field">
                                        <h5>Upload CV</h5>
                                        <div className="uploadButton margin-top-15 margin-bottom-30">
                                            <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                                            <label className="uploadButton-button ripple-effect" htmlFor="upload">Upload Resume</label>
                                            <span className="uploadButton-file-name">Upload CV (Docx, Doc, PDF) File.</span>
                                        </div>
                                    </div>
                                </div>
                      
                  </div>
              </form>
          </div>	
                </div>
                <div className="utf-centered-button">
                    <a href="/" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0">Submit CV<i className="icon-feather-chevron-right"></i></a>
                </div>
            </div>
            </div>
  )
}
