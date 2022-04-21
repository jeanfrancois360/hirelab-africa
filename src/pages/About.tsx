import React from 'react'
import { Header } from '../components/Header'
import { TitleBar } from '../components/TitleBar'

export const About = () => {
  return (
    <>
      <Header current={'about'}/>
      <TitleBar current={'About Us'} prev={'Home'} url={'/'} />
    </>
  )
}
