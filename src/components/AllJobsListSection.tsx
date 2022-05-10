import React from 'react'
import { Link } from 'react-router-dom'

export const AllJobsListSection = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-xl-3 col-lg-4">
        <div className="utf-sidebar-container-aera">
		  <div className="utf-sidebar-widget-item">
			<div className="utf-quote-box utf-jobs-listing-utf-quote-box">
				<div className="utf-quote-info">
					<h4>Make a Difference with Online Resume!</h4>
					<p>Your Resume in Minutes with Jobs Resume Assistant is Ready!</p>
					<a href="register.html" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0">Create Account <i className="icon-feather-chevron-right"></i></a>
				</div>
			</div>
		  </div>
		  
		  <div className="utf-sidebar-widget-item">
            <h3>Search Keywords</h3>
            <div className="utf-input-with-icon">
                <input type="text" placeholder="Search Keywords..." />
                <i className="icon-material-outline-search"></i> 
			</div>
          </div>
		  
          <div className="utf-sidebar-widget-item">
            <h3>Category</h3>
            <select className="selectpicker" data-live-search="true" data-selected-text-htmlFormat="count" data-size="7" title="All Categories">
              <option>Web Design</option>
              <option>Accountant</option>
              <option>Data Analytics</option>
              <option>Marketing</option>
              <option>Software Developing</option>
              <option>IT & Networking</option>
              <option>Translation</option>
              <option>Sales & Marketing</option>
            </select>
          </div>
		  
		  <div className="utf-sidebar-widget-item">
            <h3>Gender</h3>
            <select className="selectpicker" data-size="3" title="Gender">
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>              
            </select>
          </div>
          
          <div className="utf-sidebar-widget-item">
            <h3>Job Type</h3>
            <div className="utf-radio-btn-list">
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox1" checked/>
				  <label htmlFor="chekcbox1"><span className="checkbox-icon"></span> Full Time Jobs</label>
				</div>
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox2"/>
				  <label htmlFor="chekcbox2"><span className="checkbox-icon"></span> Part Time Jobs</label>
				</div>
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox3"/>
				  <label htmlFor="chekcbox3"><span className="checkbox-icon"></span> Freelancer Jobs</label>
				</div>
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox4"/>
				  <label htmlFor="chekcbox4"><span className="checkbox-icon"></span> Internship Jobs</label>
				</div>
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox5"/>
				  <label htmlFor="chekcbox5"><span className="checkbox-icon"></span> Temporary Jobs</label>
				</div>				
            </div>
          </div>
		  <div className="clearfix"></div>
		  
		  <div className="utf-sidebar-widget-item">
            <h3>Experience</h3>
            <div className="utf-radio-btn-list">
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox01" checked/>
				  <label htmlFor="chekcbox01"><span className="checkbox-icon"></span> 1Year to 2Year</label>
				</div>
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox02"/>
				  <label htmlFor="chekcbox02"><span className="checkbox-icon"></span> 2Year to 3Year</label>
				</div>
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox03"/>
				  <label htmlFor="chekcbox03"><span className="checkbox-icon"></span> 3Year to 4Year</label>
				</div>
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox04"/>
				  <label htmlFor="chekcbox04"><span className="checkbox-icon"></span> 4Year to 5Year</label>
				</div>				
            </div>
          </div>
		  <div className="clearfix"></div>
		  
		  <div className="utf-sidebar-widget-item">
            <h3>Career Level</h3>
            <div className="utf-radio-btn-list">
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox001" checked/>
				  <label htmlFor="chekcbox001"><span className="checkbox-icon"></span> Intermediate</label>
				</div>
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox002"/>
				  <label htmlFor="chekcbox002"><span className="checkbox-icon"></span> Normal</label>
				</div>
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox003"/>
				  <label htmlFor="chekcbox003"><span className="checkbox-icon"></span> Special</label>
				</div>
				<div className="checkbox">
				  <input type="checkbox" id="chekcbox004"/>
				  <label htmlFor="chekcbox004"><span className="checkbox-icon"></span> Experienced</label>
				</div>	
            </div>
          </div>
          
          <div className="utf-sidebar-widget-item">
            <h3>Hourly Rate</h3>
            <div className="margin-top-55"></div>            
            <input className="range-slider" type="text" value="" data-slider-currency="$" data-slider-min="5000" data-slider-max="50000" data-slider-step="100" data-slider-value="[5000,40000]"/>
          </div>
          
          <div className="utf-sidebar-widget-item">
            <h3>Skills</h3>
            <div className="utf-tags-container-item">
              <div className="tag">
                <input type="checkbox" id="tag1"/>
                <label htmlFor="tag1">HTML 5</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag2"/>
                <label htmlFor="tag2">Javascript</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag3"/>
                <label htmlFor="tag3">Web Design</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag4"/>
                <label htmlFor="tag4">Graphic Designer</label>
              </div>			  
            </div>
            <div className="clearfix"></div>
          </div>
		  
		  <div className="utf-sidebar-widget-item">
			  <div className="utf-detail-banner-add-section">
				 <Link to="/"><img src="assets/images/banner-add-2.jpg" alt="banner-add-2" /></Link>
			  </div>
          </div>
        </div>
      </div>
	  
      <div className="col-xl-9 col-lg-8">
        <div className="utf-inner-search-section-title">
			<h4><i className="icon-material-outline-search"></i> Search Jobs Listing Results</h4>
		</div>
        <div className="utf-notify-box-aera margin-top-15">
          <div className="utf-switch-container-item">
            <span>Showing 1–10 of 50 Jobs Results :</span>			
          </div>          
		  <div className="sort-by">
				<span>Sort By:</span>
				<select className="selectpicker hide-tick">
					<option>A to Z</option>
					<option>Newest</option>
					<option>Oldest</option>
					<option>Random</option>
				</select>
			</div>
        </div>
		
        <div className="utf-listings-container-part compact-list-layout margin-top-35"> 
			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_1.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Web Designer, Graphic Designer, UI/UX Designer & Art <span className="utf-verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 15 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 

			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_2.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">PHP Developer, Team of PHP & IT Co</h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 30 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 
			
			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_3.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Website Developer & Software Developer</h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 48 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 
          
			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_4.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Head of Developers & MySQL Developers <span className="utf-verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 55 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 
          
			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_5.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Application Developer & Web Designer</h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 1 Days Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span>
			   </div>
			</a> 
          
			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_6.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">IT Department Manager & Blogger-Entrepenour</h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 3 Days Ago</li>
					</ul>
				  </div>
				</div>            
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 
          
			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_7.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Frontend/Backendd Developer</h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 5 Days Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 
          
			<a href="single-job-page.html" className="utf-job-listing">           
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_8.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Web Designer and Graphic Designer</h3>              
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 5 Days Ago</li>
					</ul>
				  </div>
				</div>            
				<span className="bookmark-icon"></span> 
			   </div>
			</a>

			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_9.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Web Designer, Graphic Designer, UI/UX Designer & Art <span className="utf-verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 15 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 

			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_10.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item yellow"><i className="icon-material-outline-business-center"></i> Part Time</span>
				  <h3 className="utf-job-listing-title">PHP Developer, Team of PHP & IT Co</h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 30 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 
			
			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_1.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Website Developer & Software Developer</h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 48 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a>
			
			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_2.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Web Designer, Graphic Designer, UI/UX Designer & Art <span className="utf-verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 15 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 

			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_3.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item yellow"><i className="icon-material-outline-business-center"></i> Part Time</span>
				  <h3 className="utf-job-listing-title">PHP Developer, Team of PHP & IT Co</h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 30 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 
			
			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_4.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Website Developer & Software Developer</h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 48 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a> 
          
			<a href="single-job-page.html" className="utf-job-listing"> 
			  <div className="utf-job-listing-details"> 
				<div className="utf-job-listing-company-logo"> <img src="assets/images/company_logo_5.png" alt=""/> </div>
				<div className="utf-job-listing-description">
				  <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> Full Time</span>
				  <h3 className="utf-job-listing-title">Head of Developers & MySQL Developers <span className="utf-verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h3>
				  <div className="utf-job-listing-footer">
					<ul>
					  <li><i className="icon-feather-briefcase"></i> Software Developer</li>
					  <li><i className="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
					  <li><i className="icon-material-outline-location-on"></i> Drive Potsdam, NY 676</li>
					  <li><i className="icon-material-outline-access-time"></i> 55 Minute Ago</li>
					</ul>
				  </div>
				</div>
				<span className="bookmark-icon"></span> 
			   </div>
			</a>
		</div>
        
        {/* <!-- Pagination --> */}
        <div className="clearfix"></div>
        <div className="row">
          <div className="col-md-12"> 
            <div className="utf-pagination-container-aera margin-top-30 margin-bottom-60">
              <nav className="pagination">
                <ul>
                  <li className="utf-pagination-arrow"><Link to="/"><i className="icon-material-outline-keyboard-arrow-left"></i></Link></li>
                  <li><Link to="/" className="current-page">1</Link></li>
                  <li><Link to="/">2</Link></li>
                  <li><Link to="/">3</Link></li>
                  <li className="utf-pagination-arrow"><Link to="/"><i className="icon-material-outline-keyboard-arrow-right"></i></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>
  )
}
