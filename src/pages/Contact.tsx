import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Contact = () => {
  return (
    <>
        <Header current={'contact'}/>
        <TitleBar current={'Contact Us'} prev={'Home'} url={'/'} />
        <Subscribe/>
        <Footer/>
    </>
  )
}
