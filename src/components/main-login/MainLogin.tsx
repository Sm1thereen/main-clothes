import React, { useCallback, useEffect, useState } from 'react'
import './style.css'

import { loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import setAccessToken from '../setAccessToken';


function isValidEmail(email: string): boolean {
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
	const [formValid, setFormValid] = useState(false)
	const navigate = useNavigate();


	useEffect(() => {
		setFormValid(!emailError && !passwordError)
	}, [emailError, passwordError])

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

	const handleSubmit = useCallback(
		async (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			if (!formValid) {
				console.log('Form submission prevented due to errors');
				return;
			}
			try {
				const userData = await loginUser(email, password);
				setAccessToken(userData);

				setEmail('');
				setPassword('');
				navigate('/')
			} catch (error: any) {
				console.error('Login error:', error.message)
			}
		}
		, [email, password, formValid]
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
						{emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
						<input className='login-input' onChange={emailHandler} value={email} onBlur={blurHandler} name='email' type='text' placeholder='Enter your email...' />
					</div>
					<div className="login-password">
						<label className='login-text'>*Password</label>
						{passwordDirty && passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
						<input className='login-input' onChange={passwordHandler} value={password} onBlur={blurHandler} name='password' type='password' placeholder='Enter your password...' />
					</div>
					<button className="login-button button center" disabled={!formValid} type='submit'>
						Sign In
					</button>
				</form>
			</div>
		</div>
	)
}
