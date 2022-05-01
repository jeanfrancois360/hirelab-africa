import React from 'react'

export const AboutSection = () => {
  return (
    <div className="container about-section">
        <div className="row">
        <div className="col-xl-6"> 
           <div className="about-image"><img src="assets/images/about/about-3.jpg" alt="About us"/></div>
        </div>
        <div className="col-xl-6"> 
        <div className="col-xl-12"> 
          <div className="utf-section-headline-item margin-top-0 margin-bottom-40">
			<h3>Hirelab Africa</h3>
			<div className="utf-headline-display-inner-item">About</div>
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
