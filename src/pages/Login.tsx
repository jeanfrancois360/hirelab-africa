import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { LoginSection } from '../components/LoginSection'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Login = () => {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Login - Hirelab Africa</title>
                <link rel="canonical" href="/" />
                <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
            </Helmet>
            <div id="wrapper">
                <Header current={'login'} />
                <TitleBar current={'Login'} prev={'Home'} url={'/'} />
                <LoginSection />
                <Subscribe />
                <Footer />
            </div>
        </>
    )
}
