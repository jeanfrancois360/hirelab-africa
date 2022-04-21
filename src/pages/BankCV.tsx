import React from 'react'
import { Header } from '../components/Header'
import { TitleBar } from '../components/TitleBar'

export const BankCV = () => {
  return (
    <>
      <Header current={'bank_cv'}/>
      <TitleBar current={'Bank Your CV'} prev={'Home'} url={'/'} />
    </>
  )
}
