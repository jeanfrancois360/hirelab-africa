/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { Backdrop, Box, Fade, Modal } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { useMutation, useQuery, UseQueryResult } from 'react-query'
import { toast } from 'react-toastify'
import { DeleteJobApplication, GetCandidateJobApplications, GetEmployerJobApplications, GetJobApplications, UpdateJobApplication } from '../api/job-application'
import { IJobApplication } from '../interfaces'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'
import parse from 'html-react-parser';
import { ApiUrl } from '../constants'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
    height: '90%',
    display: 'block'
};

export const ViewApplicationsSection: FC = () => {
    // @ts-ignore
    let user = JSON.parse(localStorage.getItem('user'));
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [open, setOpen] = React.useState(false);
    const [currentRow, setCurrentRow] = useState(0)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const notify = (msg_type: string) => {
        if (msg_type === 'success')
            toast.success(successMsg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
            });
        if (msg_type === 'error')
            toast.error(errorMsg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
            });

        setErrorMsg("")
        setSuccessMsg("")
    }

    useEffect(() => {
        if (successMsg !== "") {
            notify('success')
        }
    }, [successMsg])

    useEffect(() => {
        if (errorMsg !== "") {
            notify('error');
        }

    }, [errorMsg])






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

    // Mutation For Updating Job Category
    const updateMutation = useMutation(UpdateJobApplication);

    // Mutation For Deleting Job Category
    const deleteMutation = useMutation(DeleteJobApplication);

    const handleDelete = async (id: number) => {
        const deletedApplication = await deleteMutation.mutateAsync(id)
        if (deletedApplication.hasOwnProperty('uuid')) {
            setSuccessMsg("Deleted Successfully!");
            //RefetchJobApplications();
            job_applications && job_applications.refetch();
        }
        if (deleteMutation.isError) {
            setErrorMsg("Something went wrong!");
        }
    }

    const handleUpdate = async (id: number, status: string) => {
        const payload = { id, status }
        const updatedApplication = await updateMutation.mutateAsync(payload)
        if (updatedApplication.hasOwnProperty('uuid')) {
            setSuccessMsg("Update Successfully!");
            //RefetchJobApplications();
            job_applications && job_applications.refetch();
        }
        if (updateMutation.isError) {
            setErrorMsg("Something went wrong!");
        }
    }
    return (
        <>
            {/* < !--Header Container-- > */}
            <DashboardHeader current={'Manage Application'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection current={'manage_applications'} />
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
                                        {job_applications && job_applications.data && job_applications.data.length > 0 ? (<><ul className="utf-dashboard-box-list">
                                            {job_applications && job_applications.data && job_applications.data.map((application: any, index: number) =>
                                            (<li key={index}>
                                                <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                                                    <div className="utf-manage-resume-overview-aera-inner">
                                                        <div className="utf-manage-resume-avatar">
                                                            <a href="/dashboard" onClick={(e) => { e.preventDefault(); handleOpen(); setCurrentRow(application.id) }}><img src="assets/images/icons/new-cv.png" alt="" /></a>
                                                        </div>
                                                        <div className="utf-manage-resume-item">
                                                            {application.status === 'Accept' && (<span className="dashboard-status-button utf-status-item green">{application.status}ed</span>)}
                                                            {application.status === 'Pending' && (<span className="dashboard-status-button utf-status-item orange">{application.status}</span>)}
                                                            {application.status === 'Reject' && (<span className="dashboard-status-button utf-status-item red">{application.status}ed</span>)}
                                                            <h4><a href="/dashboard" onClick={(e) => { e.preventDefault(); handleOpen(); setCurrentRow(application.id) }}>{application.job_post.title}</a><span className="dashboard-status-button green"><i className="icon-material-outline-business-center"></i> {application.job_post.type}</span><span className={`dashboard-status-button ${application.job_post.workspace === "Remote" ? 'blue' : 'yellow'}`}><i className="icon-material-outline-location-on"></i> {application.job_post.workspace}</span></h4>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-feather-user"></i>{application.first_name} {application.last_name}</a></span>
                                                            <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-feather-mail"></i>{application.email}</a></span>
                                                            {application.phone && (<span className="utf-manage-resume-detail-item"><i className="icon-feather-phone"></i> {application.phone}</span>)}
                                                            {application.address && (<span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-material-outline-location-on"></i> {application.address}</a></span>)}
                                                            <div className="utf-buttons-to-right">
                                                                <a href="/view-applications" onClick={(e) => { e.preventDefault(); handleUpdate(application.id, 'Accept'); }} className="popup-with-zoom-anim button ripple-effect success-tb-btn-2" title="Send Message" data-tippy-placement="top"><i className="icon-material-outline-check"></i> Accept</a>
                                                                <a href="/view-applications" onClick={(e) => { e.preventDefault(); handleUpdate(application.id, 'Reject'); }} className="popup-with-zoom-anim button ripple-effect warning-tb-btn-2" title="Send Message" data-tippy-placement="top"><i className="icon-feather-x"></i> Reject</a>
                                                                <a href='/' onClick={(e) => { e.preventDefault(); handleOpen(); setCurrentRow(application.id) }} download target={'_blank'} className="button ripple-effect ico primary-tb-btn-2" title="Download CV" data-tippy-placement="top" rel="noreferrer"><i className="icon-feather-eye"></i></a>
                                                                <a href={`${ApiUrl}/api/file-upload/${application.user.cv.file}`} download target={'_blank'} className="button ripple-effect ico info-tb-btn-2" title="Download CV" data-tippy-placement="top" rel="noreferrer"><i className="icon-feather-download"></i></a>
                                                                <a href="/view-applications" onClick={(e) => { e.preventDefault(); handleDelete(application.id); }} className="button ripple-effect ico danger-tb-btn-2" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            ))}
                                        </ul>
                                            {/* <!-- Pagination --> */}
                                            <div className="clearfix"></div>
                                            <div className="utf-pagination-container-aera margin-top-20 margin-bottom-20">
                                                <nav className="pagination">
                                                    <ul>
                                                        <li className="utf-pagination-arrow"><a href="/view-applications" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                                        <li><a href="/view-applications" className="ripple-effect current-page">1</a></li>
                                                        <li className="utf-pagination-arrow"><a href="/view-applications" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="clearfix"></div>
                                        </>) : (
                                            <div className="no-data">
                                                <i className="icon-material-outline-info"></i><p> No Data Found!</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

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
            {job_applications && job_applications.data && job_applications.data.map((application: any, index: number) =>
            (
                <Modal
                    key={application.id}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open && currentRow === application.id}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 600,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <div className="col-xl-12 margin-bottom-50">
                                <div className="utf-boxed-list-headline-item">
                                    <h3><i className="icon-material-outline-assignment"></i> Application Details</h3>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-md-12">
                                        <p>
                                            <strong>Names: </strong>{application.first_name} {application.last_name}<br />
                                            <strong>Email: </strong>{application.email}<br />
                                            <strong>Phone: </strong>{application.phone}<br />
                                            <strong>City: </strong>{application.city}<br />
                                            <strong>Country: </strong>{application.country}<br />
                                            <strong>Address: </strong>{application.address}<br />
                                        </p>
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        <strong>Cover letter</strong>
                                        <p>
                                            {parse(application.cover_letter)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            ))}
        </>
    )
}
