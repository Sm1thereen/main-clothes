import React from 'react'
import './style.css';

import stroke from '../../assets/account-page/stroke.svg';
import phone from '../../assets/account-page/social-icons/phone.svg';
import telegram from '../../assets/account-page/social-icons/facebook.svg';
import facebook from '../../assets/account-page/social-icons/telegram.svg';

export default function MainAccount() {
  return (
    <div className="container center">
        <div className="profile-container">
            <div className="profile-info-account">
                <div className="profile-bio">
                        <div className="user-info-wrapper">
                            <div className="user-info">
                                <div className="profile-bio-info">
                                    <h2 className="profile-title">Ivan Kotov</h2>
                                    <p className="profile-balance">Balance:<span className='bold'>$0.00</span></p>
                                </div>
                                <div className="profile-location">
                                    <p className="location-text">
                                        Country:<span className='bold'>Poland</span>
                                    </p>
                                    <p className="age-text">
                                        Age: <span className="bold">20</span>
                                    </p>
                                </div>
                                <img className='stroke-info' src={stroke} alt="" />
                            </div>
                            <div className="contacts-info">
                                <h3 className="contacts-title">contacts</h3>
                                <ul className="social-info">
                                    <li className="social-info__item">
                                        <a href="" className="social-info__link">
                                            <img src={phone} alt="" />
                                            +48(500)-123-456
                                        </a>
                                    </li>
                                    <li className="social-info__item">
                                        <a href="" className="social-info__link">
                                            <img src={telegram} alt="" />
                                            ivan_kotov
                                        </a>
                                    </li>
                                    <li className="social-info__item">
                                        <a href="" className="social-info__link">
                                            <img src={facebook} alt="" />
                                            ivan.kotov
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
