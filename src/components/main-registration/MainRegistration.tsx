import React, { useCallback, useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

import user from '../../assets/register-page/user-profile.svg';
import AgeDropDown from './AgeDropDown';
import { registrationUser } from '../../services/api';

type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

function isValidEmail(email: string): boolean {
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(email);
}

export default function MainRegistration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
      firstName.length > 0 &&
      lastName.length > 0 &&
      // age !== null &&
      email.length > 0 &&
      password.length >= 6 &&
      password.length <= 48;

    setIsButtonActive(isValid);
  }, [nameError, emailError, passwordError, firstName, lastName, age, email, password]);

  const handleInputChange: ChangeHandler = ({ target }) => {
    const { name, value } = target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPhoto = e.target.files?.[0] || null;
    setPhoto(selectedPhoto);
  };

  const handleRegistration = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isButtonActive) {
      return;
    }

    if (firstName.length < 2 || lastName.length > 30) {
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
      console.log(`Data to send to server`);
      console.log('firstName:', firstName);
      console.log('lastName:', lastName);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('phone:', phone);

      await registrationUser(firstName,lastName,email,password,phone);
      // console.log('Registration successful');

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPhone('')
    }
    catch (error:any){
      console.error('Registration error',error.message);
    }
  },[firstName,lastName,email,password,phone]);

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
                name="firstName"
                placeholder="Enter name"
                value={firstName}
                onChange={handleInputChange}
              />
              {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
              <label className="login-text">*Surname</label>
              <input
                className="login-input"
                type="text"
                name="lastName"
                placeholder="Enter surname"
                value={lastName}
                onChange={handleInputChange}
              />
              <label className="login-text">*Phone</label>
              <input
                className="login-input"
                type="text"
                name="phone"
                placeholder="Enter phone"
                value={phone}
                onChange={handleInputChange}
              />
              {/* <ul className="country-age">
                <li className="country-age__item">
                  <label className="login-text">*Age</label>
                  <br />
                  <AgeDropDown age={age} setAge={setAge} />
                </li>
              </ul> */}
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
