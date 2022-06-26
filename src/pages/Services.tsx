import React, { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ServicesSection } from '../components/ServicesSection'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Services: FC = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Services - Hirelab Africa</title>
        <link rel="canonical" href="/" />
        <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
      </Helmet>
      <div id="wrapper">
        <Header current={'services'} />
        <TitleBar current={'Services'} prev={'Home'} url={'/'} />
        <ServicesSection />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
