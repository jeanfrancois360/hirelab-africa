import React from 'react'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Contact = () => {
  return (
    <div id="wrapper">
        <Header current={'contact'}/>
        <TitleBar current={'Contact Us'} prev={'Home'} url={'/'} />
        <ContactSection/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}
