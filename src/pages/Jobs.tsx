import React from 'react'
import { AllJobsListSection } from '../components/AllJobsListSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SearchJobsSection } from '../components/SearchJobsSection'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Jobs = () => {
  return (
    <div id="wrapper">
        <Header current={'jobs'}/>
        <TitleBar current={'Jobs'} prev={'Home'} url={'/'} />
        <SearchJobsSection/>
        <AllJobsListSection/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}
