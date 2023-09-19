import React from 'react'
import './style.css'
import sellItFast from '../../assets/main-page/main-content/sell-it-fast.svg';
import arrows from '../../assets/main-page/main-content/arrows.svg';
import photoCard from '../../assets/main-page/main-content/card/card-img/photo-card.png';
import request from '../../assets/main-page/main-content/card/card-img/request-people.jpg';
import getMoneyCard from '../../assets/main-page/main-content/card/card-img/get-money-card.png';
import photoText from '../../assets/main-page/main-content/card/card-text/photo-text.svg'
import requestText from '../../assets/main-page/main-content/card/card-text/request-text.svg'
import getMoneyText from '../../assets/main-page/main-content/card/card-text/get-money-text.svg'

export default function MainContent() {
  return (
    <div className="container">
      <main className="main-content">
        <img className='header-title-img' src={sellItFast} alt="" />
        <section className="place-for-cell">
          <div className="card-container">
            <img className='arrow-img' src={arrows} alt="" />
              <div className="card-wrapper">
                <ul className="card-list">
                  <li className="card-list-item">
                      <img src={photoCard} alt="" />
                    <div className="request-label">
                        <img className='text-card' src={photoText} alt="" />
                    </div>
                  </li>
                  <li className="card-list-item second">
                    <img src={request} alt="" />
                    <div className="request-label">
                        <img className='text-card' src={requestText} alt="" />
                    </div>
                  </li>
                  <li className="card-list-item">
                  <img src={getMoneyCard} alt="" />
                    <div className="request-label">
                        <img className='text-card' src={getMoneyText} alt="" />           
                    </div>
                  </li>
                </ul>
              </div>
          </div>
            <div className="sell-container">
              <p className='text-sell-item'>
                Place for sell your clothes
              </p>
              <button className="sell-button button">
                  sell
              </button>
            </div>
        </section>
      </main>
    </div>
  )
}
