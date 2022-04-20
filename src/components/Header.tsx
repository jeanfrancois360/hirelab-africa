import React from 'react'

export const Header = () => {
    return (
        <>
            {/* Header Container */}
            <header id="utf-header-container-block">
                <div className="top-bar">
            <div className='container'>
              <span>Topbar</span>
            </div>
            </div>
                <div id="header">
               
                    <div className="container">
                    
                        <div className="utf-left-side">
                            <div id="logo"> <a href="index-1.html"><img src="assets/images/logo.png" alt="" /></a> </div>
                            <nav id="navigation">
                                <ul id="responsive">
                                    <li><a href="/" className="current">Home</a>
                                        <ul className="dropdown-nav">
                                            <li className="active"><a href="index-1.html"><i className="icon-feather-chevron-right"></i> Home Version One</a></li>
                                            <li><a href="index-2.html"><i className="icon-feather-chevron-right"></i> Home Version Two</a></li>
                                            <li><a href="index-3.html"><i className="icon-feather-chevron-right"></i> Home Version Three</a></li>
                                            <li><a href="index-4.html"><i className="icon-feather-chevron-right"></i> Home Version Four</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Find Jobs</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="/"><i className="icon-feather-chevron-right"></i> Browse Jobs</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="jobs-list-layout-leftside.html"><i className="icon-feather-chevron-right"></i> Jobs List Left Sidebar</a></li>
                                                    <li><a href="jobs-list-layout-rightside.html"><i className="icon-feather-chevron-right"></i> Jobs List Right Sidebar</a></li>
                                                    <li><a href="jobs-listing-with-map.html"><i className="icon-feather-chevron-right"></i> Jobs List With Map</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="browse-companies.html"><i className="icon-feather-chevron-right"></i> Browse Companies</a></li>
                                            <li><a href="single-job-page.html"><i className="icon-feather-chevron-right"></i> Jobs Detail Page</a></li>
                                            <li><a href="single-company-profile.html"><i className="icon-feather-chevron-right"></i> Company Profile Detail</a></li>
                                            <li><a href="/"><i className="icon-feather-chevron-right"></i> Freelancer Tasks</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="freelancers-bidding-tasks-list.html"><i className="icon-feather-chevron-right"></i> Freelancer Bidding Task</a></li>
                                                    <li><a href="freelancers-user-list-layout.html"><i className="icon-feather-chevron-right"></i> Freelancer User List</a></li>
                                                    <li><a href="single-freelancers-task-page.html"><i className="icon-feather-chevron-right"></i> Freelancer Task Detail</a></li>
                                                    <li><a href="single-freelancer-profile.html"><i className="icon-feather-chevron-right"></i> Freelancer Profile Detail</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="/">User Panel</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="dashboard.html"><i className="icon-feather-chevron-right"></i> Dashboard</a></li>
                                            <li><a href="dashboard-jobs-post.html"><i className="icon-feather-chevron-right"></i> Manage Jobs Post</a></li>
                                            <li><a href="dashboard-manage-jobs.html"><i className="icon-feather-chevron-right"></i> Manage Jobs</a></li>
                                            <li><a href="dashboard-manage-resume.html"><i className="icon-feather-chevron-right"></i> Manage Resume</a></li>
                                            <li><a href="dashboard-bookmarks.html"><i className="icon-feather-chevron-right"></i> Bookmarks Jobs</a></li>
                                            <li><a href="dashboard-manage-tasks.html"><i className="icon-feather-chevron-right"></i> Freelancer Tasks</a>
                                                <ul className="dropdown-nav">
                                                    <li><a href="dashboard-freelancer-manage-tasks-list.html"><i className="icon-feather-chevron-right"></i> Freelancer Manage Tasks</a></li>
                                                    <li><a href="dashboard-manage-bidders-list.html"><i className="icon-feather-chevron-right"></i> Freelancer Manage Bidders</a></li>
                                                    <li><a href="dashboard-freelancer-active-bids.html"><i className="icon-feather-chevron-right"></i> Freelancer Active Bids</a></li>
                                                    <li><a href="dashboard-freelancer-add-post-bids.html"><i className="icon-feather-chevron-right"></i> Freelancer Post Bids</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="dashboard-reviews.html"><i className="icon-feather-chevron-right"></i> Reviews</a></li>
                                            <li><a href="dashboard-my-profile.html"><i className="icon-feather-chevron-right"></i> My Profile</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Pages</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="about-us.html"><i className="icon-feather-chevron-right"></i> About Us</a></li>
                                            <li><a href="login.html"><i className="icon-feather-chevron-right"></i> Login</a></li>
                                            <li><a href="register.html"><i className="icon-feather-chevron-right"></i> Sign Up</a></li>
                                            <li><a href="checkout-page.html"><i className="icon-feather-chevron-right"></i> Order Checkout</a></li>
                                            <li><a href="order-confirmation.html"><i className="icon-feather-chevron-right"></i> Order Confirmation</a></li>
                                            <li><a href="invoice-template.html"><i className="icon-feather-chevron-right"></i> Invoice Template</a></li>
                                            <li><a href="user-elements.html"><i className="icon-feather-chevron-right"></i> User Elements</a></li>
                                            <li><a href="icons-cheatsheet.html"><i className="icon-feather-chevron-right"></i> Icons Cheatsheet</a></li>
                                            <li><a href="faq-page.html"><i className="icon-feather-chevron-right"></i> FAQ Page</a></li>
                                            <li><a href="pages-404.html"><i className="icon-feather-chevron-right"></i> 404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Blog</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="blog-right-sidebar.html"><i className="icon-feather-chevron-right"></i> Blog List Right Sidebar</a></li>
                                            <li><a href="blog-left-sidebar.html"><i className="icon-feather-chevron-right"></i> Blog List Left Sidebar</a></li>
                                            <li><a href="blog-post-right-sidebar.html"><i className="icon-feather-chevron-right"></i> Blog Detail Right Sidebar</a></li>
                                            <li><a href="blog-post-left-sidebar.html"><i className="icon-feather-chevron-right"></i> Blog Detail Left Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                            <div className="clearfix"></div>
                        </div>

                        <div className="utf-right-side">
                            <div className="utf-header-widget-item"> <a href="#utf-signin-dialog-block" className="popup-with-zoom-anim log-in-button"><i className="icon-feather-log-in"></i> <span>Sign In</span></a> </div>
                            <div className="utf-header-widget-item">
                                <div className="utf-header-notifications user-menu">
                                    <div className="utf-header-notifications-trigger user-profile-title">
                                        <a href="/">
                                            <div className="user-avatar status-online"><img src="assets/images/user_small_1.jpg" alt="" /> </div>
                                            <div className="user-name">Hi, John!</div>
                                        </a>
                                    </div>
                                    <div className="utf-header-notifications-dropdown-block">
                                        <ul className="utf-user-menu-dropdown-nav">
                                            <li><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                                            <li><a href="dashboard-jobs-post.html"><i className="icon-line-awesome-user-secret"></i> Manage Jobs Post</a></li>
                                            <li><a href="dashboard-manage-jobs.html"><i className="icon-material-outline-group"></i> Manage Jobs</a></li>
                                            <li><a href="dashboard-bookmarks.html"><i className="icon-material-outline-star-border"></i> Bookmarks Jobs</a></li>
                                            <li><a href="dashboard-my-profile.html"><i className="icon-feather-user"></i> My Profile</a></li>
                                            <li><a href="index-1.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
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
