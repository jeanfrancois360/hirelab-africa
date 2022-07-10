/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from 'formik'
import axios from '../axios';
import * as Yup from 'yup';
import { MsgText } from './MsgText';
import JoditReact from 'jodit-react-ts'
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import { IJobApplication } from '../interfaces';
import { AddJobApplication } from '../api/job-application';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router';
import { GetUser } from '../api/user';
import { ApiUrl, Countries } from '../constants';
import { Bars } from 'react-loader-spinner';

export const ApplicationFormSection = () => {
    let { uuid } = useParams();
    let user = JSON.parse(localStorage.getItem('user') || '')
    let initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        address: '',
        postcode: '',
        file: user.cv ? user.cv.file : null,
        cv_id: user.cv ? user.cv.id : null,
        cover_letter: '',
        status: 'Pending',
        candidate: JSON.parse(localStorage.getItem('user') || '').id,
        job_post_uuid: uuid || '',
    };

    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [fileName, setFileName] = useState(null)
    const [oldFileName, setOldFileName] = useState(null);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [cvMissing, setCvMissing] = useState(false)
    const [isUploading, setIsUploading] = useState(false);
    const [hideFileUpload, setHideFileUpload] = useState(false);

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

    useEffect(() => {
        if (user.cv) {
            setOldFileName(user.cv.file)
            setHideFileUpload(true)
        }
    }, [])


    // All Validations
    const FormValidationSchema = Yup.object().shape({
        first_name: Yup.string().trim().required().label('First Name'),
        last_name: Yup.string().trim().required().label('Last Name'),
        email: Yup.string().trim().required().label('Email'),
        phone: Yup.string().trim().required().label('Phone'),
        city: Yup.string().trim().required().label('City'),
        country: Yup.string().trim().required().label('Country'),
        address: Yup.string().trim().required().label('Address'),
        postcode: Yup.string().trim().required().label('Postcode'),
        cover_letter: Yup.string().required().label('Cover Letter'),
    });


    // Mutation For Adding Job Category
    const createMutation = useMutation(AddJobApplication);

    const handleJobApplication = async (payload: IJobApplication) => {
        if (fileName) payload = { ...payload, file: fileName };
        if (!payload.file && hideFileUpload === false) {
            setCvMissing(true)
            setErrorMsg("Upload a CV to continue!");
            return;
        }

        if (payload.cv_id) {
            payload = { ...payload, cv_id: user.cv.id }
        }

        const newJobApplication = await createMutation.mutateAsync({ ...payload })
        if (newJobApplication) {
            setSuccessMsg("Saved Successfully!");
            if (user && user.hasOwnProperty('id')) GetUser(user.id)
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
                    setCvMissing(false);
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
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 utf-content-right-offset-aera">
                        <div className="utf-boxed-list-headline-item">
                            <h3><i className="icon-feather-align-left"></i> Application Form</h3>
                        </div>
                        <div className="utf-billing-form-item">
                            <Formik
                                enableReinitialize
                                initialValues={initialValues}
                                onSubmit={handleJobApplication}
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
                                    <form method="post" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                <div className="utf-submit-field">
                                                    <h5>First Name</h5>
                                                    <input type="text" className="utf-with-border" placeholder="Enter First Name" name="first_name" id="first_name" value={values.first_name}
                                                        onChange={handleChange('first_name')}
                                                        onBlur={handleBlur('first_name')}
                                                        autoComplete={`${true}`} />
                                                    {touched.first_name && errors.first_name && (
                                                        <MsgText
                                                            text={errors.first_name}
                                                            textColor="danger"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                <div className="utf-submit-field">
                                                    <h5>Last Name</h5>
                                                    <input type="text" className="utf-with-border" placeholder="Enter Last Name" name="last_name" id="last_name" value={values.last_name}
                                                        onChange={handleChange('last_name')}
                                                        onBlur={handleBlur('last_name')}
                                                        autoComplete={`${true}`} />
                                                    {touched.last_name && errors.last_name && (
                                                        <MsgText
                                                            text={errors.last_name}
                                                            textColor="danger"
                                                        />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-md-6 col-sm-6">
                                                <div className="utf-submit-field">
                                                    <h5>Email Address</h5>
                                                    <input type="email" className="utf-with-border" placeholder="Enter Email Address" name="email" id="email" value={values.email}
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
                                            <div className="col-xl-6 col-md-6 col-sm-6">
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
                                                    <select className="selectpicker utf-with-border" data-size="7" title="Select category" name="country" id="country" value={values.country}
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
                                            <div className="col-xl-6 col-md-6 col-sm-6">
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

                                            <div className="col-xl-6 col-md-6 col-sm-6">

                                                <div className="utf-submit-field">
                                                    <h5>{hideFileUpload ? (<><span onClick={() => { window.open(`${ApiUrl}/file-upload/${oldFileName}`, '_blank'); }} className="view-cv-btn">View It</span> <span onClick={() => { setHideFileUpload(!hideFileUpload) }} className="update-cv-btn">Replace It</span></>) : ('Upload Your CV')}</h5>
                                                    <div className="uploadButton">
                                                        {hideFileUpload ? (<div className="cv-exist-container">
                                                            <h4><span className="icon-feather-check-circle"> </span> We already have your CV</h4>
                                                        </div>) : (
                                                            <>
                                                                <input className="uploadButton-input" type="file" accept="application/pdf" id="upload" onChange={handleFileChange} />
                                                                <label className="uploadButton-button ripple-effect button gray" htmlFor="upload">Choose file</label>
                                                                <span className="uploadButton-file-name">{fileName && uploadPercentage < 100 ? (<span style={{ color: 'orange' }}><i className="icon-material-outline-attach-file"></i> {fileName}</span>) : 'Upload your CV (PDF) File.'}</span>
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
                                                            </>
                                                        )}
                                                    </div>
                                                    {cvMissing && (
                                                        <MsgText
                                                            text={'Uploading your CV is required!'}
                                                            textColor="danger"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-md-12 col-sm-12">
                                                <div className="utf-submit-field">
                                                    <h5>Cover Letter</h5>
                                                    <JoditReact onChange={handleChange('cover_letter')} defaultValue={values.cover_letter} />
                                                    <br />
                                                    {touched.cover_letter && errors.cover_letter && (
                                                        <MsgText
                                                            text={errors.cover_letter}
                                                            textColor="danger"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="utf-centered-button">
                                            {!createMutation.isLoading ? (<button className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-15" type="submit">
                                                Submit
                                                <i className="icon-feather-plus"></i>
                                            </button>) :
                                                (<button className="button"><Bars
                                                    height="25"
                                                    width="25"
                                                    color='white'
                                                    ariaLabel='loading'
                                                /></button>)}
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>

                </div >
            </div >
        </>
    )
}
