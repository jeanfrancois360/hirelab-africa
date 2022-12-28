/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from 'formik'
import axios from '../axios';
import * as Yup from 'yup';
import React, { FC, useEffect, useState } from 'react'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'
import { toast, ToastContainer } from 'react-toastify';
import { useMutation } from 'react-query';
import { MsgText } from './MsgText';
import { ICompany } from '../interfaces';
import { AddCompany } from '../api/company';
import { Countries } from '../constants';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Bars } from 'react-loader-spinner'

export const AddCompanySection: FC = () => {
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
        avatar: 'active',
        status: '',
        role: 'Employer',
    };

    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [fileName, setFileName] = useState(null)
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [open, setOpen] = useState(false);
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

    useEffect(() => {
        if (selectedFile) {
            setFileName(selectedFile[0].name)
        }
    }, [selectedFile])


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
        password: Yup.string().trim()
            .required()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
            )
            .label('Password'),
    });


    // Mutation For Adding Job Category
    const createMutation = useMutation(AddCompany);

    const handleAddCompany = async (payload: ICompany) => {
        const newCompany = await createMutation.mutateAsync({ ...payload, avatar: fileName })
        if (newCompany) {
            setSuccessMsg("Saved Successfully!");
        }
        if (createMutation.isError) {
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
                }
                return res.data;
            })
            .catch((error: any) => {
                setIsUploading(false)
                console.error(error.response?.data?.message);
                setErrorMsg("Something went wrong!");
            });
    }
    return (
        <>
            <ToastContainer />
            {/* < !--Header Container-- > */}
            <DashboardHeader current={'Add Company'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection current={'manage_companies'} />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Add Company'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="dashboard-box">
                                    <div className="headline">
                                        <h3>Add Company</h3>
                                    </div>
                                    <Formik
                                        enableReinitialize
                                        initialValues={initialValues}
                                        onSubmit={handleAddCompany}
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
                                                                <input type="email" className="utf-with-border" placeholder="Email Address" name="email" id="email"
                                                                    value={values.email}
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
                                                                    <input className="utf-with-border" type={`${open ? 'text' : 'password'}`} name="password" id="password" placeholder="Password" value={values.password}
                                                                        onChange={handleChange('password')}
                                                                        onBlur={handleBlur('password')}
                                                                        autoComplete={`${true}`} />
                                                                    <i onClick={() => setOpen(!open)} className={`${open ? 'icon-feather-eye-off' : 'icon-feather-eye'}`}></i>
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
                                                        {!createMutation.isLoading ? (<button className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-15" type="submit">
                                                            Add Company
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
