import React from 'react'
import { Helmet } from 'react-helmet-async'
import { AllCategoriesSection } from '../components/AllCategoriesSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export default function Categories() {
    return (
        <>
            <Helmet prioritizeSeoTags>
                <title>Categories - Hirelab Africa</title>
                <link rel="canonical" href="/" />
                <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
            </Helmet>
            <div id="wrapper">
                <Header current={'categories'} />
                <TitleBar current={'Categories'} prev={'Home'} url={'/'} />
                <AllCategoriesSection />
                <Subscribe />
                <Footer />
            </div>
        </>
    )
}
