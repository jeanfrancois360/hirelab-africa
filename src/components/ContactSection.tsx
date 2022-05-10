import React from 'react'
import { Link } from 'react-router-dom'

export const ContactSection = () => {
  return (
    <div className="container">
    <div className="row">
      {/* <div className="col-xl-12">
        <div className="utf-contact-location-info-aera margin-bottom-50">
          <div id="utf-single-job-map-container-item">
            <div id="singleListingMap" data-latitude="48.8566" data-longitude="2.3522" data-map-icon="im im-icon-Hamburger"></div>
          </div>
        </div>
      </div>       */}
	  <div className="col-xl-4 col-lg-4">
		<div className="utf-boxed-list-headline-item margin-bottom-35">
            <h3><i className="icon-feather-map-pin"></i> Office Address</h3>
        </div>
		<div className="utf-contact-location-info-aera margin-bottom-50">
			<div className="contact-address">
				<ul>
				  <li><strong>Phone:-</strong> (+21) 124 123 4546</li>
				  <li><strong>Website:-</strong> <Link to="/">www.example.com</Link></li>
				  <li><strong>E-Mail:-</strong> <Link to="/">info@example.com</Link></li>              
				  <li><strong>Address:-</strong> 3241, Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin fermentum condimentum mauris.</li>
				</ul>
			</div>
		</div>		
	  </div>
	  <div className="col-xl-8 col-lg-8">
        <section id="contact" className="margin-bottom-50">
          <div className="utf-boxed-list-headline-item margin-bottom-35">
            <h3><i className="icon-material-outline-description"></i> Contact Form</h3>
          </div>
		  <div className="utf-contact-form-item">
			  <form method="post" name="contactform" id="contactform">
				<div className="row">
				  <div className="col-md-6">
					<div className="utf-no-border">
					  <input className="utf-with-border" name="name" type="text" id="firstname" placeholder="Frist Name" required />
					</div>
				  </div>
				  <div className="col-md-6">
					<div className="utf-no-border">
					  <input className="utf-with-border" name="name" type="text" id="lastname" placeholder="Last Name" required />
					</div>
				  </div>
				  <div className="col-md-6">
					<div className="utf-no-border">
					  <input className="utf-with-border" name="email" type="email" id="email" placeholder="Email Address" required />
					</div>
				  </div>
				  <div className="col-md-6">
					<div className="utf-no-border">
					  <input className="utf-with-border" name="subject" type="text" id="subject" placeholder="Subject" required />
					</div>
				  </div>
				</div>
				<div>
				  <textarea className="utf-with-border" name="comments" cols={40} rows={3} id="comments" placeholder="Message..." required></textarea>
				</div>
				<div className="utf-centered-button margin-top-10">
					<input type="submit" className="submit button" id="submit" value="Submit Message" />
				</div>
			  </form>
		  </div>
        </section>
      </div>
    </div>
  </div>
  )
}
