import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CompaniesSection } from '../components/CompaniesSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export default function Companies() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Companies - Hirelab Africa</title>
                <link rel="canonical" href="/" />
                <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
            </Helmet>
            <div id="wrapper">
                <Header current={'companies'} />
                <TitleBar current={'Companies'} prev={'Home'} url={'/'} />
                <CompaniesSection />
                <Subscribe />
                <Footer />
            </div>
        </>
    )
}