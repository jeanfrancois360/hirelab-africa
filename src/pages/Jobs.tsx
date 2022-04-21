import React from 'react'
import { Header } from '../components/Header'
import { TitleBar } from '../components/TitleBar'

export const Jobs = () => {
  return (
    <>
     <Header current={'jobs'}/>
     <TitleBar current={'Jobs'} prev={'Home'} url={'/'} />
    </>
  )
}
