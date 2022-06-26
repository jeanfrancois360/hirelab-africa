/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { MsgText } from './MsgText';
import { ILogin } from '../interfaces';
import axios from '../axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bars } from 'react-loader-spinner'

export const LoginSection: FC = () => {

  let initialValues = {
    email: '',
    password: '',
  };

  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const notify = (msg_type: string) => {
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
  }


  useEffect(() => {
    if (errorMsg) {
      notify('error')
    }
  }, [errorMsg])


  const FormValidationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().label('Password'),
  });

  const handleLogin = async (payload: ILogin) => {

    const data = {
      email: payload.email.trim(),
      password: payload.password.trim(),
    }

    if (isLoading) {
      return
    }

    setIsLoading(true);
    setErrorMsg("")

    return await axios.post('/auth/signin/', data).then((res) => {
      setIsLoading(false)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      localStorage.setItem('access_token', JSON.stringify(res.data.access_token))
      window.location.replace("/dashboard");
    }).catch((error) => {
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
                <h3>Welcome Back Sign in to Continue</h3>
                <span>Don't Have an Account? <a href="/register">Sign Up!</a></span>
              </div>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={handleLogin}
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
                  <form method="post" onSubmit={handleSubmit} id="login-form">
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
                    <div className="checkbox margin-top-10">
                      <input type="checkbox" id="two-step" />
                      <label htmlFor="two-step"><span className="checkbox-icon"></span> Remember Me</label>
                    </div>
                    <a href="forgot-password.html" className="forgot-password">Forgot Password?</a>
                    <button className="button full-width utf-button-sliding-icon ripple-effect margin-top-10" type="submit">
                      {isLoading ? <div style={{ marginLeft: '225px' }}><Bars
                        height="25"
                        width="25"
                        color='white'
                        ariaLabel='loading'
                      /> </div> : <div>
                        Log In
                        <i className="icon-feather-chevron-right"></i>
                      </div>}
                    </button>
                  </form>)}</Formik>
              {/* <div className="utf-social-login-separator-item"><span>Or Login in With</span></div>
                      <div className="utf-social-login-buttons-block">
                          <button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Facebook</button>
                          <button className="google-login ripple-effect"><i className="icon-brand-google"></i> Google+</button>
                          <button className="twitter-login ripple-effect"><i className="icon-brand-twitter"></i> Twitter</button>
                      </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
