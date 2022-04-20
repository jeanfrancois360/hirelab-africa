import React from 'react'

export const IntroBanner = () => {
  return (
    <>
  {/* Intro Banner */}
  <div className="intro-banner" data-background-image="assets/images/home-background-01.jpg">
    <div className="container"> 
      <div className="row">
        <div className="col-md-12">
          <div className="utf-banner-headline-text-part">
            <h3>Find Nearby Jobs <span className="typed-words"></span></h3>
            <span>It is a Long Established Fact That a Reader Will be Distracted by The Readable.</span> 
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-12">
          <div className="utf-intro-banner-search-form-block margin-top-40"> 
            <div className="utf-intro-search-field-item">
			  <i className="icon-feather-search"></i>
              <input id="intro-keywords" type="text" placeholder="Search Jobs Keywords..." />
            </div>
			<div className="utf-intro-search-field-item">
              <select className="selectpicker default" data-live-search="true" data-selected-text-format="count" data-size="5" title="All Categories">
                <option>Customer Service</option>
                <option>Data Analytics</option>
                <option>Web Designing</option>
                <option>Software Developing</option>
                <option>Networking</option>
                <option>Sales & Marketing</option>
              </select>
            </div>
            <div className="utf-intro-search-button">
              <button className="button ripple-effect" onClick={()=>window.location.href='jobs-list-layout-leftside.html'}><i className="icon-material-outline-search"></i> Search Jobs</button>
            </div>
          </div>
		  <p className="utf-trending-silver-item"><span className="utf-trending-black-item">Trending Jobs Keywords:</span> <a href="/">Web Designer</a>  <a href="/">Web Developer</a>  <a href="/">Graphic Designer</a>  <a href="/">PHP Developer</a>  <a href="/">IOS Developer</a>  <a href="/">Android Developer</a></p>
        </div>
      </div>
	  
      <div className="row">
        <div className="col-md-12">
          <ul className="intro-stats margin-top-45 hide-under-992px">
            <li><i className="icon-material-outline-business-center"></i> <sub className="counter_item"><strong className="counter">18,955</strong> <span>Live Jobs Posted</span></sub> </li>
            <li><i className="icon-material-outline-assignment"></i> <sub className="counter_item"><strong className="counter">11,088</strong> <span>Jobs Candidate</span></sub> </li>
            <li><i className="icon-material-outline-library-books"></i> <sub className="counter_item"><strong className="counter">10,758</strong> <span>Companies Jobs</span></sub> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Intro Banner  / End */}
    </>
  )
}
