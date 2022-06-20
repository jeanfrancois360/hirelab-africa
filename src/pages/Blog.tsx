import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BlogSection } from '../components/BlogSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Blog = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Blog - Hirelab Africa</title>
        <link rel="canonical" href="/" />
        <meta name="Description" content="HireLab Africa Ltd is a leading private Human Resources Consulting firm that provides HR solutions to Companies all over Africa." />
      </Helmet>
      <div id="wrapper">
        <Header current={'blog'} />
        <TitleBar current={'Blog'} prev={'Home'} url={'/'} />
        <BlogSection />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}
