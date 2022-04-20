import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            {/* Header Container */}
            <header id="utf-header-container-block">
                <div id="header">
                    <div className="container">
                        <div className="utf-left-side">
                            <div id="logo"> <Link to="index-1.html"><img src="assets/images/logo.png" alt="" /></Link> </div>
                            <nav id="navigation">
                                <ul id="responsive">
                                    <li><Link to="#" className="current">Home</Link>
                                        <ul className="dropdown-nav">
                                            <li className="active"><Link to="index-1.html"><i className="icon-feather-chevron-right"></i> Home Version One</Link></li>
                                            <li><Link to="index-2.html"><i className="icon-feather-chevron-right"></i> Home Version Two</Link></li>
                                            <li><Link to="index-3.html"><i className="icon-feather-chevron-right"></i> Home Version Three</Link></li>
                                            <li><Link to="index-4.html"><i className="icon-feather-chevron-right"></i> Home Version Four</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Find Jobs</Link>
                                        <ul className="dropdown-nav">
                                            <li><Link to="#"><i className="icon-feather-chevron-right"></i> Browse Jobs</Link>
                                                <ul className="dropdown-nav">
                                                    <li><Link to="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> Jobs List Left Sidebar</Link></li>
                                                    <li><Link to="jobs-list-layout-rightside.html"><i className="icon-feather-chevron-right"></i> Jobs List Right Sidebar</Link></li>
                                                    <li><Link to="jobs-listing-with-map.html"><i className="icon-feather-chevron-right"></i> Jobs List With Map</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="browse-companies.html"><i className="icon-feather-chevron-right"></i> Browse Companies</Link></li>
                                            <li><Link to="single-job-page.html"><i className="icon-feather-chevron-right"></i> Jobs Detail Page</Link></li>
                                            <li><Link to="single-company-profile.html"><i className="icon-feather-chevron-right"></i> Company Profile Detail</Link></li>
                                            <li><Link to="#"><i className="icon-feather-chevron-right"></i> Freelancer Tasks</Link>
                                                <ul className="dropdown-nav">
                                                    <li><Link to="freelancers-bidding-tasks-list.html"><i className="icon-feather-chevron-right"></i> Freelancer Bidding Task</Link></li>
                                                    <li><Link to="freelancers-user-list-layout.html"><i className="icon-feather-chevron-right"></i> Freelancer User List</Link></li>
                                                    <li><Link to="single-freelancers-task-page.html"><i className="icon-feather-chevron-right"></i> Freelancer Task Detail</Link></li>
                                                    <li><Link to="single-freelancer-profile.html"><i className="icon-feather-chevron-right"></i> Freelancer Profile Detail</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">User Panel</Link>
                                        <ul className="dropdown-nav">
                                            <li><Link to="dashboard.html"><i className="icon-feather-chevron-right"></i> Dashboard</Link></li>
                                            <li><Link to="dashboard-jobs-post.html"><i className="icon-feather-chevron-right"></i> Manage Jobs Post</Link></li>
                                            <li><Link to="dashboard-manage-jobs.html"><i className="icon-feather-chevron-right"></i> Manage Jobs</Link></li>
                                            <li><Link to="dashboard-manage-resume.html"><i className="icon-feather-chevron-right"></i> Manage Resume</Link></li>
                                            <li><Link to="dashboard-bookmarks.html"><i className="icon-feather-chevron-right"></i> Bookmarks Jobs</Link></li>
                                            <li><Link to="dashboard-manage-tasks.html"><i className="icon-feather-chevron-right"></i> Freelancer Tasks</Link>
                                                <ul className="dropdown-nav">
                                                    <li><Link to="dashboard-freelancer-manage-tasks-list.html"><i className="icon-feather-chevron-right"></i> Freelancer Manage Tasks</Link></li>
                                                    <li><Link to="dashboard-manage-bidders-list.html"><i className="icon-feather-chevron-right"></i> Freelancer Manage Bidders</Link></li>
                                                    <li><Link to="dashboard-freelancer-active-bids.html"><i className="icon-feather-chevron-right"></i> Freelancer Active Bids</Link></li>
                                                    <li><Link to="dashboard-freelancer-add-post-bids.html"><i className="icon-feather-chevron-right"></i> Freelancer Post Bids</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="dashboard-reviews.html"><i className="icon-feather-chevron-right"></i> Reviews</Link></li>
                                            <li><Link to="dashboard-my-profile.html"><i className="icon-feather-chevron-right"></i> My Profile</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Pages</Link>
                                        <ul className="dropdown-nav">
                                            <li><Link to="about-us.html"><i className="icon-feather-chevron-right"></i> About Us</Link></li>
                                            <li><Link to="login.html"><i className="icon-feather-chevron-right"></i> Login</Link></li>
                                            <li><Link to="register.html"><i className="icon-feather-chevron-right"></i> Sign Up</Link></li>
                                            <li><Link to="checkout-page.html"><i className="icon-feather-chevron-right"></i> Order Checkout</Link></li>
                                            <li><Link to="order-confirmation.html"><i className="icon-feather-chevron-right"></i> Order Confirmation</Link></li>
                                            <li><Link to="invoice-template.html"><i className="icon-feather-chevron-right"></i> Invoice Template</Link></li>
                                            <li><Link to="user-elements.html"><i className="icon-feather-chevron-right"></i> User Elements</Link></li>
                                            <li><Link to="icons-cheatsheet.html"><i className="icon-feather-chevron-right"></i> Icons Cheatsheet</Link></li>
                                            <li><Link to="faq-page.html"><i className="icon-feather-chevron-right"></i> FAQ Page</Link></li>
                                            <li><Link to="pages-404.html"><i className="icon-feather-chevron-right"></i> 404 Page</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Blog</Link>
                                        <ul className="dropdown-nav">
                                            <li><Link to="blog-right-sidebar.html"><i className="icon-feather-chevron-right"></i> Blog List Right Sidebar</Link></li>
                                            <li><Link to="blog-left-sidebar.html"><i className="icon-feather-chevron-right"></i> Blog List Left Sidebar</Link></li>
                                            <li><Link to="blog-post-right-sidebar.html"><i className="icon-feather-chevron-right"></i> Blog Detail Right Sidebar</Link></li>
                                            <li><Link to="blog-post-left-sidebar.html"><i className="icon-feather-chevron-right"></i> Blog Detail Left Sidebar</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="contact.html">Contact</Link></li>
                                </ul>
                            </nav>
                            <div className="clearfix"></div>
                        </div>

                        <div className="utf-right-side">
                            <div className="utf-header-widget-item"> <Link to="#utf-signin-dialog-block" className="popup-with-zoom-anim log-in-button"><i className="icon-feather-log-in"></i> <span>Sign In</span></Link> </div>
                            <div className="utf-header-widget-item">
                                <div className="utf-header-notifications user-menu">
                                    <div className="utf-header-notifications-trigger user-profile-title">
                                        <Link to="#">
                                            <div className="user-avatar status-online"><img src="assets/images/user_small_1.jpg" alt="" /> </div>
                                            <div className="user-name">Hi, John!</div>
                                        </Link>
                                    </div>
                                    <div className="utf-header-notifications-dropdown-block">
                                        <ul className="utf-user-menu-dropdown-nav">
                                            <li><Link to="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
                                            <li><Link to="dashboard-jobs-post.html"><i className="icon-line-awesome-user-secret"></i> Manage Jobs Post</Link></li>
                                            <li><Link to="dashboard-manage-jobs.html"><i className="icon-material-outline-group"></i> Manage Jobs</Link></li>
                                            <li><Link to="dashboard-bookmarks.html"><i className="icon-material-outline-star-border"></i> Bookmarks Jobs</Link></li>
                                            <li><Link to="dashboard-my-profile.html"><i className="icon-feather-user"></i> My Profile</Link></li>
                                            <li><Link to="index-1.html"><i className="icon-material-outline-power-settings-new"></i> Logout</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <span className="mmenu-trigger">
                                <button className="hamburger utf-hamburger-collapse-item" type="button"> <span className="utf-hamburger-box-item"> <span className="utf-hamburger-inner-item"></span> </span> </button>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
            <div className="clearfix"></div>
            {/* Header Container / End */}
        </>
    )
}
