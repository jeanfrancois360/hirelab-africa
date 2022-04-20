import React from 'react'
import { CategoryBoxes } from '../components/CategoryBoxes'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { IntroBanner } from '../components/IntroBanner'
import { JobLists } from '../components/JobLists'
import { NeedHelp } from '../components/NeedHelp'
import { Subscribe } from '../components/Subscribe'

export const Home = () => {
  return (
    <>
        <Header/>
        <IntroBanner/>
        <CategoryBoxes/>
        <JobLists/>
        <NeedHelp/>
        <Subscribe/>
        <Footer/>
    </>
  )
}
