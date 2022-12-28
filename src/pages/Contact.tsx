import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export default function Contact() {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Contact - Hirelab Africa</title>
        <link rel="canonical" href="/" />
        <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
      </Helmet>
      <div id="wrapper">
        <Header current={'contact'} />
        <TitleBar current={'Contact Us'} prev={'Home'} url={'/'} />
        <ContactSection />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
