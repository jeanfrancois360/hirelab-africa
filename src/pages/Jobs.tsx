import React from 'react'
import { Helmet } from 'react-helmet-async'
import { AllJobsListSection } from '../components/AllJobsListSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export default function Jobs() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Find Jobs - Hirelab Africa</title>
        <link rel="canonical" href="/" />
        <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
      </Helmet>
      <div id="wrapper">
        <Header current={'jobs'} />
        <TitleBar current={'Jobs'} prev={'Home'} url={'/'} />
        <AllJobsListSection />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
