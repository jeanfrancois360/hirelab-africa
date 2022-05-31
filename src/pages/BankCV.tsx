import React from 'react'
import { BankCVSection } from '../components/BankCVSection'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const BankCV = () => {
  return (
    <>
      <Header current={'bank_cv'}/>
      <TitleBar current={'Bank Your CV'} prev={'Home'} url={'/'} />
      <BankCVSection/>
      <Subscribe/>
      <Footer/>
    </>
  )
}
