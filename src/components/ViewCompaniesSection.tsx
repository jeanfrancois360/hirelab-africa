/* eslint-disable react-hooks/exhaustive-deps */
import { Backdrop, Box, CircularProgress, Fade, Modal, Typography } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup';
import axios from '../axios';
import React, { FC, useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner'
import { useMutation, useQuery, UseQueryResult } from 'react-query'
import { toast, ToastContainer } from 'react-toastify'
import { DeleteCompany, GetCompanies, UpdateCompany } from '../api/company'
import { ICompany } from '../interfaces'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { MsgText } from './MsgText'
import { SidebarSection } from './SidebarSection'
import { ApiUrl, Countries } from '../constants';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
    height: '90%',
    display: 'block'
};

export const ViewCompaniesSection: FC = () => {
    let initialValues = {
        company_name: '',
        company_description: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        address: '',
        postcode: '',
        password: '',
        status: 'active',
        avatar: '',
        role: 'Employer',
    };

    const [formValues, setFormValues] = useState(initialValues)
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [currentRow, setCurrentRow] = useState(0)
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [fileName, setFileName] = useState(null)
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [openEye, setOpenEye] = useState(false);
    const [avatarMissing, setAvatarMissing] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
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

    useEffect(() => {
        if (selectedFile) {
            setFileName(selectedFile[0].name)
        }
    }, [selectedFile])

    // Fetch All Companies
    const { data: companies, isLoading: isFetchingCompanies, refetch: RefetchJobApplications }: UseQueryResult<ICompany[], Error> = useQuery<ICompany[], Error>('companies', GetCompanies);

    // Mutation For Updating a Company
    const updateMutation = useMutation(UpdateCompany);

    // Mutation For Deleting a Company
    const deleteMutation = useMutation(DeleteCompany);

    // All Validations
    const FormValidationSchema = Yup.object().shape({
        company_name: Yup.string().trim().min(2, 'Job title is too short - should be 2 chars minimum.').required().label('Company Name'),
        company_description: Yup.string().trim().required().label('Company Description'),
        email: Yup.string().trim().required().label('Email'),
        phone: Yup.string().trim().required().label('Phone'),
        city: Yup.string().trim().required().label('City'),
        country: Yup.string().trim().required().label('Country'),
        address: Yup.string().trim().required().label('Address'),
        status: Yup.string().trim().required().label('Status'),
        postcode: Yup.string().trim().required().label('Postcode'),

    });

    const handleDelete = async (id: number) => {
        const deletedCompany = await deleteMutation.mutateAsync(id)
        if (deletedCompany.hasOwnProperty('uuid')) {
            setSuccessMsg("Deleted Successfully!");
            RefetchJobApplications();
        }
        if (deleteMutation.isError) {
            setErrorMsg("Something went wrong!");
        }
    }

    const handleUpdate = async (payload: ICompany) => {
        if (avatarMissing) {
            setErrorMsg("Upload your logo to continue!");
            return;
        }
        const updatedCompany = await updateMutation.mutateAsync({ ...payload, id: currentRow, avatar: fileName })
        if (updatedCompany.hasOwnProperty('email')) {
            setSuccessMsg("Update Successfully!");
            RefetchJobApplications();
        }
        if (updateMutation.isError) {
            setErrorMsg("Something went wrong!");
        }
    }

    const handleFileChange = (e: any) => {
        setSelectedFile(e.target.files)
    }

    const handleFileUpload = async () => {
        const formData = new FormData();
        selectedFile && selectedFile.length > 0 && formData.append('file', selectedFile[0]);

        const options = {
            onUploadProgress: (progressEvent: { loaded: any; total: any; }) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total);
                console.info(`${loaded}kb of ${total}kb | ${percent}%`);

                if (percent <= 100) {
                    setUploadPercentage(percent)
                }
            },
        };
        setIsUploading(true)
        return await axios
            .post('/file-upload', formData, options)
            .then((res) => {
                if (res.data.hasOwnProperty('file')) {
                    setFileName(res.data.file);
                    setSuccessMsg("Uploaded Successfully!");
                    setIsUploading(false)
                    setAvatarMissing(false)
                }
                return res.data;
            })
            .catch((error: any) => {
                setIsUploading(false)
                console.error(error.response?.data?.message);
                setErrorMsg("Something went wrong!");
            });
    }

    if (isFetchingCompanies)
        console.log('Loading...')

    return (
        <>
            <ToastContainer />
            {/* < !--Header Container-- > */}
            <DashboardHeader current={'Manage Companies'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection current={'manage_companies'} />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Manage Companies'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="dashboard-box margin-top-0">
                                    <div className="headline">
                                        <h3>All Companies</h3>
                                    </div>
                                    <div className="content">
                                        {companies && companies.length > 0 ? (<><ul className="utf-dashboard-box-list">
                                            {companies && companies.map((company: any, index: number) =>
                                            (
                                                <li key={index}>
                                                    <div className="utf-job-listing">
                                                        <div className="utf-job-listing-details">
                                                            <a href="/view-companies" onClick={(e) => { e.preventDefault(); handleOpen2(); setCurrentRow(company.profile.id) }} className="utf-job-listing-company-logo"><img src={company.profile && company.profile.avatar ? `${ApiUrl}/file-upload/${company.profile && company.profile.avatar}` : 'assets/images/company_logo_1.png'} alt="" /></a>
                                                            <div className="utf-job-listing-description">

                                                                <h3 className="utf-job-listing-title"><a href="/view-companies" onClick={(e) => { e.preventDefault(); handleOpen2(); setCurrentRow(company.profile.id) }}>{company.profile && company.profile.company_name}</a></h3>
                                                                <div className="utf-job-listing-footer">
                                                                    <ul>
                                                                        {company.profile && company.profile.email && (<li><i className="icon-feather-briefcase"></i> {company.profile && company.profile.email}</li>)}
                                                                        {company.profile && company.profile.phone && (<li><i className="icon-material-outline-date-range"></i> {company.profile && company.profile.phone}</li>)}
                                                                        {company.profile && company.profile.address && (<li><i className="icon-material-outline-location-on"></i> {company.profile && company.profile.address}</li>)}
                                                                    </ul>
                                                                    <div className="utf-buttons-to-right">
                                                                        <a href="/view-companies" onClick={(e) => {
                                                                            e.preventDefault(); handleOpen(); setCurrentRow(company.profile && company.profile.id); setFormValues(
                                                                                {
                                                                                    company_name: company.profile.company_name ? company.profile.company_name : '',
                                                                                    company_description: company.profile.company_description ? company.profile.company_description : '',
                                                                                    email: company.profile.email ? company.profile.email : '',
                                                                                    phone: company.profile.phone ? company.profile.phone : '',
                                                                                    city: company.profile.city ? company.profile.city : '',
                                                                                    country: company.profile.country ? company.profile.country : '',
                                                                                    address: company.profile.address ? company.profile.address : '',
                                                                                    postcode: company.profile.postcode ? company.profile.postcode : '',
                                                                                    password: company.profile.password ? company.profile.password : '',
                                                                                    avatar: company.profile.avatar ? company.profile.avatar : '',
                                                                                    status: company.status ? company.status : '',
                                                                                    role: 'Employer',
                                                                                }
                                                                            );
                                                                            setFileName(company.profile.avatar ? company.profile.avatar : ''); if (company.profile.avatar) { setAvatarMissing(false) }
                                                                        }} className="button green ripple-effect ico success-tb-btn-2" title="Edit" data-tippy-placement="top"><i className="icon-feather-edit"></i></a>
                                                                        <a href='/view-companies' onClick={(e) => { e.preventDefault(); handleOpen2(); setCurrentRow(company.profile.id) }} download target={'_blank'} className="button ripple-effect ico primary-tb-btn-2" title="Download CV" data-tippy-placement="top" rel="noreferrer"><i className="icon-feather-eye"></i></a>
                                                                        <a href="/view-companies" onClick={(e) => { e.preventDefault(); handleDelete(company.id) }} className="button red ripple-effect ico danger-tb-btn-2" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
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
                                                        <li className="utf-pagination-arrow"><a href="/view-companies" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                                        <li><a href="/view-companies" className="ripple-effect current-page">1</a></li>
                                                        <li className="utf-pagination-arrow"><a href="/view-companies" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
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
            {
                companies && companies.map((company: any, index: number) =>
                (
                    <Modal
                        key={company.id}
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={((open && company.profile) && currentRow === company.profile.id) ? true : false}
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
                                        <h3><i className="icon-feather-edit"></i> Edit Company Details</h3>
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
                                                        <div className="content with-padding padding-bottom-10">
                                                            <div className="row">
                                                                <div className="col-xl-6 col-md-6 col-sm-6">
                                                                    <div className="utf-submit-field">
                                                                        <h5>Company name</h5>
                                                                        <input type="text" className="utf-with-border" placeholder="Company Name" name="company_name" id="company_name" value={values.company_name}
                                                                            onChange={handleChange('company_name')}
                                                                            onBlur={handleBlur('company_name')}
                                                                            autoComplete={`${true}`} />
                                                                        {touched.company_name && errors.company_name && (
                                                                            <MsgText
                                                                                text={errors.company_name}
                                                                                textColor="danger"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-6 col-md-6 col-sm-6">
                                                                    <div className="utf-submit-field">
                                                                        <h5>Email Address</h5>
                                                                        <input type="email" className="utf-with-border" placeholder="Email Address" name="email" id="email" value={values.email}
                                                                            onChange={handleChange('email')}
                                                                            onBlur={handleBlur('email')}
                                                                            autoComplete={`${true}`} />
                                                                        {touched.email && errors.email && (
                                                                            <MsgText
                                                                                text={errors.email}
                                                                                textColor="danger"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4 col-md-4 col-sm-4">
                                                                    <div className="utf-submit-field">
                                                                        <h5>Phone Number</h5>
                                                                        <input type="text" className="utf-with-border" placeholder="Enter Phone Number" name="phone" id="phone" value={values.phone}
                                                                            onChange={handleChange('phone')}
                                                                            onBlur={handleBlur('phone')}
                                                                            autoComplete={`${true}`} />
                                                                        {touched.phone && errors.phone && (
                                                                            <MsgText
                                                                                text={errors.phone}
                                                                                textColor="danger"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4 col-md-4 col-sm-4">
                                                                    <div className="utf-submit-field">
                                                                        <h5>City</h5>
                                                                        <div className="utf-input-with-icon">
                                                                            <input className="utf-with-border" type="text" placeholder="Enter City" name="city" id="city" value={values.city}
                                                                                onChange={handleChange('city')}
                                                                                onBlur={handleBlur('city')}
                                                                                autoComplete={`${true}`} />
                                                                            <i className="icon-material-outline-location-city"></i>
                                                                        </div>
                                                                        {touched.city && errors.city && (
                                                                            <MsgText
                                                                                text={errors.city}
                                                                                textColor="danger"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                <div className="col-xl-4 col-md-4 col-sm-4">
                                                                    <div className="utf-submit-field">
                                                                        <h5>Country</h5>
                                                                        <select className="simple-select utf-with-border" data-size="7" title="Select country" name="country" id="country" value={values.country}
                                                                            onChange={handleChange('country')}
                                                                            onBlur={handleBlur('country')}
                                                                            autoComplete={`${true}`}>
                                                                            {Countries && Countries.map((country: any, index: number) => (
                                                                                <option key={index + 1} value={country.name}>{country.name}</option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    {touched.country && errors.country && (
                                                                        <MsgText
                                                                            text={errors.country}
                                                                            textColor="danger"
                                                                        />
                                                                    )}
                                                                </div>
                                                                <div className="col-xl-4 col-md-4 col-sm-4">
                                                                    <div className="utf-submit-field">
                                                                        <h5>Address</h5>
                                                                        <div className="utf-input-with-icon">
                                                                            <input className="utf-with-border" type="text" placeholder="Enter Address" name="address" id="address" value={values.address}
                                                                                onChange={handleChange('address')}
                                                                                onBlur={handleBlur('address')}
                                                                                autoComplete={`${true}`} />
                                                                            <i className="icon-material-outline-location-on"></i>
                                                                        </div>
                                                                        {touched.address && errors.address && (
                                                                            <MsgText
                                                                                text={errors.address}
                                                                                textColor="danger"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4 col-md-4 col-sm-4">
                                                                    <div className="utf-submit-field">
                                                                        <h5>Postcode</h5>
                                                                        <div className="utf-input-with-icon">
                                                                            <input className="utf-with-border" type="text" placeholder="Enter Postcode" name="postcode" id="postcode" value={values.postcode}
                                                                                onChange={handleChange('postcode')}
                                                                                onBlur={handleBlur('postcode')}
                                                                                autoComplete={`${true}`} />
                                                                            <i className="icon-brand-telegram-plane"></i>
                                                                        </div>
                                                                        {touched.postcode && errors.postcode && (
                                                                            <MsgText
                                                                                text={errors.postcode}
                                                                                textColor="danger"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4 col-md-4 col-sm-4">
                                                                    <div className="utf-submit-field">
                                                                        <h5>Status</h5>
                                                                        <select className="simple-select utf-with-border" data-size="7" name="status" id="status" value={values.status}
                                                                            onChange={handleChange('status')}
                                                                            onBlur={handleBlur('status')}
                                                                            autoComplete={`${true}`}>
                                                                            <option defaultValue="true" value="active">Active</option>
                                                                            <option value="inactive">Inactive</option>
                                                                        </select>
                                                                        {touched.status && errors.status && (
                                                                            <MsgText
                                                                                text={errors.status}
                                                                                textColor="danger"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-6 col-md-6 col-sm-6">
                                                                    <div className="utf-submit-field">
                                                                        <h5>Password</h5>
                                                                        <div className="utf-input-with-icon">
                                                                            <input className="utf-with-border" type={`${openEye ? 'text' : 'password'}`} name="password" id="password" placeholder="Password" value={values.password}
                                                                                onChange={handleChange('password')}
                                                                                onBlur={handleBlur('password')}
                                                                                autoComplete={`${true}`} />
                                                                            <i onClick={() => setOpenEye(!openEye)} className={`${openEye ? 'icon-feather-eye-off' : 'icon-feather-eye'}`}></i>
                                                                        </div>
                                                                        {touched.password && errors.password && (
                                                                            <>
                                                                                <MsgText
                                                                                    text={errors.password}
                                                                                    textColor="danger"
                                                                                />
                                                                                <br />
                                                                            </>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-6 col-md-6 col-sm-6">
                                                                    <div className="utf-submit-field">
                                                                        <h5>Upload Logo</h5>
                                                                        <div className="uploadButton margin-top-15 margin-bottom-30">
                                                                            <input className="uploadButton-input" type="file" accept="image/*" id="upload" onChange={handleFileChange} />
                                                                            <label className="uploadButton-button ripple-effect button gray" htmlFor="upload">Choose file</label>
                                                                            <span className="uploadButton-file-name">{fileName && uploadPercentage < 100 ? (<span style={{ color: 'orange' }}><i className="icon-material-outline-attach-file"></i> {fileName}</span>) : 'Upload a logo.'}</span>
                                                                            {!isUploading ? (<button type="button" onClick={handleFileUpload} className='button primary utf-ripple-effect-dark'><i className="icon-feather-upload"></i>{' '}Upload</button>) : (
                                                                                <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: '3px' }}>
                                                                                    <CircularProgress variant="determinate" value={uploadPercentage} />
                                                                                    <Box
                                                                                        sx={{
                                                                                            top: 0,
                                                                                            left: 0,
                                                                                            bottom: 0,
                                                                                            right: 0,
                                                                                            position: 'absolute',
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            justifyContent: 'center',
                                                                                        }}
                                                                                    >
                                                                                        <Typography
                                                                                            variant="caption"
                                                                                            component="div"
                                                                                            color="text.secondary"
                                                                                        >{`${Math.round(uploadPercentage)}%`}</Typography>
                                                                                    </Box>
                                                                                </Box>

                                                                            )}
                                                                        </div>
                                                                        {avatarMissing && (
                                                                            <MsgText
                                                                                text={'Uploading your logo is required!'}
                                                                                textColor="danger"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-12 col-md-12 col-sm-12">
                                                                    <div className="utf-submit-field">
                                                                        <h5>Company Description</h5>
                                                                        <textarea cols={40} rows={2} className="utf-with-border" placeholder="Company Description..." name="company_description" id="company_description" value={values.company_description}
                                                                            onChange={handleChange('company_description')}
                                                                            onBlur={handleBlur('company_description')}
                                                                            autoComplete={`${true}`}>
                                                                        </textarea>
                                                                        {touched.company_description && errors.company_description && (
                                                                            <MsgText
                                                                                text={errors.company_description}
                                                                                textColor="danger"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="utf-centered-button">
                                                                {!updateMutation.isLoading ? (<button className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-15" type="submit">
                                                                    Update Company
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
                ))
            }

            {
                companies && companies.map((company: any, index: number) =>
                (
                    <Modal
                        key={company.id}
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={((open2 && company.profile) && currentRow === company.profile.id) ? true : false}
                        onClose={handleClose2}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 600,
                        }}
                    >
                        <Fade in={open2}>
                            <Box sx={style}>
                                <div className="col-xl-12 margin-bottom-50">
                                    <div className="utf-boxed-list-headline-item">
                                        <h3><i className="icon-material-outline-assignment"></i> Company Details</h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 col-md-12">
                                            <p>
                                                <strong>Company name: </strong>{company.profile.company_name}<br />
                                                <strong>Email: </strong>{company.profile.email}<br />
                                                <strong>Phone: </strong>{company.profile.phone}<br />
                                                <strong>City: </strong>{company.profile.city}<br />
                                                <strong>Country: </strong>{company.profile.country}<br />
                                                <strong>Address: </strong>{company.profile.address}<br />
                                                <strong>Postcode: </strong>{company.profile.postcode}<br />
                                            </p>
                                        </div>
                                        <div className="col-xl-12 col-md-12">
                                            <strong>Company description</strong>
                                            <p>
                                                {company.profile.company_description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        </Fade>
                    </Modal>
                ))
            }
        </>
    )
}
