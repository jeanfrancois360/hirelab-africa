import React from 'react'
import { Header } from '../components/Header'
import { TitleBar } from '../components/TitleBar'

export const Blog = () => {
  return (
    <>
      <Header current={'blog'}/>
      <TitleBar current={'Blog'} prev={'Home'} url={'/'} />
    </>
  )
}
