import React, { useEffect, useState } from 'react'
import { logout } from '../api/auth';
import { ApiUrl } from '../constants';

export const SidebarSection = ({ current }: { current: string }) => {
    const [userDetails, setUserDetails] = useState<any>(null);
    const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);
    const [currentSubMenu, setCurrentSubMenu] = useState<string>('');
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
        <div className="utf-dashboard-sidebar-item">
            <div className="utf-dashboard-sidebar-item-inner" data-simplebar>
                <div className="utf-dashboard-nav-container">
                    {/* <!-- Responsive Navigation Trigger --> */}
                    <a href="/dashboard" className="utf-dashboard-responsive-trigger-item"> <span className="hamburger utf-hamburger-collapse-item" > <span className="utf-hamburger-box-item"> <span className="utf-hamburger-inner-item"></span> </span> </span> <span className="trigger-title">Dashboard Navigation Menu</span> </a>
                    {/* <!-- Navigation --> */}
                    <div className="utf-dashboard-nav">
                        <div className="utf-dashboard-nav-inner">
                            <div className="dashboard-profile-box">
                                <span className="avatar-img">
                                    {userDetails && userDetails.hasOwnProperty('profile') && userDetails.profile.avatar ? (<img src={`${ApiUrl}/api/file-upload/${userDetails.profile && userDetails.profile.avatar}`} alt="" className="photo" />) : (<img src="assets/images/user-avatar-placeholder.png" alt="" className="photo" />)}
                                </span>
                                <div className="user-profile-text">
                                    {userDetails && userDetails.hasOwnProperty('role') && (userDetails.role.name === "Admin" || userDetails.role.name === 'Candidate') ? (<span className="fullname">{`${userDetails && userDetails.hasOwnProperty('profile') ? userDetails.profile.first_name : 'Anonymous'}`}</span>) : (
                                        <span className="fullname">{`${userDetails && userDetails.hasOwnProperty('profile') ? userDetails.profile.company_name : 'Anonymous'}`}</span>)}
                                    <span className="user-role">{`${userDetails && userDetails.hasOwnProperty('role') ? userDetails.role.name : 'Administrator'}`}</span>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <ul>
                                <li className={current === 'dashboard' ? 'active' : ''}><a href="/dashboard"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>

                                {userDetails && userDetails.hasOwnProperty('role') && (userDetails.role.name === 'Admin' || userDetails.role.name === 'Employer') && (
                                    <li onClick={() => { setOpenSubMenu(!openSubMenu); setCurrentSubMenu('manage_job_posts') }}
                                        className={`${currentSubMenu === 'manage_job_posts' && openSubMenu === true ? 'active-submenu' : ''} ${current === 'manage_job_posts' ? 'active' : ''}`}><a href="/dashboard" onClick={(e) => e.preventDefault()}><i className="icon-feather-briefcase"></i>Manage Jobs</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="/add-job-post"><i className="icon-feather-chevron-right"></i> Add job post</a></li>
                                            <li><a href="/view-job-posts"><i className="icon-feather-chevron-right"></i> View job posts</a></li>
                                        </ul>
                                    </li>
                                )}
                                {userDetails && userDetails.hasOwnProperty('role') && userDetails.role.name === 'Admin' && (
                                    <li onClick={() => { setOpenSubMenu(!openSubMenu); setCurrentSubMenu('manage_job_categories') }}
                                        className={`${currentSubMenu === 'manage_job_categories' && openSubMenu === true ? 'active-submenu' : ''} ${current === 'manage_job_categories' ? 'active' : ''}`}><a href="/dashboard" onClick={(e) => e.preventDefault()}><i className="icon-material-outline-reorder"></i>Manage JobCategories</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="/add-job-category"><i className="icon-feather-chevron-right"></i> Add category</a></li>
                                            <li><a href="/view-job-categories"><i className="icon-feather-chevron-right"></i> View categories</a></li>
                                        </ul>
                                    </li>
                                )}
                                {userDetails && userDetails.hasOwnProperty('role') && userDetails.role.name === 'Admin' && (
                                    <li onClick={() => { setOpenSubMenu(!openSubMenu); setCurrentSubMenu('manage_companies') }}
                                        className={`${currentSubMenu === 'manage_companies' && openSubMenu === true ? 'active-submenu' : ''} ${current === 'manage_companies' ? 'active' : ''}`}><a href="/dashboard" onClick={(e) => e.preventDefault()}><i className="icon-material-outline-business"></i>Manage Companies</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="/add-company"><i className="icon-feather-chevron-right"></i> Add company</a></li>
                                            <li><a href="/view-companies"><i className="icon-feather-chevron-right"></i> View Companies</a></li>
                                        </ul>
                                    </li>
                                )}
                                {userDetails && userDetails.hasOwnProperty('role') && (userDetails.role.name === 'Admin' || userDetails.role.name === 'Employer' || userDetails.role.name === 'Candidate') && (
                                    <li onClick={() => { setOpenSubMenu(!openSubMenu); setCurrentSubMenu('manage_cvs') }}
                                        className={`${currentSubMenu === 'manage_cvs' && openSubMenu === true ? 'active-submenu' : ''} ${current === 'manage_cvs' ? 'active' : ''}`}><a href="/dashboard" onClick={(e) => e.preventDefault()}><i className="icon-material-outline-supervisor-account"></i> Manage CVs</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="/add-cv"><i className="icon-feather-chevron-right"></i> Add CVs</a></li>
                                            <li><a href="/view-cvs"><i className="icon-feather-chevron-right"></i> View CVs</a></li>
                                        </ul>
                                    </li>
                                )}
                                {userDetails && userDetails.hasOwnProperty('role') && (userDetails.role.name === 'Admin') && (
                                    <li onClick={() => { setOpenSubMenu(!openSubMenu); setCurrentSubMenu('manage_blog_posts') }}
                                        className={`${currentSubMenu === 'manage_blog_posts' && openSubMenu === true ? 'active-submenu' : ''} ${current === 'manage_blog_posts' ? 'active' : ''}`}><a href="/dashboard" onClick={(e) => e.preventDefault()}><i className="icon-line-awesome-file-text"></i>Manage Blog</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="/add-blog-post"><i className="icon-feather-chevron-right"></i> Add blog post</a></li>
                                            <li><a href="/view-blog-posts"><i className="icon-feather-chevron-right"></i> View blog posts</a></li>
                                        </ul>
                                    </li>
                                )}
                                {userDetails && userDetails.hasOwnProperty('role') && userDetails.role.name === 'Admin' && (
                                    <li onClick={() => { setOpenSubMenu(!openSubMenu); setCurrentSubMenu('manage_blog_categories') }}
                                        className={`${currentSubMenu === 'manage_blog_categories' && openSubMenu === true ? 'active-submenu' : ''} ${current === 'manage_blog_categories' ? 'active' : ''}`}><a href="/dashboard" onClick={(e) => e.preventDefault()}><i className="icon-material-outline-reorder"></i>Manage BlogCategories</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="/add-blog-category"><i className="icon-feather-chevron-right"></i> Add category</a></li>
                                            <li><a href="/view-blog-categories"><i className="icon-feather-chevron-right"></i> View categories</a></li>
                                        </ul>
                                    </li>
                                )}
                                {userDetails && userDetails.hasOwnProperty('role') && (userDetails.role.name === 'Admin' || userDetails.role.name === 'Employer' || userDetails.role.name === 'Candidate') && (<li className={current === 'manage_applications' ? 'active' : ''}><a href="/view-applications"><i className="icon-material-outline-file-copy"></i> Manage Applications</a></li>)}
                                <li><a href="/login" onClick={handleLogout}><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
