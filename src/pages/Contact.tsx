import React from 'react'
import { Header } from '../components/Header'
import { TitleBar } from '../components/TitleBar'

export const Contact = () => {
  return (
    <>
    <Header current={'contact'}/>
    <TitleBar current={'Contact Us'} prev={'Home'} url={'/'} />
    </>
  )
}
