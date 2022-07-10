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
import { IJobCategory, IJobPost } from '../interfaces'
import { DeleteJobPost, GetEmployerJobPosts, GetJobPosts, UpdateJobPost } from '../api/job-post'
import { Backdrop, Box, Fade, Modal } from '@mui/material'
import { MsgText } from './MsgText'
import JoditReact from 'jodit-react-ts'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { GetJobCategories } from '../api/job-category'
import moment from 'moment'

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


export const ViewJobPostsSection: FC = () => {
    // @ts-ignore
    let user = JSON.parse(localStorage.getItem('user'));
    let role_arr = ['Employer'];

    let initialValues = {
        title: '',
        description: '',
        salary_range: '',
        type: 'Full-time',
        workspace: 'On-site',
        status: 'Active',
        job_category_id: '',
        posted_by: 0,
        address: ''
    };

    const [formValues, setFormValues] = useState(initialValues)
    const [currentRow, setCurrentRow] = useState(0)
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [open, setOpen] = React.useState(false);
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


    // Fetch All Job Posts
    const { data: job_posts, isLoading: isFetchingPosts, refetch: RefetchJobPosts }: UseQueryResult<IJobPost[], Error> = useQuery<IJobPost[], Error>('job-posts', user && user.hasOwnProperty('role') && role_arr.includes(user.role.name) ? GetEmployerJobPosts : GetJobPosts);

    // Fetch All Job Categories
    const { data: job_categories }: UseQueryResult<IJobCategory[], Error> = useQuery<IJobCategory[], Error>('job-categories', GetJobCategories);

    // Mutation For Updating Job Post
    const updateMutation = useMutation(UpdateJobPost);

    // Mutation For Deleting Job Post
    const deleteMutation = useMutation(DeleteJobPost);


    if (isFetchingPosts) {
        console.log("Loading...")
    }


    // All Validations
    const FormValidationSchema = Yup.object().shape({
        title: Yup.string().trim().min(2, 'Job title is too short - should be 2 chars minimum.').required().label('Job title'),
        description: Yup.string().trim().required().label('Description'),
        salary_range: Yup.string().trim().label('Salary range'),
        type: Yup.string().trim().required().label('Job type'),
        workspace: Yup.string().trim().required().label('Workspace'),
        status: Yup.string().trim().required().label('Status'),
        job_category_id: Yup.number().required().label('Category'),
        address: Yup.string().required().label('Address'),
    });

    const handleUpdate = async (payload: IJobPost) => {
        const updatedPost = await updateMutation.mutateAsync({ ...payload, id: currentRow, job_category_id: Number(payload.job_category_id) })
        if (updatedPost.hasOwnProperty('uuid')) {
            handleClose()
            setSuccessMsg("Update Successfully!");
            RefetchJobPosts();
        }
        if (updateMutation.isError) {
            setErrorMsg("Something went wrong!");
        }
    }

    const handleDelete = async (id: number) => {
        const deletedPost = await deleteMutation.mutateAsync(id)
        if (deletedPost.hasOwnProperty('uuid')) {
            handleClose()
            setSuccessMsg("Deleted Successfully!");
            RefetchJobPosts();
        }
        if (deleteMutation.isError) {
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
                <SidebarSection current={'manage_job_posts'} />
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
                                        {job_posts && job_posts.length > 0 ? (<><ul className="utf-dashboard-box-list">
                                            {job_posts && job_posts.map((post: any, index: number) =>
                                            (
                                                <li key={index}>
                                                    <div className="utf-job-listing">
                                                        <div className="utf-job-listing-details">
                                                            <a href="/view-job-posts" className="utf-job-listing-company-logo"><img src="assets/images/icons/new-job-2.png" alt="" /></a>
                                                            <div className="utf-job-listing-description">
                                                                {post.status === "Active" && (<span className={`dashboard-status-button utf-status-item green`}>{post.status}</span>)}
                                                                {post.status === "Inactive" && (<span className={`dashboard-status-button utf-status-item red`}>{post.status}</span>)}
                                                                {post.status === "Publish" && (<span className={`dashboard-status-button utf-status-item blue`}>{post.status}ed</span>)}
                                                                <h3 className="utf-job-listing-title"><a href="/view-job-posts">{post.title}</a><span className="dashboard-status-button green"><i className="icon-material-outline-business-center"></i> {post.type}</span><span className={`dashboard-status-button ${post.workspace === "Remote" ? 'blue' : 'yellow'}`}><i className="icon-material-outline-location-on"></i> {post.workspace}</span></h3>
                                                                <div className="utf-job-listing-footer">
                                                                    <ul>
                                                                        <li><i className="icon-feather-briefcase"></i>{post.job_category.name}</li>
                                                                        <li><i className="icon-material-outline-date-range"></i>{moment(post.updated_at).format('MMM D, YYYY')}</li>
                                                                        <li><i className="icon-material-outline-account-balance-wallet"></i> {post.salary_range}</li>
                                                                        <li><i className="icon-material-outline-location-on"></i> {post.address}</li>
                                                                    </ul>
                                                                    <div className="utf-buttons-to-right">
                                                                        <a href="/view-job-posts" onClick={(e) => {
                                                                            e.preventDefault(); handleOpen(); setCurrentRow(post.id); setFormValues(
                                                                                {
                                                                                    title: post.title,
                                                                                    description: post.description,
                                                                                    salary_range: post.salary_range,
                                                                                    type: post.type,
                                                                                    workspace: post.workspace,
                                                                                    status: post.status,
                                                                                    job_category_id: post.job_category.id,
                                                                                    posted_by: post.user.id,
                                                                                    address: post.address,
                                                                                }
                                                                            )
                                                                        }} className="button green ripple-effect ico" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
                                                                        <a href="/view-job-posts" onClick={(e) => { e.preventDefault(); handleDelete(post.id) }} className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>))}
                                        </ul>
                                            {/* <!-- Pagination --> */}
                                            <div className="clearfix"></div>
                                            <div className="utf-pagination-container-aera margin-top-20 margin-bottom-20">
                                                <nav className="pagination">
                                                    <ul>
                                                        <li className="utf-pagination-arrow"><a href="/view-job-posts" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                                        <li><a href="/view-job-posts" className="ripple-effect current-page">1</a></li>
                                                        <li className="utf-pagination-arrow"><a href="/view-job-posts" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
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
            {job_posts && job_posts.map((post: any, index: number) =>
            (
                <Modal
                    key={post.id}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open && currentRow === post.id}
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
                                    <h3><i className="icon-feather-edit"></i> Edit Job Post</h3>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-md-12">
                                        <Formik
                                            enableReinitialize
                                            initialValues={formValues}
                                            onSubmit={handleUpdate}
                                            validationSchema={FormValidationSchema}
                                        >
                                            {({
                                                values,
                                                handleChange,
                                                handleSubmit,
                                                setFieldValue,
                                                touched,
                                                handleBlur,
                                                errors,
                                            }) => (
                                                <form method="post" onSubmit={handleSubmit} id="utf-register-account-form">
                                                    <div className="content with-padding">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                                <div className="utf-submit-field">
                                                                    <h5>Title</h5>
                                                                    <input type="text" className="utf-with-border" placeholder="Job title" name="title" id="title" value={values.title}
                                                                        onChange={handleChange('title')}
                                                                        onBlur={handleBlur('title')}
                                                                        autoComplete={`${true}`} />
                                                                    {touched.title && errors.title && (
                                                                        <MsgText
                                                                            text={errors.title}
                                                                            textColor="danger"
                                                                        />
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                                <div className="utf-submit-field">
                                                                    <h5>Category</h5>
                                                                    <select className="simple-select utf-with-border" data-size="7" name="job_category_id" id="job_category_id" value={values.job_category_id}
                                                                        onChange={handleChange('job_category_id')}
                                                                        onBlur={handleBlur('job_category_id')}
                                                                        autoComplete={`${true}`}>
                                                                        {job_categories && job_categories.filter((cat) => cat.status === 'Active').map((category: any, index: number) => (
                                                                            <option key={index + 1} value={category.id}>{category.name}</option>
                                                                        ))}
                                                                    </select>
                                                                    {touched.job_category_id && errors.job_category_id && (
                                                                        <MsgText
                                                                            text={errors.job_category_id}
                                                                            textColor="danger"
                                                                        />
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-md-4 col-sm-4">
                                                                <div className="utf-submit-field">
                                                                    <h5>Type</h5>
                                                                    <select className="simple-select utf-with-border" data-size="7" name="type" id="type" value={values.type}
                                                                        onChange={handleChange('type')}
                                                                        onBlur={handleBlur('type')}
                                                                        autoComplete={`${true}`}>
                                                                        <option defaultValue="true" value="Full-time">Full-time</option>
                                                                        <option value="Part-time">Part-time</option>
                                                                        <option value="Contract">Contract</option>
                                                                        <option value="Temporary">Temporary</option>
                                                                        <option value="Volunteer">Volunteer</option>
                                                                        <option value="Internship">Internship</option>
                                                                    </select>
                                                                    {touched.type && errors.type && (
                                                                        <MsgText
                                                                            text={errors.type}
                                                                            textColor="danger"
                                                                        />
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-md-4 col-sm-4">
                                                                <div className="utf-submit-field">
                                                                    <h5>Workspace</h5>
                                                                    <select className="simple-select utf-with-border" data-size="7" name="workspace" id="workspace" value={values.workspace}
                                                                        onChange={handleChange('workspace')}
                                                                        onBlur={handleBlur('workspace')}
                                                                        autoComplete={`${true}`}>
                                                                        <option defaultValue="true" value="On-site">On-site</option>
                                                                        <option value="Remote">Remote</option>
                                                                    </select>
                                                                    {touched.workspace && errors.workspace && (
                                                                        <MsgText
                                                                            text={errors.workspace}
                                                                            textColor="danger"
                                                                        />
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-md-4 col-sm-4">
                                                                <div className="utf-submit-field">
                                                                    <h5>Salary range</h5>
                                                                    <input type="text" className="utf-with-border" placeholder="Salary range" name="salary_range" id="salary_range" value={values.salary_range}
                                                                        onChange={handleChange('salary_range')}
                                                                        onBlur={handleBlur('salary_range')}
                                                                        autoComplete={`${true}`} />
                                                                    {touched.salary_range && errors.salary_range && (
                                                                        <MsgText
                                                                            text={errors.salary_range}
                                                                            textColor="danger"
                                                                        />
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                                <div className="utf-submit-field">
                                                                    <h5>Address</h5>
                                                                    <input type="text" className="utf-with-border" placeholder="Address" name="address" id="address" value={values.address}
                                                                        onChange={handleChange('address')}
                                                                        onBlur={handleBlur('address')}
                                                                        autoComplete={`${true}`} />
                                                                    {touched.address && errors.address && (
                                                                        <MsgText
                                                                            text={errors.address}
                                                                            textColor="danger"
                                                                        />
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                                <div className="utf-submit-field">
                                                                    <h5>Status</h5>
                                                                    <select className="simple-select utf-with-border" data-size="7" name="status" id="status" value={values.status}
                                                                        onChange={handleChange('status')}
                                                                        onBlur={handleBlur('status')}
                                                                        autoComplete={`${true}`}>
                                                                        <option defaultValue="true" value="Active">Active</option>
                                                                        <option value="Publish">Publish</option>
                                                                        <option value="Inactive">Inactive</option>
                                                                    </select>
                                                                    {touched.status && errors.status && (
                                                                        <MsgText
                                                                            text={errors.status}
                                                                            textColor="danger"
                                                                        />
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12 col-md-12 col-sm-12">
                                                                <div className="utf-submit-field">
                                                                    <h5>Details</h5>
                                                                    <JoditReact onChange={handleChange('description')} defaultValue={values.description} />
                                                                    <br />
                                                                    {touched.description && errors.description && (
                                                                        <MsgText
                                                                            text={errors.description}
                                                                            textColor="danger"
                                                                        />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="utf-centered-button">
                                                            {!updateMutation.isLoading ? (<button className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-15" type="submit">
                                                                Update Job Post
                                                                <i className="icon-feather-plus"></i>
                                                            </button>) :
                                                                (<button className="button"><Bars
                                                                    height="25"
                                                                    width="25"
                                                                    color='white'
                                                                    ariaLabel='loading'
                                                                /></button>)}
                                                        </div>
                                                    </div>


                                                </form>
                                            )}
                                        </Formik>
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
