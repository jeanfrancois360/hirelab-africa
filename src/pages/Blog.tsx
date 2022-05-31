import React from 'react'
import { BlogSection } from '../components/BlogSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Blog = () => {
  return (
    <div id="wrapper">
      <Header current={'blog'}/>
      <TitleBar current={'Blog'} prev={'Home'} url={'/'} />
      <BlogSection/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}
