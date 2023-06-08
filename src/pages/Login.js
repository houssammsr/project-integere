import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";

import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import "./Login.css";
import login_img from '../images/login_img.svg';
import email_icon from '../images/e-mail.svg';
import password_icon from '../images/passeword.svg';


const LOGIN_URL = 'http://127.0.0.1:8000/api/auth/login/';
function Login() {
  const navigate=useNavigate();
  const { setAuth } = useContext(AuthContext);
  //
  const userRef = useRef();
  const errRef = useRef();
  //
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  //
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  
  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };
    console.log(formData);
    //
    
    try {
      const response = await axios.post(LOGIN_URL, formData);

      const { access } = response?.data;
      const accessToken = access;
      const tokenParts = access.split('.');
      const encodedPayload = tokenParts[1];
      const decodedPayload = atob(encodedPayload);
      const payload = JSON.parse(decodedPayload);

      const role = payload.role;

      console.log('Role:', role);
      setAuth({ email, password, role, accessToken });
      setPassword('');
      setEmail('');
      console.log(response);
      setSuccess(true);
      

      if (role === 'EMPLOYEE') {
        navigate('/employee-dashboard');
      } else if (role === 'SOCIAL WORK COMITTEE') {
        navigate('/admin-dashboard');
      }
    } catch (err) {
      if (err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }


    
  };
  return (
    <>
      {success ? (
        <section>
          <h1>you are logged in!</h1>
        </section>
      ) : (
        <div>
                      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className="login-card">

          <div className="image-container">

            <img src={login_img} />

          </div>


          <div className="form-container">

            <h2>Log In to Your Account</h2>

            <form onSubmit={handleSubmit} >



              <div id="outl" className="form-group">
                <label htmlFor="email">Email </label>
                <div className="input-container">
                  <input 
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete='off'
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <img src={email_icon} />
                  <i className="fas fa-user"></i>
                </div>

              </div><div id="outl" className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-container">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <img src={password_icon} />
                  <i className="fas fa-lock"></i>
                </div>

              </div>




              <div className="form-group remember ">
                <div className="input-container remember-me-container">
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me">Remember me</label>
                </div>

                <Link to={'/forgotpassword'}>Forgot password?</Link>

              </div>


              <div className="form-group">
                <button className="btn_login" type="submit">Login</button>
              </div>

            </form>
          </div>
          </div> 
        </div>)}
    </>
  );
}

export default Login;