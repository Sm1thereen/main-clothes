import React from 'react'
import HeaderAccount from '../../components/header/header-account-login/HeaderAccount'
import Footer from '../../components/footer/Footer'
import MainAccount from '../../components/main-account/MainAccount'

export default function AccountPage() {
  return (
    <div className="container">
        <HeaderAccount />
        <MainAccount />
        <Footer />
    </div>
)
}
