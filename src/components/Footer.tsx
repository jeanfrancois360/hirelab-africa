import React from 'react'

export const Footer = () => {
  return (
    <>
{/* Footer */}
  <div id="footer"> 
    <div className="utf-footer-section-item-block">
      <div className="container">
        <div className="row">
		  <div className="col-xl-4 col-md-12">
			<div className="utf-footer-item-links">
				<a href="index-1.html"><img className="footer-logo" src="assets/images/footer_logo.png" alt="" /></a>
				<p>HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa.</p>								
			</div>
          </div>
		  
          <div className="col-xl-2 col-md-3 col-sm-6">
            <div className="utf-footer-item-links">
              <h3>Job Categories</h3>
              <ul>
                <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> <span>Developement</span></a></li>
                <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> <span>Designing</span></a></li>
                <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> <span>Marketing</span></a></li>
                <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> <span>Data Analytics</span></a></li>				
				<li><a href="/"><i className="icon-feather-chevron-right"></i> <span>Post New Job</span></a></li>				
              </ul>
            </div>
          </div>
          
          <div className="col-xl-2 col-md-3 col-sm-6">
            <div className="utf-footer-item-links">
              <h3>Job Type</h3>
              <ul>
                <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> <span>Work from Home</span></a></li>
                <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> <span>Internship Job</span></a></li>
				<li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> <span>Freelancer Job</span></a></li>
                <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> <span>Part Time Job</span></a></li>
				<li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> <span>Full Time Job</span></a></li>					
              </ul>
            </div>
          </div>
          
          <div className="col-xl-2 col-md-3 col-sm-6">
            <div className="utf-footer-item-links">
              <h3>Resources</h3>
              <ul>
				<li><a href="/"><i className="icon-feather-chevron-right"></i> <span>My Account</span></a></li>
                <li><a href="/"><i className="icon-feather-chevron-right"></i> <span>Support</span></a></li>
                <li><a href="/"><i className="icon-feather-chevron-right"></i> <span>How It Works</span></a></li>
                <li><a href="/"><i className="icon-feather-chevron-right"></i> <span>Underwriting</span></a></li>
                <li><a href="/"><i className="icon-feather-chevron-right"></i> <span>Employers</span></a></li>                
              </ul>
            </div>
          </div>
		  
		  <div className="col-xl-2 col-md-3 col-sm-6">
            <div className="utf-footer-item-links">
              <h3>Quick Links</h3>
              <ul>
				<li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> <span>Jobs Listing</span></a></li>
                <li><a href="about-us.html"><i className="icon-feather-chevron-right"></i> <span>About Us</span></a></li>
                <li><a href="contact.html"><i className="icon-feather-chevron-right"></i> <span>Contact Us</span></a></li>
                <li><a href="privacy-policy.html"><i className="icon-feather-chevron-right"></i> <span>Privacy Policy</span></a></li>
                <li><a href="terms-condition.html"><i className="icon-feather-chevron-right"></i> <span>Term & Condition</span></a></li>
              </ul>
            </div>
          </div>          
        </div>
      </div>
    </div>
    
    {/* Footer Copyrights */}
    <div className="utf-footer-copyright-item">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">Copyright &copy; {`${new Date().getFullYear()} Hirelab Africa All Rights Reserved.`}</div>
        </div>
      </div>
    </div>
     {/* Footer Copyrights / End    */}
  </div>
  {/* Footer / End  */}
    </>
  )
}
