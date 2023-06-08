import React from 'react';
import './Forgotpassword.css';
import Illustration_img from '../images/Illustration.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SecondPage = ({ email }) => {
  const navigate = useNavigate();
  const handleNext = () => {
    // Proceed to the next page (Reset Password page)
    navigate('/reset-password');

  };

  return (
    <div className='container'>
      <Link to="/">
      <button className='btn-login'>Log in</button>
      </Link>
      <div className='forgotpassword4-card'>
        <div className='logo-login'>
          <img src={Illustration_img} />
        </div>
        <div className='forgotpassword4-card'>
          <div className='text'>
            <h2>Link has been sent!</h2>
            <p>We have sent a link to {email}, please check your email.</p>
          </div>
          
          <button onClick={handleNext} className='btn-forgotpassword'>Continue</button>
       
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
