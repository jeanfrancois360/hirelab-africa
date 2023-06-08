import React from 'react'
import { useQuery, UseQueryResult } from 'react-query';
import { useParams } from 'react-router';
import { GetJobPosts } from '../api/job-post';
import { IJobPost } from '../interfaces';
import { JobTitleBar } from './JobTitleBar';
import parse from 'html-react-parser';
import TimeAgo from 'timeago-react';

export const JobDetails = () => {
    let { uuid } = useParams();
    // Fetch All Job Posts
    const { data: job_posts, isLoading: isFetchingPosts }: UseQueryResult<IJobPost[], Error> = useQuery<IJobPost[], Error>('job-posts', GetJobPosts);
    if (isFetchingPosts) {
        console.log('Loading...')
    }

    return (
        <>
            {/* <!-- Titlebar --> */}
            {job_posts && job_posts.filter((post) => post.uuid === uuid).map((post: any, index: number) =>
            (
                <div key={index}>
                    <JobTitleBar title={post.title} type={post.type} category={post.job_category.name} workspace={post.workspace} uuid={post.uuid} />
                    {/* <!-- Page Content --> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 utf-content-right-offset-aera">
                                <div className="utf-single-page-section-aera">
                                    <div className="utf-boxed-list-headline-item">
                                        <h3><i className="icon-material-outline-description"></i> Job Description</h3>
                                    </div>
                                    {parse(post.description)}
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-sm-12">
                                            <a href={`/application-form/${post.uuid}`} onClick={() => { localStorage.setItem('prev_page', 'application_form'); }} className="apply-now-button popup-with-zoom-anim margin-top-0">Apply Now <i className="icon-feather-chevron-right"></i></a>
                                        </div>
                                        {/* <div className="col-xl-6 col-lg-6 col-sm-12">
                                    <a href="/" className="button save-job-btn">Get Job Alerts <i className="icon-feather-chevron-right"></i></a>
                                </div> */}
                                    </div>
                                    {/* <div className="utf-detail-social-sharing margin-top-25">
                                <span><strong>Social Sharing:-</strong></span>
                                <ul className="margin-top-15">
                                    <li><a href="/" title="Facebook" data-tippy-placement="top"><i className="icon-brand-facebook-f"></i></a></li>
                                    <li><a href="/" title="Twitter" data-tippy-placement="top"><i className="icon-brand-twitter"></i></a></li>
                                    <li><a href="/" title="LinkedIn" data-tippy-placement="top"><i className="icon-brand-linkedin-in"></i></a></li>
                                    <li><a href="/" title="Google Plus" data-tippy-placement="top"><i className="icon-brand-google"></i></a></li>
                                    <li><a href="/" title="Whatsapp" data-tippy-placement="top"><i className="icon-brand-whatsapp"></i></a></li>
                                    <li><a href="/" title="Pinterest" data-tippy-placement="top"><i className="icon-brand-pinterest-p"></i></a></li>
                                </ul>
                            </div> */}
                                </div>

                                <div className="utf-boxed-list-item margin-bottom-60">
                                    <div className="utf-boxed-list-headline-item">
                                        <h3><i className="icon-material-outline-business-center"></i> People Also Viewed</h3>
                                    </div>
                                    <div className="utf-listings-container-part compact-list-layout">
                                        {job_posts && job_posts.slice(0, 4).map((post: any, index: number) =>
                                        (
                                            <a key={index} href={`/job-details/${post.uuid}`} className="utf-job-listing">
                                                <div className="utf-job-listing-details">
                                                    <div className="utf-job-listing-company-logo"> <img src="/assets/images/company_logo_1.png" alt="" /> </div>
                                                    <div className="utf-job-listing-description">
                                                        <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> {post.type}</span>
                                                        <h3 className="utf-job-listing-title">{post.title}</h3>
                                                        <div className="utf-job-listing-footer">
                                                            <ul>
                                                                <li><i className="icon-feather-briefcase"></i>{post.job_category.name}</li>
                                                                <li><i className="icon-material-outline-account-balance-wallet"></i> {post.salary_range}</li>
                                                                <li><i className="icon-material-outline-location-on"></i> {post.address}</li>
                                                                <li><i className="icon-material-outline-access-time"></i> <TimeAgo
                                                                    datetime={post.created_at}
                                                                    locale="en_US"
                                                                /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="bookmark-icon"></span>
                                            </a>))}


                                    </div>
                                    <div className="utf-centered-button margin-top-10"> <a href="/jobs" className="button utf-button-sliding-icon">View More Jobs <i className="icon-feather-chevron-right"></i></a> </div>
                                </div>
                            </div>

                            {/* <!-- Sidebar --> */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="utf-sidebar-container-aera">
                                    <div className="utf-sidebar-widget-item">
                                        <div className="utf-detail-banner-add-section">
                                            <a href="/"><img src="/assets/images/advertise-here.png" alt="advertise-here" /></a>
                                        </div>
                                    </div>
                                    <div className="utf-sidebar-widget-item">
                                        <div className="utf-quote-box">
                                            <div className="utf-quote-info">
                                                <h4>Make a Difference with Your Online Resume!</h4>
                                                <p>Your Resume in Minutes with Jobs Resume Assistant is Ready!</p>
                                                <a href="/register" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Create an Account <i className="icon-feather-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="utf-sidebar-widget-item">
                                        <h3>Offered Salary</h3>
                                        <div className="utf-right-side">
                                            <div className="salary-box">
                                                <div className="salary-amount">{post.salary_range}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="utf-sidebar-widget-item">
                                        <div className="utf-job-overview">
                                            <div className="utf-job-overview-headline">Jobs Position Information</div>
                                            <div className="utf-job-overview-inner">
                                                <ul>
                                                    <li>
                                                        <i className="icon-material-outline-business-center"></i> <span>Job Vacancy:</span>
                                                        <h5>{post.title}</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-business-center"></i> <span>Jobs Type</span>
                                                        <h5>{post.type}</h5>
                                                    </li>

                                                    <li>
                                                        <i className="icon-line-awesome-glass"></i> <span>Workspace</span>
                                                        <h5>{post.workspace}</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-location-on"></i> <span>Location</span>
                                                        <h5>{post.address}</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-access-time"></i> <span>Date Posted</span>
                                                        <h5><TimeAgo
                                                            datetime={post.created_at}
                                                            locale="en_US"
                                                        /></h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="utf-sidebar-widget-item">
                                        <h3>Quick Contacts</h3>
                                        <form method="post" name="contactform" id="contact">
                                            <div className="row">

                                                <div className="col-md-12">
                                                    <div className="utf-no-border">
                                                        <input className="utf-with-border" name="fullname" type="text" id="fullname" placeholder="Full Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="utf-no-border">
                                                        <input className="utf-with-border" name="email" type="email" id="email" placeholder="Email Address" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="utf-no-border">
                                                        <input className="utf-with-border" name="subject" type="text" id="subject" placeholder="Subject" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <textarea className="utf-with-border" name="comments" cols={40} rows={2} id="comments" placeholder="Message..." required></textarea>
                                            </div>
                                            <div className="utf-centered-button margin-top-10">
                                                <input type="submit" className="submit button" id="submit" value="Submit Message" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
