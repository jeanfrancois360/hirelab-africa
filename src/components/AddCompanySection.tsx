import React, { FC } from 'react'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'

export const AddCompanySection: FC = () => {
    return (
        <>
            {/* < !--Header Container-- > */}
            <DashboardHeader current={'Add Company'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Add Company'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="dashboard-box">
                                    <div className="headline">
                                        <h3>Add Company</h3>
                                    </div>
                                    <div className="content with-padding padding-bottom-10">
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                <div className="utf-submit-field">
                                                    <h5>Company name</h5>
                                                    <input type="text" className="utf-with-border" placeholder="First Name" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                <div className="utf-submit-field">
                                                    <h5>Email Address</h5>
                                                    <input type="email" className="utf-with-border" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                <div className="utf-submit-field">
                                                    <h5>Phone Number</h5>
                                                    <input type="text" className="utf-with-border" placeholder="Phone Number" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                <div className="utf-submit-field">
                                                    <h5>Location</h5>
                                                    <div className="utf-input-with-icon">
                                                        <input className="utf-with-border" type="text" placeholder="Type Address" />
                                                        <i className="icon-material-outline-location-on"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-md-12 col-sm-12">
                                                <div className="utf-submit-field">
                                                    <h5>Upload Logo</h5>
                                                    <div className="uploadButton margin-top-15 margin-bottom-30">
                                                        <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                                                        <label className="uploadButton-button ripple-effect" htmlFor="upload">Choose file</label>
                                                        <span className="uploadButton-file-name">Upload Logo (PNG, JPG, SVG) File.</span>
                                                        <button className='button gray utf-ripple-effect-dark'><i className="icon-feather-upload"></i>{' '}Upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-md-12 col-sm-12">
                                                <div className="utf-submit-field">
                                                    <h5>Company Description</h5>
                                                    <textarea cols={40} rows={2} className="utf-with-border" placeholder="Company Description..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
