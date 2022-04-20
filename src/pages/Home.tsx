import React from 'react'
import { CategoryBoxes } from '../components/CategoryBoxes'
import { Header } from '../components/Header'
import { IntroBanner } from '../components/IntroBanner'

export const Home = () => {
  return (
    <>
        <Header/>
        <IntroBanner/>
        <CategoryBoxes/>
    </>
  )
}
