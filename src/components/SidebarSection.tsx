import React, { useEffect, useState } from 'react'
import { logout } from '../api/auth';

export const SidebarSection = () => {
    const [userDetails, setUserDetails] = useState<any>(null);
    useEffect(()=>{
      // @ts-ignore
      let user = JSON.parse(localStorage.getItem('user'));
      if(user){
        setUserDetails(user)
      }
      
    },[])

    const handleLogout = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        logout()
      }
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
                                    <span className="fullname">{`${userDetails && userDetails.hasOwnProperty('profile') ? userDetails.profile.first_name: 'Anonymous'}`}</span>
                                    <span className="user-role">{`${userDetails && userDetails.hasOwnProperty('role') ? userDetails.role.name: 'Administrator'}`}</span>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <ul>
                                <li className="active"><a href="/dashboard"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                                <li><a href="/"><i className="icon-feather-briefcase"></i>Manage Jobs</a>
                                    <ul className="dropdown-nav">
                                        <li><a href="/add-job-post"><i className="icon-feather-chevron-right"></i> Add job post</a></li>
                                        <li><a href="/view-job-posts"><i className="icon-feather-chevron-right"></i> View job posts</a></li>
                                    </ul>
                                </li>
                                <li><a href="/"><i className="icon-material-outline-business"></i>Manage Companies</a>
                                    <ul className="dropdown-nav">
                                        <li><a href="/add-company"><i className="icon-feather-chevron-right"></i> Add company</a></li>
                                        <li><a href="/view-companies"><i className="icon-feather-chevron-right"></i> View Companies</a></li>
                                    </ul>
                                </li>
                                <li><a href="/"><i className="icon-material-outline-reorder"></i>Manage Categories</a>
                                    <ul className="dropdown-nav">
                                        <li><a href="/add-category"><i className="icon-feather-chevron-right"></i> Add category</a></li>
                                        <li><a href="/view-categories"><i className="icon-feather-chevron-right"></i> View categories</a></li>
                                    </ul>
                                </li>
                                <li><a href="/view-cvs"><i className="icon-material-outline-supervisor-account"></i> Manage CVs</a></li>
                                <li><a href="/view-applications"><i className="icon-material-outline-file-copy"></i> Manage Applications</a></li>
                                <li><a href="/login" onClick={handleLogout}><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
