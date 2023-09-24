import React, { useState } from 'react';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const newErrors = {};

    if (!email || !validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      alert(errors.email);
    }

    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      alert(errors.password)
    }

    if (Object.keys(newErrors).length === 0) {
      // Submit the form or perform further actions (e.g., send data to a server)
      alert('Form submitted successfully');
    } else {
      // Update the state to display validation errors
      setErrors(newErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <body className= {darkMode ? 'darkMode':'LightMode'} >
        
        <div className='container'>
          <h1 className= {darkMode ? 'darkMode':'LightMode'}>Sign in</h1>
          <p className= {darkMode ? 'darkMode':'LightMode'}>sign in and start managing your candidates</p>
          <form className='signin-form' onSubmit={handleSubmit}>
            <input  name='email' value={formData.email} onChange={handleInputChange} placeholder='Login' />
            <input type='password' name='password' value={formData.password} onChange={handleInputChange} placeholder='Password' />
            <div className='checkbox-forget'>
              <div className='checkBox'>
                <input type='checkbox' />
                <label for='checkbox'>Remember me</label>
              </div>
              <div>
              <a className='forget-password' style={ darkMode ? {color:"#20DF7F"}:{color:"#000"}} href='/'>Forget Password?</a>
              </div>
            </div>
            <button className='submit-btn' type='submit'>Login</button>
          </form>
        </div>
        <footer>
          <svg className='vectors' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1280 111" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L53 4.17052C107 8.34104 213 16.6821 320 30.7977C427 45.2341 533 65.7659 640 69.9364C747 74.1069 853 61.5954 960 57.7457C1067 53.5751 1173 57.7457 1227 59.6705L1280 61.5954V111H1227C1173 111 1067 111 960 111C853 111 747 111 640 111C533 111 427 111 320 111C213 111 107 111 53 111H0V0Z" fill="#20DF7F" fill-opacity="0.8"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 44.4L42.6667 53.28C85.3333 62.16 170.667 79.92 256 75.48C341.333 71.04 426.667 44.4 512 26.64C597.333 8.88 682.667 0 768 0C853.333 0 938.667 8.88 1024 24.42C1109.33 39.96 1194.67 62.16 1237.33 73.26L1280 84.36V111H1237.33C1194.67 111 1109.33 111 1024 111C938.667 111 853.333 111 768 111C682.667 111 597.333 111 512 111C426.667 111 341.333 111 256 111C170.667 111 85.3333 111 42.6667 111H0V44.4Z" fill="#224957" fill-opacity="0.8"/>
          </svg>
          <button onClick={()=> setDarkMode(!darkMode)} href='' className = 'dark-mode-btn' ><svg  width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Light Mode / Dark Mode">
            <g id="Ellipse 1" filter="url(#filter0_d_3_56)">
            <circle cx="39" cy="35" r="35" fill="white"/>
            </g>
            <circle id="Ellipse 2" cx="39.5" cy="34.5" r="21.5" fill="#2D2D2D"/>
            <path id="Ellipse 3" d="M56 34.5C56 43.6127 48.3889 51 39 51C39 44.4 39 43.6127 39 34.5C39 25.3873 39 24.9667 39 18C48.3889 18 56 25.3873 56 34.5Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_3_56" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_56"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_56" result="shape"/>
            </filter>
            </defs>
          </svg></button>
        </footer>
      </body>
    </div>
  );
}

export default App;
