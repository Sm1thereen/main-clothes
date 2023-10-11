import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import DropDown from './DropDown';
import EnglishFlag from '../../../assets/main-page/flag/English.svg';
import PolishFlag from '../../../assets/main-page/flag/Polish.svg';
import stroke from '../../../assets/main-page/header/stroke.svg';
import './style.css';

export default function Header() {
  const defaultLanguage = 'English';
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleOptionSelect = (selectedOption: any) => {
    if (selectedOption !== selectedLanguage) {
      setSelectedLanguage(selectedOption);
    }

    setIsDropDownOpen(false);
  };
  const languageOptions = selectedLanguage === 'English'
    ? [
      { label: 'Polish', flag: PolishFlag }
    ]
    : [
      { label: 'English', flag: EnglishFlag }
    ];

  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-list__item">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </li>
        <li className="header-list__item">
          <ul className="language-list">
            <li className="language-list__item">
              <p className='language-list__item__text'>Language</p>
            </li>
            <li className="language-list__item">
              <div className="language-list-container">
                <DropDown
                  options={languageOptions}
                  defaultOption={selectedLanguage}
                  onSelect={handleOptionSelect}
                  isOpen={isDropDownOpen}
                />
              </div>
            </li>
          </ul>
        </li>
        <li className="header-list__item">
          <ul className="header-list-item__login">
            <li className="header-list-login__item">
              <Link className='header-list-login__link' to="/login">Sign In</Link>
            </li>
            <li className="header-list-login__item">
              <img src={stroke} alt="" />
            </li>
            <li className="header-list-login__item">
              <Link className='header-list-login__link' to="/registration">Sign Up</Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  )
}
