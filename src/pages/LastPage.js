import React from 'react';
import './Forgotpassword.css';
import Successfully from '../images/Successfully.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const LastPage = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
   
    navigate('/');
  };

  return (
    <div className='container-password container'>
      <Link to="/">
      <button className='btn-login'>Log in</button>
      </Link>
      <div className='forgotpassword4-card'>
        <div className='logo-login'>
          <img src={Successfully} />
        </div>
         <div className='forgotpassword4-card'>
        <h2>Successful</h2>
        <p>Your password has been reset successfully</p>
        
        <button onClick={handleContinue} className='btn-forgotpassword' >Continue</button>
      
      </div>
       </div>
    </div>
  );
};

export default LastPage;
