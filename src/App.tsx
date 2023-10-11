import React from 'react';
import './main.css'
import './reset.css'
import MainPage from './pages/main-page/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/registration-page/SignUp';
import SignIn from './pages/login-page/SignIn';
import AccountPage from './pages/account-page/AccountPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/registration" element={<SignUp />} />
          <Route path="/acc" element={<AccountPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
