import React from 'react'
import { Helmet } from 'react-helmet-async'
import { AboutSection } from '../components/AboutSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const About = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>About - Hirelab Africa</title>
        <link rel="canonical" href="/" />
        <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
      </Helmet>
      <div id="wrapper">
        <Header current={'about'} />
        <TitleBar current={'About Us'} prev={'Home'} url={'/'} />
        <AboutSection />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
