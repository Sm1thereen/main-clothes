import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import './style.css'

function isValidEmail(email:string): boolean{
	const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  	return re.test(String(email).toLowerCase());
}


export default function MainLogin() {
  	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Email cannot be empty')
	const [passwordError, setPasswordError] = useState('Password cannot be empty')
	const [formValid,setFormValid] = useState(false)
  
  
	useEffect(() => {
		setFormValid(!emailError && !passwordError)
	},[emailError,passwordError])
  
	const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newEmail = e.target.value;
		setEmail(newEmail);
	
		if (!isValidEmail(newEmail)) {
		  setEmailError('Incorrect email');
		} else {
		  setEmailError('');
		}
	};

	const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newPassword = e.target.value;
		setPassword(newPassword);
	
		if (newPassword.length < 6 || newPassword.length > 48) {
		  setPasswordError('Password must be between 6 and 48 characters');
		} else {
		  setPasswordError('');
		}
	};
	const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
		const fieldName = e.target.name;
		switch (fieldName) {
		  case 'email':
			setEmailDirty(true);
			break;
		  case 'password':
			setPasswordDirty(true);
			break;
		  default:
			break;
		}
	};

	  const sendDataLoginToServer = async (email: string, password: string) => {
		try {
		  const formData = {
			email: email,
			password: password,
		  };
		  console.log(formData);
	
		  const response = await axios.post('https://example.com/api/login', formData);
		  if (response.status >= 200 && response.status < 300) {
			console.log('Login successful');
		  } else {
			console.log('Login error');
		  }
		} catch (error:any) {
		  console.error('Error:', error.message);
		}
	  };
	
	  const handleSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
		  event.preventDefault();
		  if (!formValid) {
			console.log('Form submission prevented due to errors');
			return;
		  }
		  sendDataLoginToServer(email, password);
		  setEmail('');
		  setPassword('');
		},
		[email, password, formValid]
	  );

return (
    <div className="container">
       <div className="login-container">
           <h1 className="login-title">
             Sign In
           </h1>
           <form className="login-wrapper" onSubmit={handleSubmit} >
             <div className="login-email-text">
               <label className='login-text'>*Email</label>  
              {emailDirty && emailError && <div style={{color:'red'}}>{emailError}</div>}
              <input className='login-input' onChange={emailHandler} value={email} onBlur={blurHandler} name='email' type='text' placeholder='Enter your email...'/> 
             </div>
             <div className="login-password">
               <label className='login-text'>*Password</label>  
          		 {passwordDirty && passwordError && <div style={{color:'red'}}>{passwordError}</div>}
               <input className='login-input' onChange={passwordHandler} value={password} onBlur={blurHandler} name='password' type='password' placeholder='Enter your password...'/>
             </div>
             <button className="login-button button center" disabled={!formValid} type='submit'>
               Sign In
             </button>
           </form>
       </div>
     </div>
  )
}
