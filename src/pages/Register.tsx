import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { RegisterSection } from '../components/RegisterSection'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export default function Register() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Register - Hirelab Africa</title>
                <link rel="canonical" href="/" />
                <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
            </Helmet>
            <div id="wrapper">
                <Header current={'register'} />
                <TitleBar current={'Register'} prev={'Home'} url={'/'} />
                <RegisterSection />
                <Subscribe />
                <Footer />
            </div>
        </>
    )
}
