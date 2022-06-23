/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MsgText } from './MsgText';
import { RegisterInt } from '../interfaces';
import axios from '../axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bars } from  'react-loader-spinner'


export const RegisterSection = () => {
    let initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        company_name: '',
        company_description: '',
        password: '',
        password_confirmation: '',
      };
      
  const [currentForm, setCurrentForm] = useState('Candidate')
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const notify = (msg_type: string) => {
   if(msg_type === 'success')
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
    if(msg_type === 'error')
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
  }


  useEffect(()=>{
   if(successMsg){
    notify('success')
   }
  },[successMsg])

  useEffect(()=>{
    if(errorMsg){
     notify('error')
    }
   },[errorMsg])


    // All Validations
  const CandidateFormValidationSchema = Yup.object().shape({
    first_name: Yup.string().required().label('First name'),
    last_name: Yup.string().required().label('Last name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string()
      .required()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      )
      .label('Password'),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });
  const EmployerFormValidationSchema = Yup.object().shape({
    company_name: Yup.string().required().label('Company name'),
    company_description: Yup.string().required().label('Company description'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string()
      .required()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      )
      .label('Password'),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });


  const handleSignUp = async (payload:RegisterInt)=>{
    if(isLoading){
      return
    }

    setIsLoading(true);
    setErrorMsg("")
    setSuccessMsg("")

    return await axios.post('/auth/signup/', {...payload, role: currentForm}).then((res) => {
      setIsLoading(false)
      if(res.data.hasOwnProperty('id')){
        setSuccessMsg("Successfully registered!");
      }
    }).catch((error)=> {
      setIsLoading(false)
      console.error(error.response?.data?.message)
      const errorMessage = error.response?.data?.message;
      setErrorMsg(errorMessage || error.message);
    })
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
          <div className="row">
              <div className="col-xl-6 offset-xl-3">
                  <div className="utf-login-register-page-aera margin-bottom-50">
                      <div className="utf-welcome-text-item">
                          <h3>Create Your New Account!</h3>
                          <span>Don't Have an Account? <a href="/login">Log In!</a></span>
                      </div>
                      <div className="utf-account-type">
                          <div>
                              <button className={`button full-width utf-ripple-effect-dark margin-top-10 custom-tab-btn ${currentForm === 'Candidate' && 'active-custom-tab-btn'}`}
                               type="button" title="Candidate" data-tippy-placement="top"
                               onClick={()=> setCurrentForm('Candidate')}>
                               <i className="icon-material-outline-account-circle"></i>
                                Candidate
                             </button>
                          </div>
                          <div>
                              <button 
                              className={`button full-width utf-ripple-effect-dark margin-top-10 custom-tab-btn ${currentForm === 'Employer' && 'active-custom-tab-btn'}`} 
                              type="button" title="Employer" data-tippy-placement="top" 
                              onClick={()=> setCurrentForm('Employer')}>
                                <i className="icon-material-outline-business-center"></i>
                                 Employer
                             </button>
                          </div>
                      </div>

                      {currentForm === "Employer" && (
                        <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={handleSignUp}
                        validationSchema={EmployerFormValidationSchema}
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
                          <div className="utf-no-border">
                              <input type="text" className="utf-with-border" name="company_name" id="company_name" placeholder="Company name" value={values.company_name}
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
                          <div className="utf-no-border">
                              <textarea className="utf-with-border" name="company_description" id="company_description" placeholder="Company description" value={values.company_description}
                                                onChange={handleChange('company_description')}
                                                onBlur={handleBlur('company_description')}
                                                autoComplete={`${true}`}></textarea>
                                                {touched.company_description && errors.company_description && (
                                              <MsgText
                                                text={errors.company_description}
                                                textColor="danger"
                                              />
                                            )}
                          </div>
                          <div className="utf-no-border">
                              <input type="text" className="utf-with-border" name="email" id="email" placeholder="Email Address" value={values.email}
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
                          <div className="utf-no-border">
                              <input type="password" className="utf-with-border" name="password" id="password" placeholder="Password" value={values.password}
                                                onChange={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                autoComplete={`${true}`} />
                                                {touched.password && errors.password && (
                                              <MsgText
                                                text={errors.password}
                                                textColor="danger"
                                              />
                                            )}
                                                
                          </div>
                          <div className="utf-no-border">
                              <input type="password" className="utf-with-border" name="password_confirmation" id="password_confirmation" placeholder="Repeat Password" value={values.password_confirmation}
                                                onChange={handleChange('password_confirmation')}
                                                onBlur={handleBlur('password_confirmation')}
                                                autoComplete={`${true}`} />
                                                {touched.password_confirmation && errors.password_confirmation && (
                                              <MsgText
                                                text={errors.password_confirmation}
                                                textColor="danger"
                                              />
                                            )}
                          </div>
                          <div className="checkbox margin-top-10">
                              <input type="checkbox" id="two-step0"/>
                                  <label htmlFor="two-step0"><span className="checkbox-icon"></span> I Have Read and Agree to the <a href="/">Terms &amp; Conditions</a></label>
                          </div>
                          <button className="button full-width utf-button-sliding-icon ripple-effect margin-top-10" type="submit">
                          {isLoading ? <div style={{marginLeft: '225px'}}><Bars
                            height="25"
                            width="25"
                            color='white'
                            ariaLabel='loading'
                          /> </div>: <div>
                          Create An Account
                          <i className="icon-feather-chevron-right"></i>
                          </div>}
                        </button>
                      </form>)}</Formik>)}

                      {currentForm === "Candidate" && (
                      <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={handleSignUp}
                        validationSchema={CandidateFormValidationSchema}
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
                          <div className="utf-no-border">
                              <input type="text" className="utf-with-border" name="first_name" id="first_name" placeholder="First name"value={values.first_name}
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
                          <div className="utf-no-border">
                              <input type="text" className="utf-with-border" name="last_name" id="last_name" placeholder="Last name" value={values.last_name}
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
                          <div className="utf-no-border">
                              <input type="text" className="utf-with-border" name="email" id="email" placeholder="Email Address" value={values.email}
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
                          <div className="utf-no-border">
                              <input type="password" className="utf-with-border" name="password" id="password" placeholder="Password" value={values.password}
                                                onChange={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                autoComplete={`${true}`} />
                                                {touched.password && errors.password && (
                                              <MsgText
                                                text={errors.password}
                                                textColor="danger"
                                              />
                                            )}
                          </div>
                          <div className="utf-no-border">
                              <input type="password" className="utf-with-border" name="password_confirmation" id="password_confirmation" placeholder="Repeat Password" value={values.password_confirmation}
                                                onChange={handleChange('password_confirmation')}
                                                onBlur={handleBlur('password_confirmation')}
                                                autoComplete={`${true}`} />
                                                {touched.password_confirmation && errors.password_confirmation && (
                                              <MsgText
                                                text={errors.password_confirmation}
                                                textColor="danger"
                                              />
                                            )}
                          </div>
                          <div className="checkbox margin-top-10">
                              <input type="checkbox" id="two-step0"/>
                                  <label htmlFor="two-step0"><span className="checkbox-icon"></span> I Have Read and Agree to the <a href="/">Terms &amp; Conditions</a></label>
                          </div>
                      <button className="button full-width utf-button-sliding-icon ripple-effect margin-top-10" type="submit">
                          {isLoading ? <div style={{marginLeft: '225px'}}><Bars
                            height="25"
                            width="25"
                            color='white'
                            ariaLabel='loading'
                          /> </div>: <div>
                          Create An Account
                          <i className="icon-feather-chevron-right"></i>
                          </div>}
                        </button>
                      </form>)}</Formik>)}
            
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
