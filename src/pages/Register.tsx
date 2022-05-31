import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { RegisterSection } from '../components/RegisterSection'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Register = () => {
    return (
        <>
            <Header current={'register'} />
            <TitleBar current={'Register'} prev={'Home'} url={'/'} />
            <RegisterSection />
            <Subscribe />
            <Footer />
        </>
    )
}
