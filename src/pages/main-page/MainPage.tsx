import React from 'react'
import Header from '../../components/header/Header'
import MainContent from '../../components/main-content/MainContent'
import Footer from '../../components/footer/Footer'

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