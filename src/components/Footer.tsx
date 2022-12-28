import React, { FC } from 'react'
import { useQuery, UseQueryResult } from 'react-query';
import { GetJobCategories } from '../api/job-category';
import { IJobCategory } from '../interfaces';

export const Footer: FC = () => {

  // Fetch All Job Categories
  const { data: job_categories }: UseQueryResult<IJobCategory[], Error> = useQuery<IJobCategory[], Error>('job-categories', GetJobCategories);

  const handleCategoryFocus = (category_id: number) => {
    localStorage.setItem('cat_of_focus', JSON.stringify(category_id))
  }

  return (
    <>
      {/* Footer */}
      <div id="footer">
        <div className="utf-footer-section-item-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-12">
                <div className="utf-footer-item-links">
                  <a href="/"><img className="footer-logo" src="/assets/images/footer_logo.png" alt="" /></a>
                  <p>HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa.</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Job Categories</h3>
                  <ul>
                    {job_categories && job_categories.filter((cat) => cat.name !== 'Other').slice(0, 5).map((category: any, index: number) => (
                      <li key={index}><a href="/jobs" onClick={() => handleCategoryFocus(category.id)}><i className="icon-feather-chevron-right"></i> <span>{category.name}</span></a></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Job Type</h3>
                  <ul>
                    <li><a href="/jobs"><i className="icon-feather-chevron-right"></i> <span>Full-time Job</span></a></li>
                    <li><a href="/jobs"><i className="icon-feather-chevron-right"></i> <span>Part-time Job</span></a></li>
                    <li><a href="/jobs"><i className="icon-feather-chevron-right"></i> <span>Contract Job </span></a></li>
                    <li><a href="/jobs"><i className="icon-feather-chevron-right"></i> <span>Temporary Job</span></a></li>
                    <li><a href="/jobs"><i className="icon-feather-chevron-right"></i> <span>Internship</span></a></li>
                  </ul>
                </div>
              </div>

              {/* <div className="col-xl-2 col-md-3 col-sm-6">
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
              </div> */}

              <div className="col-xl-2 col-md-3 col-sm-6">
                <div className="utf-footer-item-links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><a href="/jobs"><i className="icon-feather-chevron-right"></i> <span>Jobs Listing</span></a></li>
                    <li><a href="/about"><i className="icon-feather-chevron-right"></i> <span>About Us</span></a></li>
                    <li><a href="/services"><i className="icon-feather-chevron-right"></i> <span>Services</span></a></li>
                    <li><a href="/companies"><i className="icon-feather-chevron-right"></i> <span>Companies</span></a></li>
                    <li><a href="/contact"><i className="icon-feather-chevron-right"></i> <span>Contact Us</span></a></li>
                    {/* <li><a href="/"><i className="icon-feather-chevron-right"></i> <span>Privacy Policy</span></a></li> */}
                    {/* <li><a href="/"><i className="icon-feather-chevron-right"></i> <span>Term & Condition</span></a></li> */}
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
