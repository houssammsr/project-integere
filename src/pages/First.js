import React, { useState } from 'react';
import './Forgotpassword.css';
import email_icon from '../images/Subtract.svg';
import sw_img from '../images/swlogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FirstPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleContinue = async () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }

    try {
      const RESET_PASSWORD_URL = 'http://127.0.0.1:8000/reset-password/';
      await axios.post(RESET_PASSWORD_URL, { email });
      console.log('Password reset link sent successfully');
      navigate('/send-link');
    } catch (error) {
      console.error('Error sending password reset link:', error);
      setError('Failed to send reset link. Please try again later.');
    }
  };

  return (
    <div className='container-password container'>
      <Link to="/">
        <button className='btn-login'>Log in</button>
      </Link>
      <div className='forgotpassword-card'>
        <div className='logo-login'>
          <img src={sw_img} alt="Logo" />
        </div>
        <div className='forgotpassword-form'>
          <h1>Forgot Password</h1>
          <p>No worries, we'll send you reset instructions</p>
          <div className="email-container">
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
          </div>
          {error && <p className="error">{error}</p>}
          <button onClick={handleContinue} className='btn-forgotpassword'>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
