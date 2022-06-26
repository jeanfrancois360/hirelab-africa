import React, { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { AllJobsListSection } from '../components/AllJobsListSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SearchJobsSection } from '../components/SearchJobsSection'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Jobs: FC = () => {
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
        <SearchJobsSection />
        <AllJobsListSection />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
