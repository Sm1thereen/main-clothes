import React, { useState } from 'react';
import './style.css';

import user from '../../assets/register-page/user-profile.svg';
import AgeDropDown from './AgeDropDown';

export default function MainRegistration() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState<number | null>(null); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [photo,setPhoto] = useState(null);


  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleRegistration = (e:any) => {
    e.preventDefault();
    if (!name || !surname || !age || !email || !password) {
      alert('Please fill in all the required fields');
      return;
    }

    if (name.length < 2 || name.length > 30) {
      setNameError('Name must be between 2 and 30 characters');
      return;
    } else {
      setNameError('');
    }

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return;
    } else {
      setEmailError('');
    }


    if (password.length < 6 || password.length > 48) {
      setPasswordError('Password must be between 6 and 48 characters');
      return;
    } else {
      setPasswordError('');
    }

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  const handlePhotoUpload = (e:any) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto)
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
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
              <label className="login-text">*Surname</label>
              <input
                className="login-input"
                type="text"
                name="surname"
                placeholder="Enter surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
              <label className="login-text">*Password</label>
              <input
                className="login-input password"
                type="password"
                name="password"
                placeholder="6 to 48 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
              <button className="login-button button" type="submit">
                Sign up
              </button>
            </div>
            <div className="register-form-photo">
              {photo ? (
                <img className='user-profile' src={URL.createObjectURL(photo)} alt="" />
              ):(
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
                  }}}>
                Add Photo
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
