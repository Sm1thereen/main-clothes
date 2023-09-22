import React from 'react'
import HeaderRegistration from '../../components/header/header-registration/HeaderRegistration'
import MainRegistration from '../../components/main-registration/MainRegistration'
import Footer from '../../components/footer/Footer'

export default function SignUp() {
  return (
    <>
        <div className="container">
          <HeaderRegistration />
          <MainRegistration />
          <Footer />
        </div>
    </>
  )
}
