import React from 'react'

export const SidebarSection = () => {
  return (
      <div className="utf-dashboard-sidebar-item">
          <div className="utf-dashboard-sidebar-item-inner" data-simplebar>
              <div className="utf-dashboard-nav-container">
                  {/* <!-- Responsive Navigation Trigger --> */}
                  <a href="/" className="utf-dashboard-responsive-trigger-item"> <span className="hamburger utf-hamburger-collapse-item" > <span className="utf-hamburger-box-item"> <span className="utf-hamburger-inner-item"></span> </span> </span> <span className="trigger-title">Dashboard Navigation Menu</span> </a>
                  {/* <!-- Navigation --> */}
                  <div className="utf-dashboard-nav">
                      <div className="utf-dashboard-nav-inner">
                          <div className="dashboard-profile-box">
                              <span className="avatar-img">
                                  <img alt="" src="assets/images/user_small_1.jpg" className="photo" />
                              </span>
                              <div className="user-profile-text">
                                  <span className="fullname">John Williams</span>
                                  <span className="user-role">Software Engineer</span>
                              </div>
                          </div>
                          <div className="clearfix"></div>
                          <ul>
                              <li className="active"><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                              <li><a href="dashboard-jobs-post.html"><i className="icon-line-awesome-user-secret"></i> Manage Jobs Post</a></li>
                              <li><a href="dashboard-manage-jobs.html"><i className="icon-material-outline-group"></i> Manage Jobs <span className="nav-tag">5</span></a></li>
                              <li><a href="dashboard-manage-resume.html"><i className="icon-material-outline-supervisor-account"></i> Manage Resume</a></li>
                              <li><a href="dashboard-bookmarks.html"><i className="icon-feather-heart"></i> Bookmarks Jobs</a></li>
                              <li><a href="/"><i className="icon-line-awesome-file-text"></i> Freelancer Tasks</a>
                                  <ul className="dropdown-nav">
                                      <li><a href="dashboard-freelancer-manage-tasks-list.html"><i className="icon-feather-chevron-right"></i> Freelancer Manage Tasks</a></li>
                                      <li><a href="dashboard-manage-bidders-list.html"><i className="icon-feather-chevron-right"></i> Freelancer Manage Bidders</a></li>
                                      <li><a href="dashboard-freelancer-active-bids.html"><i className="icon-feather-chevron-right"></i> Freelancer Active Bids</a></li>
                                      <li><a href="dashboard-freelancer-add-post-bids.html"><i className="icon-feather-chevron-right"></i> Freelancer Post Bids</a></li>
                                  </ul>
                              </li>
                              <li><a href="dashboard-reviews.html"><i className="icon-material-outline-rate-review"></i> Reviews</a></li>
                              <li><a href="dashboard-my-profile.html"><i className="icon-feather-user"></i> My Profile</a></li>
                              <li><a href="index-1.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
