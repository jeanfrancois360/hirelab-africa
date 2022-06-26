/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'
import { toast, ToastContainer } from 'react-toastify'
import { Bars } from 'react-loader-spinner'
import { useMutation } from 'react-query'
import { IJobPost } from '../interfaces'
import { DeleteJobPost, GetJobPosts, UpdateJobPost } from '../api/job-post.ts'

export const ViewJobPostsSection: FC = () => {
    const [editMode, setEditMode] = useState(false)
    const [currentRow, setCurrentRow] = useState(0)
    const [nameValue, setNameValue] = useState("")
    const [statusValue, setStatusValue] = useState("")
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
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


    // Fetch All Job Posts
    const { data: job_posts, isLoading: isFetchingPosts, refetch }: UseQueryResult<IJobPost[], Error> = useQuery<IJobPost[], Error>('job-posts', GetJobPosts);

    // Mutation For Updating Job Category
    const updateMutation = useMutation(UpdateJobPost);

    // Mutation For Deleting Job Category
    const deleteMutation = useMutation(DeleteJobPost);

    const handleUpdate = async () => {
        const payload = {
            id: currentRow,
            name: nameValue,
            status: statusValue
        }
        const updatedCategory = await updateMutation.mutateAsync(payload)
        if (updatedCategory.hasOwnProperty('id')) {
            setEditMode(false)
            setSuccessMsg("Update Successfully!");
            refetch();
        }
        if (updateMutation.isError) {
            setErrorMsg("Something went wrong!");
        }
    }

    const handleDelete = async (id: number) => {
        const deletedCategory = await deleteMutation.mutateAsync(id)
        if (deletedCategory.hasOwnProperty('name')) {
            setEditMode(false)
            setSuccessMsg("Deleted Successfully!");
            refetch();
        }
        if (updateMutation.isError) {
            setErrorMsg("Something went wrong!");
        }
    }
    return (
        <>
            <ToastContainer />
            {/* < !--Header Container-- > */}
            <DashboardHeader current={'Manage Jobs'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Manage Jobs'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="dashboard-box margin-top-0">
                                    <div className="headline">
                                        <h3>All Job Posts</h3>
                                    </div>
                                    <div className="content">
                                        <ul className="utf-dashboard-box-list">
                                            {job_posts && job_posts.map((post: any, index: number) =>
                                            (
                                                <li>
                                                    <div className="utf-job-listing">
                                                        <div className="utf-job-listing-details">
                                                            <a href="dashboard-manage-resume.html" className="utf-job-listing-company-logo"><img src="assets/images/icons/new-job-2.png" alt="" /></a>
                                                            <div className="utf-job-listing-description">
                                                                <span className="dashboard-status-button utf-status-item green">{post.status}</span>
                                                                <h3 className="utf-job-listing-title"><a href="dashboard-manage-resume.html">{post.title}</a><span className="dashboard-status-button green"><i className="icon-material-outline-business-center"></i> {post.type}</span><span className={`dashboard-status-button ${post.workspace === "Remote" ? 'blue' : 'yellow'}`}><i className="icon-material-outline-location-on"></i> {post.workspace}</span></h3>
                                                                <div className="utf-job-listing-footer">
                                                                    <ul>
                                                                        <li><i className="icon-feather-briefcase"></i> Software Developer</li>
                                                                        <li><i className="icon-material-outline-date-range"></i> 10 Jan, 2021</li>
                                                                        <li><i className="icon-material-outline-account-balance-wallet"></i> {post.salary_range}</li>
                                                                        <li><i className="icon-material-outline-location-on"></i> {post.address}</li>
                                                                    </ul>
                                                                    <div className="utf-buttons-to-right">
                                                                        <a href="/" className="button green ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
                                                                        <a href="/" className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>))}
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
