import React, { useState } from 'react';
import './Forgotpassword.css';
import email_icon from '../images/Subtract.svg';
import sw_img from '../images/swlogo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const FirstPage = ({ onNext }) => {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    
    navigate('/send-link');



    
    onNext(email);
  };

  return (
    <div className='container'>
      <Link to="/">
      <button className='btn-login'>Log in</button>
      </Link>
      <div className='forgotpassword-card'>
        <div className='logo-login'>
          <img src={sw_img} />
        </div>
        <div className='forgotpassword-form'>
          <h1>Forgot Password</h1>
          <p>No worries, we'll send you reset instructions </p>
          <div className="email-container">
            <img src={email_icon} />
            <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />

          </div>
          
            <button onClick={handleContinue} className='btn-forgotpassword' >Continue</button>
          
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
