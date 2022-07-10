/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import axios from '../axios';
import { useQuery, UseQueryResult } from 'react-query'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'
import { toast, ToastContainer } from 'react-toastify'
import { Bars } from 'react-loader-spinner'
import { useMutation } from 'react-query'
import { IBlogCategory, IBlogPost } from '../interfaces'
import { DeleteBlogPost, GetBlogPosts, UpdateBlogPost } from '../api/blog-post'
import { Backdrop, Box, CircularProgress, Fade, Modal, Typography } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { MsgText } from './MsgText'
import JoditReact from 'jodit-react-ts'
import { GetBlogCategories } from '../api/blog-category'
import moment from 'moment'
import { ApiUrl } from '../constants';
import parse from 'html-react-parser';

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

export const ViewBlogPostsSection: FC = () => {

    let initialValues = {
        title: '',
        description: '',
        image: '',
        status: '',
        blog_category_id: 0,
        author: JSON.parse(localStorage.getItem('user') || '').id,
    };

    const [formValues, setFormValues] = useState(initialValues)
    const [currentRow, setCurrentRow] = useState(0)
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [open, setOpen] = React.useState(false);
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [fileName, setFileName] = useState(null)
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [captionImageMissing, setCaptionImageMissing] = useState<boolean>(false)
    const [hideFileUpload, setHideFileUpload] = useState(false);
    const [open2, setOpen2] = useState(false);
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


    // Fetch All Blog Posts
    const { data: blog_posts, isLoading: isFetchingPosts, refetch: RefetchBlogPosts }: UseQueryResult<IBlogPost[], Error> = useQuery<IBlogPost[], Error>('blog-posts', GetBlogPosts);

    // Fetch All Blog Categories
    const { data: blog_categories }: UseQueryResult<IBlogCategory[], Error> = useQuery<IBlogCategory[], Error>('blog-categories', GetBlogCategories);

    // Mutation For Updating Blog Category
    const updateMutation = useMutation(UpdateBlogPost);

    // Mutation For Deleting Blog Category
    const deleteMutation = useMutation(DeleteBlogPost);

    // All Validations
    const FormValidationSchema = Yup.object().shape({
        title: Yup.string().trim().min(2, 'Title is too short - should be 2 chars minimum.').required().label('Title'),
        description: Yup.string().trim().required().label('Description'),
        status: Yup.string().trim().required().label('Status'),
        blog_category_id: Yup.number().required().label('Category'),
        author: Yup.number().required().label('Author'),
    });

    const handleUpdate = async (payload: IBlogPost) => {
        if (captionImageMissing) {
            setErrorMsg("Upload caption image to continue!");
            return;
        }
        const updatedPost = await updateMutation.mutateAsync({ ...payload, id: currentRow, image: fileName, blog_category_id: Number(payload.blog_category_id) })
        if (updatedPost.hasOwnProperty('uuid')) {
            handleClose()
            setSuccessMsg("Update Successfully!");
            RefetchBlogPosts();
        }
        if (updateMutation.isError) {
            setErrorMsg("Something went wrong!");
        }
    }

    const handleDelete = async (id: number) => {
        const deletedPost = await deleteMutation.mutateAsync(id)
        if (deletedPost.hasOwnProperty('uuid')) {
            setSuccessMsg("Deleted Successfully!");
            RefetchBlogPosts();
        }
        if (deleteMutation.isError) {
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


    if (isFetchingPosts) {
        console.log("Loading...")
    }

    return (
        <>
            <ToastContainer />
            {/* < !--Header Container-- > */}
            <DashboardHeader current={'Manage Blog Categories'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection current={'manage_blog_posts'} />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Manage Blog Categories'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="utf_dashboard_list_box table-responsive recent_booking dashboard-box">
                                    <div className="headline">
                                        <h3>All Blog Categories</h3>
                                        <div className="sort-by">
                                            <a href="/add-blog-post" className="button gray utf-ripple-effect-dark"><i className="icon-feather-plus"></i> Add post</a>
                                        </div>
                                    </div>
                                    <div className="dashboard-list-box table-responsive invoices with-icons">
                                        {blog_posts && blog_posts.length > 0 ? (<><table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Status</th>
                                                    <th>Author</th>
                                                    <th>Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {blog_posts && blog_posts.map((post: any, index: number) =>
                                                (<tr key={post.id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        {post.title}
                                                    </td>
                                                    <td>
                                                        {post.status === "Active" && (<span className={`badge badge-pill text-uppercase badge-success`}>{post.status}</span>)}
                                                        {post.status === "Inactive" && (<span className={`badge badge-pill text-uppercase badge-warning`}>{post.status}</span>)}
                                                        {post.status === "Publish" && (<span className={`badge badge-pill text-uppercase badge-publish`}>{post.status}ed</span>)}
                                                    </td>
                                                    <td>
                                                        {post.user.profile.first_name}
                                                    </td>
                                                    <td>
                                                        {moment(post.updated_at).format('MMM D, YYYY')}
                                                    </td>
                                                    <td>
                                                        <a href="/" onClick={(e) => { e.preventDefault(); handleOpen2(); setCurrentRow(post.id) }} className="primary-tb-btn" data-tippy-placement="top" data-tippy="View" data-original-title="View"><i className="icon-feather-eye"></i></a>
                                                        <a href="/" onClick={(e) => {
                                                            e.preventDefault(); handleOpen(); setCurrentRow(post.id); setFormValues(
                                                                {
                                                                    title: post.title,
                                                                    description: post.description,
                                                                    image: post.image,
                                                                    status: post.status,
                                                                    blog_category_id: post.blog_category.id,
                                                                    author: post.user.id,
                                                                }
                                                            )
                                                            post.image && setHideFileUpload(true)
                                                            post.image && setFileName(post.image);
                                                        }} className="info-tb-btn" data-tippy-placement="top" data-tippy="Edit" data-original-title="Edit"><i className="icon-feather-edit"></i></a>
                                                        <a href="/" onClick={(e) => { e.preventDefault(); handleDelete(post.id) }} className="danger-tb-btn" data-tippy-placement="top" data-tippy="Remove" data-original-title="Remove"><i className="icon-feather-trash-2"></i></a>
                                                    </td>
                                                </tr>))}
                                            </tbody>
                                        </table>
                                            {/* <!-- Pagination --> */}
                                            <div className="clearfix"></div>
                                            <div className="utf-pagination-container-aera margin-top-20 margin-bottom-20">
                                                <nav className="pagination">
                                                    <ul>
                                                        <li className="utf-pagination-arrow"><a href="/view-blog-posts" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                                        <li><a href="/view-blog-posts" className="ripple-effect current-page">1</a></li>
                                                        <li className="utf-pagination-arrow"><a href="/view-blog-posts" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
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
            {blog_posts && blog_posts.map((post: any) =>
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
                                                    <div className="content with-padding padding-bottom-10">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12 col-sm-12">
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
                                                                    <select className="simple-select utf-with-border" data-size="7" title="Select category" name="blog_category_id" id="blog_category_id" value={values.blog_category_id}
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
                                                                    <h5>Upload Caption Image</h5>
                                                                    <div className="uploadButton margin-top-5 margin-bottom-30">
                                                                        {hideFileUpload ? (
                                                                            <>
                                                                                <span onClick={() => { setHideFileUpload(!hideFileUpload) }} className="update-caption-btn">Replace caption image</span>
                                                                                <img className="caption-image" src={`${ApiUrl}/api/file-upload/${post.image}`} alt="" />
                                                                            </>
                                                                        ) : (
                                                                            <>
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
                                                                            </>
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
                                                            {!updateMutation.isLoading ? (<button className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0 margin-bottom-15" type="submit">
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
                        </Box>
                    </Fade>
                </Modal>
            ))}

            {blog_posts && blog_posts.map((post: any) =>
            (
                <Modal
                    key={post.id}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={(open2 && currentRow === post.id) ? true : false}
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
                                    <h3><i className="icon-material-outline-reorder"></i> {post.title}</h3>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-md-12">
                                        <img className="caption-image" src={`${ApiUrl}/api/file-upload/${post.image}`} alt="" />
                                    </div>
                                    <div className="col-xl-12 col-md-12">
                                        {parse(post.description)}
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

