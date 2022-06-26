import React, { FC } from 'react'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'

export const ViewApplicationsSection: FC = () => {
    return (
        <>
            {/* < !--Header Container-- > */}
            <DashboardHeader current={'Manage Application'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Manage Application'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="dashboard-box margin-top-0">
                                    <div className="headline">
                                        <h3>All Applications</h3>
                                    </div>
                                    <div className="content">
                                        <ul className="utf-dashboard-box-list">
                                            <li>
                                                <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                                                    <div className="utf-manage-resume-overview-aera-inner">
                                                        <div className="utf-manage-resume-avatar">
                                                            <a href="/dashboard"><img src="assets/images/user_big_1.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="utf-manage-resume-item">
                                                            <h4><a href="/dashboard">John Williams</a><span className="dashboard-status-button green"><i className="icon-material-outline-business-center"></i> Full Time</span></h4>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-feather-mail"></i> demo@example.com</a></span>
                                                            <span className="utf-manage-resume-detail-item"><i className="icon-feather-phone"></i> (+12) 0123-654-987</span>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-material-outline-location-on"></i> 2767 Concord Street</a></span>
                                                            <div className="utf-buttons-to-right">
                                                                <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail"></i> Send</a>
                                                                <a href="/dashboard" className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top"><i className="icon-feather-download"></i></a>
                                                                <a href="/dashboard" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                                                    <div className="utf-manage-resume-overview-aera-inner">
                                                        <div className="utf-manage-resume-avatar">
                                                            <a href="/dashboard"><img src="assets/images/user_big_2.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="utf-manage-resume-item">
                                                            <h4><a href="/dashboard">John Williams</a><span className="dashboard-status-button yellow"><i className="icon-material-outline-business-center"></i> Part Time</span></h4>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-feather-mail"></i> demo@example.com</a></span>
                                                            <span className="utf-manage-resume-detail-item"><i className="icon-feather-phone"></i> (+12) 0123-654-987</span>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-material-outline-location-on"></i> 2767 Concord Street</a></span>
                                                            <div className="utf-buttons-to-right">
                                                                <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail"></i> Send</a>
                                                                <a href="/dashboard" className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top"><i className="icon-feather-download"></i></a>
                                                                <a href="/dashboard" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                                                    <div className="utf-manage-resume-overview-aera-inner">
                                                        <div className="utf-manage-resume-avatar">
                                                            <a href="/dashboard"><img src="assets/images/user_big_3.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="utf-manage-resume-item">
                                                            <h4><a href="/dashboard">John Williams</a><span className="utf-verified-badge" data-tippy-placement="top" title="Verified Employer" data-tippy=""></span><span className="dashboard-status-button green"><i className="icon-material-outline-business-center"></i> Full Time</span></h4>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-feather-mail"></i> demo@example.com</a></span>
                                                            <span className="utf-manage-resume-detail-item"><i className="icon-feather-phone"></i> (+12) 0123-654-987</span>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-material-outline-location-on"></i> 2767 Concord Street</a></span>
                                                            <div className="utf-buttons-to-right">
                                                                <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail"></i> Send</a>
                                                                <a href="/dashboard" className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top"><i className="icon-feather-download"></i></a>
                                                                <a href="/dashboard" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                                                    <div className="utf-manage-resume-overview-aera-inner">
                                                        <div className="utf-manage-resume-avatar">
                                                            <a href="/dashboard"><img src="assets/images/user_big_1.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="utf-manage-resume-item">
                                                            <h4><a href="/dashboard">John Williams</a><span className="dashboard-status-button yellow"><i className="icon-material-outline-business-center"></i> Part Time</span></h4>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-feather-mail"></i> demo@example.com</a></span>
                                                            <span className="utf-manage-resume-detail-item"><i className="icon-feather-phone"></i> (+12) 0123-654-987</span>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-material-outline-location-on"></i> 2767 Concord Street</a></span>
                                                            <div className="utf-buttons-to-right">
                                                                <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail"></i> Send</a>
                                                                <a href="/dashboard" className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top"><i className="icon-feather-download"></i></a>
                                                                <a href="/dashboard" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                                                    <div className="utf-manage-resume-overview-aera-inner">
                                                        <div className="utf-manage-resume-avatar">
                                                            <a href="/dashboard"><img src="assets/images/user_big_2.jpg" alt="" /></a>
                                                        </div>
                                                        <div className="utf-manage-resume-item">
                                                            <h4><a href="/dashboard">John Williams</a><span className="utf-verified-badge" data-tippy-placement="top" title="Verified Employer" data-tippy=""></span><span className="dashboard-status-button yellow"><i className="icon-material-outline-business-center"></i> Part Time</span></h4>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-feather-mail"></i> demo@example.com</a></span>
                                                            <span className="utf-manage-resume-detail-item"><i className="icon-feather-phone"></i> (+12) 0123-654-987</span>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-material-outline-location-on"></i> 2767 Concord Street</a></span>
                                                            <div className="utf-buttons-to-right">
                                                                <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail"></i> Send</a>
                                                                <a href="/dashboard" className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top"><i className="icon-feather-download"></i></a>
                                                                <a href="/dashboard" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Pagination --> */}
                                <div className="clearfix"></div>
                                <div className="utf-pagination-container-aera margin-top-20 margin-bottom-0">
                                    <nav className="pagination">
                                        <ul>
                                            <li className="utf-pagination-arrow"><a href="/" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                            <li><a href="/" className="ripple-effect current-page">1</a></li>
                                            <li><a href="/" className="ripple-effect">2</a></li>
                                            <li><a href="/" className="ripple-effect">3</a></li>
                                            <li className="utf-pagination-arrow"><a href="/" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        {/* <!-- Row / End --> */}

                        {/* Footer Start */}
                        <DashboardFooter />
                        {/* Footer End */}
                    </div>
                </div>

                {/* <!-- Dashboard Content End --> */}
            </div>
        </>
    )
}
