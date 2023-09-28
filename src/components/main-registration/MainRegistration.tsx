import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

import user from '../../assets/register-page/user-profile.svg';
import AgeDropDown from './AgeDropDown';

type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

function isValidEmail(email: string): boolean {
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(email);
}

export default function MainRegistration() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [photo, setPhoto] = useState<File | null>(null);
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    const isValid =
      !nameError &&
      !emailError &&
      !passwordError &&
      name.length > 0 &&
      surname.length > 0 &&
      age !== null &&
      email.length > 0 &&
      password.length >= 6 &&
      password.length <= 48;

    setIsButtonActive(isValid);
  }, [nameError, emailError, passwordError, name, surname, age, email, password]);

  const handleInputChange: ChangeHandler = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'surname') {
      setSurname(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPhoto = e.target.files?.[0] || null;
    setPhoto(selectedPhoto);
  };

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isButtonActive) {
      return;
    }

    if (name.length < 2 || name.length > 30) {
      setNameError('Name must be between 2 and 30 characters');
      return;
    } else {
      setNameError('');
    }

    if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      return;
    } else {
      setEmailError('');
    }

    if (password.length < 6 || password.length > 48) {
      setPasswordError('Password must be between 6 and 48 characters')
      return;
    } else {
      setPasswordError('')
    }

    try {
      const formData = {
        name,
        surname,
        email,
        age,
        password,
      }
      console.log(formData)

      const response = await axios.post('https://example.com/api/login', formData);
      if (response.status >= 200 && response.status < 300) {
        console.log('Data successful');
      } else {
        console.log('Data error');
      }
    } catch (error: any) {
      console.error('Error', error.message);
    }
  }

  return (
    <>
      <div className="container">
        <div className="register-container">
          <h1 className="sign-up login-title">Registration</h1>
          <form className="register-form" onSubmit={handleRegistration}>
            <div className="register-form-information">
              <label className="login-text">*Name</label>
              <input
                className="login-input"
                type="text"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={handleInputChange}
              />
              {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
              <label className="login-text">*Surname</label>
              <input
                className="login-input"
                type="text"
                name="surname"
                placeholder="Enter surname"
                value={surname}
                onChange={handleInputChange}
              />
              <ul className="country-age">
                <li className="country-age__item">
                  <label className="login-text">*Age</label>
                  <br />
                  <AgeDropDown age={age} setAge={setAge} />
                </li>
              </ul>
              <label className="login-text">*Email</label>
              <input
                className="login-input"
                type="text"
                name="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleInputChange}
              />
              {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
              <label className="login-text">*Password</label>
              <input
                className="login-input password"
                type="password"
                name="password"
                placeholder="6 to 48 characters"
                value={password}
                onChange={handleInputChange}
              />
              {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
              <button className={`login-button button ${isButtonActive ? '' : 'disabled'}`} type="submit" disabled={!isButtonActive}>
                Sign up
              </button>
            </div>
            <div className="register-form-photo">
              {photo ? (
                <img className='user-profile' src={URL.createObjectURL(photo)} alt="" />
              ) : (
                <img className='user-profile' src={user} alt="" />
              )}
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handlePhotoUpload}
                style={{ display: 'none' }}
              />
              <button
                className="button-photo"
                type='button'
                onClick={() => {
                  const fileInput = document.getElementById('fileInput');
                  if (fileInput) {
                    fileInput.click();
                  }
                }}>
                Add Photo
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
