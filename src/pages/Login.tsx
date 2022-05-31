import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { LoginSection } from '../components/LoginSection'
import { Subscribe } from '../components/Subscribe'
import { TitleBar } from '../components/TitleBar'

export const Login = () => {
    return (
        <div id="wrapper">
            <Header current={'login'} />
            <TitleBar current={'Login'} prev={'Home'} url={'/'} />
            <LoginSection />
            <Subscribe />
            <Footer />
        </div>
    )
}
