import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ServicesSection } from '../components/ServicesSection'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Services = () => {
    return (
      <div id="wrapper">
          <Header current={'services'}/>
          <TitleBar current={'Services'} prev={'Home'} url={'/'} />
          <ServicesSection/>
          <Subscribe/>
          <Footer/>
        </div>
      )
}
