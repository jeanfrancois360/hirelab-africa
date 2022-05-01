import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const About = () => {
  return (
    <>
      <Header current={'about'}/>
      <TitleBar current={'About Us'} prev={'Home'} url={'/'} />
      <Subscribe/>
      <Footer/>
    </>
  )
}
