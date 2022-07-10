/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { MsgText } from './MsgText';
import { IJobCategory } from '../interfaces';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bars } from 'react-loader-spinner'
import { useMutation } from 'react-query'
import { CreateJobCategory } from '../api/job-category'

export const AddJobCategorySection: FC = () => {
    let initialValues = {
        name: '',
        status: 'Active',
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


    // All Validations
    const FormValidationSchema = Yup.object().shape({
        name: Yup.string().trim().min(2, 'Category name is too short - should be 2 chars minimum.').required().label('Category name'),
        status: Yup.string().trim().required().label('Status')
    });


    // Mutation For Adding Job Category
    const createMutation = useMutation(CreateJobCategory);

    const handleAddCategory = async (payload: IJobCategory) => {
        const newJobCategory = await createMutation.mutateAsync(payload)
        if (newJobCategory) {
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
            <DashboardHeader current={'Add Job Category'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection current={'manage_job_categories'} />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Add Job Category'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="dashboard-box">
                                    <div className="headline">
                                        <h3>Add Category</h3>
                                    </div>
                                    <Formik
                                        enableReinitialize
                                        initialValues={initialValues}
                                        onSubmit={handleAddCategory}
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
                                                                <h5>Name</h5>
                                                                <input type="text" className="utf-with-border" placeholder="Category name" name="name" id="name" value={values.name}
                                                                    onChange={handleChange('name')}
                                                                    onBlur={handleBlur('name')}
                                                                    autoComplete={`${true}`} />
                                                                {touched.name && errors.name && (
                                                                    <MsgText
                                                                        text={errors.name}
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
                                                                {touched.status && errors.status && (
                                                                    <MsgText
                                                                        text={errors.status}
                                                                        textColor="danger"
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="utf-centered-button">
                                                        {!createMutation.isLoading ? (<button className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-15" type="submit">
                                                            Add Job Category
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

