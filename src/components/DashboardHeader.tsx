import React, { useEffect, useState } from 'react'
import { logout } from '../api/auth';
import { ApiUrl } from '../constants';

export const DashboardHeader = ({ current }: { current: string }) => {
    const [userDetails, setUserDetails] = useState<any>(null);
    useEffect(() => {
        // @ts-ignore
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserDetails(user)
        }

    }, [])

    const handleLogout = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        logout()
    }
    return (
        <>
            <header id="utf-header-container-block" className="fullwidth dashboard-header not-sticky">
                <div id="header">
                    <div className="container">
                        <div className="utf-left-side">
                            <div id="logo"> <a href="/"><img src="/assets/images/logo.png" alt="" /></a> </div>
                            <nav id="navigation">
                                <ul id="responsive">
                                    <li><a href="/" className={current === 'home' ? 'current' : ''}>Home</a></li>
                                    <li><a href="/jobs" className={current === 'jobs' ? 'current' : ''}>Find Jobs</a></li>
                                    <li><a href="/about" className={current === 'about' ? 'current' : ''}>About Us</a></li>
                                    <li><a href="/services" className={current === 'services' ? 'current' : ''}>Services</a></li>
                                    <li><a href="/blog" className={current === 'blog' ? 'current' : ''}>Blog</a></li>
                                    <li><a href="/contact" className={current === 'contact' ? 'current' : ''}>Contact</a></li>
                                </ul>
                            </nav>
                            <div className="clearfix"></div>
                        </div>

                        <div className="utf-right-side">
                            <div className="utf-header-widget-item hide-on-mobile">
                                <div className="utf-header-notifications">
                                    <div className="utf-header-notifications-trigger notifications-trigger-icon"> <a href="/"><i className="icon-feather-bell text-blue"></i><span>0</span></a> </div>
                                    <div className="utf-header-notifications-dropdown-block">
                                        <div className="utf-header-notifications-headline">
                                            <h4>View All Notifications</h4>
                                        </div>
                                        <div className="utf-header-notifications-content">
                                            <div className="utf-header-notifications-scroll" data-simplebar>
                                                <ul>
                                                    <li className="no-notifications">No new notification</li>
                                                </ul>
                                                {/* <ul>
                                                    <li className="notifications-not-read"><a href="dashboard-manage-resume.html"> <span className="notification-icon"><i className="icon-material-outline-group"></i></span> <span className="notification-text"> <strong>John Williams</strong> Applied for Jobs <span className="color_blue">Full Time</span> <strong>Web Designer</strong></span></a></li>
                                                    <li><a href="dashboard-manage-resume.html"><span className="notification-icon"><i className="icon-feather-briefcase"></i></span> <span className="notification-text"> <strong>John Williams</strong> Applied for Jobs <span className="color_green">Internship</span> <strong>Web Designer</strong></span></a></li>
                                                    <li><a href="dashboard-manage-resume.html"><span className="notification-icon"><i className="icon-feather-briefcase"></i></span> <span className="notification-text"> <strong>John Williams</strong> Applied for Jobs <span className="color_yellow">Part Time</span> <strong>Web Designer</strong></span></a></li>
                                                    <li><a href="dashboard-manage-resume.html"><span className="notification-icon"><i className="icon-material-outline-group"></i></span> <span className="notification-text"> <strong>John Williams</strong> Applied for Jobs <span className="color_blue">Full Time</span> <strong>Web Designer</strong></span></a></li>
                                                    <li><a href="dashboard-manage-resume.html"><span className="notification-icon"><i className="icon-material-outline-group"></i></span> <span className="notification-text"> <strong>John Williams</strong> Applied for Jobs <span className="color_yellow">Part Time</span> <strong>Web Designer</strong></span></a></li>
                                                </ul> */}
                                            </div>
                                        </div>
                                        {/* <a href="/" className="utf-header-notifications-button ripple-effect utf-button-sliding-icon">See All Notifications<i className="icon-feather-chevron-right"></i></a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="utf-header-widget-item">
                                <div className="utf-header-notifications user-menu">
                                    <div className="utf-header-notifications-trigger user-profile-title">
                                        <a href="/">
                                            <div className="user-avatar status-online">
                                                {userDetails && userDetails.hasOwnProperty('profile') && userDetails.profile.avatar ? (<img src={`${ApiUrl}/file-upload/${userDetails.profile && userDetails.profile.avatar}`} alt="" />) : (<img src="/assets/images/user-avatar-placeholder.png" alt="" />)}
                                            </div>
                                            {userDetails && userDetails.hasOwnProperty('role') && (userDetails.role.name === "Admin" || userDetails.role.name === 'Candidate') ? (<div className="user-name">Hi, {`${userDetails && userDetails.hasOwnProperty('profile') ? userDetails.profile.first_name : 'Anonymous'}`}</div>) : (
                                                <div className="user-name">Hi, {`${userDetails && userDetails.hasOwnProperty('profile') ? userDetails.profile.company_name : 'Anonymous'}`}</div>)}
                                        </a>
                                    </div>
                                    <div className="utf-header-notifications-dropdown-block">
                                        <ul className="utf-user-menu-dropdown-nav">
                                            <li><a href="/"><i className="icon-material-outline-dashboard"></i> Website</a></li>
                                            {userDetails && userDetails.hasOwnProperty('role') && userDetails.role.name === 'Admin' && (<li><a href="/view-job-posts"><i className="icon-line-awesome-user-secret"></i> Manage Jobs</a></li>)}
                                            {userDetails && userDetails.hasOwnProperty('role') && userDetails.role.name === 'Admin' && (<li><a href="/view-companies"><i className="icon-material-outline-group"></i> Manage Companies</a></li>)}
                                            {userDetails && userDetails.hasOwnProperty('role') && (userDetails.role.name === 'Admin' || userDetails.role.name === 'Employer') && (<li><a href="/view-job-posts"><i className="icon-material-outline-group"></i> Manage Jobs</a></li>)}
                                            {userDetails && userDetails.hasOwnProperty('role') && (userDetails.role.name === 'Admin' || userDetails.role.name === 'Employer' || userDetails.role.name === 'Candidate') && (<li><a href="/view-applications"><i className="icon-material-outline-group"></i> Manage Applications</a></li>)}
                                            {userDetails && userDetails.hasOwnProperty('role') && (userDetails.role.name === 'Admin' || userDetails.role.name === 'Employer' || userDetails.role.name === 'Candidate') && (<li><a href="/view-cvs"><i className="icon-material-outline-group"></i> Manage CVs</a></li>)}
                                            {userDetails && userDetails.hasOwnProperty('role') && (userDetails.role.name === 'Employer' || userDetails.role.name === 'Candidate') && (<li><a href="dashboard-my-profile.html"><i className="icon-feather-user"></i> My Profile</a></li>)}
                                            <li><a href="/dashboard" onClick={handleLogout}><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
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
        </>
    )
}
