import React from 'react'
import Header from '../../components/header/header-main-page/HeaderMainPage'
import MainContent from '../../components/main-content/MainContent'
import Footer from '../../components/footer/Footer'
import HeaderAccount from '../../components/header/header-account-login/HeaderAccount'

export default function MainPage() {
  return (
    <>
      <div className="container">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    </>
  )
}
