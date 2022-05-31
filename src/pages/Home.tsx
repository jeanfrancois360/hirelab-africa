import React from 'react'
import { CallOut } from '../components/CallOut'
import { CategoryBoxes } from '../components/CategoryBoxes'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { IntroBanner } from '../components/IntroBanner'
import { HomeJobListSection } from '../components/HomeJobListSection'
import { NeedHelp } from '../components/NeedHelp'
import { Subscribe } from '../components/Subscribe'

export const Home = () => {
  return (
    <div id="wrapper">
        <Header current={'home'}/>
        <IntroBanner/>
        <CategoryBoxes/>
        <HomeJobListSection/>
        <CallOut/>
        <NeedHelp/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}
