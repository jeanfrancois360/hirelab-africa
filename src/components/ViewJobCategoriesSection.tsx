/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'
import { toast, ToastContainer } from 'react-toastify'
import { Bars } from 'react-loader-spinner'
import { DeleteJobCategory, GetJobCategories, UpdateJobCategory } from '../api/job-category'
import { useMutation } from 'react-query'
import { IJobCategory } from '../interfaces'

export const ViewJobCategoriesSection: FC = () => {

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


    // Fetch All Job Categories
    const { data: job_categories, isLoading: isFetchingCategories, refetch }: UseQueryResult<IJobCategory[], Error> = useQuery<IJobCategory[], Error>('job-categories', GetJobCategories);

    // Mutation For Updating Job Category
    const updateMutation = useMutation(UpdateJobCategory);

    // Mutation For Deleting Job Category
    const deleteMutation = useMutation(DeleteJobCategory);

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
            <DashboardHeader current={'Manage Categories'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Manage Categories'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="utf_dashboard_list_box table-responsive recent_booking dashboard-box">
                                    <div className="headline">
                                        <h3>All Categories</h3>
                                        <div className="sort-by">
                                            <a href="/add-job-category" className="button gray utf-ripple-effect-dark"><i className="icon-feather-plus"></i> Add category</a>
                                        </div>
                                    </div>
                                    <div className="dashboard-list-box table-responsive invoices with-icons">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {job_categories && job_categories.map((category: any, index: number) =>
                                                (<tr key={category.id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        {editMode === true && currentRow === category.id ? (<input type="text" className="tb-field" placeholder="Category name" name="name" id="name" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />) : category.name}
                                                    </td>
                                                    <td>
                                                        {editMode === true && currentRow === category.id ? (<select className="tb-field" data-size="7" title={statusValue} name="status" id="status" value={statusValue} onChange={(e) => setStatusValue(e.target.value)}>
                                                            <option defaultValue="true" value="Active">Active</option>
                                                            <option value="Inactive">Inactive</option>
                                                        </select>) : (<span className={`badge badge-pill text-uppercase ${category.status === "Active" ? 'badge-success' : 'badge-warning'}`}>{category.status}</span>)}
                                                    </td>
                                                    <td>
                                                        {isFetchingCategories && currentRow === category.id ? (
                                                            <Bars
                                                                height="25"
                                                                width="25"
                                                                color='#1e63cf'
                                                                ariaLabel='loading'
                                                            />
                                                        ) : (<>
                                                            {editMode === true && currentRow === category.id ? (<a href="/" onClick={(e) => { e.preventDefault(); handleUpdate() }} className="success-tb-btn" data-tippy-placement="top" data-tippy="Save" data-original-title="Save"><i className="icon-feather-save"></i></a>) : (<a href="/" onClick={(e) => { e.preventDefault(); setEditMode(true); setCurrentRow(category.id); setNameValue(category.name); setStatusValue(category.status) }} className="info-tb-btn" data-tippy-placement="top" data-tippy="Edit" data-original-title="Edit"><i className="icon-feather-edit"></i></a>)}
                                                            <a href="/" onClick={(e) => { e.preventDefault(); handleDelete(category.id) }} className="danger-tb-btn" data-tippy-placement="top" data-tippy="Remove" data-original-title="Remove"><i className="icon-feather-trash-2"></i></a>
                                                        </>
                                                        )}
                                                    </td>
                                                </tr>))}

                                            </tbody>
                                        </table>
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
        </>
    )
}

