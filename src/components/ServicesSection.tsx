import React from 'react'
import { Link } from 'react-router-dom'

export const ServicesSection = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-xl-4 col-lg-5">
        <div className="utf-sidebar-container-aera">
          <div className="utf-sidebar-widget-item">
            <h3>All services</h3>
            <div className="utf-tags-container-item">
            <div className="tag">
                <input type="checkbox" id="tag1"/>
                <label htmlFor="tag1">Adverts</label>
              </div>	
              <div className="tag">
                <input type="checkbox" id="tag2"/>
                <label htmlFor="tag2">Employee Outsourcing</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag3"/>
                <label htmlFor="tag3">CVs On Request</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag4"/>
                <label htmlFor="tag4">Interns On Request</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag5"/>
                <label htmlFor="tag5">Interview Trainings</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag6"/>
                <label htmlFor="tag6">Human Resources Advisory</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag7"/>
                <label htmlFor="tag7">Legal Advisory On HR Matters</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag8"/>
                <label htmlFor="tag8">Maintenance Of Personnel Files</label>
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
	  
      <div className="col-xl-8 col-lg-7">
        <div className="col-xl-12"> 
          <div className="utf-section-headline-item margin-top-0 margin-bottom-40">
			<h3>Employee Outsourcing</h3>
			<div className="utf-headline-display-inner-item">Service</div>
          </div>
        </div>
            <p>
            HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides
            HR solutions to Companies all over Africa. HireLab Africa Ltd was founded in 2022.
            HireLab Africa Ltd offers the best cost-effective and expertise-effective solutions to
            companies operating in Africa.
            Hirelab Africa Ltd easily connects both academic and professional Interns with
            organizations, universities and Technical Institutions.
            </p>
            <div className="row">
                <div className='col-xl-6'>
                    <div className="utf-section-headline-item margin-top-0 margin-bottom-10">
                    <h4><i className="about-icon icon-material-outline-arrow-forward"></i> Our Mission</h4>
                    </div>
                    <p>To provide human resources excellent services that exceed our customers’ expectations.</p>
                    <div className="utf-section-headline-item margin-top-0 margin-bottom-10">
                    <h4><i className="about-icon icon-material-outline-arrow-forward"></i> Our Vision</h4>
                    </div>
                    <p>To become Africa’s # 1 trusted and most reliable human resources solutions.</p>
                </div>
                <div className='col-xl-6'>  
                    <div className="utf-section-headline-item margin-top-0 margin-bottom-10">
                    <h4><i className="about-icon icon-material-outline-arrow-forward"></i> Our Values</h4>
                    </div>
                    <ul className="list-2">
                    <li>We value our customers</li>
                    <li>We value our Employees</li>
                    <li>We provide excellent human resources services</li>
                    <li>We measure our quality and integrity through our customers’ feedback</li>
                    <li>We are a reliable human resources solutions</li>
                    </ul>
                </div>
            </div>
        </div>      
    </div>
  </div>
  )
}
