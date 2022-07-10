import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { JobDetails } from '../components/JobDetails'
import { Subscribe } from '../components/Subscribe'

export const Job = () => {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Job Details - Hirelab Africa</title>
                <link rel="canonical" href="/" />
                <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
            </Helmet>
            <div id="wrapper">
                <Header current={'categories'} />
                <JobDetails />
                <Subscribe />
                <Footer />
            </div>
        </>
    )
}
