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
import { useMutation, useQuery, UseQueryResult } from 'react-query';
import { MsgText } from './MsgText';
import { IBlogCategory, IBlogPost } from '../interfaces';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Bars } from 'react-loader-spinner'
import JoditReact from 'jodit-react-ts';
import { GetBlogCategories } from '../api/blog-category';
import { CreateBlogPost } from '../api/blog-post';

export const AddBlogPostSection: FC = () => {
    let initialValues = {
        title: '',
        description: '',
        image: '',
        status: 'Active',
        blog_category_id: 0,
        author: JSON.parse(localStorage.getItem('user') || '').id,
    };

    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [fileName, setFileName] = useState(null)
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [captionImageMissing, setCaptionImageMissing] = useState<boolean>(false)
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

    // Fetch All Blog Categories
    const { data: blog_categories }: UseQueryResult<IBlogCategory[], Error> = useQuery<IBlogCategory[], Error>('blog-categories', GetBlogCategories);

    // All Validations
    const FormValidationSchema = Yup.object().shape({
        title: Yup.string().trim().min(2, 'Title is too short - should be 2 chars minimum.').required().label('Title'),
        description: Yup.string().trim().required().label('Description'),
        status: Yup.string().trim().required().label('Status'),
        blog_category_id: Yup.number().required().label('Category'),
        author: Yup.number().required().label('Author'),
    });


    // Mutation For Adding Blog Post
    const createMutation = useMutation(CreateBlogPost);

    const handleAddBlog = async (payload: IBlogPost) => {
        if (fileName) payload = { ...payload, image: fileName };

        if (!payload.image) {
            setCaptionImageMissing(true)
            setErrorMsg("Upload a caption image to continue!");
            return;
        }
        const newBlogPost = await createMutation.mutateAsync({ ...payload, blog_category_id: Number(payload.blog_category_id) })
        if (newBlogPost) {
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
            .post('/api/file-upload', formData, options)
            .then((res) => {
                if (res.data.hasOwnProperty('file')) {
                    setFileName(res.data.file);
                    setSuccessMsg("Uploaded Successfully!");
                    setIsUploading(false)
                    setCaptionImageMissing(false)
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
            <DashboardHeader current={'Add Blog Post'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection current={'manage_blog'} />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Add Blog Post'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="dashboard-box">
                                    <div className="headline">
                                        <h3>Add Blog Post</h3>
                                    </div>
                                    <Formik
                                        enableReinitialize
                                        initialValues={initialValues}
                                        onSubmit={handleAddBlog}
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
                                                                <input type="text" className="utf-with-border" placeholder="Title" name="title" id="title" value={values.title}
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
                                                                <select className="selectpicker utf-with-border" data-size="7" title="Select category" name="blog_category_id" id="blog_category_id" value={values.blog_category_id}
                                                                    onChange={handleChange('blog_category_id')}
                                                                    onBlur={handleBlur('blog_category_id')}
                                                                    autoComplete={`${true}`}>
                                                                    {blog_categories && blog_categories.filter((cat) => cat.status === 'Active').map((category: any, index: number) => (
                                                                        <option key={index + 1} value={category.id}>{category.name}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            {touched.blog_category_id && errors.blog_category_id && (
                                                                <MsgText
                                                                    text={errors.blog_category_id}
                                                                    textColor="danger"
                                                                />
                                                            )}
                                                        </div>

                                                        <div className="col-xl-12 col-md-12 col-sm-12">
                                                            <div className="utf-submit-field">
                                                                <h5>Upload Caption Image</h5>
                                                                <div className="uploadButton margin-top-15 margin-bottom-30">
                                                                    <input className="uploadButton-input" type="file" accept="image/*" id="upload" onChange={handleFileChange} />
                                                                    <label className="uploadButton-button ripple-effect button gray" htmlFor="upload">Choose file</label>
                                                                    <span className="uploadButton-file-name">{fileName && uploadPercentage < 100 ? (<span style={{ color: 'orange' }}><i className="icon-material-outline-attach-file"></i> {fileName}</span>) : 'Upload a Caption Image.'}</span>
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
                                                                {captionImageMissing && (
                                                                    <MsgText
                                                                        text={'Uploading a caption image is required!'}
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
                                                        {!createMutation.isLoading ? (<button className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-15" type="submit">
                                                            Save
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
