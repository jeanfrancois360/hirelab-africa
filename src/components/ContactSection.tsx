/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { IContactUs } from '../interfaces';
import { SendMessage } from '../api/contact-us';
import { MsgText } from './MsgText';

export const ContactSection: FC = () => {
	let initialValues = {
		first_name: '',
		last_name: '',
		email: '',
		subject: '',
		message: '',
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
		first_name: Yup.string().trim().min(2, 'First name is too short - should be 2 chars minimum.').required().label('First name'),
		last_name: Yup.string().trim().min(2, 'Last name is too short - should be 2 chars minimum.').required().label('Last name'),
		email: Yup.string().trim().required().label('Email'),
		subject: Yup.string().trim().required().label('Subject'),
		message: Yup.string().trim().required().label('Message'),
	});


	// Mutation For Sending message
	const createMutation = useMutation(SendMessage);

	const handleSendMessage = async (payload: IContactUs) => {
		setErrorMsg("We are making updates try again later!");
		return
		const newMessage = await createMutation.mutateAsync(payload)
		if (newMessage) {
			setSuccessMsg("Saved Successfully!");
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
					{/* <div className="col-xl-12">
        <div className="utf-contact-location-info-aera margin-bottom-50">
          <div id="utf-single-job-map-container-item">
            <div id="singleListingMap" data-latitude="48.8566" data-longitude="2.3522" data-map-icon="im im-icon-Hamburger"></div>
          </div>
        </div>
      </div>       */}
					<div className="col-xl-4 col-lg-4">
						<div className="utf-boxed-list-headline-item margin-bottom-35">
							<h3><i className="icon-feather-map-pin"></i> Office Address</h3>
						</div>
						<div className="utf-contact-location-info-aera margin-bottom-50">
							<div className="contact-address">
								<ul>
									<li><strong>Phone:-</strong> (+250) 791 593 298</li>
									<li><strong>Website:-</strong> <Link to="/">www.hirelabafrica.com</Link></li>
									<li><strong>E-Mail:-</strong> <Link to="/"> info@hirelabafrica.com</Link></li>
									<li><strong>Address:-</strong> Ikaze House, Remera, KG 11 Ave, Kigali – Rwanda</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-8 col-lg-8">
						<section id="contact" className="margin-bottom-50">
							<div className="utf-boxed-list-headline-item margin-bottom-35">
								<h3><i className="icon-material-outline-description"></i> Contact Form</h3>
							</div>
							<div className="utf-contact-form-item">
								<Formik
									enableReinitialize
									initialValues={initialValues}
									onSubmit={handleSendMessage}
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
										<form method="post" name="contactform" id="contactform" onSubmit={handleSubmit}>

											<div className="row">
												<div className="col-md-6">
													<div className="utf-no-border">
														<input className="utf-with-border" type="text" name="first_name" id="first_name" placeholder="First Name" value={values.first_name}
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
												<div className="col-md-6">
													<div className="utf-no-border">
														<input className="utf-with-border" type="text" name="last_name" id="last_name" placeholder="Last Name" value={values.last_name}
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
												<div className="col-md-6">
													<div className="utf-no-border">
														<input className="utf-with-border" type="email" name="email" id="email" placeholder="Email Address" value={values.email}
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
												<div className="col-md-6">
													<div className="utf-no-border">
														<input className="utf-with-border" type="text" name="subject" id="subject" placeholder="Subject" value={values.subject}
															onChange={handleChange('subject')}
															onBlur={handleBlur('subject')}
															autoComplete={`${true}`} />
														{touched.subject && errors.subject && (
															<MsgText
																text={errors.subject}
																textColor="danger"
															/>
														)}
													</div>
												</div>
											</div>
											<div>
												<textarea cols={40} rows={3} className="utf-with-border" placeholder="Message..." name="message" id="message" value={values.message}
													onChange={handleChange('message')}
													onBlur={handleBlur('message')}
													autoComplete={`${true}`}>
												</textarea>
												{touched.message && errors.message && (
													<MsgText
														text={errors.message}
														textColor="danger"
													/>
												)}
											</div>
											<div className="utf-centered-button margin-top-10">
												<input type="submit" className="submit button" id="submit" value="Submit Message" />
											</div>
										</form>
									)}
								</Formik>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	)
}
