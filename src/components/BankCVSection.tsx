/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import axios from '../axios';
//import Dropzone from 'react-dropzone'

import { toast, ToastContainer } from 'react-toastify'
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { MsgText } from './MsgText';
import { AddCv } from '../api/cv';
import { useMutation } from 'react-query';
import { GetUser } from '../api/user';
import { ApiUrl } from '../constants';

export const BankCVSection: FC = () => {
    let user = JSON.parse(localStorage.getItem('user') || '')

    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [fileName, setFileName] = useState(null)
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [cvMissing, setCvMissing] = useState(false)
    const [isUploading, setIsUploading] = useState(false);
    const [hideFileUpload, setHideFileUpload] = useState(false);
    const [oldFileName, setOldFileName] = useState(null);
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
        if (user && user.hasOwnProperty('id')) GetUser(user.id)
        if (user.cv) {
            user.cv && setOldFileName(user.cv.file)
            setHideFileUpload(true)
        }
    }, [])


    // Mutation For Adding Job Category
    const createMutation = useMutation(AddCv);

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
                    handleSaveCV(res.data.file);
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

    const handleFileChange = (e: any) => {
        setSelectedFile(e.target.files)
    }

    const handleSaveCV = async (file_name: string) => {
        const payload = {
            file: file_name,
            candidate: JSON.parse(localStorage.getItem('user') || '').id
        }

        const newCV = await createMutation.mutateAsync({ ...payload })
        if (newCV) {
            setSuccessMsg("Uploaded Successfully!");
        }
        if (createMutation.isError) {
            setErrorMsg("Something went wrong!");
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 utf-content-right-offset-aera">
                        <div className="utf-boxed-list-headline-item">
                            <h3><i className="icon-feather-upload-cloud"></i> Bank your CV</h3>
                        </div>
                        <div className="utf-billing-form-item">
                            <form method="post" onSubmit={(e) => { e.preventDefault(); handleFileUpload() }}>
                                <div className="row">
                                    <div className="col-md-12">
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
                                        {/* <Dropzone maxFiles={1} onDrop={acceptedFiles => setSelectedFile(acceptedFiles)}>
                                            {({ getRootProps, getInputProps }) => (
                                                <section>
                                                    <div className='dropezone-container' {...getRootProps()}>
                                                        <input {...getInputProps()} />
                                                        <div className='dropezone-content'>
                                                            <p className='dropezone-content-p'>Drag and drop a file here, or click to select a file</p>
                                                            <i className="dropezone-content-i icon-feather-upload-cloud"></i>
                                                            {fileName && (<div className='col-md-12'><span style={{ color: 'orange' }}><i className="icon-material-outline-attach-file"></i> {fileName}</span></div>)}
                                                        </div>
                                                    </div>
                                                </section>
                                            )}
                                        </Dropzone> */}
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div >
            </div >
        </>
    )
}
