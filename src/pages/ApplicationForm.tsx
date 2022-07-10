/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router'
import { ApplicationFormSection } from '../components/ApplicationFormSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Protected from '../components/Protected'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const ApplicationForm = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // @ts-ignore
        let user = JSON.parse(localStorage.getItem('user'));
        let role_arr = ['Admin', 'Candidate'];
        if (user && user.hasOwnProperty('role') && !role_arr.includes(user.role.name)) {
            navigate(-1)
        }
    }, [])
    return (
        <Protected>
            <Helmet prioritizeSeoTags>
                <title>Application Form - Hirelab Africa</title>
                <link rel="canonical" href="/" />
                <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
            </Helmet>
            <div id="wrapper">
                <Header current={'application_form'} />
                <TitleBar current={'Application Form'} prev={'Home'} url={'/'} />
                <ApplicationFormSection />
                <Subscribe />
                <Footer />
            </div>
        </Protected>
    )
}
