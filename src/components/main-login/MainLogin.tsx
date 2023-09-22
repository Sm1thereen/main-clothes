import React, { useCallback, useEffect, useState } from 'react'
import './style.css'

export default function MainLogin() {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Email cannot be empty')
	const [passwordError, setPasswordError] = useState('Password cannot be empty')
	const [formValid,setFormValid] = useState(false)
  
  
	useEffect(() => {
		if(emailError || passwordError){
			setFormValid(false)
		}else{
			setFormValid(true)
		}
	},[emailError,passwordError])
  
	const emailHandler = ({e}: { e: any }) => {
		setEmail(e.target.value)
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if(!re.test(String(e.target.value).toLowerCase())){
			setEmailError('Incorrect email')
		}else{
			setEmailError('')
		}
	}


  const handleSubmit = useCallback((event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        
        if(!email || !password || emailError || passwordError){
          console.log(`Form submission prevented due to errors`);
          return
        }
        console.log(`Email:${email}`);
        console.log(`Password:${password}`);
    
        setEmail('');
        setPassword('');
      },[email,password,emailError,passwordError])

  const passwordHandler = ({e}: { e: any }) => {
		setPassword(e.target.value)
		if(e.target.value.length < 6 || e.target.value.lenght > 48){
			setPasswordError('Password must longer 6 and shorter 48');
			if(!e.target.value){
				setPasswordError('Password cannot be empty')
			}
		} else {
			setPasswordError('');
		}
	}
	const blurHandler = ({e}: { e: any }) => {
		switch (e.target.name){
			case 'email':
				setEmailDirty(true)
				break
			case 'password':
				setPasswordDirty(true)
				break
		}
	}
  
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
              <input className='login-input' onChange={e => emailHandler({e: e})} value={email} onBlur={e => blurHandler({e: e})} name='email' type='text' placeholder='Enter your email...'/> 
             </div>
             <div className="login-password">
               <label className='login-text'>*Password</label>  
          		 {passwordDirty && passwordError && <div style={{color:'red'}}>{passwordError}</div>}
               <input className='login-input' onChange={e => passwordHandler({e: e})} value={password} onBlur={e => blurHandler({e: e})} name='password' type='password' placeholder='Enter your password...'/>
             </div>
             <button className="login-button button center" disabled={!formValid} type='submit'>
               Sign In
             </button>
           </form>
       </div>
     </div>
  )
}
