import React from 'react'

export const JobTitleBar = ({ title, type, category, workspace, uuid }: { title: string, type: string, category: string, workspace: string, uuid: string }) => {
    return (
        <>
            <div className="single-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="utf-single-page-header-inner-aera">
                                <div className="utf-left-side">
                                    <div className="utf-header-image">
                                        <a href={`/application-form/${uuid}`} >
                                            <img src="/assets/images/company_logo_1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="utf-header-details">
                                        <span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> {type}</span>
                                        <ul>
                                            <li><i className="icon-line-awesome-user"></i> {workspace}</li>
                                        </ul>
                                        <h3>{title} <span className="utf-verified-badge" title="Verified" data-tippy-placement="top"></span></h3>
                                        <h5><i className="icon-material-outline-business-center"></i> {category}</h5>

                                    </div>
                                </div>
                                <div className="utf-right-side">
                                    <div className="salary-box">
                                        <a href={`/application-form/${uuid}`} onClick={() => { localStorage.setItem('prev_page', 'application_form'); }} className="apply-now-button popup-with-zoom-anim margin-top-0">Apply For This Job <i className="icon-feather-chevron-right"></i></a>
                                        {/* <a href="/" className="button save-job-btn margin-top-20">Save For Jobs <i className="icon-feather-chevron-right"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
