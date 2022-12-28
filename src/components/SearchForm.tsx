/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query';
import { GetJobCategories } from '../api/job-category';
import { IJobCategory, IJobPost } from '../interfaces';
import { Formik } from 'formik'
import { toast, ToastContainer } from 'react-toastify';

export const SearchForm = ({ page, dataset }: { page: string, dataset: any }) => {
    let initialValues = {
        keyword: '',
        category: '',
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

    const handleJobSearch = async (values: any) => {
        let filteredData = null;
        if (values.keyword === '' && values.category === '') {
            setErrorMsg("Please provide a keyword or category!")
            localStorage.removeItem('filteredJobs')
            return;
        }
        if (values.keyword === '' && values.category !== '') {
            // Search for category only
            filteredData = await dataset && dataset.filter((itm: IJobPost) => Number(values.category) === Number(itm.job_category.id)).map((filteredJobs: IJobPost) => {
                return filteredJobs;
            })
        }
        else if (values.keyword !== '' && values.category === '') {
            // Search for keyword only
            filteredData = await dataset && dataset.filter((itm: IJobPost) => itm.title.indexOf(values.keyword) > -1).map((filteredJobs: IJobPost) => {
                return filteredJobs;
            })
        }
        else {
            // Search for both keyword and category
            filteredData = await dataset && dataset.filter((itm: IJobPost) => itm.title.indexOf(values.keyword) > -1 || Number(values.category) === Number(itm.job_category.id)).map((filteredJobs: IJobPost) => {
                return filteredJobs;
            })
        }
        if (filteredData) {
            localStorage.setItem('filteredJobs', JSON.stringify(filteredData));
            window.location.replace("/jobs");
        }

    }
    return (
        <>
            <ToastContainer />
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={handleJobSearch}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                }) => (
                    <form method="post" onSubmit={handleSubmit} id="utf-register-account-form">
                        <div className="utf-intro-banner-search-form-block margin-top-40">
                            <div className="utf-intro-search-field-item">
                                <i className="icon-feather-search"></i>
                                <input type="text" placeholder="Search Jobs Keywords..." name="keyword" id="keyword" value={values.keyword}
                                    onChange={handleChange('keyword')}
                                    onBlur={handleBlur('keyword')}
                                    autoComplete={`${true}`} />

                            </div>
                            <div className="utf-intro-search-field-item">
                                <select className="simple-select2 default" data-live-search="true" data-selected-text-format="count" data-size="5" title="All Categories" name="category" id="category" value={values.category}
                                    onChange={handleChange('category')}
                                    onBlur={handleBlur('category')}
                                    autoComplete={`${true}`}>
                                    {job_categories && job_categories.map((category: any, index: number) => (
                                        <option key={index + 1} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="utf-intro-search-button">
                                <button className="button ripple-effect" type='submit'><i className="icon-material-outline-search"></i> {page === 'primary' ? 'Search Jobs' : 'Search'}</button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    )
}
