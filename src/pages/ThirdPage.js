import React, { useState } from 'react';
import './Forgotpassword.css';
import sw_img from '../images/swlogo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ThirdPage = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  
    const handleReset = () => {
      // Perform password validation and reset logic here
      if (newPassword !== confirmPassword) {
        setError('Passwords do not match');
      } else {
        setError('');
      navigate('/success'); 
    }
  };

  return (
    <div className='container'>
      <Link to="/">
      <button className='btn-login'>Log in</button>
      </Link>
      <div className='forgotpassword3-card'>
        <div className='logo-login'>
          <img src={sw_img} />
        </div>
        <div className='forgotpassword3-form'>
          <h1>New password</h1>
          <p>Set the new password for your account so you can login and access all features.</p>
          <div className='password-content' >
            <div className='password-input'>
            <label>Enter new password</label>
            <input type="password" value={newPassword} placeholder='8 symbols at least' onChange={handleNewPasswordChange} />
            </div>
            <div className='password-input'>
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} placeholder='8 symbols at least' onChange={handleConfirmPasswordChange} />
            {error && <p className="error">{error}</p>}
          </div>
          </div>
         
          <button onClick={handleReset} className='btn-forgotpassword'>Update password</button>
       
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
