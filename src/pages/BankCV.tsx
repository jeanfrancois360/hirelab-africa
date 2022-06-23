import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BankCVSection } from '../components/BankCVSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Protected from '../components/Protected'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const BankCV = () => {
  return (
    <Protected>
      <Helmet prioritizeSeoTags>
        <title>Bank CV - Hirelab Africa</title>
        <link rel="canonical" href="/" />
        <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
      </Helmet>
      <div id="wrapper">
        <Header current={'bank_cv'} />
        <TitleBar current={'Bank Your CV'} prev={'Home'} url={'/'} />
        <BankCVSection />
        <Subscribe />
        <Footer />
      </div>
    </Protected>
  )
}
