/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { MsgText } from './MsgText';
import { IJobCategory, IJobPost } from '../interfaces';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bars } from 'react-loader-spinner'
import { useMutation, useQuery, UseQueryResult } from 'react-query'
import JoditReact from "jodit-react-ts";
import 'jodit/build/jodit.min.css';
import { CreateJobPost } from '../api/job-post'
import { GetJobCategories } from '../api/job-category'

export const AddJobPostSection: FC = () => {
    let initialValues = {
        title: '',
        description: '',
        salary_range: '',
        type: 'Full-time',
        workspace: 'On-site',
        status: 'Active',
        job_category_id: 0,
        posted_by: JSON.parse(localStorage.getItem('user') || '').id,
        address: JSON.parse(localStorage.getItem('user') || "").profile.address || ''
    };

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
        setSuccessMsg("");
        setErrorMsg("");
    }


    useEffect(() => {
        if (successMsg) {
            notify('success')
        }
    }, [successMsg])

    useEffect(() => {
        if (errorMsg) {
            notify('error')
        }
    }, [errorMsg])

    // Fetch All Job Categories
    const { data: job_categories }: UseQueryResult<IJobCategory[], Error> = useQuery<IJobCategory[], Error>('job-categories', GetJobCategories);

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


    // Mutation For Adding Job Category
    const createMutation = useMutation(CreateJobPost);

    const handleAddJobPost = async (payload: IJobPost) => {
        const newJobPost = await createMutation.mutateAsync({ ...payload, job_category_id: Number(payload.job_category_id) })
        if (newJobPost) {
            setSuccessMsg("Saved Successfully!");
        }
        if (createMutation.isError) {
            setErrorMsg("Something went wrong!");
        }
    }

    return (
        <>
            <ToastContainer />
            {/* < !--Header Container-- > */}
            <DashboardHeader current={'Add Job Post'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection current={'manage_job_posts'} />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Add Job Post'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="dashboard-box">
                                    <div className="headline">
                                        <h3>Add Job Post</h3>
                                    </div>
                                    <Formik
                                        enableReinitialize
                                        initialValues={initialValues}
                                        onSubmit={handleAddJobPost}
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
                                                <div className="content with-padding padding-bottom-10">
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
                                                                <select className="selectpicker utf-with-border" data-size="7" title="Select category" name="job_category_id" id="job_category_id" value={values.job_category_id}
                                                                    onChange={handleChange('job_category_id')}
                                                                    onBlur={handleBlur('job_category_id')}
                                                                    autoComplete={`${true}`}>
                                                                    {job_categories && job_categories.filter((cat) => cat.status === 'Active').map((category: any, index: number) => (
                                                                        <option key={index + 1} value={category.id}>{category.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            {touched.job_category_id && errors.job_category_id && (
                                                                <MsgText
                                                                    text={errors.job_category_id}
                                                                    textColor="danger"
                                                                />
                                                            )}
                                                        </div>
                                                        <div className="col-xl-4 col-md-4 col-sm-4">
                                                            <div className="utf-submit-field">
                                                                <h5>Type</h5>
                                                                <select className="selectpicker utf-with-border" data-size="7" title={values.type} name="type" id="type" value={values.type}
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
                                                            </div>
                                                            {touched.type && errors.type && (
                                                                <MsgText
                                                                    text={errors.type}
                                                                    textColor="danger"
                                                                />
                                                            )}
                                                        </div>
                                                        <div className="col-xl-4 col-md-4 col-sm-4">
                                                            <div className="utf-submit-field">
                                                                <h5>Workspace</h5>
                                                                <select className="selectpicker utf-with-border" data-size="7" title={values.workspace} name="workspace" id="workspace" value={values.workspace}
                                                                    onChange={handleChange('workspace')}
                                                                    onBlur={handleBlur('workspace')}
                                                                    autoComplete={`${true}`}>
                                                                    <option defaultValue="true" value="On-site">On-site</option>
                                                                    <option value="Remote">Remote</option>
                                                                </select>
                                                            </div>
                                                            {touched.workspace && errors.workspace && (
                                                                <MsgText
                                                                    text={errors.workspace}
                                                                    textColor="danger"
                                                                />
                                                            )}
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
                                                                <select className="selectpicker utf-with-border" data-size="7" title={values.status} name="status" id="status" value={values.status}
                                                                    onChange={handleChange('status')}
                                                                    onBlur={handleBlur('status')}
                                                                    autoComplete={`${true}`}>

                                                                    <option defaultValue="true" value="Active">Active</option>
                                                                    <option value="Inactive">Inactive</option>
                                                                </select>
                                                            </div>
                                                            {touched.status && errors.status && (
                                                                <MsgText
                                                                    text={errors.status}
                                                                    textColor="danger"
                                                                />
                                                            )}
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
                                                        {!createMutation.isLoading ? (<button className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-15" type="submit">
                                                            Add Job Post
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

