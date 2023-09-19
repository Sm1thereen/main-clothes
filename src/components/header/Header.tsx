import React from 'react'
import logo from '../../assets/main-page/header/header-logo.svg';
import DropDown from './DropDown';
import English from '../../assets/main-page/flag/lang-eng.svg';
import Polish from '../../assets/main-page/flag/lang-pol.svg';
import stroke from '../../assets/main-page/header/stroke.svg';
import './style.css';

export default function Header() {
  const languageOptions = [
    {label:'English',flag:English},
    {label:'Polish',flag:Polish}
  ];
  const defaultLanguage = 'English';
  return (
    <>
        <header className="header">
            <ul className="header-list">
                <li className="header-list__item">
                  <a href="#">
                    <img src={logo} alt="" />
                  </a>
                </li>
                <li className="header-list__item">
                  <ul className="language-list">
                      <li className="language-list__item">
                        <p className='language-list__item__text'>Language</p>
                      </li>
                      <li className="language-list__item">
                        <div className="language-list-container">
                          <DropDown options={languageOptions} defaultOption={defaultLanguage}/>
                        </div>
                      </li>
                  </ul>
                </li>
                <li className="header-list__item">
                  <ul className="header-list-item__login">
                    <li className="header-list-login__item">
                      <a className='header-list-login__link' href="#!">Sign In</a>
                    </li>
                    <li className="header-list-login__item">
                      <img src={stroke} alt="" />
                    </li>
                    <li className="header-list-login__item">
                      <a className='header-list-login__link' href="#!">Sign Up</a>
                    </li>
                  </ul>
                </li>
            </ul>
        </header>
    </>
  )
}
