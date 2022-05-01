import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Blog = () => {
  return (
    <>
      <Header current={'blog'}/>
      <TitleBar current={'Blog'} prev={'Home'} url={'/'} />
      <Subscribe/>
      <Footer/>
    </>
  )
}
