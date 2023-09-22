import React from 'react'
import HeaderRegistration from '../../components/header/header-registration/HeaderRegistration'
import Footer from '../../components/footer/Footer'
import MainLogin from '../../components/main-login/MainLogin'

export default function SignIn() {
  return (
    <div className="container">
        <HeaderRegistration/>
        <MainLogin />
        <Footer /> 
    </div>
  )
}
