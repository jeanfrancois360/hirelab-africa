/* eslint-disable react-hooks/rules-of-hooks */
import moment from 'moment'
import React, { FC, useEffect, useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { GetCompanies } from '../api/company'
import { GetCandidateCvs, GetCvs } from '../api/cv'
import { GetCandidateJobApplications, GetEmployerJobApplications, GetJobApplications } from '../api/job-application'
import { GetEmployerJobPosts, GetJobPosts } from '../api/job-post'
import { ICompany, ICv, IJobApplication, IJobPost } from '../interfaces'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'

export const DashboardSection: FC = () => {
    // @ts-ignore
    let user = JSON.parse(localStorage.getItem('user'));
    let role_arr = ['Employer'];
    const [userDetails, setUserDetails] = useState<any>(null);

    // Fetch All Job Posts
    const { data: job_posts }: UseQueryResult<IJobPost[], Error> = useQuery<IJobPost[], Error>('job-posts', user && user.hasOwnProperty('role') && role_arr.includes(user.role.name) ? GetEmployerJobPosts : GetJobPosts);

    // Fetch All Application
    let job_applications: UseQueryResult<IJobApplication[], Error> | null;
    if (user && user.hasOwnProperty('role') && user.role.name === 'Candidate') {
        job_applications = useQuery<IJobApplication[], Error>('job-applications', GetCandidateJobApplications);
    }
    else if (user && user.hasOwnProperty('role') && user.role.name === 'Employer') {
        job_applications = useQuery<IJobApplication[], Error>('job-applications', GetEmployerJobApplications);
    }
    else {
        job_applications = useQuery<IJobApplication[], Error>('job-applications', GetJobApplications);
    }

    // Fetch All Companies
    const { data: companies }: UseQueryResult<ICompany[], Error> = useQuery<ICompany[], Error>('companies', GetCompanies);

    // Fetch All CV
    const { data: cvs }: UseQueryResult<ICv[], Error> = useQuery<ICv[], Error>('cvs', user && user.hasOwnProperty('role') && role_arr.includes(user.role.name) ? GetCandidateCvs : GetCvs);

    useEffect(() => {
        // @ts-ignore
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserDetails(user)
        }
    }, [])
    return (
        <>
            {/* < !--Header Container-- > */}
            <DashboardHeader current={'Dashboard'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection current={'dashboard'} />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Dashboard'} prev={'Home'} url={'/'} />

                    <div className="utf-dashboard-content-inner-aera">
                        {/* <div className="notification success closeable">
                            <p>You are Currently Signed in as <strong>John Williams</strong> Has Been Approved!</p>
                            <Link className="close" to="/"></Link>
                        </div> */}

                        {userDetails && userDetails.hasOwnProperty('role') && userDetails.role.name === 'Admin' && (
                            <>
                                <div className="utf-funfacts-container-aera">
                                    <div className="fun-fact" data-fun-fact-color="#2a41e8">
                                        <div className="fun-fact-icon"><i style={{ color: '#2a41e8' }} className="icon-feather-briefcase"></i></div>
                                        <div className="fun-fact-text">
                                            <h4>{job_posts && job_posts.length > 0 ? job_posts.length : 0}</h4>
                                            <span>Jobs</span>
                                        </div>
                                    </div>
                                    <div className="fun-fact" data-fun-fact-color="#efa80f">
                                        <div className="fun-fact-icon"><i style={{ color: '#efa80f' }} className="icon-line-awesome-building"></i></div>
                                        <div className="fun-fact-text">
                                            <h4>{companies && companies.length > 0 ? companies.length : 0}</h4>
                                            <span>Companies View</span>
                                        </div>
                                    </div>
                                    <div className="fun-fact" data-fun-fact-color="#36bd78">
                                        <div className="fun-fact-icon"><i style={{ color: '#36bd78' }} className="icon-material-outline-assignment"></i></div>
                                        <div className="fun-fact-text">
                                            <h4>{job_applications && job_applications.data && job_applications.data.length > 0 ? job_applications.data.length : 0}</h4>
                                            <span>Applications View</span>
                                        </div>
                                    </div>
                                    <div className="fun-fact" data-fun-fact-color="#0fc5bf">
                                        <div className="fun-fact-icon"><i style={{ color: '#0fc5bf' }} className="icon-material-outline-assignment"></i></div>
                                        <div className="fun-fact-text">
                                            <h4>{cvs && cvs.length > 0 ? cvs.length : 0}</h4>
                                            <span>Cvs</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {userDetails && userDetails.hasOwnProperty('role') && userDetails.role.name === 'Employer' && (
                            <>
                                <div className="utf-funfacts-container-aera">
                                    <div className="fun-fact" data-fun-fact-color="#2a41e8">
                                        <div className="fun-fact-icon"><i style={{ color: '#2a41e8' }} className="icon-feather-briefcase"></i></div>
                                        <div className="fun-fact-text">
                                            <h4>{job_posts && job_posts.length > 0 ? job_posts.length : 0}</h4>
                                            <span>Jobs</span>
                                        </div>
                                    </div>
                                    <div className="fun-fact" data-fun-fact-color="#36bd78">
                                        <div className="fun-fact-icon"><i style={{ color: '#36bd78' }} className="icon-material-outline-assignment"></i></div>
                                        <div className="fun-fact-text">
                                            <h4>{job_applications && job_applications.data && job_applications.data.length > 0 ? job_applications.data.filter((i) => i.status === 'Accept').length : 0}</h4>
                                            <span>Accepted Applications</span>
                                        </div>
                                    </div>
                                    <div className="fun-fact" data-fun-fact-color="#efa80f">
                                        <div className="fun-fact-icon"><i style={{ color: '#efa80f' }} className="icon-material-outline-assignment"></i></div>
                                        <div className="fun-fact-text">
                                            <h4>{job_applications && job_applications.data && job_applications.data.length > 0 ? job_applications.data.filter((i) => i.status === 'Pending').length : 0}</h4>
                                            <span>Pending Applications</span>
                                        </div>
                                    </div>
                                    <div className="fun-fact" data-fun-fact-color="#dc3139">
                                        <div className="fun-fact-icon"><i style={{ color: '#dc3139' }} className="icon-material-outline-assignment"></i></div>
                                        <div className="fun-fact-text">
                                            <h4>{job_applications && job_applications.data && job_applications.data.length > 0 ? job_applications.data.filter((i) => i.status === 'Reject').length : 0}</h4>
                                            <span>Rejected Applications</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {userDetails && userDetails.hasOwnProperty('role') && userDetails.role.name === 'Candidate' && (
                            <>
                                <div className="utf-funfacts-container-aera">
                                    <div className="fun-fact" data-fun-fact-color="#2a41e8">
                                        <div className="fun-fact-icon"><i style={{ color: '#2a41e8' }} className="icon-feather-briefcase"></i></div>
                                        <div className="fun-fact-text">
                                            <h4>{job_posts && job_posts.length > 0 ? job_posts.length : 0}</h4>
                                            <span>Jobs</span>
                                        </div>
                                    </div>
                                    <div className="fun-fact" data-fun-fact-color="#36bd78">
                                        <div className="fun-fact-icon"><i style={{ color: '#36bd78' }} className="icon-material-outline-assignment"></i></div>
                                        <div className="fun-fact-text">
                                            {job_applications && job_applications.data && job_applications.data.length > 0 ? job_applications.data.filter((i) => i.status === 'Accept').length : 0}
                                            <span>Accepted Applications</span>
                                        </div>
                                    </div>
                                    <div className="fun-fact" data-fun-fact-color="#efa80f">
                                        <div className="fun-fact-icon"><i style={{ color: '#efa80f' }} className="icon-material-outline-assignment"></i></div>
                                        <div className="fun-fact-text">
                                            {job_applications && job_applications.data && job_applications.data.length > 0 ? job_applications.data.filter((i) => i.status === 'Pending').length : 0}
                                            <span>Pending Applications</span>
                                        </div>
                                    </div>
                                    <div className="fun-fact" data-fun-fact-color="#dc3139">
                                        <div className="fun-fact-icon"><i style={{ color: '#dc3139' }} className="icon-material-outline-assignment"></i></div>
                                        <div className="fun-fact-text">
                                            {job_applications && job_applications.data && job_applications.data.length > 0 ? job_applications.data.filter((i) => i.status === 'Reject').length : 0}
                                            <span>Rejected Applications</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="row">
                            <div className="col-xl-6 col-md-12 col-sm-12">
                                <div className="dashboard-box">
                                    <div className="headline">
                                        <h3>Recent Job Posts</h3>
                                    </div>
                                    <div className="content">
                                        {job_posts && job_posts.length > 0 ? (<ul className="utf-dashboard-box-list">
                                            {job_posts && job_posts.slice(0, 4).map((post: any, index: number) =>
                                            (
                                                <li key={index}>
                                                    <div className="utf-invoice-list-item">
                                                        <strong>{post.title} <span className={`${post.status === 'Active' ? 'paid' : 'unpaid'}`}>{post.status}</span> </strong>
                                                        <ul>
                                                            <li><span>Type:</span> {post.type}</li>
                                                            <li><span>Workspace:</span> {post.workspace}</li>
                                                            <li><span>Date:</span> {moment(post.updated_at).format('MMM D, YYYY')}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <div className="utf-buttons-to-right"> <a href="invoice-template.html" className="button blue" title="View Details" data-tippy-placement="top"><i className="icon-feather-eye"></i> Details</a> </div> */}
                                                </li>
                                            ))}
                                        </ul>
                                        ) : (
                                            <div className="no-data">
                                                <i className="icon-material-outline-info"></i><p> No Data Found!</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-md-12 col-sm-12">
                                <div className="dashboard-box">
                                    <div className="headline">
                                        <h3>Recent Applications</h3>
                                    </div>
                                    <div className="content">
                                        {job_applications && job_applications.data && job_applications.data.length > 0 ? (<ul className="utf-dashboard-box-list">
                                            {job_applications && job_applications.data && job_applications.data.slice(0, 4).map((application: any, index: number) =>
                                            (
                                                <li key={index}>
                                                    <div className="utf-invoice-list-item">
                                                        <div className="utf-invoice-user-city"><i style={{ color: '#0fc5bf' }} className="icon-feather-briefcase"></i> {application.job_post.title}</div>
                                                        <strong>{application.first_name} {application.last_name} <span className={`${application.status === 'Accept' ? 'paid' : 'unpaid'}`}>{application.status === 'Accept' || application.status === 'Reject' ? application.status + 'ed' : application.status}</span> </strong>
                                                        <ul>
                                                            <li><span>Email:</span> {application.email}</li>
                                                            <li><span>Phone:</span> {application.phone}</li>
                                                            <li><span>Date:</span> {moment(application.created_at).format('MMM D, YYYY')}</li>
                                                        </ul>
                                                    </div>
                                                    {/* <div className="utf-buttons-to-right"> <a href="invoice-template.html" className="button blue" title="View Details" data-tippy-placement="top"><i className="icon-feather-eye"></i> Details</a> </div> */}
                                                </li>
                                            ))}
                                        </ul>
                                        ) : (
                                            <div className="no-data">
                                                <i className="icon-material-outline-info"></i><p> No Data Found!</p>
                                            </div>
                                        )}
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
